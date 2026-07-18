// "use client";

// import { useMemo, useState } from "react";
// import { BatteryCharging, IndianRupee } from "lucide-react";

// export default function ChargingCostCalculator({ vehicle }) {
//   const [electricityRate, setElectricityRate] = useState(8);
//   const [chargePercent, setChargePercent] = useState(100);

//   const batteryCapacity = vehicle.batteryKwh || 0;
//   const realRange = vehicle.realRange || 1;

//   const calculation = useMemo(() => {
//     const energyRequired =
//       (batteryCapacity * chargePercent) / 100;

//     // 10% charging loss
//     const actualUnits = energyRequired * 1.1;

//     const chargingCost =
//       actualUnits * electricityRate;

//     const fullChargeCost =
//       batteryCapacity * 1.1 * electricityRate;

//     const costPerKm =
//       fullChargeCost / realRange;

//     return {
//       energyRequired,
//       actualUnits,
//       chargingCost,
//       fullChargeCost,
//       costPerKm,
//     };
//   }, [
//     batteryCapacity,
//     chargePercent,
//     electricityRate,
//     realRange,
//   ]);

//   return (
//     <section id="charging-cost" className="mt-14">

//       {/* Header */}

//       <div className="mb-8">

//         <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
//           Charging Calculator
//         </span>

//         <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
//           Charging Cost Calculator
//         </h2>

//         <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
//           Estimate the charging cost of{" "}
//           <span className="font-semibold text-white">
//             {vehicle.name}
//           </span>{" "}
//           based on your local electricity tariff.
//         </p>

//       </div>

//       <div className="grid gap-5 lg:grid-cols-2">

//         {/* INPUT CARD */}

//         <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

//           <div className="mb-5 flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

//               <BatteryCharging
//                 className="text-green-400"
//                 size={20}
//               />

//             </div>

//             <h3 className="text-lg font-semibold text-white">
//               Calculator
//             </h3>

//           </div>

//           {/* Electricity Rate */}

//           <div className="mb-6">

//             <label className="mb-2 block text-sm text-zinc-400">
//               Electricity Rate (₹ / kWh)
//             </label>

//             <input
//               type="number"
//               value={electricityRate}
//               min={1}
//               onChange={(e) =>
//                 setElectricityRate(
//                   Number(e.target.value)
//                 )
//               }
//               className="
//                 w-full
//                 rounded-xl
//                 border
//                 border-zinc-700
//                 bg-zinc-950
//                 px-4
//                 py-3
//                 text-white
//                 outline-none
//                 transition
//                 focus:border-green-500
//               "
//             />

//           </div>

//           {/* Slider */}

//           <div>

//             <div className="mb-2 flex items-center justify-between">

//               <span className="text-sm text-zinc-400">
//                 Charge Battery
//               </span>

//               <span className="font-semibold text-green-400">
//                 {chargePercent}%
//               </span>

//             </div>

//             <input
//               type="range"
//               min={10}
//               max={100}
//               step={10}
//               value={chargePercent}
//               onChange={(e) =>
//                 setChargePercent(
//                   Number(e.target.value)
//                 )
//               }
//               className="w-full accent-green-500"
//             />

//           </div>

//         </div>

//         {/* RESULT CARD */}

//                 <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

//           <div className="mb-5 flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

//               <IndianRupee
//                 className="text-green-400"
//                 size={20}
//               />

//             </div>

//             <h3 className="text-lg font-semibold text-white">
//               Estimated Cost
//             </h3>

//           </div>

//           <div className="space-y-3">

//             <ResultCard
//               title="Energy Required"
//               value={`${calculation.energyRequired.toFixed(
//                 1
//               )} kWh`}
//             />

//             <ResultCard
//               title="Units Consumed"
//               value={`${calculation.actualUnits.toFixed(
//                 1
//               )} kWh`}
//             />

//             <ResultCard
//               title="Charging Cost"
//               value={`₹${calculation.chargingCost.toFixed(
//                 0
//               )}`}
//               highlight
//             />

//             <ResultCard
//               title="Full Charge Cost"
//               value={`₹${calculation.fullChargeCost.toFixed(
//                 0
//               )}`}
//             />

//             <ResultCard
//               title="Running Cost"
//               value={`₹${calculation.costPerKm.toFixed(
//                 2
//               )}/km`}
//             />

//           </div>

//           <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4">

//             <p className="text-xs leading-6 text-zinc-300">

//               <span className="font-semibold text-green-400">
//                 Note:
//               </span>{" "}
//               This calculation assumes approximately
//               <span className="font-semibold text-white">
//                 {" "}10%
//               </span>{" "}
//               charging loss during AC charging. Actual
//               charging cost may vary depending on charger
//               efficiency, electricity tariff and weather.

//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// function ResultCard({
//   title,
//   value,
//   highlight = false,
// }) {
//   return (
//     <div
//       className={`
//         flex
//         items-center
//         justify-between
//         rounded-xl
//         border
//         px-4
//         py-3
//         transition

//         ${
//           highlight
//             ? "border-green-500/30 bg-green-500/10"
//             : "border-zinc-800 bg-zinc-950/40 hover:border-zinc-700"
//         }
//       `}
//     >

//       <span className="text-sm text-zinc-400">
//         {title}
//       </span>

//       <span
//         className={`text-sm font-semibold ${
//           highlight
//             ? "text-green-400"
//             : "text-white"
//         }`}
//       >
//         {value}
//       </span>

//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import {
  BatteryCharging,
  IndianRupee,
} from "lucide-react";

export default function ChargingCostCalculator({
  vehicle,
}) {
  const [electricityRate, setElectricityRate] =
    useState(8);

  const [chargePercent, setChargePercent] =
    useState(100);

  const batteryCapacity =
    vehicle.batteryKwh || 0;

  const realRange =
    vehicle.realRange || 1;

  const calculation = useMemo(() => {
    const energyRequired =
      (batteryCapacity * chargePercent) / 100;

    const actualUnits =
      energyRequired * 1.1;

    const chargingCost =
      actualUnits * electricityRate;

    const fullChargeCost =
      batteryCapacity *
      1.1 *
      electricityRate;

    const costPerKm =
      fullChargeCost / realRange;

    return {
      energyRequired,
      actualUnits,
      chargingCost,
      fullChargeCost,
      costPerKm,
    };
  }, [
    batteryCapacity,
    chargePercent,
    electricityRate,
    realRange,
  ]);

  return (
    <section
      id="charging-cost"
      className="mt-14"
    >

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
          Charging Calculator
        </span>

        <h2
          className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            text-foreground
          "
        >
          Charging Cost Calculator
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-sm
            text-muted
          "
        >
          Estimate the charging cost of{" "}
          <span className="font-semibold text-foreground">
            {vehicle.name}
          </span>{" "}
          based on your local electricity tariff.
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        {/* INPUT CARD */}

        <div
          className="
            rounded-2xl
            border
            border-theme
            bg-card
            p-6
            shadow-theme
          "
        >

          <div className="mb-6 flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-green-500/10
                text-green-500
              "
            >
              <BatteryCharging size={20} />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Calculator
            </h3>

          </div>

          {/* Electricity Rate */}

          <div className="mb-6">

            <label
              className="
                mb-2
                block
                text-sm
                text-muted
              "
            >
              Electricity Rate (₹ / kWh)
            </label>

            <input
              type="number"
              min={1}
              value={electricityRate}
              onChange={(e) =>
                setElectricityRate(
                  Number(e.target.value)
                )
              }
              className="
                w-full
                rounded-xl
                border
                border-theme
                bg-background
                px-4
                py-3
                text-foreground
                outline-none
                transition-all
                focus:border-green-500
              "
            />

          </div>

          {/* Slider */}

          <div>

            <div className="mb-3 flex items-center justify-between">

              <span className="text-sm text-muted">
                Charge Battery
              </span>

              <span className="font-semibold text-green-500">
                {chargePercent}%
              </span>

            </div>

            <input
              type="range"
              min={10}
              max={100}
              step={10}
              value={chargePercent}
              onChange={(e) =>
                setChargePercent(
                  Number(e.target.value)
                )
              }
              className="w-full accent-green-500"
            />

          </div>

        </div>

        {/* RESULT CARD */}

        <div
          className="
            rounded-2xl
            border
            border-theme
            bg-card
            p-6
            shadow-theme
          "
        >

          <div className="mb-6 flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-green-500/10
                text-green-500
              "
            >
              <IndianRupee size={20} />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Estimated Cost
            </h3>

          </div>

          <div className="space-y-3">
                        <ResultCard
              title="Energy Required"
              value={`${calculation.energyRequired.toFixed(
                1
              )} kWh`}
            />

            <ResultCard
              title="Units Consumed"
              value={`${calculation.actualUnits.toFixed(
                1
              )} kWh`}
            />

            <ResultCard
              title="Charging Cost"
              value={`₹${calculation.chargingCost.toFixed(
                0
              )}`}
              highlight
            />

            <ResultCard
              title="Full Charge Cost"
              value={`₹${calculation.fullChargeCost.toFixed(
                0
              )}`}
            />

            <ResultCard
              title="Running Cost"
              value={`₹${calculation.costPerKm.toFixed(
                2
              )}/km`}
            />

          </div>

          {/* Note */}

          <div
            className="
              mt-6
              rounded-xl
              border
              border-green-500/20
              bg-green-500/10
              p-4
            "
          >

            <p className="text-xs leading-6 text-muted">

              <span className="font-semibold text-green-500">
                Note:
              </span>{" "}

              This calculation assumes approximately

              <span className="font-semibold text-foreground">
                {" "}10%
              </span>

              {" "}charging loss during AC charging.

              Actual charging cost may vary depending on charger
              efficiency, electricity tariff and weather.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

function ResultCard({
  title,
  value,
  highlight = false,
}) {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        rounded-xl
        border
        px-4
        py-3
        transition-all
        duration-300

        ${
          highlight
            ? "border-green-500/30 bg-green-500/10"
            : "border-theme bg-background hover:border-green-500 hover:bg-card"
        }
      `}
    >

      <span className="text-sm text-muted">
        {title}
      </span>

      <span
        className={`text-sm font-semibold ${
          highlight
            ? "text-green-500"
            : "text-foreground"
        }`}
      >
        {value}
      </span>

    </div>
  );
}