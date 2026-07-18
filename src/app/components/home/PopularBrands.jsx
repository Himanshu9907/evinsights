

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function PopularBrands({ brands }) {
//   return (
//     <section className="relative overflow-hidden bg-background py-20">

//       {/* Background Glow */}

//       <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

//       <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-5">

//         {/* Heading */}

//         <div className="mb-14 text-center">

//           <span className="rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-500">
//             Browse By Brand
//           </span>

//           <h2 className="mt-5 text-4xl font-bold text-foreground lg:text-5xl">
//             India's Leading EV Manufacturers
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
//             Discover electric vehicles from the most trusted automobile brands.
//           </p>

//         </div>

//         {/* Cards */}

//         <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
//                     {brands.map((brand) => (
//             <Link
//               key={brand.id}
//               href={`/ev?brand=${brand.slug}`}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-theme
//                 bg-card
//                 p-8
//                 shadow-theme
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:border-green-500
//                 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]
//               "
//             >
//               {/* Hover Glow */}

//               <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
//                 <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-500/10 blur-3xl"></div>
//               </div>

//               {/* Logo */}

//               <div className="relative flex justify-center">

//                 <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background transition duration-500 group-hover:scale-110">

//                   {brand.logo ? (
//                     <Image
//                       src={brand.logo}
//                       alt={brand.name}
//                       width={70}
//                       height={70}
//                       className="object-contain"
//                     />
//                   ) : (
//                     <span className="text-5xl">🚗</span>
//                   )}

//                 </div>

//               </div>

//               {/* Brand */}

//               <h3 className="mt-8 text-center text-2xl font-bold text-foreground">
//                 {brand.name}
//               </h3>

//               <p className="mt-2 text-center text-muted">
//                 {brand._count.models} Electric Models
//               </p>

//               {/* CTA */}

//               <div className="mt-7 flex items-center justify-center gap-2 font-medium text-green-500">

//                 <span>Explore</span>

//                 <ArrowRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-2"
//                 />

//               </div>

//             </Link>
//           ))}

//         </div>

//         {/* Bottom Button */}

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
//               transition-all
//               duration-300
//               hover:bg-green-500
//               hover:text-black
//             "
//           >
//             View All Brands

//             <ArrowRight size={18} />
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function PopularBrands({ brands }) {
//   return (
//     <section className="relative overflow-hidden bg-background py-12 md:py-16 lg:py-20">

//       {/* Background Glow */}

//       <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

//       <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-5">

//         {/* Heading */}

//         <div className="mb-10 text-center md:mb-14">

//           <span
//             className="
//               inline-flex
//               rounded-full
//               bg-green-500/10
//               px-4
//               py-2
//               text-xs
//               font-semibold
//               text-green-500
//               sm:px-5
//               sm:text-sm
//             "
//           >
//             Browse By Brand
//           </span>

//           <h2
//             className="
//               mt-4
//               text-2xl
//               font-bold
//               text-foreground
//               sm:text-3xl
//               lg:mt-5
//               lg:text-5xl
//             "
//           >
//             India's Leading EV Manufacturers
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-3
//               max-w-xl
//               text-sm
//               text-muted
//               sm:text-base
//               lg:mt-4
//               lg:max-w-2xl
//               lg:text-lg
//             "
//           >
//             Discover electric vehicles from the most trusted automobile
//             brands.
//           </p>

//         </div>

//         {/* Brand Cards */}

//         <div
//           className="
//             grid
//             grid-cols-2
//             gap-3
//             sm:gap-4
//             md:grid-cols-3
//             lg:gap-6
//             xl:grid-cols-4
//           "
//         >

//           {brands.map((brand) => (

//             <Link
//               key={brand.id}
//               href={`/ev?brand=${brand.slug}`}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-theme
//                 bg-card
//                 p-4
//                 shadow-theme
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:border-green-500
//                 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]
//                 sm:p-5
//                 lg:rounded-3xl
//                 lg:p-8
//               "
//             >

//               {/* Hover Glow */}

//               <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

//                 <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-500/10 blur-3xl" />

//               </div>

//               {/* Logo */}

//               <div className="relative flex justify-center">

//                 <div
//                   className="
//                     flex
//                     h-16
//                     w-16
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-background
//                     transition
//                     duration-500
//                     group-hover:scale-110
//                     sm:h-20
//                     sm:w-20
//                     lg:h-24
//                     lg:w-24
//                   "
//                 >

//                   {brand.logo ? (
//                     <Image
//                       src={brand.logo}
//                       alt={brand.name}
//                       width={60}
//                       height={60}
//                       className="
//                         h-10
//                         w-10
//                         object-contain
//                         sm:h-14
//                         sm:w-14
//                         lg:h-16
//                         lg:w-16
//                       "
//                     />
//                   ) : (
//                     <span className="text-3xl sm:text-4xl lg:text-5xl">
//                       🚗
//                     </span>
//                   )}

//                 </div>

//               </div>

//               {/* Brand Name */}

//               <h3
//                 className="
//                   mt-4
//                   text-center
//                   text-base
//                   font-bold
//                   text-foreground
//                   sm:mt-5
//                   sm:text-lg
//                   lg:mt-8
//                   lg:text-2xl
//                 "
//               >
//                 {brand.name}
//               </h3>

//               {/* Models */}

//                             <p
//                 className="
//                   mt-1
//                   text-center
//                   text-xs
//                   text-muted
//                   sm:text-sm
//                   lg:mt-2
//                   lg:text-base
//                 "
//               >
//                 {brand._count.models} Electric Models
//               </p>

//               {/* CTA */}

//               <div
//                 className="
//                   mt-4
//                   flex
//                   items-center
//                   justify-center
//                   gap-1
//                   text-xs
//                   font-medium
//                   text-green-500
//                   sm:mt-5
//                   sm:gap-2
//                   sm:text-sm
//                   lg:mt-7
//                   lg:text-base
//                 "
//               >
//                 <span>Explore</span>

//                 <ArrowRight
//                   size={18}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-2
//                   "
//                 />

//               </div>

//             </Link>

//           ))}

//         </div>

//         {/* Bottom Button */}

//         <div className="mt-10 flex justify-center md:mt-14">

//           <Link
//             href="/ev"
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-green-500
//               px-5
//               py-3
//               text-sm
//               font-semibold
//               text-green-500
//               transition-all
//               duration-300
//               hover:bg-green-500
//               hover:text-black
//               sm:px-7
//               sm:py-3.5
//               sm:text-base
//               lg:px-8
//               lg:py-4
//             "
//           >
//             View All Brands

//             <ArrowRight size={18} />
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PopularBrands({ brands }) {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <div className="mb-10 text-center md:mb-14">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-green-500
            "
          >
            Browse Brands
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            India's Leading EV Brands
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-muted
              sm:text-base
            "
          >
            Explore India's fastest growing electric vehicle manufacturers,
            compare models and discover your perfect EV.
          </p>

        </div>

        {/* Grid */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-4
            xl:grid-cols-4
            xl:gap-6
          "
        >

          {brands.map((brand) => (

            <Link
              key={brand.id}
              href={`/ev?brand=${brand.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-theme
                bg-card/70
                p-4
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-green-500/40
                hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]
                sm:p-5
              "
            >

              {/* Premium Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  scale-x-0
                  bg-gradient-to-r
                  from-green-400
                  via-emerald-500
                  to-green-400
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Arrow */}

              <div
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-green-500/10
                  text-green-500
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              >
                <ArrowUpRight size={16} />
              </div>

              {/* Logo */}

              <div className="flex justify-center">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-background
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    sm:h-18
                    sm:w-18
                    lg:h-20
                    lg:w-20
                  "
                >

                  {brand.logo ? (

                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={54}
                      height={54}
                      className="
                        h-10
                        w-10
                        object-contain
                        sm:h-11
                        sm:w-11
                        lg:h-12
                        lg:w-12
                      "
                    />

                  ) : (

                    <span className="text-3xl">
                      🚗
                    </span>

                  )}

                </div>

              </div>

              {/* Brand */}

                            <div className="mt-5 text-center">

                <h3
                  className="
                    text-base
                    font-bold
                    text-foreground
                    transition-colors
                    duration-300
                    group-hover:text-green-500
                    sm:text-lg
                  "
                >
                  {brand.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    text-muted
                    sm:text-sm
                  "
                >
                  {brand._count.models} Electric Models
                </p>

              </div>

              {/* Divider */}

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Footer */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-muted
                  "
                >
                  Explore
                </span>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500/10
                    text-green-500
                    transition-all
                    duration-300
                    group-hover:bg-green-500
                    group-hover:text-white
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-12 flex justify-center">

          <Link
            href="/ev"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-500/20
              bg-card
              px-6
              py-3
              text-sm
              font-semibold
              text-foreground
              transition-all
              duration-300
              hover:border-green-500
              hover:bg-green-500
              hover:text-white
              hover:shadow-[0_15px_45px_rgba(34,197,94,.25)]
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            View All Brands

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>

    </section>
  );
}