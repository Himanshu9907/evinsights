// "use client";

// import VariantAccordion from "./VariantAccordion";

// export default function Variants({ vehicle }) {
//   if (!vehicle.variants?.length) return null;

//   return (
//     <section className="mt-20">

//       <div className="mb-8">

//         <h2 className="text-3xl font-bold text-white">
//           Variants
//         </h2>

//         <p className="mt-2 text-zinc-400">
//           Compare all available variants and choose the one that fits your needs.
//         </p>

//       </div>

//       <div className="space-y-5">

//         {vehicle.variants.map((variant) => (
//           <VariantAccordion
//             key={variant.name}
//             variant={variant}
//           />
//         ))}

//       </div>

//     </section>
//   );
// }

"use client";

import {
  BatteryCharging,
  Gauge,
  Zap,
  Timer,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Variants({ vehicle }) {
  if (!vehicle?.variants?.length) return null;

  return (
    <section className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
          Variants
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Available Variants
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Compare all available variants of{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>
          .
        </p>

      </div>

      <div className="grid gap-5">

        {vehicle.variants.map((variant) => (

          <div
            key={variant.name}
            className="
              relative
              overflow-hidden
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

            {/* Recommended Badge */}

            {variant.recommended && (

              <div className="absolute right-5 top-5">

                <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">

                  <Award size={14} />

                  Recommended

                </span>

              </div>

            )}

            {/* Top */}

            <div className="mb-6">

              <h3 className="text-2xl font-bold text-white">

                {variant.name}

              </h3>

              <p className="mt-2 text-3xl font-bold text-green-400">

                ₹{" "}
                {variant.price.toLocaleString("en-IN")}

              </p>

              <span className="text-sm text-zinc-500">
                Ex-Showroom
              </span>

            </div>

            {/* Specs */}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">

                <BatteryCharging
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Battery
                  </p>

                  <p className="font-semibold text-white">
                    {variant.battery}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">

                <Gauge
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Range
                  </p>

                  <p className="font-semibold text-white">
                    {variant.range} km
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">

                <Zap
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Power
                  </p>

                  <p className="font-semibold text-white">
                    {variant.power} HP
                  </p>

                </div>

              </div>
                            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">

                <Zap
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Torque
                  </p>

                  <p className="font-semibold text-white">
                    {variant.torque} Nm
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">

                <Gauge
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Top Speed
                  </p>

                  <p className="font-semibold text-white">
                    {variant.topSpeed} km/h
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">

                <Timer
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    0–100 km/h
                  </p>

                  <p className="font-semibold text-white">
                    {variant.acceleration}s
                  </p>

                </div>

              </div>

            </div>

            {/* Highlights */}

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">

                <CheckCircle2
                  size={14}
                  className="text-green-400"
                />

                Fast Charging

              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">

                <CheckCircle2
                  size={14}
                  className="text-green-400"
                />

                Connected Car

              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">

                <CheckCircle2
                  size={14}
                  className="text-green-400"
                />

                Warranty Included

              </span>

            </div>

            {/* Buttons */}

            <div className="mt-6 flex flex-wrap gap-3">

              <button
                className="
                  rounded-xl
                  bg-green-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-green-400
                "
              >
                Book Test Drive
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-zinc-700
                  bg-zinc-950
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:border-green-500
                "
              >
                Compare Variant
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}