const tripStops = [
  {
    name: "Christchurch",
    lat: -43.5321,
    lon: 172.6362,
    date: "08.11.2026",
    nights: 0,
    camping: "Start – WoMo siche goen",
    notes: "A lass geet et"
  },

  {
    name: "Rakaia Gorge / Highbank",
    lat: -43.5205,
    lon: 171.6520,
    date: "08.11.–09.11.2026",
    nights: 1,
    camping: `
      <b>Rakaia Gorge Camp</b><br>
      First come, first served<br>
      CW, WC, HS, DS<br><br>
      <b>Alternative:</b> BUP 67
    `,
    notes: "Alternative nötig, falls Rakaia Gorge Camp voll ist."
  },

  {
    name: "Lake Tekapo / Lake McGregor",
    lat: -44.0047,
    lon: 170.4771,
    date: "09.11.–11.11.2026",
    nights: 2,
    camping: `
      <b>Lake's Edge Holiday Park Tekapo</b><br>
      EL, RES, HS, WM, DS<br><br>
      <b>Alternative:</b><br>
      Lake McGregor Campsite<br>
      WC (Plumpsklo)
    `,
    notes: ""
  },

  {
    name: "Aoraki / Mount Cook",
    lat: -43.7340,
    lon: 170.0960,
    date: "11.11.–14.11.2026",
    nights: 3,
    camping: `
      <b>DOC White Horse Hill Campground</b><br>
      CW
    `,
    notes: ""
  },

  {
    name: "Omarama",
    lat: -44.4886,
    lon: 169.9650,
    date: "14.11.–15.11.2026",
    nights: 1,
    camping: `
      <b>Omarama TOP 10 Holiday Park</b><br>
      RES, EL, DS, CW, WM, WC, HS
    `,
    notes: "Region Lindis Pass"
  },

  {
    name: "Queenstown",
    lat: -45.0312,
    lon: 168.6626,
    date: "15.11.–18.11.2026",
    nights: 3,
    camping: `
      <b>Creeksyde Holiday Park</b><br>
      RES, EL, DS, CW, WM, WC, HS
    `,
    notes: "Gondel, Schiff, Tagesausflug nach Glenorchy"
  },

  {
    name: "Wānaka",
    lat: -44.6967,
    lon: 169.1321,
    date: "18.11.–21.11.2026",
    nights: 3,
    camping: `
      <b>Wānaka Tasman Holiday Park</b><br>
      RES, EL, DS, CW, WC, HS
    `,
    notes: "Puzzling World, Mt Iron oder Roys Peak Track"
  },

  {
    name: "Blue Pools / Cameron Flat",
    lat: -44.1620,
    lon: 169.2780,
    date: "21.11.–22.11.2026",
    nights: 1,
    camping: `
      <b>DOC Cameron Flat Campsite</b><br>
      RES, WC (Plumpsklo)
    `,
    notes: "Mittags ankommen, Blue Pools besuchen, am folgenden Morgen weiter."
  },

  {
    name: "Fox Glacier / Franz Josef",
    lat: -43.4645,
    lon: 170.0173,
    date: "22.11.–24.11.2026",
    nights: 2,
    camping: `
      <b>Option 1: Fox Glacier Holiday Park</b><br>
      RES, EL, DS, CW, WM, WC, HS<br><br>

      <b>Option 2: Franz Josef Rainforest Holiday Park</b><br>
      RES, EL, DS, CW, WM, WC, HS
    `,
    notes: `
      Unterwegs Ship Creek.<br>
      Lake Matheson und Ausflug zum Franz Josef Glacier.
    `
  },

  {
    name: "Hokitika",
    lat: -42.7174,
    lon: 170.9665,
    date: "24.11.–26.11.2026",
    nights: 2,
    camping: `
      <b>Shining Star Beachfront Accommodation</b><br>
      RES, EL, DS, CW, WM, WC, HS
    `,
    notes: "Hokitika Gorge"
  },

  {
    name: "Murchison",
    lat: -41.8008,
    lon: 172.3277,
    date: "26.11.–28.11.2026",
    nights: 2,
    camping: `
      <b>Murchison Motorhome Park</b><br>
      RES, EL, DS, CW, WC, HS<br>
      Nähe Fluss, möglicherweise mehr Sandflies.<br><br>

      <b>Alternative: Murchison Riverside Holiday Park</b><br>
      RES, EL, DS, CW, WM, WC, HS<br>
      Wahrscheinlich weniger Sandflies.
    `,
    notes: ""
  },

  {
    name: "Kaiteriteri",
    lat: -41.0367,
    lon: 173.0172,
    date: "28.11.–01.12.2026",
    nights: 3,
    camping: `
      <b>Bethany Park</b><br>
      ca. 700 m zum Strand, ruhiger<br>
      RES, EL, DS, CW, WC, HS, WM<br><br>

      <b>Alternative: Kaiteriteri Recreation Reserve</b><br>
      RES, EL, DS, CW, WC, HS, WM
    `,
    notes: `
      Abel Tasman National Park<br>
      AquaTaxi nach Bark Bay, Wanderung von BarkBay nach Anchorage, Aquataxi zurück
    `
  },

  {
    name: "Havelock",
    lat: -41.2804,
    lon: 173.7687,
    date: "01.12.–03.12.2026",
    nights: 2,
    camping: `
      <b>Havelock Holiday Park</b><br>
      RES, EL, DS, CW, WC, HS<br><br>

      <b>Alternative: Waves Campsite</b><br>
      Ruhiger, große Wiese<br>
      RES eventuell per Mail, EL, DS, CW, WC, HS
    `,
    notes: "Marlborough Sounds"
  },

  {
    name: "Christchurch",
    lat: -43.5321,
    lon: 172.6362,
    date: "03.12.–05.12.2026",
    nights: 2,
    camping: `
      <b>South Brighton Holiday Park</b><br>
      RES, EL, DS, CW, WC, HS
    `,
    notes: "1 Tag Christchurch, Gondel"
  }
];
