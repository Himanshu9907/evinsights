

// import { BatteryCharging, PlugZap } from "lucide-react";

// export default function BatteryChargingSection({ vehicle }) {
//   return (
//     <section id="battery" className="mt-14">

//       {/* Header */}

//       <div className="mb-8">

//         <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
//           Battery & Charging
//         </span>

//         <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
//           Battery & Charging
//         </h2>

//         <p className="mt-2 max-w-2xl text-sm text-zinc-400">
//           Battery specifications and charging capabilities of{" "}
//           <span className="font-semibold text-white">
//             {vehicle.name}
//           </span>
//           .
//         </p>

//       </div>

//       <div className="grid gap-5 lg:grid-cols-2">

//         {/* Battery */}

//         <div
//           className="
//           group
//           rounded-2xl
//           border
//           border-zinc-800
//           bg-zinc-900
//           p-5
//           transition-all
//           duration-300
//           hover:-translate-y-1
//           hover:border-green-500/30
//         "
//         >

//           <div className="mb-5 flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

//               <BatteryCharging
//                 size={20}
//                 className="text-green-400"
//               />

//             </div>

//             <h3 className="text-lg font-semibold text-white">
//               Battery
//             </h3>

//           </div>

//           <div className="space-y-2">

//             <Spec
//               label="Battery Capacity"
//               value={`${vehicle.batteryKwh} kWh`}
//             />

//             <Spec
//               label="Battery Type"
//               value={vehicle.batteryType || "-"}
//             />

//             <Spec
//               label="Claimed Range"
//               value={`${vehicle.claimedRange} km`}
//             />

//             <Spec
//               label="Real Range"
//               value={`${vehicle.realRange} km`}
//             />

//             <Spec
//               label="Warranty"
//               value={vehicle.batteryWarranty || "-"}
//             />

//           </div>

//         </div>

//         {/* Charging */}

//         <div
//           className="
//           group
//           rounded-2xl
//           border
//           border-zinc-800
//           bg-zinc-900
//           p-5
//           transition-all
//           duration-300
//           hover:-translate-y-1
//           hover:border-green-500/30
//         "
//         >

//           <div className="mb-5 flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

//               <PlugZap
//                 size={20}
//                 className="text-green-400"
//               />

//             </div>

//             <h3 className="text-lg font-semibold text-white">
//               Charging
//             </h3>

//           </div>

//           <div className="space-y-2">

//             <Spec
//               label="Home Charger"
//               value={vehicle.homeChargerPower || "-"}
//             />

//             <Spec
//               label="AC Charging"
//               value={vehicle.acCharging}
//             />

//             <Spec
//               label="DC Fast Charging"
//               value={vehicle.dcFastChargePower || "-"}
//             />

//             <Spec
//               label="DC Time"
//               value={vehicle.dcCharging}
//             />

//             <Spec
//               label="Charging Port"
//               value={vehicle.chargingPort || "-"}
//             />

//             <Spec
//               label="V2L"
//               value={vehicle.v2l ? "Yes" : "No"}
//             />

//             <Spec
//               label="V2V"
//               value={vehicle.v2v ? "Yes" : "No"}
//             />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// function Spec({ label, value }) {
//   return (
//     <div
//       className="
//       flex
//       items-center
//       justify-between
//       rounded-xl
//       border
//       border-zinc-800
//       bg-zinc-950/40
//       px-4
//       py-3
//       transition
//       hover:border-zinc-700
//       hover:bg-zinc-950
//     "
//     >
//       <span className="text-sm text-zinc-400">
//         {label}
//       </span>

//       <span className="text-sm font-semibold text-white text-right">
//         {value}
//       </span>
//     </div>
//   );
// }

import { BatteryCharging, PlugZap } from "lucide-react";

export default function BatteryChargingSection({ vehicle }) {
  return (
    <section id="battery" className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-500">
          Battery & Charging
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Battery & Charging
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-muted">
          Battery specifications and charging capabilities of{" "}
          <span className="font-semibold text-foreground">
            {vehicle.name}
          </span>
          .
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        {/* Battery Card */}

        <div
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

          <div className="mb-5 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-green-500/10
                text-green-500
                transition-all
                duration-300
                group-hover:bg-green-500
                group-hover:text-black
              "
            >
              <BatteryCharging size={20} />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Battery
            </h3>

          </div>

          <div className="space-y-3">

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

        {/* Charging Card */}

        <div
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

          <div className="mb-5 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-green-500/10
                text-green-500
                transition-all
                duration-300
                group-hover:bg-green-500
                group-hover:text-black
              "
            >
              <PlugZap size={20} />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Charging
            </h3>

          </div>

          <div className="space-y-3">

            <Spec
              label="Home Charger"
              value={vehicle.homeChargerPower || "-"}
            />

            <Spec
              label="AC Charging"
              value={vehicle.acCharging || "-"}
            />

            <Spec
              label="DC Fast Charging"
              value={vehicle.dcFastChargePower || "-"}
            />

            <Spec
              label="DC Time"
              value={vehicle.dcCharging || "-"}
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
        border-theme
        bg-background
        px-4
        py-3
        transition-all
        duration-300
        hover:border-green-500
        hover:bg-card
      "
    >

      <span className="text-sm text-muted">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-foreground">
        {value || "-"}
      </span>

    </div>
  );
}