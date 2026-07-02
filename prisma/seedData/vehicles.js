export const vehicles = [
  {
    // ==========================================
    // BASIC INFO
    // ==========================================

    brand: "Tata",

    name: "Curvv EV",

    slug: "tata-curvv-ev",

    image: "/curvv-ev.jpg",

    overview:
      "The Tata Curvv EV is Tata Motors' premium electric SUV Coupe offering modern styling, excellent range, Level 2 ADAS and fast charging.",

    featured: true,

    // ==========================================
    // PRICING
    // ==========================================

    pricing: {
      exShowroomPrice: 1749000,
    },

    // ==========================================
    // BATTERY
    // ==========================================

    battery: {
      batteryKwh: 55,

      batteryType: "Lithium-ion",

      claimedRange: 585,

      realRange: 480,
    },

    // ==========================================
    // PERFORMANCE
    // ==========================================

    performance: {
      zeroToHundred: 8.6,

      topSpeed: 160,

      motorType: "Permanent Magnet Synchronous Motor",

      maxPower: "165 HP",

      maxTorque: "215 Nm",

      driveModes: "Eco, City, Sport",

      regenLevels: 4,
    },

    // ==========================================
    // DIMENSIONS
    // ==========================================

    dimensions: {
      seating: 5,

      bodyType: "SUV Coupe",

      driveType: "FWD",

      bootSpace: 500,

      groundClearance: 190,
    },

    // ==========================================
    // CHARGING
    // ==========================================

    charging: {
      homeChargerPower: "7.2 kW",

      homeChargingTime: "7.2 Hours",

      dcFastChargePower: "70 kW",

      dcChargingTime: "40 Minutes",

      chargingPort: "CCS2",

      chargerIncluded: true,

      portableCharger: true,

      wallBoxCharger: true,

      v2l: true,

      v2v: false,

      batteryPreCondition: true,
    },

    // ==========================================
    // WARRANTY
    // ==========================================

    warranty: {
      vehicleWarranty: "3 Years",

      batteryWarranty: "8 Years / 1.6 Lakh km",

      launchDate: "2025",
    },

    // ==========================================
    // SPECIFICATIONS
    // ==========================================

    specs: [
      {
        key: "Power",

        value: "165 HP",

        category: "Performance",
      },

      {
        key: "Torque",

        value: "215 Nm",

        category: "Performance",
      },

      {
        key: "Battery",

        value: "55 kWh",

        category: "Battery",
      },

      {
        key: "Range",

        value: "585 km",

        category: "Battery",
      },

      {
        key: "Boot Space",

        value: "500 L",

        category: "Dimensions",
      },

      {
        key: "Ground Clearance",

        value: "190 mm",

        category: "Dimensions",
      },
    ],

    // ==========================================
    // VARIANTS
    // ==========================================

    variants: [
      {
        name: "Creative",

        price: 1749000,

        battery: "55 kWh",

        range: 585,

        power: 165,

        torque: 215,

        topSpeed: 160,

        acceleration: 8.6,

        recommended: false,
      },

      {
        name: "Accomplished",

        price: 1899000,

        battery: "55 kWh",

        range: 585,

        power: 165,

        torque: 215,

        topSpeed: 160,

        acceleration: 8.6,

        recommended: true,
      },
    ],

    // ==========================================
    // FEATURES
    // ==========================================

    features: [
      { title: "ADAS Level 2", category: "Safety" },

      { title: "Panoramic Sunroof", category: "Exterior" },

      { title: "360° Camera", category: "Safety" },

      { title: "Wireless Android Auto", category: "Technology" },

      { title: "Wireless Apple CarPlay", category: "Technology" },

      { title: "Ventilated Seats", category: "Comfort" },

      { title: "Connected Car Tech", category: "Technology" },

      { title: "Cruise Control", category: "Safety" },

      { title: "Air Purifier", category: "Comfort" },

      { title: "V2L Support", category: "Charging" },
    ],

    // ==========================================
    // GALLERY
    // ==========================================

    gallery: [
      {
        image: "/curvv-ev.jpg",

        caption: "Front View",

        isPrimary: true,
      },

      {
        image: "/curvv-ev.jpg",

        caption: "Side View",
      },

      {
        image: "/curvv-ev.jpg",

        caption: "Rear View",
      },

      {
        image: "/curvv-ev.jpg",

        caption: "Interior",
      },
    ],

    // ==========================================
    // COLORS
    // ==========================================

    colors: [
      {
        name: "White",

        hexCode: "#ffffff",
      },

      {
        name: "Red",

        hexCode: "#ff0000",
      },

      {
        name: "Blue",

        hexCode: "#0055ff",
      },
    ],

    // ==========================================
    // PROS
    // ==========================================

    pros: [
      { title: "Excellent real-world range" },

      { title: "Premium interior quality" },

      { title: "Fast DC charging" },

      { title: "Level 2 ADAS" },

      { title: "Smooth driving experience" },
    ],

    // ==========================================
    // CONS
    // ==========================================

    cons: [
      { title: "No AWD option" },

      { title: "Rear visibility could be better" },

      { title: "Top variant expensive" },

      { title: "Limited service network" },
    ],

    // ==========================================
    // FAQ
    // ==========================================

    faqs: [
      {
        question: "What is the real-world range?",

        answer:
          "The Tata Curvv EV delivers around 450–500 km in mixed driving conditions.",
      },

      {
        question: "Does it support DC fast charging?",

        answer:
          "Yes, it supports DC fast charging and can charge from 10% to 80% in around 40 minutes.",
      },
    ],

    // ==========================================
    // SAFETY
    // ==========================================

    safety: {
      airbags: 6,

      adasLevel: "Level 2",

      abs: true,

      ebd: true,

      esc: true,

      tractionControl: true,

      tpms: true,

      hillHold: true,

      isofix: true,

      camera360: true,
    },

    // ==========================================
    // OWNERSHIP
    // ==========================================

    ownership: {
      serviceInterval: "15000 km",

      yearlyServiceCost: 4500,

      insuranceCost: 32000,

      roadsideAssistance: true,

      resaleRating: 4.5,

      maintenanceRating: 4.7,
    },

    // ==========================================
    // EXPERT RATING
    // ==========================================

    rating: {
      overall: 4.7,

      safety: 4.8,

      performance: 4.6,

      comfort: 4.7,

      features: 4.8,

      charging: 4.6,

      valueForMoney: 4.5,

      verdict:
        "One of the best premium electric SUVs currently available in India.",
    },
  },
];