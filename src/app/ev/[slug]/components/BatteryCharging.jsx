// "use client";

// import {
//   BatteryCharging,
//   Zap,
//   Gauge,
//   PlugZap,
//   Home,
//   ShieldCheck,
// } from "lucide-react";

// export default function BatteryChargingSection({ vehicle }) {
//   const items = [
//     {
//       icon: BatteryCharging,
//       label: "Battery Capacity",
//       value: `${vehicle.batteryKwh} kWh`,
//     },
//     {
//       icon: Zap,
//       label: "Claimed Range",
//       value: `${vehicle.claimedRange} km`,
//     },
//     {
//       icon: Gauge,
//       label: "Real World Range",
//       value: `${vehicle.realRange} km`,
//     },
//     {
//       icon: PlugZap,
//       label: "DC Fast Charging",
//       value: vehicle.dcCharging,
//     },
//     {
//       icon: Home,
//       label: "AC Home Charging",
//       value: vehicle.acCharging,
//     },
//     {
//       icon: ShieldCheck,
//       label: "Battery Warranty",
//       value: vehicle.warranty,
//     },
//   ];

//   return (
//     <section className="mt-16">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-white">
//           Battery & Charging
//         </h2>

//         <p className="mt-2 text-zinc-400">
//           Battery, charging speed and driving range at a glance.
//         </p>
//       </div>

//       <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
//         {items.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               className="
//                 group
//                 flex
//                 items-center
//                 gap-4
//                 rounded-2xl
//                 border
//                 border-zinc-800
//                 bg-zinc-900
//                 p-4
//                 transition-all
//                 duration-300
//                 hover:border-green-500
//                 hover:bg-zinc-800
//                 hover:-translate-y-1
//               "
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 flex-shrink-0">
//                 <Icon
//                   size={22}
//                   className="text-green-400 transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-white">
//                   {item.value}
//                 </h3>

//                 <p className="mt-1 text-sm text-zinc-400">
//                   {item.label}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { BatteryCharging, PlugZap } from "lucide-react";

export default function BatteryChargingSection({ vehicle }) {
  return (
    <section className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
          Battery & Charging
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Battery & Charging
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Battery specifications and charging capabilities of{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>
          .
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        {/* Battery */}

        <div
          className="
          group
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          p-5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-green-500/30
        "
        >

          <div className="mb-5 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

              <BatteryCharging
                size={20}
                className="text-green-400"
              />

            </div>

            <h3 className="text-lg font-semibold text-white">
              Battery
            </h3>

          </div>

          <div className="space-y-2">

            <Spec
              label="Battery Capacity"
              value={`${vehicle.batteryKwh} kWh`}
            />

            <Spec
              label="Battery Type"
              value={vehicle.batteryType || "-"}
            />

            <Spec
              label="Claimed Range"
              value={`${vehicle.claimedRange} km`}
            />

            <Spec
              label="Real Range"
              value={`${vehicle.realRange} km`}
            />

            <Spec
              label="Warranty"
              value={vehicle.batteryWarranty || "-"}
            />

          </div>

        </div>

        {/* Charging */}

        <div
          className="
          group
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          p-5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-green-500/30
        "
        >

          <div className="mb-5 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

              <PlugZap
                size={20}
                className="text-green-400"
              />

            </div>

            <h3 className="text-lg font-semibold text-white">
              Charging
            </h3>

          </div>

          <div className="space-y-2">

            <Spec
              label="Home Charger"
              value={vehicle.homeChargerPower || "-"}
            />

            <Spec
              label="AC Charging"
              value={vehicle.acCharging}
            />

            <Spec
              label="DC Fast Charging"
              value={vehicle.dcFastChargePower || "-"}
            />

            <Spec
              label="DC Time"
              value={vehicle.dcCharging}
            />

            <Spec
              label="Charging Port"
              value={vehicle.chargingPort || "-"}
            />

            <Spec
              label="V2L"
              value={vehicle.v2l ? "Yes" : "No"}
            />

            <Spec
              label="V2V"
              value={vehicle.v2v ? "Yes" : "No"}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      rounded-xl
      border
      border-zinc-800
      bg-zinc-950/40
      px-4
      py-3
      transition
      hover:border-zinc-700
      hover:bg-zinc-950
    "
    >
      <span className="text-sm text-zinc-400">
        {label}
      </span>

      <span className="text-sm font-semibold text-white text-right">
        {value}
      </span>
    </div>
  );
}