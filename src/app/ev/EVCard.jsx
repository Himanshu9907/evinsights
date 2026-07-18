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
//     <div className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10">

//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           src={vehicle.image}
//           alt={vehicle.name}
//           className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
//         />

//         {vehicle.featured && (
//           <span className="absolute left-2 top-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-semibold text-black">
//             Featured
//           </span>
//         )}

//         <button className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 backdrop-blur">
//           <Star size={14} className="text-yellow-400" />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-3">

//         <p className="text-xs font-medium text-green-400">
//           {vehicle.brand?.name}
//         </p>

//         <h2 className="mt-1 text-lg font-bold leading-tight line-clamp-1">
//           {vehicle.name}
//         </h2>

//         <div className="mt-2">
//           <p className="text-xl font-bold text-green-400">
//             ₹{" "}
//             {vehicle.exShowroomPrice
//               ? vehicle.exShowroomPrice.toLocaleString("en-IN")
//               : "N/A"}
//           </p>

//           <p className="text-[11px] text-gray-500">
//             Ex-showroom
//           </p>
//         </div>

//         {/* Specs */}

//         <div className="mt-3 grid grid-cols-2 gap-2 text-xs">

//           <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
//             <BatteryCharging size={15} className="text-green-400" />
//             <div>
//               <p className="text-[10px] text-gray-500">Battery</p>
//               <p className="font-semibold">{vehicle.batteryKwh} kWh</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
//             <Zap size={15} className="text-green-400" />
//             <div>
//               <p className="text-[10px] text-gray-500">Range</p>
//               <p className="font-semibold">{vehicle.claimedRange} km</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
//             <Gauge size={15} className="text-green-400" />
//             <div>
//               <p className="text-[10px] text-gray-500">Power</p>
//               <p className="font-semibold">{vehicle.powerHp} HP</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 rounded-md bg-zinc-800 p-2">
//             <BatteryCharging size={15} className="text-green-400" />
//             <div>
//               <p className="text-[10px] text-gray-500">Charging</p>
//               <p className="font-semibold">{vehicle.dcCharging}</p>
//             </div>
//           </div>

//         </div>

//         {/* Buttons */}

//         <div className="mt-4 flex gap-2">

//           <button className="flex h-9 flex-1 items-center justify-center gap-1 rounded-lg border border-zinc-700 text-xs font-medium transition hover:border-green-500 hover:bg-green-500 hover:text-black">
//             <GitCompareArrows size={14} />
//             Compare
//           </button>

//           <Link
//             href={`/ev/${vehicle.slug}`}
//             className="flex h-9 flex-1 items-center justify-center gap-1 rounded-lg bg-green-500 text-xs font-semibold text-black transition hover:bg-green-400"
//           >
//             Details
//             <ArrowRight size={14} />
//           </Link>

//         </div>

//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";
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
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-theme
        bg-card
        shadow-theme
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-500
      "
    >
      {/* Image */}

      <div className="relative h-48 overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {vehicle.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-[11px] font-semibold text-black">
            Featured
          </span>
        )}

        <button
          className="
            absolute
            right-3
            top-3
            rounded-full
            bg-background/90
            p-2
            shadow
            transition
            hover:bg-green-500
            hover:text-black
          "
        >
          <Star size={15} />
        </button>
      </div>

      {/* Content */}

      <div className="p-5">
        <p className="text-sm font-medium text-green-500">
          {vehicle.brand?.name}
        </p>

        <h2 className="mt-2 line-clamp-1 text-xl font-bold text-foreground">
          {vehicle.name}
        </h2>

        <div className="mt-3">
          <p className="text-2xl font-bold text-green-500">
            ₹{" "}
            {vehicle.exShowroomPrice
              ? vehicle.exShowroomPrice.toLocaleString("en-IN")
              : "N/A"}
          </p>

          <p className="text-sm text-muted">Ex-showroom</p>
        </div>

        {/* Specs */}

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3 rounded-xl bg-background p-3">
            <BatteryCharging size={18} className="text-green-500" />

            <div>
              <p className="text-xs text-muted">Battery</p>

              <p className="text-sm font-semibold text-foreground">
                {vehicle.batteryKwh ? `${vehicle.batteryKwh} kWh` : "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-background p-3">
            <Zap size={18} className="text-green-500" />

            <div>
              <p className="text-xs text-muted">Range</p>

              <p className="text-sm font-semibold text-foreground">
                {vehicle.claimedRange ? `${vehicle.claimedRange} km` : "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-background p-3">
            <Gauge size={18} className="text-green-500" />

            <div>
              <p className="text-xs text-muted">Power</p>

              <p className="text-sm font-semibold text-foreground">
                {vehicle.powerHp ? `${vehicle.powerHp} HP` : "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-background p-3">
            <BatteryCharging size={18} className="text-green-500" />

            <div>
              <p className="text-xs text-muted">Charging</p>

              <p className="text-sm font-semibold text-foreground">
                {vehicle.dcCharging || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">
          <button
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-theme
              py-3
              text-sm
              font-medium
              transition
              hover:border-green-500
              hover:bg-green-500
              hover:text-black
            "
          >
            <GitCompareArrows size={16} />
            Compare
          </button>

          <Link
            href={`/ev/${vehicle.slug}`}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-green-500
              py-3
              text-sm
              font-semibold
              text-black
              transition
              hover:bg-green-400
            "
          >
            Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
