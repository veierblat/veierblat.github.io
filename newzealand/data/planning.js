/*
 * ============================================================
 * NEUSEELAND 2026 – REISEPLANUNG
 * ============================================================
 *
 * Diese Datei wurde aus planning.html exportiert.
 *
 * ============================================================
 */
  /*
   * Versionsnummer dieser Planung.
   *
   * Bei jedem Export wird automatisch die nächste
   * Versionsnummer erzeugt.
   */
const PLANNING_VERSION = 1;


const planning = [
  {
    "date": "Thu, 5 Nov 2026",
    "item1": "LUX - AKL",
    "item2": "départ: 18:20",
    "item3": "",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "Fri, 6 Nov 2026",
    "item1": "LUX - AKL",
    "item2": "langweil",
    "item3": "",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "Sat, 7 Nov 2026",
    "item1": "LUX - AKL",
    "item2": "Arrivée: 9:40",
    "item3": "Pullman Airport Hotel check in",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "Sun, 8 Nov 2026",
    "item1": "Pullman Airport Hotel check out",
    "item2": "AKL - CHR",
    "item3": "Womo siche goen (27 Nuechten)",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "Sun, 8 Nov 2026",
    "from": "christchurch",
    "to": "Highbank Rakaia River",
    "distance": 89,
    "nights": 1,
    "type": "motorhome"
  },
  {
    "date": "Mon, 9 Nov 2026",
    "from": "Highbank",
    "to": "Lake Tekapo oder Lake Mc Gregor",
    "distance": 179,
    "nights": 2,
    "type": "motorhome"
  },
  {
    "date": "Wed, 11 Nov 2026",
    "from": "Lake Tekapo oder Lake Mc Gregor",
    "to": "mount cook village",
    "distance": 111,
    "nights": 3,
    "type": "motorhome"
  },
  {
    "date": "Sat, 14 Nov 2026",
    "from": "mount cook",
    "to": "Omarama: Regioun lindis pass",
    "distance": 94,
    "nights": 1,
    "type": "motorhome"
  },
  {
    "date": "Sun, 15 Nov 2026",
    "from": "Omarama",
    "to": "queenstown",
    "distance": 170,
    "nights": 3,
    "type": "motorhome"
  },
  {
    "date": "Wed, 18 Nov 2026",
    "from": "queenstown",
    "to": "wanaka",
    "distance": 70,
    "nights": 3,
    "type": "motorhome"
  },
  {
    "date": "Sat, 21 Nov 2026",
    "from": "wanaka",
    "to": "blue pools",
    "distance": 138,
    "nights": 1,
    "type": "motorhome"
  },
  {
    "date": "Sun, 22 Nov 2026",
    "from": "blue pools",
    "to": "Fox Glacier",
    "distance": 190,
    "nights": 2,
    "type": "motorhome"
  },
  {
    "date": "Tue, 24 Nov 2026",
    "from": "Fox Glacier",
    "to": "hokitika",
    "distance": 157,
    "nights": 2,
    "type": "motorhome"
  },
  {
    "date": "Thu, 26 Nov 2026",
    "from": "hokitika",
    "to": "Murchison",
    "distance": 236,
    "nights": 2,
    "type": "motorhome"
  },
  {
    "date": "Sat, 28 Nov 2026",
    "from": "Murchison",
    "to": "Kaiteriteri",
    "distance": 138,
    "nights": 3,
    "type": "motorhome"
  },
  {
    "date": "Tue, 1 Dec 2026",
    "from": "Kaiteriteri",
    "to": "Havelock",
    "distance": 133,
    "nights": 2,
    "type": "motorhome"
  },
  {
    "date": "Thu, 3 Dec 2026",
    "from": "Havelock",
    "to": "Christchurch",
    "distance": 350,
    "nights": 2,
    "type": "motorhome"
  },
  {
    "date": "Sat, 5 Dec 2026",
    "item1": "Moies Womo ofginn",
    "item2": "CHR - AKL",
    "item3": "Pullman Airport Hotel check in",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "Sun, 6 Dec 2026",
    "item1": "Pullman Airport Hotel check out",
    "item2": "Auto siche goen (airport)",
    "item3": "fueren op: Wyuna Bay, Coromandel",
    "item4": "Chalet checkin",
    "type": "travel"
  },
  {
    "date": "Mon, 7 Dec 2026",
    "item1": "Chalet",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Tue, 8 Dec 2026",
    "item1": "Chalet",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Wed, 9 Dec 2026",
    "item1": "Chalet",
    "item2": "Hobbiton",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Thu, 10 Dec 2026",
    "item1": "Chalet",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Fri, 11 Dec 2026",
    "item1": "Chalet",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Sat, 12 Dec 2026",
    "item1": "Chalet",
    "item2": "läschte ganzen Dag",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Sun, 13 Dec 2026",
    "item1": "Chalet check out",
    "item2": "op AKL fueren",
    "item3": "Auto ofginn (Airport)",
    "item4": "De Brett Hotel checkin",
    "type": "travel"
  },
  {
    "date": "Mon, 14 Dec 2026",
    "item1": "AKL",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "stay"
  },
  {
    "date": "Tue, 15 Dec 2026",
    "item1": "De Brett Hotel checkout",
    "item2": "AKL",
    "item3": "AKL - LUX départ 23:55",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "Wed, 16 Dec 2026",
    "item1": "LUX 22:00",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "travel"
  },
  {
    "date": "lenks iwwerschrëft",
    "item1": "test",
    "item2": "",
    "item3": "",
    "item4": "",
    "type": "travel"
  }
];
