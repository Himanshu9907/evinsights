// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import ActionButtons from "./ActionButtons";

// import {
//   BadgeCheck,
//   ChevronLeft,
//   ChevronRight,
//   Camera,
//   Star,
// } from "lucide-react";
// import HeroNavigation from "./HeroNavigation";

// export default function Hero({ vehicle }) {
//   const gallery =
//     vehicle.gallery?.length > 0
//       ? vehicle.gallery.map((g) => g.image)
//       : [vehicle.image];

//   const [activeImage, setActiveImage] = useState(gallery[0]);

//   const nextImage = () => {
//     const current = gallery.indexOf(activeImage);

//     setActiveImage(gallery[(current + 1) % gallery.length]);
//   };

//   const prevImage = () => {
//     const current = gallery.indexOf(activeImage);

//     setActiveImage(gallery[(current - 1 + gallery.length) % gallery.length]);
//   };

//   return (
//     <>
//       <HeroNavigation />

//       <section className="relative bg-background text-foreground">
//         {/* Glow */}

//         <div
//           className="
//         pointer-events-none
//         absolute
//         inset-0
//         bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.08),transparent_45%)]
//         "
//         />

//         {/* Hero Container */}

//         <div
//           className="
//         mx-auto
//         max-w-7xl
//         px-3
//         py-4
// sm:py-6
// lg:py-8
//         sm:px-5
//         md:py-6
//         lg:px-8
//         "
//         >
//           <div
//             className="
//           grid
// gap-8
// items-start
// lg:grid-cols-12
// lg:gap-10
//           "
//           >
//             {/* IMAGE */}

//             <div className="lg:col-span-7">
//               <div
//                 className="
//               overflow-hidden
//               rounded-3xl
//               border
//               border-theme
//               bg-card
//               shadow-theme
//               "
//               >
//                 <div className="relative">
//                   {vehicle.featured && (
//                     <div
//                       className="
//                     absolute
//                     left-3
//                     top-3
//                     z-20
//                     flex
//                     items-center
//                     gap-1.5
//                     rounded-full
//                     bg-green-500
//                     px-2.5
//                     py-1.5
//                     text-xs
//                     font-semibold
//                     text-black
//                     "
//                     >
//                       <BadgeCheck size={13} />
//                       Featured EV
//                     </div>
//                   )}

//                   <div
//                     className="
//                   absolute
//                   right-3
//                   top-3
//                   z-20
//                   rounded-full
//                   bg-background/80
//                   px-2
//                   py-1.5
//                   backdrop-blur
//                   "
//                   >
//                     <div
//                       className="
//                     flex
//                     items-center
//                     gap-1.5
//                     text-xs
//                     "
//                     >
//                       <Camera size={13} />

//                       {gallery.length}
//                     </div>
//                   </div>

//                   {/* Compact Main Image */}

//                 <div
//   className="
//     relative
//     w-full
//     aspect-[16/10]
//     sm:aspect-[16/9]
//     lg:aspect-[16/8]
//     overflow-hidden
//     bg-background
//   "
// >
//                     <Image
//                       src={activeImage}
//                       alt={vehicle.name}
//                       fill
//                       priority
//                       sizes="(max-width:768px)100vw,(max-width:1200px)60vw,700px"
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Thumbnails */}

//                 <div
//                   className="
//                 flex
//                 items-center
//                 gap-2
//                 border-t
//                 border-theme
//                 bg-background
//                 p-2.5
//                 "
//                 >
//                   <button
//                     onClick={prevImage}
//                     className="
//                   flex
//                   h-8
//                   w-8
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-theme
//                   hover:border-green-500
//                   hover:bg-green-500
//                   hover:text-black
//                   "
//                   >
//                     <ChevronLeft size={16} />
//                   </button>

//                  <div
//   className="
//     flex
//     flex-1
//     gap-2
//     overflow-x-auto
//     no-scrollbar
//     scroll-smooth
//     snap-x
//     snap-mandatory
//     py-1
//   "
// >
//                     {gallery.map((img, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setActiveImage(img)}
//                         className={`
// relative
// h-14
// w-24
// shrink-0
// snap-start
// overflow-hidden
// rounded-xl
// border-2
// transition-all
// duration-300

// ${
// activeImage===img
// ?"border-green-500 scale-105"
// :"border-theme hover:border-green-500"
// }

// sm:h-16
// sm:w-28
// `}
//                       >
//                         <Image src={img} alt="" fill className="object-cover" />
//                       </button>
//                     ))}
//                   </div>

//                   <button
//                     onClick={nextImage}
//                     className="
//                   flex
//                   h-8
//                   w-8
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-theme
//                   hover:border-green-500
//                   hover:bg-green-500
//                   hover:text-black
//                   "
//                   >
//                     <ChevronRight size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* DETAILS */}

//             <div
//               className="
//             flex
//             flex-col
//             justify-center
//             lg:col-span-5
//             "
//             >
//               <div className="flex items-center gap-3">
//                 {vehicle.brand?.logo && (
//                   <div
//                     className="
//                   flex
//                  h-12
// w-12
// sm:h-14
// sm:w-14
//                   items-center
//                   justify-center
//                   rounded-xl
//                   border
//                   border-theme
//                   bg-card
//                   "
//                   >
//                     <Image
//                       src={vehicle.brand.logo}
//                       alt=""
//                       width={30}
//                       height={30}
//                       className="object-contain"
//                     />
//                   </div>
//                 )}

//                 <div>
//                   <p
//                     className="
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-widest
//                   text-green-500
//                   "
//                   >
//                     {vehicle.brand?.name}
//                   </p>

//                   <p className="text-sm text-muted">Premium Electric Vehicle</p>
//                 </div>
//               </div>

//               <h1
//                 className="
//               mt-4
              
//               font-extrabold
//               leading-tight
//               text-2xl
// sm:text-4xl
// lg:text-5xl
// xl:text-6xl
//               "
//               >
//                 {vehicle.name}
//               </h1>

//               <div className="mt-4 flex items-center gap-3">
//                 <div className="flex text-yellow-400">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Star key={i} size={17} fill="currentColor" />
//                   ))}
//                 </div>

//                 <span className="font-semibold">
//                   {vehicle.rating?.overall || "4.8"}
//                 </span>

//                 <span className="text-sm text-muted">
//                   ({vehicle.rating?.reviews || 126})
//                 </span>
//               </div>

//               <div
//                 className="
//               mt-5
//               rounded-3xl
//               border
//               border-theme
//               bg-card
//               p-5
//               shadow-theme
//               "
//               >
//                 <p className="text-sm text-muted">Ex-showroom Price</p>

//                 <h2
//                   className="
//                 mt-2
//                 text-3xl
// sm:text-4xl
// lg:text-5xl
//                 font-extrabold
//                 text-green-500
//                 "
//                 >
//                   ₹ {(vehicle.exShowroomPrice / 100000).toFixed(2)} Lakh
//                 </h2>

//                 <p className="mt-3 text-sm text-muted">
//                   Final on-road price may vary depending on city, insurance and
//                   registration.
//                 </p>
//               </div>

//               <div className="mt-7">
//                 <ActionButtons vehicle={vehicle} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import ActionButtons from "./ActionButtons";
import HeroNavigation from "./HeroNavigation";

import {
  BadgeCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

function formatPrice(startingPrice, endingPrice) {
  if (!startingPrice) return "N/A";

  const start = (startingPrice / 100000).toFixed(2);

  if (!endingPrice || startingPrice === endingPrice) {
    return `₹${start} Lakh`;
  }

  const end = (endingPrice / 100000).toFixed(2);

  return `₹${start} - ${end} Lakh`;
}


export default function Hero({ vehicle }) {
  const gallery = useMemo(() => {
    if (vehicle?.gallery?.length) {
      return vehicle.gallery.map((item) => item.image);
    }

    return vehicle?.image ? [vehicle.image] : [];
  }, [vehicle]);

  const [activeImage, setActiveImage] = useState(gallery[0]);

  const currentIndex = gallery.indexOf(activeImage);

  const nextImage = () => {
    if (gallery.length <= 1) return;

    const next = (currentIndex + 1) % gallery.length;

    setActiveImage(gallery[next]);
  };

  const prevImage = () => {
    if (gallery.length <= 1) return;

    const prev = (currentIndex - 1 + gallery.length) % gallery.length;

    setActiveImage(gallery[prev]);
  };

  return (
    <>
      <HeroNavigation />

      <section className="relative overflow-x-hidden bg-background text-foreground">

        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.08),transparent_45%)]
          "
        />

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-5
            sm:px-6
            lg:px-8
          "
        >

          <div
            className="
              grid
              gap-6
              lg:grid-cols-12
              lg:gap-8
            "
          >

            {/* ===================== */}
            {/* LEFT IMAGE */}
            {/* ===================== */}

            <div className="lg:col-span-7 min-w-0">

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-theme
                  bg-card
                  shadow-theme
                "
              >

                <div className="relative">

                  {vehicle.featured && (

                    <div
                      className="
                        absolute
                        left-3
                        top-3
                        z-20
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-green-500
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-black
                      "
                    >
                      <BadgeCheck size={14} />
                      Featured EV
                    </div>

                  )}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      z-20
                      rounded-full
                      bg-background/80
                      px-3
                      py-1.5
                      backdrop-blur
                    "
                  >
                    <div className="flex items-center gap-1 text-xs">

                      <Camera size={13} />

                      {gallery.length}

                    </div>
                  </div>

                  {/* Main Image */}

                  <div
                    className="
                      relative
                      h-[230px]
                      sm:h-[320px]
                      md:h-[420px]
                      lg:h-[500px]
                      w-full
                      overflow-hidden
                    "
                  >

                    <Image
                      src={activeImage}
                      alt={vehicle.name}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                    />

                  </div>

                </div>

                {/* ===================== */}
                {/* THUMBNAILS */}
                {/* ===================== */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-t
                    border-theme
                    bg-background
                    p-2
                    overflow-hidden
                  "
                >

                  <button
                    onClick={prevImage}
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-theme
                      hover:border-green-500
                      hover:bg-green-500
                      hover:text-black
                    "
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div
                    className="
                      flex-1
                      min-w-0
                      overflow-x-auto
                      overflow-y-hidden
                      no-scrollbar
                    "
                  >

                    <div className="flex gap-2 w-max">

                      {gallery.map((img, index) => (

                        <button
                          key={index}
                          onClick={() => setActiveImage(img)}
                          className={`
                            relative
                            flex-none
                            h-16
                            w-24
                            overflow-hidden
                            rounded-xl
                            border-2
                            transition

                            ${
                              activeImage === img
                                ? "border-green-500"
                                : "border-theme"
                            }
                          `}
                        >

                          <Image
                            src={img}
                            alt=""
                            fill
                            className="object-cover"
                          />

                        </button>

                      ))}

                    </div>

                  </div>

                  <button
                    onClick={nextImage}
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-theme
                      hover:border-green-500
                      hover:bg-green-500
                      hover:text-black
                    "
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>

            </div>
                        {/* ===================== */}
            {/* RIGHT DETAILS */}
            {/* ===================== */}

            <div
              className="
                lg:col-span-5
                min-w-0
                flex
                flex-col
                justify-center
              "
            >

              {/* Brand */}

              <div className="flex items-center gap-3">

                {vehicle.brand?.logo && (

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-theme
                      bg-card
                    "
                  >

                    <Image
                      src={vehicle.brand.logo}
                      alt={vehicle.brand.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />

                  </div>

                )}

                <div className="min-w-0">

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-green-500
                    "
                  >
                    {vehicle.brand?.name}
                  </p>

                  <p className="text-sm text-muted">
                    Premium Electric Vehicle
                  </p>

                </div>

              </div>

              {/* Title */}

              <h1
                className="
                  mt-4
                  break-words
                  text-3xl
                  font-extrabold
                  leading-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {vehicle.name}
              </h1>

              {/* Rating */}

              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div className="flex text-yellow-400">

                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={17}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <span className="font-semibold">
                  {vehicle.rating?.overall || "4.8"}
                </span>

                <span className="text-sm text-muted">
                  ({vehicle.rating?.reviews || 126})
                </span>

              </div>

              {/* Price Card */}

              <div
                className="
                  mt-6
                  rounded-3xl
                  border
                  border-theme
                  bg-card
                  p-5
                  shadow-theme
                "
              >

                <p className="text-sm text-muted">
                  Ex-showroom Price
                </p>

                {/* <h2
                  className="
                    mt-2
                    break-words
                    text-3xl
                    font-extrabold
                    text-green-500
                    sm:text-4xl
                  "
                >
                  ₹ {(vehicle.exShowroomPrice / 100000).toFixed(2)} Lakh
                </h2> */}

                <h2
  className="
    mt-2
    break-words
    text-3xl
    font-extrabold
    text-green-500
    sm:text-4xl
  "
>
  {formatPrice(
    vehicle.startingPrice,
    vehicle.endingPrice
  )}
</h2>

                <p className="mt-3 text-sm leading-6 text-muted">
                  Final on-road price may vary depending on
                  city, insurance and registration.
                </p>

              </div>

              {/* Buttons */}

              <div className="mt-5">

                <ActionButtons vehicle={vehicle} />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}