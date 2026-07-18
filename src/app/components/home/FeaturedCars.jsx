// import Image from "next/image";
// import Link from "next/link";
// import {
//   BatteryCharging,
//   Gauge,
//   Zap,
//   Heart,
//   ArrowRight,
//   Scale,
// } from "lucide-react";

// export default function FeaturedEVs({ cars }) {
//   return (
//     <section className="bg-background py-24">

//       <div className="mx-auto max-w-7xl px-5">

//         {/* Heading */}

//         <div className="mb-14 text-center">

//           <span className="rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-500">
//             Featured EVs
//           </span>

//           <h2 className="mt-5 text-4xl font-bold text-foreground lg:text-5xl">
//             Popular Electric Cars
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
//             Discover India's best electric vehicles with range,
//             battery, charging speed and latest pricing.
//           </p>

//         </div>

//         {/* Grid */}

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

//           {cars.map((car) => (

//             <article
//               key={car.id}
//               className="
//                 group
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-theme
//                 bg-card
//                 shadow-theme
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:border-green-500
//               "
//             >

//               {/* Image */}

//               <div className="relative h-60 overflow-hidden">

//                 <Image
//                   src={car.image}
//                   alt={car.name}
//                   fill
//                   className="object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 {/* Featured Badge */}

//                 <div className="absolute left-4 top-4 rounded-full bg-green-500 px-4 py-1 text-xs font-bold text-black">
//                   FEATURED
//                 </div>

//                 {/* Save */}

//                 <button
//                   className="
//                     absolute
//                     right-4
//                     top-4
//                     rounded-full
//                     bg-white/90
//                     p-2
//                     transition
//                     hover:bg-green-500
//                     hover:text-black
//                   "
//                 >
//                   <Heart size={18} />
//                 </button>

//               </div>

//               {/* Body */}

//               <div className="p-6">

//                 <p className="text-sm text-green-500">

//                   {car.brand.name}

//                 </p>

//                 <h3 className="mt-2 text-2xl font-bold text-foreground">

//                   {car.name}

//                 </h3>

//                 <p className="mt-3 text-xl font-bold text-green-500">

//                   {car.exShowroomPrice}

//                 </p>
//                                 {/* Quick Specs */}

//                 <div className="mt-6 grid grid-cols-3 gap-3">

//                   <div className="rounded-2xl bg-background p-3 text-center">

//                     <Gauge
//                       className="mx-auto text-green-500"
//                       size={22}
//                     />

//                     <p className="mt-2 text-xs text-muted">
//                       Range
//                     </p>

//                     <p className="mt-1 font-semibold text-foreground">
//                       {car.specs?.range || "-"}
//                     </p>

//                   </div>

//                   <div className="rounded-2xl bg-background p-3 text-center">

//                     <BatteryCharging
//                       className="mx-auto text-green-500"
//                       size={22}
//                     />

//                     <p className="mt-2 text-xs text-muted">
//                       Battery
//                     </p>

//                     <p className="mt-1 font-semibold text-foreground">
//                       {car.specs?.batteryCapacity || "-"}
//                     </p>

//                   </div>

//                   <div className="rounded-2xl bg-background p-3 text-center">

//                     <Zap
//                       className="mx-auto text-green-500"
//                       size={22}
//                     />

//                     <p className="mt-2 text-xs text-muted">
//                       Charging
//                     </p>

//                     <p className="mt-1 font-semibold text-foreground">
//                       {car.specs?.fastCharging || "-"}
//                     </p>

//                   </div>

//                 </div>

//                 {/* Buttons */}

//                 <div className="mt-7 flex gap-3">

//                   <Link
//                     href={`/comparison?car=${car.slug}`}
//                     className="
//                       flex
//                       flex-1
//                       items-center
//                       justify-center
//                       gap-2
//                       rounded-xl
//                       border
//                       border-theme
//                       py-3
//                       text-sm
//                       font-medium
//                       transition
//                       hover:border-green-500
//                     "
//                   >
//                     <Scale size={18} />

//                     Compare
//                   </Link>

//                   <Link
//                     href={`/ev/${car.slug}`}
//                     className="
//                       flex
//                       flex-1
//                       items-center
//                       justify-center
//                       gap-2
//                       rounded-xl
//                       bg-green-500
//                       py-3
//                       text-sm
//                       font-bold
//                       text-black
//                       transition
//                       hover:bg-green-400
//                     "
//                   >
//                     Details

//                     <ArrowRight size={18} />
//                   </Link>

//                 </div>

//               </div>

//             </article>

//           ))}

//         </div>

//         {/* View All */}

//         <div className="mt-14 flex justify-center">

//           <Link
//             href="/ev"
//             className="
//               inline-flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-green-500
//               px-8
//               py-4
//               font-semibold
//               text-green-500
//               transition
//               hover:bg-green-500
//               hover:text-black
//             "
//           >
//             View All Electric Cars

//             <ArrowRight size={20} />

//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

import {
  BatteryCharging,
  Gauge,
  Zap,
  Heart,
  ArrowRight,
  Scale,
} from "lucide-react";

export default function FeaturedEVs({ cars }) {
  return (
    <section className="bg-background py-20">

      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500">
            Featured Electric Cars
          </span>

          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
            Popular EVs in India
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Explore India's most popular electric cars with
            latest price, range, battery and charging details.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {cars.map((car) => (

            <article
              key={car.id}
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
                hover:-translate-y-2
                hover:border-green-500
              "
            >

              {/* Image */}

              <div className="relative h-48 overflow-hidden">

                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Featured */}

                <span className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                  Featured
                </span>

                {/* Wishlist */}

                <button
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-zinc-700
                    shadow-lg
                    transition
                    hover:bg-green-500
                    hover:text-black
                  "
                >
                  <Heart size={16} />
                </button>

              </div>

              {/* Content */}

              <div className="p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-green-500">

                  {car.brand.name}

                </p>

                <h3 className="mt-1 line-clamp-1 text-lg font-bold text-foreground">

                  {car.name}

                </h3>

                <p className="mt-2 text-xl font-bold text-green-500">

                  {car.exShowroomPrice}

                </p>

                {/* Quick Specs */}

                <div className="mt-4 flex items-center justify-between rounded-xl bg-background p-3">

                  <div className="text-center">

                    <Gauge
                      size={18}
                      className="mx-auto text-green-500"
                    />

                    <p className="mt-1 text-[11px] font-medium text-muted">

                       {car.claimedRange ? `${car.claimedRange} km` : "-"}

                    </p>

                  </div>

                  <div className="text-center">

                    <BatteryCharging
                      size={18}
                      className="mx-auto text-green-500"
                    />

                    <p className="mt-1 text-[11px] font-medium text-muted">

                     {car.batteryKwh ? `${car.batteryKwh} kWh` : "-"}

                    </p>

                  </div>

                  <div className="text-center">

                    <Zap
                      size={18}
                      className="mx-auto text-green-500"
                    />

                    <p className="mt-1 text-[11px] font-medium text-muted">

                       {car.dcCharging || "-"}

                    </p>

                  </div>

                </div>

                                {/* Buttons */}

                <div className="mt-5 flex gap-2">

                  <Link
                    href={`/comparison?car=${car.slug}`}
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-1
                      rounded-lg
                      border
                      border-theme
                      py-2.5
                      text-xs
                      font-semibold
                      text-foreground
                      transition
                      hover:border-green-500
                      hover:bg-green-500/10
                    "
                  >
                    <Scale size={14} />
                    Compare
                  </Link>

                  <Link
                    href={`/ev/${car.slug}`}
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-1
                      rounded-lg
                      bg-green-500
                      py-2.5
                      text-xs
                      font-bold
                      text-black
                      transition
                      hover:bg-green-400
                    "
                  >
                    Details
                    <ArrowRight size={14} />
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* View All */}

        <div className="mt-12 text-center">

          <Link
            href="/ev"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500
              px-7
              py-3
              font-semibold
              text-green-500
              transition
              hover:bg-green-500
              hover:text-black
            "
          >
            View All Electric Cars
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}