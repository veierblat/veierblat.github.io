/*
 * ============================================================
 * CAMPINGPLÄTZE – NEUSEELAND 2026
 * ============================================================
 *
 * Zusätzliche Angaben:
 *
 * guideNumber   = Campingnummer im WoMo-Reiseführer
 * guidePage     = Seite im WoMo-Reiseführer
 * camperMateUrl = direkter Link zum Camping in CamperMate
 *
 * Alle Angaben sind optional.
 *
 * ============================================================
 */

const campings = [


  /*
   * ----------------------------------------------------------
   * RAKAIA GORGE / HIGHBANK
   * ----------------------------------------------------------
   */

  {
    name: "Rakaia Gorge Camp",
    date: "08.11.–09.11.2026",

    lat: -43.519,
    lon: 171.651,

    facilities: "CW, WC, HS, DS",

    note: "First come, first served",

    phone: "+64 3 302 9353",

    url: "https://www.ashburtondc.govt.nz/community-facilities/facilities%2C-venues-and-room-bookings/council-campgrounds",

    camperMateUrl: "",

    guideNumber: 64,
    guidePage: 58
  },


  /*
   * ----------------------------------------------------------
   * PEEL FOREST – BACKUP
   * ----------------------------------------------------------
   */

  {
    name: "Peel Forest DOC Campsite",

    date: "08.11.–09.11.2026",

    lat: -43.897,
    lon: 171.253,

    facilities: "DOC Campsite",

    note: "Backup für Rakaia Gorge Camp.",

    url: "https://www.doc.govt.nz/",

    camperMateUrl: "",

    guideNumber: 67,
    guidePage: 61
  },


  /*
   * ----------------------------------------------------------
   * LAKE TEKAPO – OPTION 1
   * ----------------------------------------------------------
   */

  {
    name: "Lakes Edge Holiday Park",
    date: "09.11.–11.11.2026",

    lat: -44.00084,
    lon: 170.46466,

    facilities: "EL, RES, HS, WM, DS, CW, WC",

    note: "",

    phone: "+64 3 680 6825",

    url: "https://lakesedgeholidaypark.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/can/mackenzie/paid-campsites/lakes-edge-holiday-park/383dd32e-7930-4010-8a70-7409be7d4068",

    guideNumber: 71,
    guidePage: 64
  },


  /*
   * ----------------------------------------------------------
   * LAKE TEKAPO – OPTION 2
   * ----------------------------------------------------------
   */

  {
    name: "Lake McGregor Campsite",
    date: "09.11.–11.11.2026",

    lat: -43.93846,
    lon: 170.46692,

    facilities: "WC",

    note:
      "Einfache Alternative bei Lake Tekapo. " +
      "Keine verlässlich publizierte direkte Campingplatz-Telefonnummer.",

    url:
      "https://www.mackenzie.govt.nz/services/parks-venues-and-recreation/camping",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/can/mackenzie/paid-campsites/lake-mcgregor-campervan-site/ec147ae6-e6fb-4aed-97a2-06147cf40903",

    guideNumber: 72,
    guidePage: 66
  },


  /*
   * ----------------------------------------------------------
   * AORAKI / MOUNT COOK
   * ----------------------------------------------------------
   */

  {
    name: "DOC White Horse Hill Campsite",
    date: "11.11.–14.11.2026",

    lat: -43.71819,
    lon: 170.09244,

    facilities: "CW, WC",

    note:
      "DOC-Campsite. Telefon = Aoraki/Mount Cook " +
      "National Park Visitor Centre.",

    phone: "+64 3 435 1186",

    url:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/white-horse-hill-campground/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/can/mackenzie/low-cost-campground/white-horse-hill-campground/80a15ccc-38e9-49e9-988e-d10600ec82b1",

    guideNumber: 76,
    guidePage: 72
  },


  /*
   * ----------------------------------------------------------
   * OMARAMA
   * ----------------------------------------------------------
   */

  {
    name: "Omarama TOP 10 Holiday Park",
    date: "14.11.–15.11.2026",

    lat: -44.48776,
    lon: 169.96226,

    facilities: "RES, EL, DS, CW, WM, WC, HS",

    note: "",

    phone: "+64 3 438 9875",

    url:
      "https://top10.co.nz/park/omarama-top-10-holiday-park/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/can/waitaki/paid-campsites/omarama-top-10-holiday-park/c86aa4ed-592d-4dcc-8f98-8cd986098794",

    guideNumber: 121,
    guidePage: 101
  },


  /*
   * ----------------------------------------------------------
   * QUEENSTOWN
   * ----------------------------------------------------------
   */

  {
    name: "Queenstown Holiday Park Creeksyde",
    date: "15.11.–18.11.2026",

    lat: -45.02553,
    lon: 168.66007,

    facilities: "RES, EL, DS, CW, WM, WC, HS",

    note: "",

    phone: "+64 3 442 9447",

    url: "https://www.camp.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/ota/queenstown/paid-campsites/queenstown-holiday-park-creeksyde/addb6409-ddfd-440f-abeb-d7d6aca4f428",

    guideNumber: 244,
    guidePage: 175
  },


  /*
   * ----------------------------------------------------------
   * WĀNAKA
   * ----------------------------------------------------------
   */

  {
    name: "Tasman Holiday Parks – Wānaka",
    date: "18.11.–21.11.2026",

    lat: -44.70514,
    lon: 169.10950,

    facilities: "RES, EL, DS, CW, WC, HS",

    note: "",

    phone: "+64 3 443 7766",

    url:
      "https://tasmanholidayparks.com/south-island/otago/wanaka/",

    camperMateUrl: "",

    guidePage: null
  },


  /*
   * ----------------------------------------------------------
   * BLUE POOLS / CAMERON FLAT
   * ----------------------------------------------------------
   */

  {
    name: "DOC Cameron Flat Campsite",
    date: "21.11.–22.11.2026",

    lat: -44.16122,
    lon: 169.28729,

    facilities: "RES, WC",

    note:
      "DOC-Campsite. Telefon = Tititea/Mount Aspiring " +
      "National Park Visitor Centre.",

    phone: "+64 3 443 7660",

    url:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/mount-aspiring-national-park/things-to-do/campsites/cameron-flat-campsite/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/ota/wanaka/lowcost-campground/cameron-flat-campsite/154ff523-b71b-4cb2-8f7b-4395f6d686d1",

    guideNumber: 259,
    guidePage: 189
  },


  /*
   * ----------------------------------------------------------
   * FOX GLACIER
   * ----------------------------------------------------------
   */

  {
    name: "Fox Glacier TOP 10 Holiday Park",
    date: "22.11.–24.11.2026",

    lat: -43.46476,
    lon: 170.00806,

    facilities: "RES, EL, DS, CW, WM, WC, HS",

    note: "",

    phone: "+64 3 751 0821",

    url: "https://www.fghp.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/s/west-coast/paid-campsites/fox-glacier-top-10-holiday-park/8372f2d8-ef65-4f48-b307-08f8d4cbb1ff",

    guideNumber: 273,
    guidePage: 200
  },


  /*
   * ----------------------------------------------------------
   * FRANZ JOSEF – ALTERNATIVE
   * ----------------------------------------------------------
   */

  {
    name: "Rainforest Retreat Franz Josef",
    date: "22.11.–24.11.2026",

    lat: -43.38544,
    lon: 170.18374,

    facilities: "RES, EL, DS, CW, WM, WC, HS",

    note: "Alternative zu Fox Glacier.",

    phone: "+64 3 752 0220",

    url: "https://rainforest.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/s/west-coast/paid-campsites/rainforest-retreat-holiday-park/57e5279b-a5f0-4053-b9fc-56feb1d08cfd",

    guideNumber: 274,
    guidePage: 203
  },


  /*
   * ----------------------------------------------------------
   * HOKITIKA
   * ----------------------------------------------------------
   */

  {
    name: "Shining Star Beachfront Accommodation",
    date: "24.11.–26.11.2026",

    lat: -42.70817,
    lon: 170.97370,

    facilities: "RES, EL, DS, CW, WM, WC, HS",

    note: "",

    phone: "+64 3 755 8921",

    url: "https://www.pjl.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/wtc/west-coast/paid-campsites/shining-star-beachfront-accommodation/af8975e1-c41e-4c63-86d1-bd5be641d57f",

    guideNumber: 282,
    guidePage: 214
  },


  /*
   * ----------------------------------------------------------
   * MURCHISON – OPTION 1
   * ----------------------------------------------------------
   */

  {
    name: "Murchison Motorhome Park",
    date: "26.11.–28.11.2026",

    lat: -41.75560,
    lon: 172.39140,

    facilities: "RES, EL, DS, CW, WC, HS",

    note: "Am Fluss; Sandflies möglich.",

    phone: "+64 27 539 9666",

    url: "https://www.murchisonmotorhomepark.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/s/nelson-tasman/paid-campsites/murchison-motorhome-park/aa2c4ee5-7a8a-472b-b2a7-bce25196ea8e",

    guideNumber: 393,
    guidePage: 270
  },


  /*
   * ----------------------------------------------------------
   * MURCHISON – OPTION 2
   * ----------------------------------------------------------
   */

  {
    name: "Murchison Riverside Holiday Park",
    date: "26.11.–28.11.2026",

    lat: -41.79600,
    lon: 172.34018,

    facilities: "RES, EL, DS, CW, WM, WC, HS",

    note: "Alternative.",

    phone: "+64 3 523 9591",

    url:
      "https://www.visitmurchison.nz/riverside-holiday-park.html",

    camperMateUrl: "",

    guideNumber: 392,
    guidePage: 270
  },


  /*
   * ----------------------------------------------------------
   * KAITERITERI – OPTION 1
   * ----------------------------------------------------------
   */

  {
    name: "Bethany Park",
    date: "28.11.–01.12.2026",

    lat: -41.03774,
    lon: 173.00522,

    facilities: "RES, EL, DS, CW, WC, HS, WM",

    note: "Ruhiger; etwa 700 m zum Strand.",

    phone: "+64 3 527 8014",

    url: "https://www.bethanypark.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/tas/nelson-tasman/paid-campsites/bethany-park-holiday-park/eb495f59-1d8f-429c-b320-be458f72c997",

    guidePage: null
  },


  /*
   * ----------------------------------------------------------
   * KAITERITERI – OPTION 2
   * ----------------------------------------------------------
   */

  {
    name: "Kaiteriteri Recreation Reserve",
    date: "28.11.–01.12.2026",

    lat: -41.03647,
    lon: 173.01737,

    facilities: "RES, EL, DS, CW, WC, HS, WM",

    note: "Direkt bei Strand und touristischem Zentrum.",

    phone: "+64 3 527 8010",

    url: "https://kaiteriteri.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/tas/nelson-tasman/paid-campsites/kaiteriteri-recreation-reserve/225f8fa1-b2e2-4106-8afa-a4bde69b3fef",

    guideNumber: 424,
    guidePage: 280
  },


  /*
   * ----------------------------------------------------------
   * HAVELOCK – OPTION 1
   * ----------------------------------------------------------
   */

  {
    name: "Havelock Holiday Park",
    date: "01.12.–03.12.2026",

    lat: -41.27765,
    lon: 173.76841,

    facilities: "RES, EL, DS, CW, WC, HS",

    note: "",

    phone: "+64 3 574 2339",

    url: "https://www.havelockholidaypark.kiwi/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/s/marlborough/paid-campsites/havelock-holiday-park/332d2d6d-f63b-409e-bb4a-ea9bae399079",

    guideNumber: 458,
    guidePage: 308
  },


  /*
   * ----------------------------------------------------------
   * HAVELOCK – OPTION 2
   * ----------------------------------------------------------
   */

  {
    name: "Waves Campsite",
    date: "01.12.–03.12.2026",

    lat: -41.33827,
    lon: 173.76590,

    facilities: "RES, EL, DS, CW, WC, HS",

    note: "Ruhiger, große Wiese.",

    phone: "+64 3 574 2129",

    url: "https://www.wavescampsite.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/mbh/marlborough/paid-campsites/waves-campsite/c21460fd-9eb2-4964-a2dd-32868c6e7fde",

    guidePage: null
  },


  /*
   * ----------------------------------------------------------
   * CHRISTCHURCH
   * ----------------------------------------------------------
   */

  {
    name: "South Brighton Holiday Park",
    date: "03.12.–05.12.2026",

    lat: -43.53468,
    lon: 172.73591,

    facilities: "RES, EL, DS, CW, WC, HS",

    note: "",

    phone: "+64 3 388 9844",

    url:
      "https://www.southbrightonholidaypark.co.nz/",

    camperMateUrl: "https://campermate.com/en/location/new-zealand/s/christchurch/paid-campsites/south-brighton-holiday-park/ab23286f-d081-49a5-9a99-d37eb97719de",

    guideNumber: 33,
    guidePage: 40
  }

];
