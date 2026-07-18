// "use client";

// import {
//   Zap,
//   Gauge,
//   Timer,
//   BatteryCharging,
//   TrendingUp,
// } from "lucide-react";

// export default function Performance({ vehicle }) {
//   if (!vehicle) return null;

//   const stats = [
//     {
//       title: "Max Power",
//       value: `${vehicle.powerHp} HP`,
//       icon: Zap,
//       color: "text-yellow-400",
//       bg: "bg-yellow-500/10",
//     },
//     {
//       title: "Torque",
//       value: `${vehicle.torqueNm} Nm`,
//       icon: TrendingUp,
//       color: "text-green-400",
//       bg: "bg-green-500/10",
//     },
//     {
//       title: "Top Speed",
//       value: `${vehicle.topSpeed} km/h`,
//       icon: Gauge,
//       color: "text-blue-400",
//       bg: "bg-blue-500/10",
//     },
//     {
//       title: "0–100 km/h",
//       value:
//         vehicle.performance?.zeroToHundred
//           ? `${vehicle.performance.zeroToHundred}s`
//           : "N/A",
//       icon: Timer,
//       color: "text-purple-400",
//       bg: "bg-purple-500/10",
//     },
//   ];

//   return (
//     <section id="performance"className="mt-14">

//       {/* Header */}

//       <div className="mb-8">

//         <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
//           Performance
//         </span>

//         <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
//           Performance
//         </h2>

//         <p className="mt-2 max-w-2xl text-sm text-zinc-400">
//           Real-world performance figures of{" "}
//           <span className="font-semibold text-white">
//             {vehicle.name}
//           </span>
//           .
//         </p>

//       </div>

//       {/* Top Cards */}

//       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//         {stats.map((item) => {

//           const Icon = item.icon;

//           return (

//             <div
//               key={item.title}
//               className="
//                 rounded-2xl
//                 border
//                 border-zinc-800
//                 bg-zinc-900
//                 p-5
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-green-500/30
//               "
//             >

//               <div
//                 className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
//               >

//                 <Icon
//                   size={22}
//                   className={item.color}
//                 />

//               </div>

//               <p className="text-sm text-zinc-400">
//                 {item.title}
//               </p>

//               <h3 className="mt-2 text-2xl font-bold text-white">
//                 {item.value}
//               </h3>

//             </div>

//           );

//         })}

//       </div>

//       {/* Progress Section */}

//       <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//                 <div className="space-y-6">

//           {/* Power */}

//           <div>

//             <div className="mb-2 flex justify-between">

//               <span className="text-sm text-zinc-400">
//                 Power
//               </span>

//               <span className="font-semibold text-white">
//                 {vehicle.powerHp} HP
//               </span>

//             </div>

//             <div className="h-2 rounded-full bg-zinc-800">

//               <div
//                 className="h-2 rounded-full bg-yellow-400"
//                 style={{
//                   width: `${Math.min(
//                     (vehicle.powerHp / 400) * 100,
//                     100
//                   )}%`,
//                 }}
//               />

//             </div>

//           </div>

//           {/* Torque */}

//           <div>

//             <div className="mb-2 flex justify-between">

//               <span className="text-sm text-zinc-400">
//                 Torque
//               </span>

//               <span className="font-semibold text-white">
//                 {vehicle.torqueNm} Nm
//               </span>

//             </div>

//             <div className="h-2 rounded-full bg-zinc-800">

//               <div
//                 className="h-2 rounded-full bg-green-400"
//                 style={{
//                   width: `${Math.min(
//                     (vehicle.torqueNm / 700) * 100,
//                     100
//                   )}%`,
//                 }}
//               />

//             </div>

//           </div>

//           {/* Top Speed */}

//           <div>

//             <div className="mb-2 flex justify-between">

//               <span className="text-sm text-zinc-400">
//                 Top Speed
//               </span>

//               <span className="font-semibold text-white">
//                 {vehicle.topSpeed} km/h
//               </span>

//             </div>

//             <div className="h-2 rounded-full bg-zinc-800">

//               <div
//                 className="h-2 rounded-full bg-blue-400"
//                 style={{
//                   width: `${Math.min(
//                     (vehicle.topSpeed / 250) * 100,
//                     100
//                   )}%`,
//                 }}
//               />

//             </div>

//           </div>

//           {/* Real Range */}

//           <div>

//             <div className="mb-2 flex justify-between">

//               <span className="text-sm text-zinc-400">
//                 Real Driving Range
//               </span>

//               <span className="font-semibold text-white">
//                 {vehicle.realRange} km
//               </span>

//             </div>

//             <div className="h-2 rounded-full bg-zinc-800">

//               <div
//                 className="h-2 rounded-full bg-emerald-400"
//                 style={{
//                   width: `${Math.min(
//                     (vehicle.realRange / 700) * 100,
//                     100
//                   )}%`,
//                 }}
//               />

//             </div>

//           </div>

//         </div>

//         {/* Summary */}

//         <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/5 p-5">

//           <div className="flex items-start gap-3">

//             <BatteryCharging
//               size={22}
//               className="mt-1 text-green-400"
//             />

//             <div>

//               <h3 className="font-semibold text-white">
//                 Performance Summary
//               </h3>

//               <p className="mt-2 text-sm leading-7 text-zinc-400">
//                 {vehicle.name} produces{" "}
//                 <span className="font-semibold text-white">
//                   {vehicle.powerHp} HP
//                 </span>{" "}
//                 and{" "}
//                 <span className="font-semibold text-white">
//                   {vehicle.torqueNm} Nm
//                 </span>{" "}
//                 of torque, achieving a top speed of{" "}
//                 <span className="font-semibold text-white">
//                   {vehicle.topSpeed} km/h
//                 </span>
//                 . It delivers an estimated real-world range of{" "}
//                 <span className="font-semibold text-white">
//                   {vehicle.realRange} km
//                 </span>
//                 , making it suitable for both city commuting and long-distance travel.
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

import {
  Zap,
  Gauge,
  Timer,
  BatteryCharging,
  TrendingUp,
} from "lucide-react";

export default function Performance({ vehicle }) {
  if (!vehicle) return null;

  const stats = [
    {
      title: "Max Power",
      value: `${vehicle.powerHp} HP`,
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Torque",
      value: `${vehicle.torqueNm} Nm`,
      icon: TrendingUp,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Top Speed",
      value: `${vehicle.topSpeed} km/h`,
      icon: Gauge,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "0–100 km/h",
      value: vehicle.performance?.zeroToHundred
        ? `${vehicle.performance.zeroToHundred}s`
        : "N/A",
      icon: Timer,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="performance" className="mt-14">

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
          Performance
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Performance
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-muted">
          Real-world performance figures of{" "}
          <span className="font-semibold text-foreground">
            {vehicle.name}
          </span>.
        </p>

      </div>

      {/* Top Cards */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
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

              <div
                className={`
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${item.bg}
                `}
              >
                <Icon
                  size={22}
                  className={item.color}
                />
              </div>

              <p className="text-sm text-muted">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-foreground">
                {item.value}
              </h3>

            </div>
          );
        })}

      </div>

      {/* Progress Card */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-theme
          bg-card
          p-6
          shadow-theme
        "
      >

        <div className="space-y-6">

          {/* Power */}

          <div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-muted">
                Power
              </span>

              <span className="font-semibold text-foreground">
                {vehicle.powerHp} HP
              </span>

            </div>

            <div className="h-2 rounded-full bg-background">

              <div
                className="h-2 rounded-full bg-yellow-500"
                style={{
                  width: `${Math.min(
                    (vehicle.powerHp / 400) * 100,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

          {/* Torque */}

          <div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-muted">
                Torque
              </span>

              <span className="font-semibold text-foreground">
                {vehicle.torqueNm} Nm
              </span>

            </div>

            <div className="h-2 rounded-full bg-background">

              <div
                className="h-2 rounded-full bg-green-500"
                style={{
                  width: `${Math.min(
                    (vehicle.torqueNm / 700) * 100,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>
                    {/* Top Speed */}

          <div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-muted">
                Top Speed
              </span>

              <span className="font-semibold text-foreground">
                {vehicle.topSpeed} km/h
              </span>

            </div>

            <div className="h-2 rounded-full bg-background">

              <div
                className="h-2 rounded-full bg-blue-500"
                style={{
                  width: `${Math.min(
                    (vehicle.topSpeed / 250) * 100,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

          {/* Real Range */}

          <div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-muted">
                Real Driving Range
              </span>

              <span className="font-semibold text-foreground">
                {vehicle.realRange} km
              </span>

            </div>

            <div className="h-2 rounded-full bg-background">

              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{
                  width: `${Math.min(
                    (vehicle.realRange / 700) * 100,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* Summary */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/5
            p-5
          "
        >

          <div className="flex items-start gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10">

              <BatteryCharging
                size={22}
                className="text-green-500"
              />

            </div>

            <div>

              <h3 className="font-semibold text-foreground">
                Performance Summary
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">

                {vehicle.name} produces{" "}

                <span className="font-semibold text-foreground">
                  {vehicle.powerHp} HP
                </span>{" "}

                and{" "}

                <span className="font-semibold text-foreground">
                  {vehicle.torqueNm} Nm
                </span>{" "}

                of torque with a top speed of{" "}

                <span className="font-semibold text-foreground">
                  {vehicle.topSpeed} km/h
                </span>
                .

                It delivers a real-world driving range of{" "}

                <span className="font-semibold text-foreground">
                  {vehicle.realRange} km
                </span>
                , making it suitable for daily commuting as well as highway trips while maintaining smooth acceleration and excellent efficiency.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}