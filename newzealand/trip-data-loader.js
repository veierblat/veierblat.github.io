(function () {
  "use strict";

  const dataURL = "./data/trip-data.json";

  function text(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function publicURL(value) {
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch (_) {
      return "";
    }
  }

  function dateRange(dateText) {
    const parts = String(dateText ?? "").split(/\s*[–—]\s*/);
    return {
      from: parts[0] ?? "",
      to: parts.slice(1).join("–") || parts[0] || ""
    };
  }

  function mapPlace(place, photoCredits) {
    const credit = photoCredits.get(place.id);
    return {
      id: place.id,
      name: place.name ?? "",
      place: place.place ?? "",
      date: place.dateText ?? "",
      lat: Number(place.latitude),
      lon: Number(place.longitude),
      type: place.category ?? "",
      duration: place.duration ?? "",
      distance: place.distance ?? "",
      note: place.notes ?? "",
      facilities: place.facilities ?? "",
      phone: place.phone ?? "",
      url: place.website ?? "",
      camperMateUrl: place.secondaryWebsite ?? "",
      guideNumber: place.guideNumber ?? null,
      guidePage: place.guidePage ?? null,
      nights: Number(place.nights ?? 0),
      photo: place.photo ?? "",
      photoCredit: credit ?? null
    };
  }

  function mapAccommodations(places, photoCredits) {
    const groups = new Map();

    places.forEach(place => {
      const mapped = mapPlace(place, photoCredits);
      const key = [mapped.name, mapped.lat, mapped.lon].join("|");
      const range = dateRange(mapped.date);
      const stay = {
        from: range.from,
        to: range.to,
        nights: mapped.nights,
        note: mapped.note
      };

      if (!groups.has(key)) {
        groups.set(key, {
          ...mapped,
          stays: [stay]
        });
      } else {
        groups.get(key).stays.push(stay);
      }
    });

    return Array.from(groups.values());
  }

  function mapPlanning(days) {
    return [...days]
      .sort((a, b) => a.order - b.order)
      .map(day => {
        if (day.type === "motorhome") {
          return {
            date: day.dateText ?? "",
            from: day.origin ?? "",
            to: day.destination ?? "",
            distance: day.distanceKilometres ?? "",
            nights: day.nights ?? "",
            type: "motorhome"
          };
        }

        const information = Array.isArray(day.information)
          ? day.information
          : [];

        return {
          date: day.dateText ?? "",
          item1: information[0] ?? "",
          item2: information[1] ?? "",
          item3: information[2] ?? "",
          item4: information[3] ?? "",
          type: day.type || "travel"
        };
      });
  }

  window.tripPhotoMarkup = function (item) {
    if (!item || !item.photo) return "";

    const imageURL = publicURL(item.photo);
    if (!imageURL) return "";

    const credit = item.photoCredit;
    const sourceURL = publicURL(credit?.sourceURL);
    const licenseURL = publicURL(credit?.licenseURL);
    const source = sourceURL
      ? `<a href="${text(sourceURL)}" target="_blank" rel="noopener noreferrer">${text(credit?.author || "Bildquell")}</a>`
      : text(credit?.author || "");
    const license = licenseURL
      ? `<a href="${text(licenseURL)}" target="_blank" rel="noopener noreferrer">${text(credit?.license || "Lizenz")}</a>`
      : text(credit?.license || "");
    const attribution = [source, license].filter(Boolean).join(" · ");

    return `
      <div class="popupPhoto">
        <img src="${text(imageURL)}" alt="${text(item.name)}">
        ${attribution ? `<div class="popupPhotoCredit">${attribution}</div>` : ""}
      </div>
    `;
  };

  window.showTripDataError = function (error) {
    console.error("D'Reesdate konnten net geluede ginn:", error);
    const message = document.createElement("div");
    message.className = "dataError";
    message.textContent = "D'Reesdate konnten net geluede ginn. Kontrolléier w.e.g. data/trip-data.json.";
    document.body.prepend(message);
  };

  window.tripDataReady = fetch(dataURL, { cache: "no-store" })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${dataURL}: HTTP ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (Number(data.schemaVersion) !== 2) {
        throw new Error(`Onbekanntent Dateschema: ${data.schemaVersion}`);
      }

      const credits = new Map(
        (data.photos ?? []).map(credit => [credit.seedID, credit])
      );
      const places = data.places ?? [];

      window.tripData = data;
      window.tripStops = [...(data.tripStops ?? [])]
        .sort((a, b) => a.order - b.order)
        .map(stop => ({
          name: stop.name ?? "",
          lat: Number(stop.latitude),
          lon: Number(stop.longitude),
          date: stop.dateText ?? "",
          nights: Number(stop.nights ?? 0),
          camping: text(stop.campingSummary).replaceAll("\n", "<br>"),
          notes: text(stop.notes).replaceAll("\n", "<br>")
        }));
      window.activities = places
        .filter(place => place.kind === "activity")
        .map(place => mapPlace(place, credits));
      window.campings = places
        .filter(place => place.kind === "camping")
        .map(place => mapPlace(place, credits));
      window.accommodations = mapAccommodations(
        places.filter(place => place.kind === "accommodation"),
        credits
      );
      window.tripRoutes = [...(data.routes ?? [])]
        .sort((a, b) => a.order - b.order);
      window.planning = mapPlanning(data.itinerary ?? []);
      window.PLANNING_VERSION = Math.max(
        8,
        Math.floor(Date.parse(data.generatedAt || 0) / 1000) || 8
      );

      return data;
    });
})();
