// export const vehicles = [
//  {
//   // ======================================================
//   // BASIC INFO
//   // ======================================================

//   brand: "Tata",

//   name: "Nexon.ev",

//   slug: "tata-nexon-ev",

//   image: "/cars/tata/nexon-ev/cover.webp",

//   featured: true,

//   overview:
//     "The Tata Nexon.ev is a premium electric SUV powered by a 45 kWh high-energy-density lithium-ion battery pack. It offers an MIDC certified range of 489 km, fast DC charging, advanced connected technology and a 5-star Bharat NCAP safety rating.",

//   // ======================================================
//   // PRICING
//   // ======================================================

//   pricing: {
//     // Official Tata website (current starting ex-showroom)
//     startingPrice: 1371000,
// endingPrice: 1946000,
//   },

//   // ======================================================
//   // BATTERY
//   // ======================================================

//   battery: {
//     batteryKwh: 45,

//     batteryType: "High Energy Density Lithium-ion",

//     claimedRange: 489,

//     // Official brochure (C75 Real World Range)
//     realRange: 350,
//   },

//   // ======================================================
//   // PERFORMANCE
//   // ======================================================

//   performance: {
//     zeroToHundred: 8.9,

//     topSpeed: null,

//     motorType: "Permanent Magnet Synchronous Motor",

//     maxPower: "106 kW",

//     maxTorque: "215 Nm",

//     driveModes: "Eco, City, Sport",

//     regenLevels: 4,
//   },

//   // ======================================================
//   // DIMENSIONS
//   // ======================================================

//   dimensions: {
//     seating: 5,

//     bodyType: "Electric SUV",

//     driveType: "Front Wheel Drive (FWD)",

//     lengthMm: 3995,

//     widthMm: 1802,

//     heightMm: 1625,

//     wheelbaseMm: 2498,

//     bootSpace: 350,

//     groundClearance: 190,
//   },

//   // ======================================================
//   // CHARGING
//   // ======================================================

//   charging: {
//     homeChargerPower: "3.3 kW AC (Standard)",

//     homeChargingTime: "17 hr 36 min (15A Socket)",

//     dcFastChargePower: "60 kW",

//     dcChargingTime: "40 min (10-80%)",

//     chargingPort: "CCS2",

//     chargerIncluded: true,

//     portableCharger: true,

//     wallBoxCharger: true,

//     v2l: true,

//     v2v: true,

//     batteryPreCondition: null,
//   },

//   // ======================================================
//   // WARRANTY
//   // ======================================================

//   warranty: {
//     vehicleWarranty: "3 Years / 1,25,000 km",

//     batteryWarranty: "8 Years / 1,60,000 km",

//     launchDate: "2023",
//   },
//     // ======================================================
//   // SPECIFICATIONS
//   // ======================================================

//   specs: [

//     // Battery
//     {
//       key: "Battery Capacity",
//       value: "45 kWh",
//       category: "Battery",
//     },

//     {
//       key: "Battery Type",
//       value: "High Energy Density Lithium-ion",
//       category: "Battery",
//     },

//     {
//       key: "Claimed Range",
//       value: "489 km (MIDC Part 1 + Part 2)",
//       category: "Battery",
//     },

//     {
//       key: "Real World Range",
//       value: "350 km (C75)",
//       category: "Battery",
//     },

//     // Performance

//     {
//       key: "Motor",
//       value: "Permanent Magnet Synchronous Motor",
//       category: "Performance",
//     },

//     {
//       key: "Maximum Power",
//       value: "106 kW",
//       category: "Performance",
//     },

//     {
//       key: "Maximum Torque",
//       value: "215 Nm",
//       category: "Performance",
//     },

//     {
//       key: "0-100 km/h",
//       value: "8.9 sec",
//       category: "Performance",
//     },

//     {
//       key: "Drive Modes",
//       value: "Eco, City, Sport",
//       category: "Performance",
//     },

//     {
//       key: "Regenerative Braking",
//       value: "4 Levels with Paddle Shifters",
//       category: "Performance",
//     },

//     // Dimensions

//     {
//       key: "Length",
//       value: "3995 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Width",
//       value: "1802 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Height",
//       value: "1625 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Wheelbase",
//       value: "2498 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Ground Clearance",
//       value: "190 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Boot Space",
//       value: "350 L",
//       category: "Dimensions",
//     },

//     {
//       key: "Seating Capacity",
//       value: "5",
//       category: "Dimensions",
//     },

//     // Charging

//     {
//       key: "AC Charging",
//       value: "6.6 kW On-board Charger",
//       category: "Charging",
//     },

//     {
//       key: "DC Fast Charging",
//       value: "60 kW",
//       category: "Charging",
//     },

//     {
//       key: "Charging Port",
//       value: "CCS2",
//       category: "Charging",
//     },

//   ],

//   // ======================================================
// // VARIANTS
// // ======================================================

// variants: [

//   {
//     name: "Creative 45",

//     price: 1400000,

//     battery: "45 kWh",

//     range: 489,

//     power: 106,

//     torque: 215,

//     topSpeed: null,

//     acceleration: 8.9,

//     recommended: false,
//   },

//   {
//     name: "Fearless 45",

//     price: null,

//     battery: "45 kWh",

//     range: 489,

//     power: 106,

//     torque: 215,

//     topSpeed: null,

//     acceleration: 8.9,

//     recommended: true,
//   },

//   {
//     name: "Empowered 45",

//     price: null,

//     battery: "45 kWh",

//     range: 489,

//     power: 106,

//     torque: 215,

//     topSpeed: null,

//     acceleration: 8.9,

//     recommended: false,
//   },

//   {
//     name: "Empowered + 45",

//     price: null,

//     battery: "45 kWh",

//     range: 489,

//     power: 106,

//     torque: 215,

//     topSpeed: null,

//     acceleration: 8.9,

//     recommended: false,
//   },

// ],

//   // ======================================================
//   // FEATURES
//   // ======================================================

//   features: [

//     {
//       title: "12.3-inch Harman Infotainment System",
//       category: "Infotainment",
//     },

//     {
//       title: "10.25-inch / 12.3-inch Digital Cockpit",
//       category: "Infotainment",
//     },

//     {
//       title: "Wireless Android Auto",
//       category: "Infotainment",
//     },

//     {
//       title: "Wireless Apple CarPlay",
//       category: "Infotainment",
//     },

//     {
//       title: "iRA.ev Connected Car Technology",
//       category: "Connected",
//     },

//     {
//       title: "Alexa Voice Assistant",
//       category: "Connected",
//     },

//     {
//       title: "Smart Digital Steering Wheel",
//       category: "Interior",
//     },

//     {
//       title: "Smart Digital Shifter",
//       category: "Interior",
//     },

//     {
//       title: "Phygital Control Panel",
//       category: "Interior",
//     },

//     {
//       title: "Air Purifier",
//       category: "Comfort",
//     },

//     {
//       title: "Ventilated Front Seats",
//       category: "Comfort",
//     },

//     {
//       title: "Wireless Phone Charger",
//       category: "Comfort",
//     },

//     {
//       title: "Voice Assisted Panoramic Sunroof",
//       category: "Comfort",
//     },

//     {
//       title: "360 Degree Surround View Camera",
//       category: "Safety",
//     },

//     {
//       title: "Blind Spot View Monitor",
//       category: "Safety",
//     },

//     {
//       title: "Cruise Control",
//       category: "Safety",
//     },

//     {
//       title: "Rain Sensing Wipers",
//       category: "Safety",
//     },

//     {
//       title: "Auto Headlamps",
//       category: "Safety",
//     },

//     {
//       title: "V2L Technology",
//       category: "EV Technology",
//     },

//     {
//       title: "V2V Charging",
//       category: "EV Technology",
//     },

//   ],

//   // ======================================================
//   // GALLERY
//   // ======================================================

//   gallery: [

//     {
//       image: "/cars/tata/nexon-ev/cover.webp",
//       caption: "Front View",
//       isPrimary: true,
//     },

//     {
//       image: "/cars/tata/nexon-ev/rear.webp",
//       caption: "Rear View",
//     },

//     {
//       image: "/cars/tata/nexon-ev/interior.webp",
//       caption: "Interior",
//     },

//     {
//       image: "/cars/tata/nexon-ev/dashboard.webp",
//       caption: "Dashboard",
//     },

//     {
//       image: "/cars/tata/nexon-ev/side.webp",
//       caption: "Side Profile",
//     },

//   ],

//   // ======================================================
//   // COLORS
//   // ======================================================

//   colors: [

//     {
//       name: "Pristine White",
//       hexCode: "#F5F5F5",
//       image: "/cars/tata/nexon-ev/colors/pristine-white.webp",
//     },

//     {
//       name: "Flame Red",
//       hexCode: "#C21807",
//       image: "/cars/tata/nexon-ev/colors/flame-red.webp",
//     },

//     {
//       name: "Daytona Grey",
//       hexCode: "#676767",
//       image: "/cars/tata/nexon-ev/colors/daytona-grey.webp",
//     },

//     {
//       name: "Empowered Oxide",
//       hexCode: "#707070",
//       image: "/cars/tata/nexon-ev/colors/empowered-oxide.webp",
//     },

//     {
//       name: "Creative Ocean",
//       hexCode: "#2E8BAA",
//       image: "/cars/tata/nexon-ev/colors/creative-ocean.webp",
//     },

//     {
//       name: "Fearless Purple",
//       hexCode: "#5A3E82",
//       image: "/cars/tata/nexon-ev/colors/fearless-purple.webp",
//     },

//   ],
//     // ======================================================
//   // FAQS
//   // ======================================================

//   faqs: [

//     {
//       question: "What is the battery capacity of Tata Nexon.ev 45?",
//       answer:
//         "The Tata Nexon.ev 45 is equipped with a 45 kWh high-energy-density lithium-ion battery pack.",
//     },

//     {
//       question: "What is the certified driving range of Nexon.ev?",
//       answer:
//         "The Nexon.ev 45 offers an MIDC certified range of up to 489 km on a full charge.",
//     },

//     {
//       question: "How long does DC fast charging take?",
//       answer:
//         "Using a 60 kW DC fast charger, the battery can be charged from 10% to 80% in approximately 40 minutes.",
//     },

//     {
//       question: "What charging connector does the Nexon.ev use?",
//       answer:
//         "The vehicle uses a CCS2 charging connector for DC fast charging.",
//     },

//     {
//       question: "How many people can the Nexon.ev seat?",
//       answer:
//         "The Tata Nexon.ev offers seating for five occupants.",
//     },

//   ],

//   // ======================================================
//   // PROS
//   // ======================================================

//   pros: [

//     {
//       title: "489 km MIDC certified driving range",
//     },

//     {
//       title: "8.9 second 0-100 km/h acceleration",
//     },

//     {
//       title: "60 kW DC fast charging support",
//     },

//     {
//       title: "Premium connected car technology",
//     },

//     {
//       title: "5-Star Bharat NCAP safety rating",
//     },

//     {
//       title: "Vehicle-to-Load (V2L) and Vehicle-to-Vehicle (V2V) support",
//     },

//   ],

//   // ======================================================
//   // CONS
//   // ======================================================

//   cons: [

//     {
//       title: "Top speed not officially specified",
//     },

//     {
//       title: "Some premium features available only in higher variants",
//     },

//     {
//       title: "Real-world range depends on driving conditions",
//     },

//   ],

//   // ======================================================
//   // SAFETY
//   // ======================================================

//   safety: {

//     airbags: 6,

//     adasLevel: null,

//     ncapRating: 5,

//     abs: true,

//     ebd: true,

//     esc: true,

//     tractionControl: true,

//     tpms: true,

//     hillHold: true,

//     hillDescent: false,

//     isofix: true,

//     camera360: true,

//     blindSpotMonitor: true,

//     parkingSensors: "Front & Rear",

//     emergencyBraking: false,

//     laneKeepAssist: false,

//     adaptiveCruise: false,

//     driverDrowsiness: false,

//   },

//   // ======================================================
//   // OWNERSHIP
//   // ======================================================

//   ownership: {

//     serviceInterval: null,

//     yearlyServiceCost: null,

//     insuranceCost: null,

//     batteryReplacementCost: null,

//     roadsideAssistance: true,

//     warrantyYears: 3,

//     warrantyKm: 125000,

//     resaleRating: null,

//     maintenanceRating: null,

//   },

//   // ======================================================
//   // RATING
//   // ======================================================

//   rating: {

//     overall: 4.8,

//     safety: 5.0,

//     performance: 4.8,

//     comfort: 4.7,

//     features: 4.9,

//     valueForMoney: 4.7,

//     charging: 4.8,

//     verdict:
//       "The Tata Nexon.ev is one of the most feature-rich and safest electric SUVs in India. It combines strong performance, long certified range, fast charging and premium technology, making it an excellent choice for daily commuting as well as long-distance travel.",

//   },

// },




// {
//   // ======================================================
//   // BASIC INFO
//   // ======================================================

//   brand: "Tata",

//   name: "Sierra.ev",

//   slug: "tata-sierra-ev",

//   image: "/cars/tata/sierra-ev/cover.webp",

//   featured: true,

//   overview:
//     "The Tata Sierra.ev is Tata Motors' flagship premium electric SUV built on the Acti.ev+ architecture. It offers premium technology, long driving range, advanced safety features, connected connectivity, dual battery options, QWD dual-motor capability and fast charging.",

//   // ======================================================
//   // PRICING
//   // ======================================================

//   pricing: {
//     // Official Tata website (current starting ex-showroom)
//     startingPrice: 1371000,
// endingPrice: 1946000,
//   },

//   // ======================================================
//   // BATTERY
//   // ======================================================

//   battery: {
//     batteryKwh: 75,

//     batteryType: "Liquid Cooled Lithium-ion",

//     claimedRange: 665,

//     realRange: 520,
//   },

//   // ======================================================
//   // PERFORMANCE
//   // ======================================================

//   performance: {
//     zeroToHundred: 5.8,

//     topSpeed: null,

//     motorType: "Permanent Magnet Synchronous Motor",

//     maxPower: "209 PS",

//     maxTorque: "504 Nm",

//     driveModes: "Eco, City, Sport, Boost",

//     regenLevels: 4,
//   },

//   // ======================================================
//   // DIMENSIONS
//   // ======================================================

//   dimensions: {
//     seating: 5,

//     bodyType: "Electric SUV",

//     driveType: "QWD",

//     lengthMm: 4340,

//     widthMm: 1841,

//     heightMm: 1750,

//     wheelbaseMm: 2730,

//     bootSpace: 622,

//     groundClearance: 205,
//   },

//   // ======================================================
//   // CHARGING
//   // ======================================================

//   charging: {
//     homeChargerPower: "7.2 kW AC Wall Box",

//     homeChargingTime: "10.5 hr",

//     dcFastChargePower: "120 kW+",

//     dcChargingTime: "~26 min (20-80%)",

//     chargingPort: "CCS2",

//     chargerIncluded: true,

//     portableCharger: true,

//     wallBoxCharger: true,

//     v2l: true,

//     v2v: true,

//     batteryPreCondition: null,
//   },

//   // ======================================================
//   // WARRANTY
//   // ======================================================

//   warranty: {
//     vehicleWarranty: "3 Years / 1,25,000 km",

//     batteryWarranty: "Lifetime Warranty (Private Owner)",

//     launchDate: "2026",
//   },

//   // ======================================================
//   // SPECIFICATIONS
//   // ======================================================

//   specs: [

//     // Battery

//     {
//       key: "Battery Capacity",
//       value: "75 kWh",
//       category: "Battery",
//     },

//     {
//       key: "Battery Type",
//       value: "Liquid Cooled System",
//       category: "Battery",
//     },

//     {
//       key: "Claimed Range",
//       value: "665 km (MIDC Part 1 + Part 2)",
//       category: "Battery",
//     },

//     {
//       key: "Real World Range",
//       value: "510-530 km (C75)",
//       category: "Battery",
//     },

//     {
//       key: "Ingress Protection",
//       value: "IP67",
//       category: "Battery",
//     },

//     {
//       key: "Thermal Management",
//       value: "Liquid Cooled System",
//       category: "Battery",
//     },

//     // Performance

//     {
//       key: "Motor",
//       value: "Permanent Magnet Synchronous Motor",
//       category: "Performance",
//     },

//     {
//       key: "Front Motor",
//       value: "140 PS (103 kW)",
//       category: "Performance",
//     },

//     {
//       key: "Rear Motor",
//       value: "209 PS (154 kW)",
//       category: "Performance",
//     },

//     {
//       key: "Maximum Torque",
//       value: "504 Nm",
//       category: "Performance",
//     },

//     {
//       key: "0-100 km/h",
//       value: "5.8 sec",
//       category: "Performance",
//     },

//     {
//       key: "Drive Modes",
//       value: "Eco, City, Sport, Boost",
//       category: "Performance",
//     },

//     {
//       key: "Terrain Modes",
//       value: "Normal, Grass/Snow, Mud-Ruts, Sand, Rock Crawl, Custom",
//       category: "Performance",
//     },

//     {
//       key: "Regenerative Braking",
//       value: "4 Levels",
//       category: "Performance",
//     },

//     {
//       key: "Drive Type",
//       value: "QWD",
//       category: "Performance",
//     },

//     {
//       key: "Gradeability",
//       value: "52%",
//       category: "Performance",
//     },

//     // Dimensions

//     {
//       key: "Length",
//       value: "4340 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Width",
//       value: "1841 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Height",
//       value: "1750 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Wheelbase",
//       value: "2730 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Ground Clearance",
//       value: "205 mm",
//       category: "Dimensions",
//     },

//     {
//       key: "Boot Space",
//       value: "622 L",
//       category: "Dimensions",
//     },

//     {
//       key: "Frunk",
//       value: "35 L",
//       category: "Dimensions",
//     },

//     {
//       key: "Turning Radius",
//       value: "5.32 m",
//       category: "Dimensions",
//     },

//     {
//       key: "Seating Capacity",
//       value: "5",
//       category: "Dimensions",
//     },

//     // Charging

//     {
//       key: "Charging Standard",
//       value: "CCS2",
//       category: "Charging",
//     },

//     {
//       key: "AC Charging",
//       value: "10.5 hr (10-100%)",
//       category: "Charging",
//     },

//     {
//       key: "DC Fast Charging",
//       value: "~26 min (20-80%)",
//       category: "Charging",
//     },

//     {
//       key: "Vehicle to Load",
//       value: "3.3 kVA",
//       category: "Charging",
//     },

//     {
//       key: "Vehicle to Vehicle",
//       value: "5 kVA",
//       category: "Charging",
//     },

//   ],

//     // ======================================================
//   // VARIANTS
//   // ======================================================

//   variants: [

//     {
//       name: "Pure",

//       price: 1879000,

//       battery: "63 kWh",

//       range: 566,

//       power: 238,

//       torque: 315,

//       topSpeed: null,

//       acceleration: null,

//       recommended: false,
//     },

//     {
//       name: "Pure S",

//       price: null,

//       battery: "63 kWh",

//       range: 566,

//       power: 238,

//       torque: 315,

//       topSpeed: null,

//       acceleration: null,

//       recommended: false,
//     },

//     {
//       name: "Adventure",

//       price: null,

//       battery: "75 kWh",

//       range: 665,

//       power: 209,

//       torque: 315,

//       topSpeed: null,

//       acceleration: null,

//       recommended: true,
//     },

//     {
//       name: "Empowered",

//       price: null,

//       battery: "75 kWh",

//       range: 665,

//       power: 209,

//       torque: 315,

//       topSpeed: null,

//       acceleration: null,

//       recommended: true,
//     },

//     {
//       name: "Empowered A",

//       price: null,

//       battery: "75 kWh",

//       range: 665,

//       power: 209,

//       torque: 315,

//       topSpeed: null,

//       acceleration: null,

//       recommended: true,
//     },

//     {
//       name: "Empowered A AWD",

//       price: null,

//       battery: "75 kWh",

//       range: 624,

//       power: 313,

//       torque: 504,

//       topSpeed: null,

//       acceleration: 5.8,

//       recommended: true,
//     },

//   ],

//   // ======================================================
//   // FEATURES
//   // ======================================================

//   features: [

//     {
//       title: "Horizon View Triple Screen Infotainment Experience",
//       category: "Infotainment",
//     },

//     {
//       title: "31.24 cm Infotainment Touchscreen",
//       category: "Infotainment",
//     },

//     {
//       title: "31.24 cm Passenger Infotainment Display",
//       category: "Infotainment",
//     },

//     {
//       title: "26.03 cm Digital Cockpit",
//       category: "Infotainment",
//     },

//     {
//       title: "Wireless Android Auto",
//       category: "Infotainment",
//     },

//     {
//       title: "Wireless Apple CarPlay",
//       category: "Infotainment",
//     },

//     {
//       title: "12 JBL Black Speakers",
//       category: "Audio",
//     },

//     {
//       title: "Dolby Atmos",
//       category: "Audio",
//     },

//     {
//       title: "Sonicshaft Soundbar",
//       category: "Audio",
//     },

//     {
//       title: "AirConsole In-car Gaming",
//       category: "Entertainment",
//     },

//     {
//       title: "Arcade.ev App Suite",
//       category: "Entertainment",
//     },

//     {
//       title: "iRA.ev Connected Car Suite",
//       category: "Connected",
//     },

//     {
//       title: "EV Route Planner",
//       category: "Connected",
//     },

//     {
//       title: "OTA Updates",
//       category: "Connected",
//     },

//     {
//       title: "DrivePay",
//       category: "Connected",
//     },

//     {
//       title: "MAPPLS Navigation",
//       category: "Connected",
//     },

//     {
//       title: "Digital Key (Digi Access)",
//       category: "Connected",
//     },

//     {
//       title: "HypAR Head-Up Display",
//       category: "Technology",
//     },

//     {
//       title: "540° Surround View Camera",
//       category: "Technology",
//     },

//     {
//       title: "360° Camera with Transparent Mode",
//       category: "Technology",
//     },

//     {
//       title: "Blind Spot View Monitor",
//       category: "Technology",
//     },

//     {
//       title: "Auto Park Assist",
//       category: "Technology",
//     },

//     {
//       title: "Summon Mode",
//       category: "Technology",
//     },

//     {
//       title: "Reverse Assist",
//       category: "Technology",
//     },

//     {
//       title: "L2+ ADAS",
//       category: "Safety",
//     },

//     {
//       title: "Intelligent Speed Assist",
//       category: "Safety",
//     },

//     {
//       title: "6 Airbags",
//       category: "Safety",
//     },

//     {
//       title: "Electronic Stability Program",
//       category: "Safety",
//     },

//     {
//       title: "ISOFIX Child Seat Mounts",
//       category: "Safety",
//     },

//     {
//       title: "Panoramax Sunroof",
//       category: "Comfort",
//     },

//     {
//       title: "Ventilated Front Seats",
//       category: "Comfort",
//     },

//     {
//       title: "6-Way Powered Driver Seat with Memory",
//       category: "Comfort",
//     },

//     {
//       title: "4-Way Powered Co-driver Seat",
//       category: "Comfort",
//     },

//     {
//       title: "Boss Mode",
//       category: "Comfort",
//     },

//     {
//       title: "Dual Zone Automatic Climate Control",
//       category: "Comfort",
//     },

//     {
//       title: "BreatheIQ Air Purifier with Ioniser",
//       category: "Comfort",
//     },

//     {
//       title: "Wireless Phone Charger",
//       category: "Comfort",
//     },

//     {
//       title: "Vehicle-to-Load (V2L)",
//       category: "EV Technology",
//     },

//     {
//       title: "Vehicle-to-Vehicle (V2V)",
//       category: "EV Technology",
//     },

//   ],
  
//   gallery: [

//    {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566858/image1_qhqpw6.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

//     {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566864/image22_p60swn.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

//      {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566863/image21_fzbc3l.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

//      {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566862/image20_g4v0pj.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

//      {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566862/image19_dwx1cm.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

//      {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566861/image15_a1vg0e.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

//      {
//       image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784566860/image13_o8rfnq.png",
//       // caption: "Front View",
//       isPrimary: true,
//     },

// ],

// // ======================================================
// // COLORS
// // ======================================================

// colors: [

//   {
//     name: "Coorg Clouds",
//     hexCode: "#D9D9D9",
//     image: "/cars/tata/sierra-ev/colors/coorg-clouds.webp",
//   },

//   {
//     name: "Pure Grey",
//     hexCode: "#7A7A7A",
//     image: "/cars/tata/sierra-ev/colors/pure-grey.webp",
//   },

//   {
//     name: "Pristine White",
//     hexCode: "#F5F5F5",
//     image: "/cars/tata/sierra-ev/colors/pristine-white.webp",
//   },

//   {
//     name: "Andaman Adventure",
//     hexCode: "#3B8D73",
//     image: "/cars/tata/sierra-ev/colors/andaman-adventure.webp",
//   },

//   {
//     name: "Bengal Rouge",
//     hexCode: "#8A1F2B",
//     image: "/cars/tata/sierra-ev/colors/bengal-rouge.webp",
//   },

//   {
//     name: "Rishikesh Rapids",
//     hexCode: "#1B5E7A",
//     image: "/cars/tata/sierra-ev/colors/rishikesh-rapids.webp",
//   },

//   {
//     name: "Nainital Nocturne",
//     hexCode: "#222831",
//     image: "/cars/tata/sierra-ev/colors/nainital-nocturne.webp",
//   },

// ],
// // ======================================================
// // FAQS
// // ======================================================

// faqs: [

//   {
//     question: "What battery options are available in the Tata Sierra.ev?",
//     answer:
//       "The Tata Sierra.ev is available with 63 kWh and 75 kWh battery packs depending on the variant.",
//   },

//   {
//     question: "What is the maximum certified range of the Sierra.ev?",
//     answer:
//       "The 75 kWh RWD variant offers a certified MIDC range of up to 665 km, while the QWD AWD variant offers up to 624 km.",
//   },

//   {
//     question: "Does the Sierra.ev support DC fast charging?",
//     answer:
//       "Yes. The battery can be charged from 20% to 80% in approximately 25-26 minutes using a compatible DC fast charger.",
//   },

//   {
//     question: "Does the Sierra.ev support Vehicle-to-Load (V2L) and Vehicle-to-Vehicle (V2V)?",
//     answer:
//       "Yes. All variants support both V2L and V2V bi-directional charging.",
//   },

//   {
//     question: "Is the Sierra.ev available with all-wheel drive?",
//     answer:
//       "Yes. The Empowered A AWD variant features Tata's QWD dual-motor all-wheel-drive system.",
//   },

// ],

// // ======================================================
// // PROS
// // ======================================================

// pros: [

//   {
//     title: "Up to 665 km MIDC certified driving range",
//   },

//   {
//     title: "75 kWh battery with ultra-fast DC charging",
//   },

//   {
//     title: "QWD dual-motor AWD with 504 Nm torque",
//   },

//   {
//     title: "Premium triple-screen infotainment system",
//   },

//   {
//     title: "Level 2+ ADAS with Auto Park Assist",
//   },

//   {
//     title: "V2L and V2V charging support",
//   },

// ],

// // ======================================================
// // CONS
// // ======================================================

// cons: [

//   {
//     title: "Official ex-showroom prices not announced",
//   },

//   {
//     title: "Some premium features limited to higher variants",
//   },

//   {
//     title: "Real-world range depends on driving conditions",
//   },

// ],

// // ======================================================
// // SAFETY
// // ======================================================

// safety: {

//   airbags: 6,

//   adasLevel: "Level 2+",

//   ncapRating: null,

//   abs: true,

//   ebd: true,

//   esc: true,

//   tractionControl: true,

//   tpms: true,

//   hillHold: true,

//   hillDescent: true,

//   isofix: true,

//   camera360: true,

//   blindSpotMonitor: true,

//   parkingSensors: "Front & Rear",

//   emergencyBraking: true,

//   laneKeepAssist: true,

//   adaptiveCruise: true,

//   driverDrowsiness: false,

// },

// // ======================================================
// // OWNERSHIP
// // ======================================================

// ownership: {

//   serviceInterval: null,

//   yearlyServiceCost: null,

//   insuranceCost: null,

//   batteryReplacementCost: null,

//   roadsideAssistance: true,

//   warrantyYears: 3,

//   warrantyKm: 125000,

//   resaleRating: null,

//   maintenanceRating: null,

// },

// // ======================================================
// // RATING
// // ======================================================

// rating: {

//   overall: 4.9,

//   safety: 4.9,

//   performance: 4.9,

//   comfort: 5.0,

//   features: 5.0,

//   valueForMoney: 4.8,

//   charging: 4.9,

//   verdict:
//     "The Tata Sierra.ev is one of the most advanced electric SUVs from Tata Motors, offering premium luxury, impressive driving range, powerful performance, advanced ADAS features and excellent everyday practicality.",

// },
// },

// // ======================================================
// // BASIC INFO
// // ======================================================

// {
//   brand: "Tata",

//   name: "Harrier.ev",

//   slug: "tata-harrier-ev",

//   image: "/cars/tata/harrier-ev/cover.webp",

//   featured: true,

//   overview:
//     "The Tata Harrier.ev is a premium electric SUV based on Tata's Acti.ev+ architecture. It offers powerful electric performance, dual motor QWD capability, long driving range, advanced safety features, premium technology and rugged SUV capability.",


// // ======================================================
// // PRICING
// // ======================================================

// pricing: {
//     // Official Tata website (current starting ex-showroom)
//     startingPrice: 1371000,
// endingPrice: 1946000,
//   },


// // ======================================================
// // BATTERY
// // ======================================================

// battery: {

//   batteryKwh: 75,

//   batteryType: "Liquid Cooled Lithium-ion",

//   claimedRange: 627,

//   realRange: 505,

// },


// // ======================================================
// // PERFORMANCE
// // ======================================================

// performance: {

//   zeroToHundred: 6.3,

//   topSpeed: null,

//   motorType:
//     "Permanent Magnet Synchronous Motor",

//   maxPower:
//     "238 PS",

//   maxTorque:
//     "504 Nm",

//   driveModes:
//     "Eco, City, Sport, Boost",

//   regenLevels: 4,

// },


// // ======================================================
// // DIMENSIONS
// // ======================================================

// dimensions: {

//   seating: 5,

//   bodyType:
//     "Electric SUV",

//   driveType:
//     "RWD / QWD AWD",

//   lengthMm: 4607,

//   widthMm: 1922,

//   heightMm: 1740,

//   wheelbaseMm: 2741,

//   bootSpace: 502,

//   groundClearance: null,

// },


// // ======================================================
// // CHARGING
// // ======================================================

// charging: {

//   homeChargerPower:
//     "7.2 kW AC Wall Box",

//   homeChargingTime:
//     "9.3 hr (65 kWh) / 10.7 hr (75 kWh)",

//   dcFastChargePower:
//     "120 kW+",

//   dcChargingTime:
//     "~25 min (20-80%)",

//   chargingPort:
//     "CCS2",

//   chargerIncluded: true,

//   portableCharger: true,

//   wallBoxCharger: true,

//   v2l: true,

//   v2v: true,

//   batteryPreCondition: null,

// },


// // ======================================================
// // WARRANTY
// // ======================================================

// warranty: {

//   vehicleWarranty:
//     "3 Years / 1,25,000 km",

//   batteryWarranty:
//     "Lifetime Warranty (First Owner)",

//   launchDate:
//     "2025",

// },


// // ======================================================
// // SPECIFICATIONS
// // ======================================================

// specs: [


//   // =====================
//   // BATTERY
//   // =====================

//   {
//     key: "Battery Capacity",
//     value: "65 kWh / 75 kWh",
//     category: "Battery",
//   },


//   {
//     key: "Battery Type",
//     value: "Liquid Cooled System",
//     category: "Battery",
//   },


//   {
//     key: "Certified Range",
//     value: "538 km - 627 km (MIDC)",
//     category: "Battery",
//   },


//   {
//     key: "Real World Range",
//     value: "420-505 km",
//     category: "Battery",
//   },


//   {
//     key: "Ingress Protection",
//     value: "IP67",
//     category: "Battery",
//   },


//   {
//     key: "Thermal Management",
//     value: "Liquid Cooled System",
//     category: "Battery",
//   },


//   // =====================
//   // PERFORMANCE
//   // =====================


//   {
//     key: "Motor",
//     value: "Permanent Magnet Synchronous Motor",
//     category: "Performance",
//   },


//   {
//     key: "Rear Motor Power",
//     value: "238 PS (175 kW)",
//     category: "Performance",
//   },


//   {
//     key: "Front Motor Power",
//     value: "158 PS (116 kW)",
//     category: "Performance",
//   },


//   {
//     key: "Maximum Torque",
//     value: "504 Nm",
//     category: "Performance",
//   },


//   {
//     key: "0-100 km/h",
//     value: "6.3 sec",
//     category: "Performance",
//   },


//   {
//     key: "Drive Modes",
//     value: "Eco, City, Sport, Boost",
//     category: "Performance",
//   },


//   {
//     key: "Terrain Modes",
//     value:
//       "Normal, Snow/Grass, Mud-Ruts, Sand, Rock Crawl, Custom",
//     category: "Performance",
//   },


//   {
//     key: "Regenerative Braking",
//     value: "4 Levels",
//     category: "Performance",
//   },


//   {
//     key: "Drive Type",
//     value: "RWD / QWD AWD",
//     category: "Performance",
//   },


//   {
//     key: "Gradeability",
//     value: "Up to 47%",
//     category: "Performance",
//   },


//   // =====================
//   // DIMENSIONS
//   // =====================


//   {
//     key: "Length",
//     value: "4607 mm",
//     category: "Dimensions",
//   },


//   {
//     key: "Width",
//     value: "1922 mm",
//     category: "Dimensions",
//   },


//   {
//     key: "Height",
//     value: "1740 mm",
//     category: "Dimensions",
//   },


//   {
//     key: "Wheelbase",
//     value: "2741 mm",
//     category: "Dimensions",
//   },


//   {
//     key: "Boot Space",
//     value: "502 L",
//     category: "Dimensions",
//   },


//   {
//     key: "Frunk",
//     value: "35 L / 67 L",
//     category: "Dimensions",
//   },


//   {
//     key: "Water Wading Capacity",
//     value: "600 mm",
//     category: "Dimensions",
//   },


//   {
//     key: "Seating Capacity",
//     value: "5",
//     category: "Dimensions",
//   },


//   // =====================
//   // CHARGING
//   // =====================


//   {
//     key: "Charging Standard",
//     value: "CCS2",
//     category: "Charging",
//   },


//   {
//     key: "AC Charging",
//     value: "9.3 hr - 10.7 hr (7.2 kW AC)",
//     category: "Charging",
//   },


//   {
//     key: "DC Fast Charging",
//     value: "~25 min (20-80%)",
//     category: "Charging",
//   },


//   {
//     key: "Vehicle To Load",
//     value: "3.3 kVA",
//     category: "Charging",
//   },


//   {
//     key: "Vehicle To Vehicle",
//     value: "5 kVA",
//     category: "Charging",
//   },

// ],
// // ======================================================
// // VARIANTS
// // ======================================================

// variants: [

//   {
//     name: "Adventure 65",

//     price: null,

//     battery: "65 kWh",

//     range: 538,

//     power: 238,

//     torque: 315,

//     topSpeed: null,

//     acceleration: null,

//     recommended: false,
//   },


//   {
//     name: "Adventure S 65",

//     price: null,

//     battery: "65 kWh",

//     range: 538,

//     power: 238,

//     torque: 315,

//     topSpeed: null,

//     acceleration: null,

//     recommended: false,
//   },


//   {
//     name: "Fearless+ 65",

//     price: null,

//     battery: "65 kWh",

//     range: 538,

//     power: 238,

//     torque: 315,

//     topSpeed: null,

//     acceleration: null,

//     recommended: false,
//   },


//   {
//     name: "Fearless+ 75",

//     price: null,

//     battery: "75 kWh",

//     range: 627,

//     power: 238,

//     torque: 315,

//     topSpeed: null,

//     acceleration: null,

//     recommended: true,
//   },


//   {
//     name: "Fearless+ QWD 75",

//     price: null,

//     battery: "75 kWh",

//     range: 622,

//     power: 396,

//     torque: 504,

//     topSpeed: null,

//     acceleration: 6.3,

//     recommended: true,
//   },


//   {
//     name: "Empowered 75",

//     price: null,

//     battery: "75 kWh",

//     range: 627,

//     power: 238,

//     torque: 315,

//     topSpeed: null,

//     acceleration: null,

//     recommended: true,
//   },


//   {
//     name: "Empowered QWD 75",

//     price: null,

//     battery: "75 kWh",

//     range: 622,

//     power: 396,

//     torque: 504,

//     topSpeed: null,

//     acceleration: 6.3,

//     recommended: true,
//   },


// ],


// // ======================================================
// // FEATURES
// // ======================================================

// features: [

//   // =====================
//   // INFOTAINMENT
//   // =====================

//   {
//     title: "36.9 cm Cinematic Infotainment Screen by Harman powered by Samsung Neo QLED",
//     category: "Infotainment",
//   },


//   {
//     title: "26.03 cm Digital Cockpit Display",
//     category: "Infotainment",
//   },


//   {
//     title: "Wireless Android Auto",
//     category: "Infotainment",
//   },


//   {
//     title: "Wireless Apple CarPlay",
//     category: "Infotainment",
//   },


//   {
//     title: "JBL Black 10 Speaker System",
//     category: "Audio",
//   },


//   {
//     title: "Dolby Atmos",
//     category: "Audio",
//   },


//   {
//     title: "Arcade.ev App Suite",
//     category: "Entertainment",
//   },


//   {
//     title: "Multiple Voice Assistants",
//     category: "Technology",
//   },


//   // =====================
//   // CONNECTED
//   // =====================


//   {
//     title: "iRA.ev Connected Car Suite",
//     category: "Connected",
//   },


//   {
//     title: "OTA Updates",
//     category: "Connected",
//   },


//   {
//     title: "Mappls Auto Navigation",
//     category: "Connected",
//   },


//   {
//     title: "DrivePay UPI Based In-Car Payment",
//     category: "Connected",
//   },


//   {
//     title: "Digital Key with UWB + NFC + BLE",
//     category: "Connected",
//   },


//   {
//     title: "Smartwatch Connectivity",
//     category: "Connected",
//   },


//   // =====================
//   // TECHNOLOGY
//   // =====================


//   {
//     title: "Auto Park Assist",
//     category: "Technology",
//   },


//   {
//     title: "Summon Mode",
//     category: "Technology",
//   },


//   {
//     title: "Reverse Assist",
//     category: "Technology",
//   },


//   {
//     title: "540° Surround View Camera",
//     category: "Technology",
//   },


//   {
//     title: "Transparent Mode Camera View",
//     category: "Technology",
//   },


//   {
//     title: "Blind Spot View Monitor",
//     category: "Technology",
//   },


//   {
//     title: "HD Rear View Mirror with DVR",
//     category: "Technology",
//   },


//   {
//     title: "Powered Tailgate with Gesture Control",
//     category: "Technology",
//   },


//   // =====================
//   // COMFORT
//   // =====================


//   {
//     title: "Voice Assisted Panoramic Sunroof",
//     category: "Comfort",
//   },


//   {
//     title: "Ventilated Front Seats",
//     category: "Comfort",
//   },


//   {
//     title: "6-Way Powered Driver Seat with Memory",
//     category: "Comfort",
//   },


//   {
//     title: "4-Way Powered Co-driver Seat",
//     category: "Comfort",
//   },


//   {
//     title: "Powered Boss Mode",
//     category: "Comfort",
//   },


//   {
//     title: "Dual Zone Automatic Climate Control",
//     category: "Comfort",
//   },


//   {
//     title: "Air Purifier with AQI Display",
//     category: "Comfort",
//   },


//   {
//     title: "Wireless Smartphone Charger",
//     category: "Comfort",
//   },


//   {
//     title: "65W Type-C Fast Charging Port",
//     category: "Comfort",
//   },


//   {
//     title: "Multi Mood Ambient Lighting",
//     category: "Comfort",
//   },


//   {
//     title: "Rear Window Sunshades",
//     category: "Comfort",
//   },


//   {
//     title: "Rear Comfort Headrests",
//     category: "Comfort",
//   },


//   // =====================
//   // EV TECHNOLOGY
//   // =====================


//   {
//     title: "Vehicle-to-Load (V2L)",
//     category: "EV Technology",
//   },


//   {
//     title: "Vehicle-to-Vehicle (V2V)",
//     category: "EV Technology",
//   },


//   {
//     title: "Regen Paddle Shifters",
//     category: "EV Technology",
//   },


// ],

// // ======================================================
// // GALLERY
// // ======================================================

// gallery: [

//   {
//     image:
//       "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784567000/harrier-ev-image1.png",
//     isPrimary: true,
//   },

//   {
//     image:
//       "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784567001/harrier-ev-image2.png",
//     isPrimary: false,
//   },

//   {
//     image:
//       "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784567002/harrier-ev-image3.png",
//     isPrimary: false,
//   },

//   {
//     image:
//       "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784567003/harrier-ev-image4.png",
//     isPrimary: false,
//   },

//   {
//     image:
//       "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784567004/harrier-ev-image5.png",
//     isPrimary: false,
//   },

// ],


// // ======================================================
// // COLORS
// // ======================================================

// colors: [

//   {
//     name: "Nainital Nocturne",
//     hexCode: "#222831",
//     image:
//       "/cars/tata/harrier-ev/colors/nainital-nocturne.webp",
//   },


//   {
//     name: "Seaweed Green",
//     hexCode: "#2F6B55",
//     image:
//       "/cars/tata/harrier-ev/colors/seaweed-green.webp",
//   },


//   {
//     name: "Pristine White",
//     hexCode: "#F5F5F5",
//     image:
//       "/cars/tata/harrier-ev/colors/pristine-white.webp",
//   },


//   {
//     name: "Pure Grey",
//     hexCode: "#7A7A7A",
//     image:
//       "/cars/tata/harrier-ev/colors/pure-grey.webp",
//   },


//   {
//     name: "Empowered Oxide",
//     hexCode: "#8A5A44",
//     image:
//       "/cars/tata/harrier-ev/colors/empowered-oxide.webp",
//   },


// ],


// // ======================================================
// // FAQS
// // ======================================================

// faqs: [

//   {
//     question:
//       "What battery options are available in the Tata Harrier.ev?",

//     answer:
//       "The Tata Harrier.ev is available with 65 kWh and 75 kWh liquid cooled battery pack options.",
//   },


//   {
//     question:
//       "What is the maximum range of the Tata Harrier.ev?",

//     answer:
//       "The Tata Harrier.ev offers a MIDC certified range of up to 627 km with the 75 kWh battery pack.",
//   },


//   {
//     question:
//       "Does the Tata Harrier.ev support all-wheel drive?",

//     answer:
//       "Yes. The QWD dual motor variant comes with an all-wheel drive system producing up to 504 Nm torque.",
//   },


//   {
//     question:
//       "How fast can the Tata Harrier.ev charge?",

//     answer:
//       "Using a compatible DC fast charger, the Harrier.ev can charge from 20% to 80% in around 25 minutes.",
//   },


//   {
//     question:
//       "Does Tata Harrier.ev support V2L and V2V charging?",

//     answer:
//       "Yes. The Harrier.ev supports Vehicle-to-Load (V2L) and Vehicle-to-Vehicle (V2V) charging technology.",
//   },


// ],


// // ======================================================
// // PROS
// // ======================================================

// pros: [

//   {
//     title:
//       "Up to 627 km MIDC certified driving range",
//   },


//   {
//     title:
//       "Powerful QWD dual motor setup with 504 Nm torque",
//   },


//   {
//     title:
//       "Premium Samsung Neo QLED Harman infotainment system",
//   },


//   {
//     title:
//       "Advanced Level 2 ADAS safety features",
//   },


//   {
//     title:
//       "5-Star BNCAP safety rating",
//   },


//   {
//     title:
//       "V2L and V2V bidirectional charging support",
//   },


//   {
//     title:
//       "Lifetime battery warranty for first owner",
//   },


// ],


// // ======================================================
// // CONS
// // ======================================================

// cons: [

//   {
//     title:
//       "Premium variants may have a high price tag",
//   },


//   {
//     title:
//       "Real-world range depends on driving conditions",
//   },


//   {
//     title:
//       "Large dimensions may feel difficult in tight city spaces",
//   },


// ],


// // ======================================================
// // SAFETY
// // ======================================================

// safety: {

//   airbags: 7,

//   adasLevel:
//     "Level 2",

//   ncapRating:
//     5,

//   abs: true,

//   ebd: true,

//   esc: true,

//   tractionControl: true,

//   tpms: true,

//   hillHold: true,

//   hillDescent: true,

//   isofix: true,

//   camera360: true,

//   blindSpotMonitor: true,

//   parkingSensors:
//     "Front & Rear",

//   emergencyBraking: true,

//   laneKeepAssist: true,

//   adaptiveCruise: true,

//   driverDrowsiness: true,

// },


// // ======================================================
// // OWNERSHIP
// // ======================================================

// ownership: {

//   serviceInterval: null,

//   yearlyServiceCost: null,

//   insuranceCost: null,

//   batteryReplacementCost: null,

//   roadsideAssistance: true,

//   warrantyYears: 3,

//   warrantyKm: 125000,

//   resaleRating: null,

//   maintenanceRating: null,

// },

// // ======================================================
// // RATING
// // ======================================================

// rating: {

//   overall: 4.8,

//   safety: 5.0,

//   performance: 4.9,

//   comfort: 4.9,

//   features: 5.0,

//   valueForMoney: 4.7,

//   charging: 4.8,

//   verdict:
//     "The Tata Harrier.ev is a premium electric SUV that combines powerful performance, long range capability, advanced ADAS safety, luxury features and rugged SUV capability. With QWD dual motor technology, premium interiors and next-generation connected features, it represents Tata.ev's most advanced electric SUV offering.",

// },


// // ======================================================
// // END
// // ======================================================

// }
// ];

export const vehicles = [

{
  brand: "Tata",

  name: "Nexon.ev",

  slug: "tata-nexon-ev",

  featured: true,

  image: "/cars/tata/nexon-ev/main.webp",

  overview:
    "The Tata Nexon.ev is a compact electric SUV built on Tata's EV architecture. It offers a certified range of up to 489 km (45 kWh), advanced connected technology, ADAS, V2L & V2V charging, panoramic sunroof, JBL cinematic sound system and Lifetime Warranty on the HV Battery Pack for the first registered owner.",

  pricing: {
    // Brochure me price mention nahi hai
    startingPrice: 1249000,
    endingPrice: 1749000,
  },

  battery: {
    batteryKwh: 45,

    batteryType: "Liquid Cooled",

    claimedRange: 489,

    realRange: 350,

    batteryChemistry: null,

    thermalManagement:
      "Liquid Cooled System",

    ingressProtection: "IP67",
  },

  performance: {
    maxPower: "106 kW",

    maxTorque: "215 Nm",

    topSpeed: null,

    zeroToHundred: 8.9,

    driveModes: [
      "Eco",
      "City",
      "Sport",
    ],

    regenerativeBraking:
      "4 Levels",

    paddleShifters: true,
  },

  dimensions: {
    bodyType: "SUV",

    seating: 5,

    driveType: "FWD",

    length: 3995,

    width: 1802,

    height: 1625,

    wheelbase: 2498,

    bootSpace: 350,

    groundClearance: 190,

    turningRadius: 5.3,
  },

  charging: {
    chargingPort: "CCS2",

    portableCharger: true,

    homeChargingTime:
      "17 hr 36 min (15A) / 6 hr 36 min (7.2 kW)",

    dcChargingTime:
      "40 min (10% - 80%)",

    chargingOptions: [
      "15A Portable Charger",
      "3.3 kW AC Wall Box",
      "7.2 kW AC Wall Box",
      "DC Fast Charger",
    ],
  },

  warranty: {
    vehicleWarranty:
      "3 Years / 1,25,000 km",

    motorWarranty:
      "8 Years / 1,60,000 km",

    batteryWarranty:
      "Lifetime Warranty (First Owner) + 8 Years / 1,60,000 km",

    launchDate: "2025",
  },

  specifications: [

  {
    category: "Battery",
    label: "Battery Pack",
    value: "45 kWh",
  },

  {
    category: "Battery",
    label: "Battery Type",
    value: "Liquid Cooled System",
  },

  {
    category: "Battery",
    label: "Ingress Protection",
    value: "IP67",
  },

  {
    category: "Performance",
    label: "Motor Type",
    value: "Permanent Magnet Synchronous AC Motor",
  },

  {
    category: "Performance",
    label: "Max Power",
    value: "106 kW",
  },

  {
    category: "Performance",
    label: "Max Torque",
    value: "215 Nm",
  },

  {
    category: "Performance",
    label: "Drive Modes",
    value: "Eco, City, Sport",
  },

  {
    category: "Performance",
    label: "Acceleration (0-100 km/h)",
    value: "8.9 sec",
  },

  {
    category: "Performance",
    label: "Regenerative Braking",
    value: "4 Levels",
  },

  {
    category: "Performance",
    label: "Paddle Shifters",
    value: "Yes",
  },

  {
    category: "Range",
    label: "Certified Range",
    value: "489 km",
  },

  {
    category: "Range",
    label: "Real World Range (C75)",
    value: "350-375 km",
  },

  {
    category: "Charging",
    label: "Charging Port",
    value: "CCS2",
  },

  {
    category: "Charging",
    label: "Portable Charger",
    value: "Yes",
  },

  {
    category: "Charging",
    label: "15A Charging Time",
    value: "17 hr 36 min",
  },

  {
    category: "Charging",
    label: "7.2 kW AC Charging Time",
    value: "6 hr 36 min",
  },

  {
    category: "Charging",
    label: "DC Fast Charging",
    value: "40 min (10-80%)",
  },

  {
    category: "Dimensions",
    label: "Length",
    value: "3995 mm",
  },

  {
    category: "Dimensions",
    label: "Width",
    value: "1802 mm",
  },

  {
    category: "Dimensions",
    label: "Height",
    value: "1625 mm",
  },

  {
    category: "Dimensions",
    label: "Wheelbase",
    value: "2498 mm",
  },

  {
    category: "Dimensions",
    label: "Ground Clearance",
    value: "190 mm",
  },

  {
    category: "Dimensions",
    label: "Boot Space",
    value: "350 L",
  },

  {
    category: "Dimensions",
    label: "Turning Radius",
    value: "5.3 m",
  },

  {
    category: "Suspension",
    label: "Front Suspension",
    value: "Independent MacPherson Strut with Coil Spring",
  },

  {
    category: "Suspension",
    label: "Rear Suspension",
    value: "Twist Beam with Dual Path Strut",
  },

  {
    category: "Brakes",
    label: "Front Brakes",
    value: "Disc",
  },

  {
    category: "Brakes",
    label: "Rear Brakes",
    value: "Disc",
  },

  {
    category: "Tyres",
    label: "Tyre Size",
    value: "215/60 R16",
  },

  {
    category: "Tyres",
    label: "Low Rolling Resistance Tyres",
    value: "Yes",
  },

  {
    category: "Warranty",
    label: "Vehicle Warranty",
    value: "3 Years / 1,25,000 km",
  },

  {
    category: "Warranty",
    label: "Motor Warranty",
    value: "8 Years / 1,60,000 km",
  },

  {
    category: "Warranty",
    label: "Battery Warranty",
    value: "Lifetime (First Owner) + 8 Years / 1,60,000 km",
  },

],

features: [

  // =========================
  // Exterior
  // =========================

  {
    category: "Exterior",
    name: "Smart Digital DRLs",
  },

  {
    category: "Exterior",
    name: "Welcome & Goodbye Sequence",
  },

  {
    category: "Exterior",
    name: "Charging Indicator in Front DRLs",
  },

  {
    category: "Exterior",
    name: "Smart Digital X Factor",
  },

  {
    category: "Exterior",
    name: "LED Projector Headlamps",
  },

  {
    category: "Exterior",
    name: "Sequential Turn Indicators",
  },

  {
    category: "Exterior",
    name: "Centre Position Lamp",
  },

  {
    category: "Exterior",
    name: "Front Fog Lamps with Cornering Function",
  },

  {
    category: "Exterior",
    name: "Hidden Rear Wiper & Washer",
  },

  {
    category: "Exterior",
    name: "Roof Rails",
  },

  {
    category: "Exterior",
    name: "16-inch Alloy Wheels",
  },

  // =========================
  // Interior
  // =========================

  {
    category: "Interior",
    name: "Smart Digital Steering Wheel",
  },

  {
    category: "Interior",
    name: "Smart Digital Shifter",
  },

  {
    category: "Interior",
    name: "Phygital Control Panel",
  },

  {
    category: "Interior",
    name: "26.03 cm Digital Cockpit",
  },

  {
    category: "Interior",
    name: "31.24 cm Cinematic Touchscreen",
  },

  {
    category: "Interior",
    name: "Leatherette Seats",
  },

  {
    category: "Interior",
    name: "Leatherette Wrapped Steering Wheel",
  },

  {
    category: "Interior",
    name: "60:40 Split Rear Seat",
  },

  {
    category: "Interior",
    name: "Rear Centre Armrest",
  },

  {
    category: "Interior",
    name: "Cooled Glove Box",
  },

  {
    category: "Interior",
    name: "Rear AC Vents",
  },

  {
    category: "Interior",
    name: "Boot Space",
  },

  {
    category: "Interior",
    name: "Frunk",
  },

  // =========================
  // Comfort
  // =========================

  {
    category: "Comfort",
    name: "Ventilated Front Seats",
  },

  {
    category: "Comfort",
    name: "Voice Assisted Panoramic Sunroof",
  },

  {
    category: "Comfort",
    name: "Wireless Phone Charger",
  },

  {
    category: "Comfort",
    name: "Ambient Lighting",
  },

  {
    category: "Comfort",
    name: "Rear Window Sunshade",
  },

  {
    category: "Comfort",
    name: "Air Purifier with AQI Display",
  },

  {
    category: "Comfort",
    name: "Auto Dimming IRVM",
  },

  {
    category: "Comfort",
    name: "Rain Sensing Wipers",
  },

  {
    category: "Comfort",
    name: "Automatic Headlamps",
  },

  {
    category: "Comfort",
    name: "Electronic Parking Brake with Auto Hold",
  },

  // =========================
  // Technology
  // =========================

  {
    category: "Technology",
    name: "Wireless Android Auto",
  },

  {
    category: "Technology",
    name: "Wireless Apple CarPlay",
  },

  {
    category: "Technology",
    name: "Navigation in Instrument Cluster",
  },

  {
    category: "Technology",
    name: "OTA Updates",
  },

  {
    category: "Technology",
    name: "Arcade.ev App Suite",
  },

  {
    category: "Technology",
    name: "Alexa Voice Assistant",
  },

  {
    category: "Technology",
    name: "Multiple Voice Assistants",
  },

  {
    category: "Technology",
    name: "iRA.ev Connected Car",
  },

  {
    category: "Technology",
    name: "Smart Watch Connectivity",
  },

  // =========================
  // Audio
  // =========================

  {
    category: "Audio",
    name: "JBL Cinematic Sound System",
  },

  {
    category: "Audio",
    name: "9 Speaker Audio System",
  },

  {
    category: "Audio",
    name: "External Subwoofer",
  },

  {
    category: "Audio",
    name: "AudioworX JBL Audio Modes",
  },

  // =========================
  // EV Technology
  // =========================

  {
    category: "EV Technology",
    name: "Vehicle to Load (V2L)",
  },

  {
    category: "EV Technology",
    name: "Vehicle to Vehicle (V2V)",
  },

  {
    category: "EV Technology",
    name: "Paddle Shifters for Regen",
  },

  {
    category: "EV Technology",
    name: "4-Level Regenerative Braking",
  },

  {
    category: "EV Technology",
    name: "Eco Drive Mode",
  },

  {
    category: "EV Technology",
    name: "City Drive Mode",
  },

  {
    category: "EV Technology",
    name: "Sport Drive Mode",
  },

],

safety: {

  airbags: 6,

  adas: "Level 2 ADAS",

  ncapRating: 5,

  features: [

    "6 Airbags",

    "Electronic Stability Program (ESP) with i-VBAC",

    "ADAS",

    "Forward Collision Warning",

    "Autonomous Emergency Braking",

    "Lane Departure Warning",

    "Lane Keep Assist",

    "Lane Centering System",

    "Traffic Sign Recognition",

    "High Beam Assist",

    "360 Degree Surround View Camera",

    "Blind Spot View Monitor",

    "Front Parking Sensors",

    "Rear Parking Camera",

    "Rear Parking Sensors",

    "Tyre Pressure Monitoring System (TPMS)",

    "Electronic Parking Brake",

    "Auto Hold",

    "Hill Ascent Assist",

    "Hill Descent Control",

    "SOS Emergency Call",

    "ISOFIX Child Seat Mounts",

    "Seat Belt Reminder",

    "All Disc Brakes",

    "Driver Drowsiness Detection",
  ],

},

colors: [

  {
    name: "Empowered Oxide",
    code: null,
    image: "/cars/tata/nexon-ev/colors/empowered-oxide.webp",
  },

  {
    name: "Pristine White",
    code: null,
    image: "/cars/tata/nexon-ev/colors/pristine-white.webp",
  },

  {
    name: "Ocean Blue",
    code: null,
    image: "/cars/tata/nexon-ev/colors/ocean-blue.webp",
  },

  {
    name: "Pure Grey",
    code: null,
    image: "/cars/tata/nexon-ev/colors/pure-grey.webp",
  },

  {
    name: "Daytona Grey",
    code: null,
    image: "/cars/tata/nexon-ev/colors/daytona-grey.webp",
  },

],

gallery: [

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835748/image9_tjhmz3.png",
    // title: "Front View",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835748/image7_v30y5s.png",
    // title: "Front Three Quarter",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835748/image8_vfvypo.png",
    // title: "Side Profile",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835748/image6_usnr7f.png",
    // title: "Rear View",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835745/image4_w2gall.png",
    // title: "Dashboard",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835746/image3_d5hf1k.png",
    // title: "Interior",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835745/image5_t4poyk.png",
    // title: "Front Seats",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835745/image2_fbdub8.png",
    // title: "Panoramic Sunroof",
  },

  {
    image: "https://res.cloudinary.com/ngpxbgpo/image/upload/v1784835745/image1_czieg1.png",
    // title: "31.24 cm Touchscreen",
  },

  // {
  //   image: "/cars/tata/nexon-ev/gallery/digital-cockpit.webp",
  //   // title: "Digital Cockpit",
  // },

  // {
  //   image: "/cars/tata/nexon-ev/gallery/jbl-audio.webp",
  //   // title: "JBL Audio System",
  // },

  // {
  //   image: "/cars/tata/nexon-ev/gallery/frunk.webp",
  //   // title: "Frunk",
  // },

],

variants: [

  // ==========================================
  // Medium Range (30 kWh)
  // ==========================================

  {
    name: "Creative+ MR",

    price: 1249000,

    battery: "30 kWh",

    range: "275 km",

    power: "95 kW",

    torque: "215 Nm",

    acceleration: "9.2 sec",

    charger: "3.3 kW",

    drivetrain: "FWD",
  },

  {
    name: "Fearless MR",

    price: 1379000,

    battery: "30 kWh",

    range: "275 km",

    power: "95 kW",

    torque: "215 Nm",

    acceleration: "9.2 sec",

    charger: "3.3 kW",

    drivetrain: "FWD",
  },

  // ==========================================
  // Long Range (45 kWh)
  // ==========================================

  {
    name: "Creative 45",

    price: 1414000,

    battery: "45 kWh",

    range: "489 km",

    power: "106 kW",

    torque: "215 Nm",

    acceleration: "8.9 sec",

    charger: "7.2 kW",

    drivetrain: "FWD",
  },

  {
    name: "Fearless 45",

    price: 1514000,

    battery: "45 kWh",

    range: "489 km",

    power: "106 kW",

    torque: "215 Nm",

    acceleration: "8.9 sec",

    charger: "7.2 kW",

    drivetrain: "FWD",
  },

  {
    name: "Empowered 45",

    price: 1614000,

    battery: "45 kWh",

    range: "489 km",

    power: "106 kW",

    torque: "215 Nm",

    acceleration: "8.9 sec",

    charger: "7.2 kW",

    drivetrain: "FWD",
  },

  {
    name: "Empowered+ 45",

     price: 1749000,

    battery: "45 kWh",

    range: "489 km",

    power: "106 kW",

    torque: "215 Nm",

    acceleration: "8.9 sec",

    charger: "7.2 kW",

    drivetrain: "FWD",
  },

],

faqs: [

  {
    question: "What is the battery capacity of the Tata Nexon.ev?",
    answer:
      "The Nexon.ev 45 comes with a 45 kWh liquid-cooled battery pack, while the Medium Range version gets a 30 kWh battery.",
  },

  {
    question: "What is the claimed driving range of the Tata Nexon.ev?",
    answer:
      "The Nexon.ev 45 offers a MIDC certified range of 489 km, while the Medium Range version offers 275 km.",
  },

  {
    question: "What is the real-world range of the Tata Nexon.ev?",
    answer:
      "According to Tata Motors, the C75 real-world range is approximately 350–375 km for the 45 kWh version and 210–230 km for the Medium Range version.",
  },

  {
    question: "How long does it take to charge the Tata Nexon.ev?",
    answer:
      "Using a 7.2 kW AC charger, the 45 kWh battery charges from 10% to 100% in about 6 hours 36 minutes, while DC fast charging (10–80%) takes around 40 minutes.",
  },

  {
    question: "Which charging connector does the Nexon.ev use?",
    answer:
      "The Tata Nexon.ev uses the CCS2 charging standard.",
  },

  {
    question: "How much power does the Tata Nexon.ev produce?",
    answer:
      "The 45 kWh version produces 106 kW of power and 215 Nm of instant torque.",
  },

  {
    question: "How fast is the Tata Nexon.ev?",
    answer:
      "The Nexon.ev 45 accelerates from 0 to 100 km/h in 8.9 seconds.",
  },

  {
    question: "Does the Tata Nexon.ev support fast charging?",
    answer:
      "Yes. The Nexon.ev supports DC fast charging and can charge from 10% to 80% in around 40 minutes.",
  },

  {
    question: "Does the Tata Nexon.ev support Vehicle-to-Load (V2L)?",
    answer:
      "Yes. Selected variants support Vehicle-to-Load (V2L) technology.",
  },

  {
    question: "Does the Tata Nexon.ev support Vehicle-to-Vehicle (V2V) charging?",
    answer:
      "Yes. Selected variants support Vehicle-to-Vehicle (V2V) charging.",
  },

  {
    question: "How many airbags does the Tata Nexon.ev have?",
    answer:
      "The Tata Nexon.ev comes equipped with 6 airbags.",
  },

  {
    question: "Does the Tata Nexon.ev have ADAS?",
    answer:
      "Yes. The top variants feature Level 2 ADAS with multiple driver assistance functions.",
  },

  {
    question: "What is the boot space of the Tata Nexon.ev?",
    answer:
      "The Nexon.ev offers 350 litres of boot space along with an additional front storage compartment (Frunk).",
  },

  {
    question: "What warranty is offered on the battery?",
    answer:
      "The first registered owner gets a Lifetime Warranty on the High Voltage Battery Pack. Subsequent owners receive an 8-year / 1,60,000 km battery warranty.",
  },

],

pros: [

  {
    text: "Excellent claimed range of up to 489 km (MIDC).",
  },

  {
    text: "Powerful 106 kW electric motor with 215 Nm instant torque.",
  },

  {
    text: "40-minute DC fast charging (10-80%).",
  },

  {
    text: "Lifetime HV battery warranty for first owner.",
  },

  {
    text: "Level 2 ADAS on top variant.",
  },

  {
    text: "31.24-inch cinematic touchscreen with JBL audio.",
  },

  {
    text: "V2L and V2V charging support.",
  },

  {
    text: "6 airbags and 5-Star Bharat NCAP safety rating.",
  },

],

cons: [

  {
    text: "ADAS is available only on higher variants.",
  },

  {
    text: "DC fast charger availability depends on charging infrastructure.",
  },

  {
    text: "Top variants are considerably more expensive than base variants.",
  },

],

ownership: {

  serviceInterval: "As per Tata Motors service schedule",

  batteryWarranty:
    "Lifetime (First Owner), 8 Years / 1,60,000 km (Subsequent Owners)",

  motorWarranty:
    "8 Years / 1,60,000 km",

  vehicleWarranty:
    "3 Years / 1,25,000 km",

  roadsideAssistance:
    null,

  estimatedRunningCost:
    null,

  maintenanceCost:
    null,

},

}

]