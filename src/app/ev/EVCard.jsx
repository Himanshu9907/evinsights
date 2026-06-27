// import Link from "next/link";
// import { Battery, Gauge, Zap, ArrowRight } from "lucide-react";

// export default function EVCard({ vehicle }) {
//   return (
//     <Link href={`/ev/${vehicle.slug}`}>
//       <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition duration-300 h-full">

//         <div className="overflow-hidden">
//           <img
//             src={vehicle.image}
//             alt={vehicle.name}
//             className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
//           />
//         </div>

//         <div className="p-6">

//           <p className="text-sm text-green-400 mb-2">
//             {vehicle.brand?.name}
//           </p>

//           <h2 className="text-2xl font-bold">
//             {vehicle.name}
//           </h2>

//           <p className="text-green-400 text-xl font-semibold mt-3">
//             ₹
//             {vehicle.exShowroomPrice?.toLocaleString("en-IN")}
//           </p>

//           <div className="grid grid-cols-3 gap-4 mt-6">

//             <div>
//               <Battery
//                 size={18}
//                 className="text-green-400 mb-2"
//               />
//               <p className="text-xs text-gray-500">
//                 Battery
//               </p>

//               <p className="font-semibold">
//                 {vehicle.batteryKwh} kWh
//               </p>
//             </div>

//             <div>
//               <Zap
//                 size={18}
//                 className="text-green-400 mb-2"
//               />

//               <p className="text-xs text-gray-500">
//                 Range
//               </p>

//               <p className="font-semibold">
//                 {vehicle.claimedRange} km
//               </p>
//             </div>

//             <div>
//               <Gauge
//                 size={18}
//                 className="text-green-400 mb-2"
//               />

//               <p className="text-xs text-gray-500">
//                 Power
//               </p>

//               <p className="font-semibold">
//                 {vehicle.powerHp} HP
//               </p>
//             </div>

//           </div>

//           <div className="mt-8 flex items-center text-green-400 font-semibold">
//             View Details
//             <ArrowRight
//               size={18}
//               className="ml-2"
//             />
//           </div>

//         </div>

//       </div>
//     </Link>
//   );
// }

// import Link from "next/link";
// import {
//   BatteryCharging,
//   Gauge,
//   Zap,
//   ArrowRight,
//   GitCompareArrows,
//   Star,
// } from "lucide-react";

// export default function EVCard({ vehicle }) {
//   return (
//     <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-green-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]">

//       {/* Image */}
//       <div className="relative overflow-hidden">

//         <img
//           src={vehicle.image}
//           alt={vehicle.name}
//           className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
//         />

//         {vehicle.featured && (
//           <div className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-black">
//             ⭐ Featured
//           </div>
//         )}

//         <div className="absolute right-4 top-4 rounded-full bg-black/70 p-2 backdrop-blur">
//           <Star className="h-5 w-5 text-yellow-400" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">

//         <p className="text-sm text-green-400 font-medium">
//           {vehicle.brand?.name}
//         </p>

//         <h2 className="mt-2 text-2xl font-bold">
//           {vehicle.name}
//         </h2>

//         <p className="mt-4 text-3xl font-bold text-green-400">
//           ₹{" "}
//           {vehicle.exShowroomPrice
//             ? vehicle.exShowroomPrice.toLocaleString("en-IN")
//             : "N/A"}
//         </p>

//         <p className="text-sm text-gray-500">
//           Ex-showroom Price
//         </p>

//         {/* Specs */}

//         <div className="mt-8 grid grid-cols-2 gap-4">

//           <div className="rounded-2xl bg-zinc-800 p-4">

//             <BatteryCharging className="mb-2 text-green-400" />

//             <p className="text-xs text-gray-500">
//               Battery
//             </p>

//             <p className="font-semibold">
//               {vehicle.batteryKwh} kWh
//             </p>

//           </div>

//           <div className="rounded-2xl bg-zinc-800 p-4">

//             <Zap className="mb-2 text-green-400" />

//             <p className="text-xs text-gray-500">
//               Range
//             </p>

//             <p className="font-semibold">
//               {vehicle.claimedRange} km
//             </p>

//           </div>

//           <div className="rounded-2xl bg-zinc-800 p-4">

//             <Gauge className="mb-2 text-green-400" />

//             <p className="text-xs text-gray-500">
//               Power
//             </p>

//             <p className="font-semibold">
//               {vehicle.powerHp} HP
//             </p>

//           </div>

//           <div className="rounded-2xl bg-zinc-800 p-4">

//             <BatteryCharging className="mb-2 text-green-400" />

//             <p className="text-xs text-gray-500">
//               Charging
//             </p>

//             <p className="font-semibold">
//               {vehicle.dcCharging}
//             </p>

//           </div>

//         </div>

//         {/* Buttons */}

//         <div className="mt-8 flex gap-3">

//           <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 font-medium transition hover:border-green-500 hover:bg-green-500 hover:text-black">

//             <GitCompareArrows size={18} />

//             Compare

//           </button>

//           <Link
//             href={`/ev/${vehicle.slug}`}
//             className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
//           >

//             Details

//             <ArrowRight size={18} />

//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }

// import Link from "next/link";
// import {
//   BatteryCharging,
//   Gauge,
//   Zap,
//   ArrowRight,
//   GitCompareArrows,
//   Star,
// } from "lucide-react";

// export default function EVCard({ vehicle }) {
//   return (
//     <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10">

//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           src={vehicle.image}
//           alt={vehicle.name}
//           className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
//         />

//         {vehicle.featured && (
//           <span className="absolute left-3 top-3 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-black">
//             Featured
//           </span>
//         )}

//         <button className="absolute right-3 top-3 rounded-full bg-black/60 p-2 backdrop-blur">
//           <Star size={16} className="text-yellow-400" />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-4">

//         <p className="text-sm text-green-400 font-medium">
//           {vehicle.brand?.name}
//         </p>

//         <h2 className="mt-1 text-xl font-bold line-clamp-1">
//           {vehicle.name}
//         </h2>

//         <div className="mt-3">
//           <p className="text-2xl font-bold text-green-400">
//             ₹{" "}
//             {vehicle.exShowroomPrice
//               ? vehicle.exShowroomPrice.toLocaleString("en-IN")
//               : "N/A"}
//           </p>

//           <p className="text-xs text-gray-500">
//             Ex-showroom
//           </p>
//         </div>

//         {/* Specs */}

//         <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

//           <div className="flex items-center gap-2 rounded-lg bg-zinc-800 p-2">

//             <BatteryCharging
//               size={18}
//               className="text-green-400"
//             />

//             <div>
//               <p className="text-gray-500 text-xs">
//                 Battery
//               </p>

//               <p className="font-semibold">
//                 {vehicle.batteryKwh} kWh
//               </p>
//             </div>

//           </div>

//           <div className="flex items-center gap-2 rounded-lg bg-zinc-800 p-2">

//             <Zap
//               size={18}
//               className="text-green-400"
//             />

//             <div>
//               <p className="text-gray-500 text-xs">
//                 Range
//               </p>

//               <p className="font-semibold">
//                 {vehicle.claimedRange} km
//               </p>
//             </div>

//           </div>

//           <div className="flex items-center gap-2 rounded-lg bg-zinc-800 p-2">

//             <Gauge
//               size={18}
//               className="text-green-400"
//             />

//             <div>
//               <p className="text-gray-500 text-xs">
//                 Power
//               </p>

//               <p className="font-semibold">
//                 {vehicle.powerHp} HP
//               </p>
//             </div>

//           </div>

//           <div className="flex items-center gap-2 rounded-lg bg-zinc-800 p-2">

//             <BatteryCharging
//               size={18}
//               className="text-green-400"
//             />

//             <div>
//               <p className="text-gray-500 text-xs">
//                 DC Charge
//               </p>

//               <p className="font-semibold">
//                 {vehicle.dcCharging}
//               </p>
//             </div>

//           </div>

//         </div>

//         {/* Buttons */}

//         <div className="mt-5 flex gap-2">

//           <button
//             className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 text-sm font-medium transition hover:border-green-500 hover:bg-green-500 hover:text-black"
//           >
//             <GitCompareArrows size={16} />
//             Compare
//           </button>

//           <Link
//             href={`/ev/${vehicle.slug}`}
//             className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 text-sm font-semibold text-black transition hover:bg-green-400"
//           >
//             Details
//             <ArrowRight size={16} />
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }

import Link from "next/link";
import {
  BatteryCharging,
  Gauge,
  Zap,
  ArrowRight,
  GitCompareArrows,
  Star,
} from "lucide-react";

export default function EVCard({ vehicle }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {vehicle.featured && (
          <span className="absolute left-2 top-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-semibold text-black">
            Featured
          </span>
        )}

        <button className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 backdrop-blur">
          <Star size={14} className="text-yellow-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3">

        <p className="text-xs font-medium text-green-400">
          {vehicle.brand?.name}
        </p>

        <h2 className="mt-1 text-lg font-bold leading-tight line-clamp-1">
          {vehicle.name}
        </h2>

        <div className="mt-2">
          <p className="text-xl font-bold text-green-400">
            ₹{" "}
            {vehicle.exShowroomPrice
              ? vehicle.exShowroomPrice.toLocaleString("en-IN")
              : "N/A"}
          </p>

          <p className="text-[11px] text-gray-500">
            Ex-showroom
          </p>
        </div>

        {/* Specs */}

        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">

          <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
            <BatteryCharging size={15} className="text-green-400" />
            <div>
              <p className="text-[10px] text-gray-500">Battery</p>
              <p className="font-semibold">{vehicle.batteryKwh} kWh</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
            <Zap size={15} className="text-green-400" />
            <div>
              <p className="text-[10px] text-gray-500">Range</p>
              <p className="font-semibold">{vehicle.claimedRange} km</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
            <Gauge size={15} className="text-green-400" />
            <div>
              <p className="text-[10px] text-gray-500">Power</p>
              <p className="font-semibold">{vehicle.powerHp} HP</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
            <BatteryCharging size={15} className="text-green-400" />
            <div>
              <p className="text-[10px] text-gray-500">Charging</p>
              <p className="font-semibold">{vehicle.dcCharging}</p>
            </div>
          </div>

        </div>

        {/* Buttons */}

        <div className="mt-4 flex gap-2">

          <button className="flex h-9 flex-1 items-center justify-center gap-1 rounded-lg border border-zinc-700 text-xs font-medium transition hover:border-green-500 hover:bg-green-500 hover:text-black">
            <GitCompareArrows size={14} />
            Compare
          </button>

          <Link
            href={`/ev/${vehicle.slug}`}
            className="flex h-9 flex-1 items-center justify-center gap-1 rounded-lg bg-green-500 text-xs font-semibold text-black transition hover:bg-green-400"
          >
            Details
            <ArrowRight size={14} />
          </Link>

        </div>

      </div>
    </div>
  );
}