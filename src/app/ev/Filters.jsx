"use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   ChevronDown,
//   IndianRupee,
//   Gauge,
//   BatteryCharging,
//   ArrowUpDown,
// } from "lucide-react";

// export default function Filters({ brands = [] }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const selectedBrand = searchParams.get("brand") || "";
//   const selectedPrice = searchParams.get("price") || "";
//   const battery = searchParams.get("battery") || "";
//   const sort = searchParams.get("sort") || "";

//   function updateFilter(key, value) {
//     const params = new URLSearchParams(searchParams.toString());

//     if (!value) {
//       params.delete(key);
//     } else {
//       params.set(key, value);
//     }

//     router.push(`/ev?${params.toString()}`);
//   }

//   return (
//     <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
//       <div className="flex flex-wrap items-center gap-4">
//         {/* Brand Filter */}

//         <div className="relative w-full sm:w-56">
//           <select
//             value={selectedBrand}
//             onChange={(e) => updateFilter("brand", e.target.value)}
//             className="
//               w-full
//               appearance-none
//               rounded-lg
//               border
//               border-zinc-700
//               bg-zinc-800
//               px-4
//               py-3
//               pr-10
//               text-sm
//               font-medium
//               text-white
//               outline-none
//               transition-all
//               duration-300
//               hover:border-green-500
//               focus:border-green-500
//               focus:ring-2
//               focus:ring-green-500/20
//             "
//           >
//             <option value="">All Brands</option>

//             {brands.map((brand) => (
//               <option key={brand.id} value={brand.slug}>
//                 {brand.name}
//               </option>
//             ))}
//           </select>

//           <ChevronDown
//             size={16}
//             className="
//               pointer-events-none
//               absolute
//               right-3
//               top-1/2
//               -translate-y-1/2
//               text-gray-400
//             "
//           />
//         </div>

//         {/* Price filter */}

//         <div className="relative w-full sm:w-56">
//           <IndianRupee
//             size={16}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400"
//           />

//           <select
//             value={selectedPrice}
//             onChange={(e) => updateFilter("price", e.target.value)}
//             className="
//               w-full
//             appearance-none
//              rounded-lg
//             border
//             border-zinc-700
//       bg-zinc-800
//       py-3
//       pl-10
//       pr-10
//       text-sm
//       text-white
//       outline-none
//       transition
//       hover:border-green-500
//       focus:border-green-500
//     "
//           >
//             <option value="">Price</option>
//             <option value="10">Under ₹10L</option>
//             <option value="20">Under ₹20L</option>
//             <option value="30">Under ₹30L</option>
//             <option value="50">Under ₹50L</option>
//           </select>

//           <ChevronDown
//             size={16}
//             className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />
//         </div>

//         {/* Range filter */}

//         <div className="relative w-full sm:w-56">
//           <Gauge
//             size={16}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400"
//           />

//           <select
//             value={searchParams.get("range") || ""}
//             onChange={(e) => updateFilter("range", e.target.value)}
//             className="
//       w-full
//       appearance-none
//       rounded-lg
//       border
//       border-zinc-700
//       bg-zinc-800
//       py-3
//       pl-10
//       pr-10
//       text-sm
//       text-white
//       outline-none
//       transition-all
//       hover:border-green-500
//       focus:border-green-500
//     "
//           >
//             <option value="">Range</option>
//             <option value="250">250+ km</option>
//             <option value="300">300+ km</option>
//             <option value="400">400+ km</option>
//             <option value="500">500+ km</option>
//           </select>

//           <ChevronDown
//             size={16}
//             className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />
//         </div>
//         {/* Battery */}
//         <div className="relative w-full sm:w-56">
//           <BatteryCharging
//             size={18}
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400"
//           />

//           <select
//             value={battery}
//             onChange={(e) => updateFilter("battery", e.target.value)}
//             className="
//     w-full
//     appearance-none
//     rounded-lg
//     border
//     border-zinc-700
//     bg-zinc-800
//     py-3
//     pl-10
//     pr-10
//     text-sm
//     text-white
//     outline-none
//     transition-all
//     hover:border-green-500
//     focus:border-green-500
//     focus:ring-2
//     focus:ring-green-500/20
//   "
//           >
//             <option value="">Battery</option>
//             <option value="30">30+ kWh</option>
//             <option value="40">40+ kWh</option>
//             <option value="50">50+ kWh</option>
//             <option value="60">60+ kWh</option>
//             <option value="70">70+ kWh</option>
//           </select>

//           <ChevronDown
//             size={18}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//           />
//         </div>

//         {/* Sort By */}

//         <div className="relative w-full sm:w-56">
//           <ArrowUpDown
//             size={18}
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 pointer-events-none"
//           />

//           <select
//             value={sort}
//             onChange={(e) => updateFilter("sort", e.target.value)}
//             className="
//     w-full
//     appearance-none
//     rounded-lg
//     border
//     border-zinc-700
//     bg-zinc-800
//     py-3
//     pl-10
//     pr-10
//     text-sm
//     text-white
//     outline-none
//     transition-all
//     hover:border-green-500
//     focus:border-green-500
//     focus:ring-2
//     focus:ring-green-500/20
//   "
//           >
//             <option value="">Sort By</option>

//             <option value="price-asc">Price: Low → High</option>

//             <option value="price-desc">Price: High → Low</option>

//             <option value="range-desc">Range: High → Low</option>

//             <option value="battery-desc">Battery: High → Low</option>

//             <option value="newest">Newest Launch</option>
//           </select>

//           <ChevronDown
//             size={18}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronDown,
  IndianRupee,
  Gauge,
  BatteryCharging,
  ArrowUpDown,
} from "lucide-react";

export default function Filters({ brands = [] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedBrand = searchParams.get("brand") || "";
  const selectedPrice = searchParams.get("price") || "";
  const selectedRange = searchParams.get("range") || "";
  const battery = searchParams.get("battery") || "";
  const sort = searchParams.get("sort") || "";

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/ev?${params.toString()}`);
  }

  const wrapper =
    "relative w-full sm:w-[220px]";

  const selectClass = `
    w-full
    appearance-none
    rounded-xl
    border
    border-theme
    bg-card
    py-3
    pl-10
    pr-10
    text-sm
    text-foreground
    outline-none
    transition-all
    duration-300
    hover:border-green-500
    focus:border-green-500
    focus:ring-4
    focus:ring-green-500/10
  `;

  const leftIcon =
    "absolute left-3 top-1/2 -translate-y-1/2 text-green-500";

  const rightIcon =
    "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted";

  return (
    <div className="rounded-3xl border border-theme bg-card p-6 shadow-theme">

      <div className="flex flex-wrap gap-4">
                {/* Brand */}

        <div className={wrapper}>

          <select
            value={selectedBrand}
            onChange={(e) => updateFilter("brand", e.target.value)}
            className={selectClass}
          >
            <option value="">All Brands</option>

            {brands.map((brand) => (
              <option key={brand.id} value={brand.slug}>
                {brand.name}
              </option>
            ))}
          </select>

          <ChevronDown size={16} className={rightIcon} />

        </div>

        {/* Price */}

        <div className={wrapper}>

          <IndianRupee size={17} className={leftIcon} />

          <select
            value={selectedPrice}
            onChange={(e) => updateFilter("price", e.target.value)}
            className={selectClass}
          >
            <option value="">Price</option>
            <option value="10">Under ₹10 Lakh</option>
            <option value="20">Under ₹20 Lakh</option>
            <option value="30">Under ₹30 Lakh</option>
            <option value="50">Under ₹50 Lakh</option>
          </select>

          <ChevronDown size={16} className={rightIcon} />

        </div>

        {/* Range */}

        <div className={wrapper}>

          <Gauge size={17} className={leftIcon} />

          <select
            value={selectedRange}
            onChange={(e) => updateFilter("range", e.target.value)}
            className={selectClass}
          >
            <option value="">Range</option>
            <option value="250">250+ km</option>
            <option value="300">300+ km</option>
            <option value="400">400+ km</option>
            <option value="500">500+ km</option>
          </select>

          <ChevronDown size={16} className={rightIcon} />

        </div>

        {/* Battery */}

        <div className={wrapper}>

          <BatteryCharging size={17} className={leftIcon} />

          <select
            value={battery}
            onChange={(e) => updateFilter("battery", e.target.value)}
            className={selectClass}
          >
            <option value="">Battery</option>
            <option value="30">30+ kWh</option>
            <option value="40">40+ kWh</option>
            <option value="50">50+ kWh</option>
            <option value="60">60+ kWh</option>
            <option value="70">70+ kWh</option>
          </select>

          <ChevronDown size={16} className={rightIcon} />

        </div>

        {/* Sort */}

        <div className={wrapper}>

          <ArrowUpDown size={17} className={leftIcon} />

          <select
            value={sort}
            onChange={(e) => updateFilter("sort", e.target.value)}
            className={selectClass}
          >
            <option value="">Sort By</option>

            <option value="price-asc">
              Price : Low → High
            </option>

            <option value="price-desc">
              Price : High → Low
            </option>

            <option value="range-desc">
              Range : High → Low
            </option>

            <option value="battery-desc">
              Battery : High → Low
            </option>

            <option value="newest">
              Newest Launch
            </option>

          </select>

          <ChevronDown size={16} className={rightIcon} />

        </div>

      </div>

    </div>
  );
}