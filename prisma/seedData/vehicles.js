export const vehicles = [
 {
  // ======================================================
  // BASIC INFO
  // ======================================================

  brand: "Tata",

  name: "Nexon.ev",

  slug: "tata-nexon-ev",

  image: "/cars/tata/nexon-ev/cover.webp",

  featured: true,

  overview:
    "The Tata Nexon.ev is a premium electric SUV powered by a 45 kWh high-energy-density lithium-ion battery pack. It offers an MIDC certified range of 489 km, fast DC charging, advanced connected technology and a 5-star Bharat NCAP safety rating.",

  // ======================================================
  // PRICING
  // ======================================================

  pricing: {
    // Official Tata website (current starting ex-showroom)
    exShowroomPrice: 1414000,
  },

  // ======================================================
  // BATTERY
  // ======================================================

  battery: {
    batteryKwh: 45,

    batteryType: "High Energy Density Lithium-ion",

    claimedRange: 489,

    // Official brochure (C75 Real World Range)
    realRange: 350,
  },

  // ======================================================
  // PERFORMANCE
  // ======================================================

  performance: {
    zeroToHundred: 8.9,

    topSpeed: null,

    motorType: "Permanent Magnet Synchronous Motor",

    maxPower: "106 kW",

    maxTorque: "215 Nm",

    driveModes: "Eco, City, Sport",

    regenLevels: 4,
  },

  // ======================================================
  // DIMENSIONS
  // ======================================================

  dimensions: {
    seating: 5,

    bodyType: "Electric SUV",

    driveType: "Front Wheel Drive (FWD)",

    lengthMm: 3995,

    widthMm: 1802,

    heightMm: 1625,

    wheelbaseMm: 2498,

    bootSpace: 350,

    groundClearance: 190,
  },

  // ======================================================
  // CHARGING
  // ======================================================

  charging: {
    homeChargerPower: "3.3 kW AC (Standard)",

    homeChargingTime: "17 hr 36 min (15A Socket)",

    dcFastChargePower: "60 kW",

    dcChargingTime: "40 min (10-80%)",

    chargingPort: "CCS2",

    chargerIncluded: true,

    portableCharger: true,

    wallBoxCharger: true,

    v2l: true,

    v2v: true,

    batteryPreCondition: null,
  },

  // ======================================================
  // WARRANTY
  // ======================================================

  warranty: {
    vehicleWarranty: "3 Years / 1,25,000 km",

    batteryWarranty: "8 Years / 1,60,000 km",

    launchDate: "2023",
  },
    // ======================================================
  // SPECIFICATIONS
  // ======================================================

  specs: [

    // Battery
    {
      key: "Battery Capacity",
      value: "45 kWh",
      category: "Battery",
    },

    {
      key: "Battery Type",
      value: "High Energy Density Lithium-ion",
      category: "Battery",
    },

    {
      key: "Claimed Range",
      value: "489 km (MIDC Part 1 + Part 2)",
      category: "Battery",
    },

    {
      key: "Real World Range",
      value: "350 km (C75)",
      category: "Battery",
    },

    // Performance

    {
      key: "Motor",
      value: "Permanent Magnet Synchronous Motor",
      category: "Performance",
    },

    {
      key: "Maximum Power",
      value: "106 kW",
      category: "Performance",
    },

    {
      key: "Maximum Torque",
      value: "215 Nm",
      category: "Performance",
    },

    {
      key: "0-100 km/h",
      value: "8.9 sec",
      category: "Performance",
    },

    {
      key: "Drive Modes",
      value: "Eco, City, Sport",
      category: "Performance",
    },

    {
      key: "Regenerative Braking",
      value: "4 Levels with Paddle Shifters",
      category: "Performance",
    },

    // Dimensions

    {
      key: "Length",
      value: "3995 mm",
      category: "Dimensions",
    },

    {
      key: "Width",
      value: "1802 mm",
      category: "Dimensions",
    },

    {
      key: "Height",
      value: "1625 mm",
      category: "Dimensions",
    },

    {
      key: "Wheelbase",
      value: "2498 mm",
      category: "Dimensions",
    },

    {
      key: "Ground Clearance",
      value: "190 mm",
      category: "Dimensions",
    },

    {
      key: "Boot Space",
      value: "350 L",
      category: "Dimensions",
    },

    {
      key: "Seating Capacity",
      value: "5",
      category: "Dimensions",
    },

    // Charging

    {
      key: "AC Charging",
      value: "6.6 kW On-board Charger",
      category: "Charging",
    },

    {
      key: "DC Fast Charging",
      value: "60 kW",
      category: "Charging",
    },

    {
      key: "Charging Port",
      value: "CCS2",
      category: "Charging",
    },

  ],

  // ======================================================
// VARIANTS
// ======================================================

variants: [

  {
    name: "Creative 45",

    price: null,

    battery: "45 kWh",

    range: 489,

    power: 106,

    torque: 215,

    topSpeed: null,

    acceleration: 8.9,

    recommended: false,
  },

  {
    name: "Fearless 45",

    price: null,

    battery: "45 kWh",

    range: 489,

    power: 106,

    torque: 215,

    topSpeed: null,

    acceleration: 8.9,

    recommended: true,
  },

  {
    name: "Empowered 45",

    price: null,

    battery: "45 kWh",

    range: 489,

    power: 106,

    torque: 215,

    topSpeed: null,

    acceleration: 8.9,

    recommended: false,
  },

  {
    name: "Empowered + 45",

    price: null,

    battery: "45 kWh",

    range: 489,

    power: 106,

    torque: 215,

    topSpeed: null,

    acceleration: 8.9,

    recommended: false,
  },

],

  // ======================================================
  // FEATURES
  // ======================================================

  features: [

    {
      title: "12.3-inch Harman Infotainment System",
      category: "Infotainment",
    },

    {
      title: "10.25-inch / 12.3-inch Digital Cockpit",
      category: "Infotainment",
    },

    {
      title: "Wireless Android Auto",
      category: "Infotainment",
    },

    {
      title: "Wireless Apple CarPlay",
      category: "Infotainment",
    },

    {
      title: "iRA.ev Connected Car Technology",
      category: "Connected",
    },

    {
      title: "Alexa Voice Assistant",
      category: "Connected",
    },

    {
      title: "Smart Digital Steering Wheel",
      category: "Interior",
    },

    {
      title: "Smart Digital Shifter",
      category: "Interior",
    },

    {
      title: "Phygital Control Panel",
      category: "Interior",
    },

    {
      title: "Air Purifier",
      category: "Comfort",
    },

    {
      title: "Ventilated Front Seats",
      category: "Comfort",
    },

    {
      title: "Wireless Phone Charger",
      category: "Comfort",
    },

    {
      title: "Voice Assisted Panoramic Sunroof",
      category: "Comfort",
    },

    {
      title: "360 Degree Surround View Camera",
      category: "Safety",
    },

    {
      title: "Blind Spot View Monitor",
      category: "Safety",
    },

    {
      title: "Cruise Control",
      category: "Safety",
    },

    {
      title: "Rain Sensing Wipers",
      category: "Safety",
    },

    {
      title: "Auto Headlamps",
      category: "Safety",
    },

    {
      title: "V2L Technology",
      category: "EV Technology",
    },

    {
      title: "V2V Charging",
      category: "EV Technology",
    },

  ],

  // ======================================================
  // GALLERY
  // ======================================================

  gallery: [

    {
      image: "/cars/tata/nexon-ev/cover.webp",
      caption: "Front View",
      isPrimary: true,
    },

    {
      image: "/cars/tata/nexon-ev/rear.webp",
      caption: "Rear View",
    },

    {
      image: "/cars/tata/nexon-ev/interior.webp",
      caption: "Interior",
    },

    {
      image: "/cars/tata/nexon-ev/dashboard.webp",
      caption: "Dashboard",
    },

    {
      image: "/cars/tata/nexon-ev/side.webp",
      caption: "Side Profile",
    },

  ],

  // ======================================================
  // COLORS
  // ======================================================

  colors: [

    {
      name: "Pristine White",
      hexCode: "#F5F5F5",
      image: "/cars/tata/nexon-ev/colors/pristine-white.webp",
    },

    {
      name: "Flame Red",
      hexCode: "#C21807",
      image: "/cars/tata/nexon-ev/colors/flame-red.webp",
    },

    {
      name: "Daytona Grey",
      hexCode: "#676767",
      image: "/cars/tata/nexon-ev/colors/daytona-grey.webp",
    },

    {
      name: "Empowered Oxide",
      hexCode: "#707070",
      image: "/cars/tata/nexon-ev/colors/empowered-oxide.webp",
    },

    {
      name: "Creative Ocean",
      hexCode: "#2E8BAA",
      image: "/cars/tata/nexon-ev/colors/creative-ocean.webp",
    },

    {
      name: "Fearless Purple",
      hexCode: "#5A3E82",
      image: "/cars/tata/nexon-ev/colors/fearless-purple.webp",
    },

  ],
    // ======================================================
  // FAQS
  // ======================================================

  faqs: [

    {
      question: "What is the battery capacity of Tata Nexon.ev 45?",
      answer:
        "The Tata Nexon.ev 45 is equipped with a 45 kWh high-energy-density lithium-ion battery pack.",
    },

    {
      question: "What is the certified driving range of Nexon.ev?",
      answer:
        "The Nexon.ev 45 offers an MIDC certified range of up to 489 km on a full charge.",
    },

    {
      question: "How long does DC fast charging take?",
      answer:
        "Using a 60 kW DC fast charger, the battery can be charged from 10% to 80% in approximately 40 minutes.",
    },

    {
      question: "What charging connector does the Nexon.ev use?",
      answer:
        "The vehicle uses a CCS2 charging connector for DC fast charging.",
    },

    {
      question: "How many people can the Nexon.ev seat?",
      answer:
        "The Tata Nexon.ev offers seating for five occupants.",
    },

  ],

  // ======================================================
  // PROS
  // ======================================================

  pros: [

    {
      title: "489 km MIDC certified driving range",
    },

    {
      title: "8.9 second 0-100 km/h acceleration",
    },

    {
      title: "60 kW DC fast charging support",
    },

    {
      title: "Premium connected car technology",
    },

    {
      title: "5-Star Bharat NCAP safety rating",
    },

    {
      title: "Vehicle-to-Load (V2L) and Vehicle-to-Vehicle (V2V) support",
    },

  ],

  // ======================================================
  // CONS
  // ======================================================

  cons: [

    {
      title: "Top speed not officially specified",
    },

    {
      title: "Some premium features available only in higher variants",
    },

    {
      title: "Real-world range depends on driving conditions",
    },

  ],

  // ======================================================
  // SAFETY
  // ======================================================

  safety: {

    airbags: 6,

    adasLevel: null,

    ncapRating: 5,

    abs: true,

    ebd: true,

    esc: true,

    tractionControl: true,

    tpms: true,

    hillHold: true,

    hillDescent: false,

    isofix: true,

    camera360: true,

    blindSpotMonitor: true,

    parkingSensors: "Front & Rear",

    emergencyBraking: false,

    laneKeepAssist: false,

    adaptiveCruise: false,

    driverDrowsiness: false,

  },

  // ======================================================
  // OWNERSHIP
  // ======================================================

  ownership: {

    serviceInterval: null,

    yearlyServiceCost: null,

    insuranceCost: null,

    batteryReplacementCost: null,

    roadsideAssistance: true,

    warrantyYears: 3,

    warrantyKm: 125000,

    resaleRating: null,

    maintenanceRating: null,

  },

  // ======================================================
  // RATING
  // ======================================================

  rating: {

    overall: 4.8,

    safety: 5.0,

    performance: 4.8,

    comfort: 4.7,

    features: 4.9,

    valueForMoney: 4.7,

    charging: 4.8,

    verdict:
      "The Tata Nexon.ev is one of the most feature-rich and safest electric SUVs in India. It combines strong performance, long certified range, fast charging and premium technology, making it an excellent choice for daily commuting as well as long-distance travel.",

  },

},
];