/*
 * ============================================================
 * ËNNERKONFTEN
 * ============================================================
 *
 * Hei stinn eis fest Ënnerkonften ausserhalb vun der
 * WoMo-Rees:
 *
 * - Hoteller
 * - Haiser
 *
 * ============================================================
 */

const accommodations = [

{
  place: "Auckland Airport, 37 Tom Pearce Drive",
  name: "Pullman Auckland Airport",

  stays: [
    {
      from: "07.11.2026",
      to: "08.11.2026",
      nights: 1,
      note: "Éischt Nuecht an Neuseeland. Den 08.11. Fluch vun Auckland op Christchurch."
    },
    {
      from: "05.12.2026",
      to: "06.12.2026",
      nights: 1,
      note: "Iwwernuechtung nom Fluch vu Christchurch op Auckland. Den 06.12. geet et weider op Coromandel."
    }
  ],

  lat: -37.003650,
  lon: 174.782413,

  type: "Hotel"
},
  
  /*
   * ----------------------------------------------------------
   * WYUNA BAY
   * ----------------------------------------------------------
   *
   * Haus op der Coromandel Hallefinsel.
   */

  {
    place: "Wyuna Bay",
    name: "Haus Wyuna Bay",
    from: "06.12.2026",
    to: "13.12.2026",
    nights: 7,
    lat: -36.76677,
    lon: 175.46375,
    type: "Haus",
    note: "Relax Basis fir eis Ausflich op der Coromandel Hallefinsel."
  },


  /*
   * ----------------------------------------------------------
   * HOTEL DEBRETT
   * ----------------------------------------------------------
   *
   * Lescht Deeg vun der Rees zu Auckland.
   */

  {
    place: "Auckland, 2 High Street",
    name: "Hotel DeBrett",
    from: "13.12.2026",
    to: "15.12.2026",
    nights: 2,
    lat: -36.8475,
    lon: 174.7661,
    type: "Hotel",
    note: "Lescht zwou Nuechten zu Auckland virum Réckfluch op Lëtzebuerg."
  }

];
