const activities = [

  // -------------------------
  // QUEENSTOWN
  // -------------------------

  {
    place: "Queenstown",
    name: "Skyline Gondola",
    date: "16.11.2026",

    lat: -45.0265,
    lon: 168.6537,

    type: "Gondel / Aussicht",

    duration: "ca. 2–3 h",

    note: "Uewen: evtl Skyline Restaurant",

    url: "https://queenstown.skyline.co.nz/things-to-do/queenstown-gondola/",
    guidePage: 175
  },

  {
    place: "Queenstown",
    name: "Ausflug op Glenorchy",
    date: "17.11.2026",

    lat: -44.850022,
    lon: 168.382371,

    type: "Tagesausflug mat klenger Wanderung",

    duration: "Ganzen Dag",

    note: "46km bis dohinn. Borchure hei: https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/otago/head-of-lake-wakatipu.pdf. Do gëtt et och de Glenorchy Eco Retreat Camping",

    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/glenorchy-area/",
    guidePage: 177
  },


  // -------------------------
  // WĀNAKA
  // -------------------------

  {
    place: "Wānaka",
    name: "Puzzling World (oder Great Maze?)",
    date: "19.11.2026",

    lat: -44.696210,
    lon: 169.162159,

    type: "Themepark",

    duration: "ca. 2 h",

    note: " Do gëtt et och e Labyrinth",

    url: "https://www.puzzlingworld.co.nz/",
    guidePage: 184
  },

  {
    place: "Wānaka",
    name: "Mount Iron Track",
    date: "20.11.2026",

    lat: -44.686123,
    lon: 169.154879,

    type: "Wanderung",

    distance: "ca. 4,5 km",
    duration: "ca. 1,5–2 h",

    note: "Am Uhrzeigersinn. Brochure hei: https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/otago/wanaka-outdoor-pursuits-brochure.pdf",

    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/wanaka-area/things-to-do/mount-iron-track//",
    guidePage: 184
  },

   {
    place: "Wānaka",
    name: "Diamond Lake Track",
    date: "20.11.2026",

    lat: -44.651101,
    lon: 168.959395,

    type: "Wanderung",

    distance: "ca. 2-7 km",
    duration: "ca. 1-3 h",

    note: "Brochure hei: https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/otago/wanaka-outdoor-pursuits-brochure.pdf",

    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/wanaka-area/",
    guidePage: 185
  },


  // -------------------------
  // BLUE POOLS
  // -------------------------

  {
    place: "Blue Pools / Cameron Flat",
    name: "Blue Pools Track",
    date: "21.11.2026",

    lat: -44.160503,
    lon: 169.287279,

    type: "Wanderung",

    distance: "ca. 3 km",
    duration: "ca. 1–1,5 h",

    note: "Owes éier d'Sonn ënnergeet",

    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/mount-aspiring-national-park/things-to-do/tracks/blue-pools-track/",
    guidePage: 190
  },


  // -------------------------
  // FOX GLACIER
  // -------------------------

  {
    place: "Fox Glacier",
    name: "Lake Matheson",
    date: "23.11.2026",

    lat: -43.448690,
    lon: 169.969397,

    type: "Wanderung",

    distance: "ca. 4,4 km",
    duration: "ca. 1,5 h",

    note: "Entweder moies fréi oder owes spéit",

    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/westland-tai-poutini-national-park/things-to-do/tracks/lake-matheson-te-ara-kairaumati-walk/",
    guidePage: 201
  },


  // -------------------------
  // HOKITIKA
  // -------------------------

  {
    place: "Hokitika",
    name: "Hokitika Gorge Walk",
    date: "25.11.2026",

    lat: -42.956474,
    lon: 171.019626,

    type: "Wanderung / Aussicht",

    distance: "1,6 km",
    duration: "ca. 1 h",

    note: "Türkis blot Waasser",

    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/hokitika-gorge-scenic-reserve/things-to-do/tracks/hokitika-gorge-walk/",
    guidePage: 215
  },


  // -------------------------
  // KAITERITERI
  // -------------------------

  {
    place: "Kaiteriteri",
    name: "Abel Tasman Wanderung",
    date: "29.11.2026",

    lat: -41.037032,
    lon: 173.017513,

    type: "Wanderung / Aussicht",

    distance: "ca. 11-12 km",
    duration: "ca. 3-4 h",

    note:
      "Aquataxi 9:00 op Bark Bay, Wanderung vun BarkBay " +
      "op Anchorage, Aquataxi zeréck 16:00",

    url: "https://aquataxi.co.nz",
    guidePage: 282
  },

  // -------------------------
  // COROMANDEL – WYUNA BAY
  // -------------------------

  {
    place: "Coromandel",
    name: "Mautohe Cathedral Cove",
    date: "",
    lat: -36.8276,
    lon: 175.7897,
    type: "Wanderung / Strand / Aussicht",
    duration: "ca. 4–5 h inkl. Fahrt und Aufenthalt",
    note: "Hauptwanderweg zur Cathedral Cove. Vorher aktuellen Track-Status und Wetter prüfen.",
    url: "https://www.newzealand.com/in/feature/cathedral-cove-walk/",
    guidePage: ""
  },

  {
    place: "Coromandel",
    name: "Hot Water Beach",
    date: "",
    lat: -36.8804,
    lon: 175.8207,
    type: "Strand / Thermalquelle",
    duration: "ca. 2–3 h",
    note: "Nur rund um Ebbe sinnvoll. Ideal etwa 2 Stunden vor bis 2 Stunden nach Niedrigwasser. Mit Cathedral Cove kombinierbar.",
    url: "https://www.hotwaterbeach.org.nz",
    guidePage: ""
  },

  {
    place: "Coromandel",
    name: "New Chums Beach",
    date: "",
    lat: -36.6970,
    lon: 175.6078,
    type: "Wanderung / Strand",
    duration: "ca. 3–4 h",
    note: "Von Whangapoua zu Fuß erreichbar. Weg führt über Strand, Felsen und durch Wald. Nur rund um Ebbe sinnvoll.",
    url: "https://seabreezeholidaypark.co.nz/new-chum-beach/",
    guidePage: ""
  },

  {
    place: "Coromandel",
    name: "Driving Creek Railway",
    date: "",
    lat: -36.7370,
    lon: 175.5041,
    type: "Bahnfahrt / Aussicht",
    duration: "ca. 2 h",
    note: "Historische Schmalspurbahn durch regenerierenden Regenwald bis zum Aussichtspunkt EyeFull Tower. Von Wyuna Bay sehr gut erreichbar.",
    url: "https://drivingcreek.nz/activities/driving-creek-railway-tours/",
    guidePage: ""
  },

  {
    place: "Coromandel",
    name: "Hahei Beach",
    date: "",
    lat: -36.8390,
    lon: 175.8050,
    type: "Strand",
    duration: "ca. 1–2 h",
    note: "Schöner Strand in Hahei. Gut mit Cathedral Cove und/oder Hot Water Beach kombinierbar.",
    url: "https://thecoromandel.com/explore/hahei/",
    guidePage: ""
  },

  {
    place: "Coromandel",
    name: "The Pinnacles – Kauaeranga Valley",
    date: "",
    lat: -37.0440,
    lon: 175.7190,
    type: "Wanderung / Aussicht",
    duration: "ganztägig",
    note: "Anspruchsvollerer Tagesausflug mit langer Wanderung. Nur bei gutem Wetter einplanen.",
    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/places/kauaeranga-valley/things-to-do/tracks/pinnacles-walk/",
    guidePage: ""
  },
  
  {
    place: "Matamata",
    name: "Hobbiton Movie Set",
    date: "",
    lat: -37.8721,
    lon: 175.6830,
    type: "Filmset / Führung",
    duration: "ganztägig inkl. Hin- und Rückfahrt",
    note: "Geführte Tour durch das Hobbiton Movie Set mit Hobbit-Höhlen, Bag End, Green Dragon Inn und Innenbesichtigung eines Hobbit-Hauses. Vorausbuchung empfehlenswert.",
    url: "https://www.hobbitontours.com/",
    guidePage: ""
  }
];
