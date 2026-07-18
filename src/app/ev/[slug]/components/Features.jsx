// "use client";

// import {
//   ShieldCheck,
//   Camera,
//   Smartphone,
//   BatteryCharging,
//   Sun,
//   Wind,
//   Wifi,
//   Gauge,
//   Car,
//   Zap,
// } from "lucide-react";

// const iconMap = {
//   adas: ShieldCheck,
//   camera: Camera,
//   wireless: Smartphone,
//   apple: Smartphone,
//   android: Smartphone,
//   battery: BatteryCharging,
//   charging: BatteryCharging,
//   sunroof: Sun,
//   ventilated: Wind,
//   connected: Wifi,
//   cruise: Gauge,
//   purifier: Wind,
//   v2l: Zap,
//   default: Car,
// };

// const descriptions = {
//   "ADAS Level 2": "Advanced driver assistance system",
//   "360° Camera": "Easy parking with full visibility",
//   "Wireless Android Auto": "Cable-free smartphone connectivity",
//   "Wireless Apple CarPlay": "Seamless iPhone integration",
//   "Panoramic Sunroof": "Premium open cabin experience",
//   "Ventilated Seats": "Enhanced seating comfort",
//   "Connected Car Tech": "Smart remote vehicle control",
//   "Cruise Control": "Relaxed highway driving",
//   "Air Purifier": "Cleaner cabin air quality",
//   "V2L Support": "Power external electrical devices",
// };

// function getIcon(title) {
//   const text = title.toLowerCase();

//   if (text.includes("adas")) return iconMap.adas;
//   if (text.includes("camera")) return iconMap.camera;
//   if (text.includes("android")) return iconMap.android;
//   if (text.includes("apple")) return iconMap.apple;
//   if (text.includes("wireless")) return iconMap.wireless;
//   if (text.includes("sunroof")) return iconMap.sunroof;
//   if (text.includes("ventilated")) return iconMap.ventilated;
//   if (text.includes("connected")) return iconMap.connected;
//   if (text.includes("cruise")) return iconMap.cruise;
//   if (text.includes("purifier")) return iconMap.purifier;
//   if (text.includes("v2l")) return iconMap.v2l;
//   if (text.includes("charging")) return iconMap.charging;
//   if (text.includes("battery")) return iconMap.battery;

//   return iconMap.default;
// }

// export default function Features({ vehicle }) {
//   if (!vehicle?.features?.length) return null;

//   return (
//     <section id="features" className="mt-14">

//       <div className="mb-8">

//         <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
//           Key Features
//         </span>

//         <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
//           Key Features
//         </h2>

//         <p className="mt-2 max-w-2xl text-sm text-zinc-400">
//           Top highlights and premium features available in{" "}
//           <span className="font-semibold text-white">
//             {vehicle.name}
//           </span>
//           .
//         </p>

//       </div>

//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

//               {vehicle.features.map((feature, index) => {
//           const title =
//             typeof feature === "string"
//               ? feature
//               : feature.title;

//           const Icon = getIcon(title);

//           return (
//             <div
//               key={index}
//               className="
//                 group
//                 rounded-2xl
//                 border
//                 border-zinc-800
//                 bg-zinc-900
//                 p-5
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-green-500/30
//                 hover:shadow-lg
//               "
//             >
//               {/* Icon */}

//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition group-hover:bg-green-500/20">

//                 <Icon
//                   size={22}
//                   className="text-green-400"
//                 />

//               </div>

//               {/* Title */}

//               <h3 className="text-base font-semibold text-white">
//                 {title}
//               </h3>

//               {/* Description */}

//               <p className="mt-2 text-sm leading-6 text-zinc-400">

//                 {descriptions[title] ||
//                   "Premium feature available with this variant."}

//               </p>

//             </div>
//           );
//         })}

//       </div>
      

//     </section>
//   );
// }

"use client";

import {
  ShieldCheck,
  Camera,
  Smartphone,
  BatteryCharging,
  Sun,
  Wind,
  Wifi,
  Gauge,
  Car,
  Zap,
} from "lucide-react";

const iconMap = {
  adas: ShieldCheck,
  camera: Camera,
  wireless: Smartphone,
  apple: Smartphone,
  android: Smartphone,
  battery: BatteryCharging,
  charging: BatteryCharging,
  sunroof: Sun,
  ventilated: Wind,
  connected: Wifi,
  cruise: Gauge,
  purifier: Wind,
  v2l: Zap,
  default: Car,
};

const descriptions = {
  "ADAS Level 2": "Advanced driver assistance system",
  "360° Camera": "Easy parking with full visibility",
  "Wireless Android Auto": "Cable-free smartphone connectivity",
  "Wireless Apple CarPlay": "Seamless iPhone integration",
  "Panoramic Sunroof": "Premium open cabin experience",
  "Ventilated Seats": "Enhanced seating comfort",
  "Connected Car Tech": "Smart remote vehicle control",
  "Cruise Control": "Relaxed highway driving",
  "Air Purifier": "Cleaner cabin air quality",
  "V2L Support": "Power external electrical devices",
};

function getIcon(title) {
  const text = title.toLowerCase();

  if (text.includes("adas")) return iconMap.adas;
  if (text.includes("camera")) return iconMap.camera;
  if (text.includes("android")) return iconMap.android;
  if (text.includes("apple")) return iconMap.apple;
  if (text.includes("wireless")) return iconMap.wireless;
  if (text.includes("sunroof")) return iconMap.sunroof;
  if (text.includes("ventilated")) return iconMap.ventilated;
  if (text.includes("connected")) return iconMap.connected;
  if (text.includes("cruise")) return iconMap.cruise;
  if (text.includes("purifier")) return iconMap.purifier;
  if (text.includes("v2l")) return iconMap.v2l;
  if (text.includes("charging")) return iconMap.charging;
  if (text.includes("battery")) return iconMap.battery;

  return iconMap.default;
}

export default function Features({ vehicle }) {
  if (!vehicle?.features?.length) return null;

  return (
    <section id="features" className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span
          className="
            inline-flex
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-3
            py-1
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-green-500
          "
        >
          Key Features
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Key Features
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-muted">
          Top highlights and premium features available in{" "}
          <span className="font-semibold text-foreground">
            {vehicle.name}
          </span>.
        </p>

      </div>

      {/* Feature Grid */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {vehicle.features.map((feature, index) => {
          const title =
            typeof feature === "string"
              ? feature
              : feature.title;

          const Icon = getIcon(title);

          return (

            <div
              key={index}
              className="
                group
                rounded-2xl
                border
                border-theme
                bg-card
                p-5
                shadow-theme
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-500
              "
            >

              {/* Icon */}

              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-500/10
                  transition
                  group-hover:bg-green-500/20
                "
              >
                <Icon
                  size={22}
                  className="text-green-500"
                />
              </div>

              {/* Title */}

              <h3 className="text-base font-semibold text-foreground">
                {title}
              </h3>

              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-muted">
                {descriptions[title] ??
                  "Premium feature available with this variant."}
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
}