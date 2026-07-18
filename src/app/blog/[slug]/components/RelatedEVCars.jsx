// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   BatteryCharging,
//   IndianRupee,
//   Gauge,
// } from "lucide-react";

// function formatPrice(price) {
//   if (!price) return "N/A";
//   return `₹${(price / 100000).toFixed(2)} L`;
// }

// export default function RelatedEVCars({ cars }) {
//   if (!cars?.length) return null;

//   return (
//     <section className="mx-auto max-w-7xl px-4 py-14">

//       <div className="mb-8 flex items-end justify-between">

//         <div>

//           <h2 className="text-3xl font-bold text-foreground">
//             Related EV Cars
//           </h2>

//           <p className="mt-2 text-muted">
//             Explore similar electric cars before making your decision.
//           </p>

//         </div>

//       </div>

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//         {cars.map((car) => (

//           <Link
//             key={car.id}
//             href={`/cars/${car.slug}`}
//             className="
//               group
//               overflow-hidden
//               rounded-2xl
//               border
//               border-theme
//               bg-card
//               transition-all
//               duration-300
//               hover:-translate-y-1
//               hover:border-primary/40
//               hover:shadow-xl
//             "
//           >

//             {/* Image */}

//             <div className="relative aspect-[16/9] overflow-hidden">

//               <Image
//                 src={car.image || "/ev-car.jpg"}
//                 alt={car.name}
//                 fill
//                 className="
//                   object-cover
//                   transition-transform
//                   duration-500
//                   group-hover:scale-105
//                 "
//               />

//             </div>

//             {/* Body */}

//             <div className="p-5">

//               <span
//                 className="
//                   inline-flex
//                   rounded-full
//                   bg-primary/10
//                   px-3
//                   py-1
//                   text-xs
//                   font-semibold
//                   text-primary
//                 "
//               >
//                 {car.brand?.name}
//               </span>

//               <h3
//                 className="
//                   mt-3
//                   line-clamp-2
//                   text-xl
//                   font-bold
//                   text-foreground
//                 "
//               >
//                 {car.name}
//               </h3>

//               {/* Specs */}

//               <div className="mt-5 grid grid-cols-3 gap-3">

//                 <div className="rounded-xl border border-theme p-3 text-center">

//                   <IndianRupee
//                     size={18}
//                     className="mx-auto mb-2 text-primary"
//                   />

//                   <p className="text-xs text-muted">
//                     Price
//                   </p>

//                   <p className="mt-1 text-sm font-semibold">
//                     {formatPrice(car.exShowroomPrice)}
//                   </p>

//                 </div>

//                 <div className="rounded-xl border border-theme p-3 text-center">

//                   <BatteryCharging
//                     size={18}
//                     className="mx-auto mb-2 text-primary"
//                   />

//                   <p className="text-xs text-muted">
//                     Battery
//                   </p>

//                   <p className="mt-1 text-sm font-semibold">
//                     {car.batteryKwh || "-"} kWh
//                   </p>

//                 </div>

//                 <div className="rounded-xl border border-theme p-3 text-center">

//                   <Gauge
//                     size={18}
//                     className="mx-auto mb-2 text-primary"
//                   />

//                   <p className="text-xs text-muted">
//                     Range
//                   </p>

//                   <p className="mt-1 text-sm font-semibold">
//                     {car.claimedRange || "-"} km
//                   </p>

//                 </div>

//               </div>

//               <div
//                 className="
//                   mt-6
//                   flex
//                   items-center
//                   justify-between
//                 "
//               >

//                 <span className="text-sm font-medium text-primary">
//                   View Details
//                 </span>

//                 <ArrowRight
//                   size={18}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                     text-primary
//                   "
//                 />

//               </div>

//             </div>

//           </Link>

//         ))}

//       </div>

//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  IndianRupee,
} from "lucide-react";

function formatPrice(price) {
  if (!price) return "N/A";
  return `₹${(price / 100000).toFixed(2)} L`;
}

export default function RelatedEVCars({ cars }) {
  if (!cars?.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      {/* Heading */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Related EV Cars
          </h2>

          <p className="mt-1 text-sm text-muted">
            Explore similar electric cars.
          </p>

        </div>

        <Link
          href="/ev"
          className="
            hidden
            items-center
            gap-2
            text-sm
            font-medium
            text-primary
            transition
            hover:gap-3
            md:flex
          "
        >
          View All
          <ArrowRight size={16} />
        </Link>

      </div>

      {/* Cards */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {cars.map((car) => (

  <Link
    key={car.id}
    href={`/ev/${car.slug}`}
    className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-theme
      bg-card/80
      backdrop-blur
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-primary/40
    "
  >

    {/* Image */}

    <div className="relative h-36 overflow-hidden">

      <Image
        src={car.image || "/ev-car.jpg"}
        alt={car.name}
        fill
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <span
        className="
          absolute
          left-3
          top-3
          rounded-full
          bg-background/90
          px-2.5
          py-1
          text-[11px]
          font-semibold
          backdrop-blur
        "
      >
        {car.brand?.name}
      </span>

    </div>

    {/* Body */}

    <div className="p-4">

      <h3
        className="
          line-clamp-2
          text-lg
          font-bold
          leading-6
          text-foreground
        "
      >
        {car.name}
      </h3>

      {/* Chips */}

      <div className="mt-3 flex flex-wrap gap-2">

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          ₹ {formatPrice(car.exShowroomPrice)}
        </span>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          🔋 {car.batteryKwh ?? "-"} kWh
        </span>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          ⚡ {car.claimedRange ?? "-"} km
        </span>

      </div>

      {/* CTA */}

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm font-semibold text-primary">
          View Details
        </span>

        <ArrowRight
          size={18}
          className="
            text-primary
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />

      </div>

    </div>

  </Link>

))}

      </div>

      {/* Mobile Button */}

      <div className="mt-6 md:hidden">

        <Link
          href="/cars"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-theme
            py-3
            font-medium
            transition
            hover:bg-muted
          "
        >
          View All Cars
          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}