


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

// export default function Hero({ vehicle }) {
//   const gallery =
//     vehicle.gallery?.length > 0
//       ? vehicle.gallery.map((g) => g.image)
//       : [vehicle.image];

//   const [activeImage, setActiveImage] = useState(gallery[0]);

//   const nextImage = () => {
//     const current = gallery.indexOf(activeImage);

//     setActiveImage(
//       gallery[(current + 1) % gallery.length]
//     );
//   };

//   const prevImage = () => {
//     const current = gallery.indexOf(activeImage);

//     setActiveImage(
//       gallery[
//         (current - 1 + gallery.length) %
//           gallery.length
//       ]
//     );
//   };

//   return (
//     <section className="relative bg-background text-foreground">

//       {/* Background Glow */}

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.08),transparent_45%)]" />

//       {/* Sticky Navigation */}

//       <div
//         className="
//           sticky
//           top-16
//           z-50
//           border-y
//           border-theme
//           bg-card/95
//           backdrop-blur-xl
//           shadow-sm
//         "
//       >

//         <div className="mx-auto max-w-7xl overflow-x-auto no-scrollbar px-3">

//           <div className="flex w-max gap-2 py-3">

//             {[
//               ["Overview", "overview"],
//               ["Specifications", "specifications"],
//               ["Battery", "battery"],
//               ["Performance", "performance"],
//               ["Variants", "variants"],
//               ["Features", "features"],
//               ["Gallery", "gallery"],
//               ["Pros & Cons", "proscons"],
//               ["FAQ", "faq"],
//             ].map(([title, id]) => (

//               <a
//                 key={id}
//                 href={`#${id}`}
//                 className="
//                   whitespace-nowrap
//                   rounded-xl
//                   px-4
//                   py-2
//                   text-sm
//                   font-medium
//                   text-muted
//                   transition-all
//                   duration-300
//                   hover:bg-green-500
//                   hover:text-black
//                 "
//               >
//                 {title}
//               </a>

//             ))}

//           </div>

//         </div>

//       </div>

//       {/* Hero */}

//       <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">

//         <div className="grid gap-8 lg:grid-cols-12">

//           {/* LEFT */}

//           <div className="lg:col-span-7">

//             <div className="overflow-hidden rounded-3xl border border-theme bg-card shadow-theme">

//               <div className="relative">

//                 {vehicle.featured && (

//                   <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-black shadow-lg">

//                     <BadgeCheck size={15} />

//                     Featured EV

//                   </div>

//                 )}

//                 <div className="absolute right-4 top-4 z-20 rounded-full bg-background/80 px-3 py-2 backdrop-blur">

//                   <div className="flex items-center gap-2 text-xs md:text-sm">

//                     <Camera size={15} />

//                     {gallery.length} Photos

//                   </div>

//                 </div>

//                 {/* Main Image */}

//                 <div className="relative aspect-[16/10]">

//                   <Image
//                     src={activeImage}
//                     alt={vehicle.name}
//                     fill
//                     priority
//                     sizes="(max-width:768px)100vw,(max-width:1200px)60vw,700px"
//                     className="object-cover transition duration-700 hover:scale-105"
//                   />

//                 </div>

//               </div>

//               {/* Thumbnail Gallery */}

//               <div className="flex items-center gap-2 border-t border-theme bg-background p-3">

//                 <button
//                   onClick={prevImage}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-theme transition hover:border-green-500 hover:bg-green-500 hover:text-black"
//                 >
//                   <ChevronLeft size={18} />
//                 </button>

//                 <div className="flex flex-1 gap-2 overflow-x-auto no-scrollbar">
//                                     {gallery.map((img, index) => (

//                     <button
//                       key={index}
//                       onClick={() => setActiveImage(img)}
//                       className={`
//                         relative
//                         h-20
//                         w-28
//                         shrink-0
//                         overflow-hidden
//                         rounded-xl
//                         border-2
//                         transition-all
//                         duration-300
//                         md:h-24
//                         md:w-36
//                         ${
//                           activeImage === img
//                             ? "border-green-500"
//                             : "border-theme"
//                         }
//                       `}
//                     >

//                       <Image
//                         src={img}
//                         alt={`${vehicle.name}-${index}`}
//                         fill
//                         className="object-cover"
//                       />

//                     </button>

//                   ))}

//                 </div>

//                 <button
//                   onClick={nextImage}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-theme transition hover:border-green-500 hover:bg-green-500 hover:text-black"
//                 >
//                   <ChevronRight size={18} />
//                 </button>

//               </div>

//             </div>

//           </div>

//           {/* RIGHT */}

//           <div className="flex flex-col justify-center lg:col-span-5">

//             {/* Brand */}

//             <div className="flex items-center gap-4">

//               {vehicle.brand?.logo && (

//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-theme bg-card shadow-theme">

//                   <Image
//                     src={vehicle.brand.logo}
//                     alt={vehicle.brand.name}
//                     width={36}
//                     height={36}
//                     className="object-contain"
//                   />

//                 </div>

//               )}

//               <div>

//                 <p className="text-xs font-semibold uppercase tracking-[2px] text-green-500">
//                   {vehicle.brand?.name}
//                 </p>

//                 <p className="mt-1 text-sm text-muted">
//                   Premium Electric Vehicle
//                 </p>

//               </div>

//             </div>

//             {/* Title */}

//             <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">

//               {vehicle.name}

//             </h1>

//             {/* Rating */}

//             <div className="mt-5 flex flex-wrap items-center gap-4">

//               <div className="flex text-yellow-400">

//                 {[1,2,3,4,5].map((i)=>(

//                   <Star
//                     key={i}
//                     size={18}
//                     fill="currentColor"
//                   />

//                 ))}

//               </div>

//               <span className="font-semibold text-foreground">

//                 {vehicle.rating?.overall || "4.8"}

//               </span>

//               <span className="text-sm text-muted">

//                 ({vehicle.rating?.reviews || 126} Reviews)

//               </span>

//             </div>

//             {/* Price Card */}

//             <div className="mt-8 rounded-3xl border border-theme bg-card p-6 shadow-theme">

//               <p className="text-sm text-muted">

//                 Ex-showroom Price

//               </p>

//               <div className="mt-3 flex flex-wrap items-end gap-2">

//                 <h2 className="text-4xl font-extrabold text-green-500 md:text-5xl">

//                   ₹{" "}

//                   {vehicle.exShowroomPrice
//                     ? (vehicle.exShowroomPrice / 100000).toFixed(2)
//                     : "N/A"}

//                 </h2>

//                 <span className="pb-2 text-lg text-muted">

//                   Lakh

//                 </span>

//               </div>

//               <p className="mt-4 text-sm leading-6 text-muted">

//                 Final on-road price may vary depending on your city,
//                 insurance and registration charges.

//               </p>

//             </div>

//             {/* Action Buttons */}

//             <div className="mt-8">

//               <ActionButtons vehicle={vehicle} />

//             </div>
//                         </div>


//           </div>

//         </div>

//       {/* </div> */}

//     </section>

//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

import ActionButtons from "./ActionButtons";

import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Camera,
  Star,
} from "lucide-react";
import HeroNavigation from "./HeroNavigation";


export default function Hero({ vehicle }) {

  const gallery =
    vehicle.gallery?.length > 0
      ? vehicle.gallery.map((g) => g.image)
      : [vehicle.image];


  const [activeImage, setActiveImage] = useState(gallery[0]);


  const nextImage = () => {

    const current = gallery.indexOf(activeImage);

    setActiveImage(
      gallery[(current + 1) % gallery.length]
    );

  };


  const prevImage = () => {

    const current = gallery.indexOf(activeImage);

    setActiveImage(
      gallery[
        (current - 1 + gallery.length) %
        gallery.length
      ]
    );

  };


  return (
    <>
    <HeroNavigation />

    <section className="relative bg-background text-foreground">


      {/* Glow */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.08),transparent_45%)]
        "
      />



      {/* Navigation */}

     {/* <div
  className="
  fixed
  top-14
  left-0
  right-0
  z-40
  border-y
  border-theme
  bg-card/95
  backdrop-blur-xl
  "
>

        <div
          className="
          overflow-x-auto
          px-3
          no-scrollbar
          "
        >

          <div
            className="
            flex
            w-max
            gap-1.5
            py-1.5
            md:gap-2
            md:py-2
            "
          >

            {[
              ["Overview","overview"],
              ["Specifications","specifications"],
              ["Battery","battery"],
              ["Performance","performance"],
              ["Variants","variants"],
              ["Features","features"],
              ["Gallery","gallery"],
              ["Pros & Cons","proscons"],
              ["FAQ","faq"],
            ].map(([title,id])=>(


              <a
                key={id}
                href={`#${id}`}
                className="
                whitespace-nowrap
                rounded-lg
                px-3
                py-1.5
                text-xs
                font-medium
                text-muted
                transition
                hover:bg-green-500
                hover:text-black
                md:px-4
                md:py-2
                md:text-sm
                "
              >

                {title}

              </a>


            ))}

          </div>


        </div>

      </div> */}






      {/* Hero Container */}

      <div
        className="
        mx-auto
        max-w-7xl
        px-3
        py-5
        sm:px-5
        md:py-6
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




          {/* IMAGE */}


          <div className="lg:col-span-7">


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
                    gap-1.5
                    rounded-full
                    bg-green-500
                    px-2.5
                    py-1.5
                    text-xs
                    font-semibold
                    text-black
                    "
                  >

                    <BadgeCheck size={13}/>

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
                  px-2
                  py-1.5
                  backdrop-blur
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    "
                  >

                    <Camera size={13}/>

                    {gallery.length}

                  </div>

                </div>





                {/* Compact Main Image */}


                <div
                  className="
                  relative
                  aspect-[16/8]
                  sm:aspect-[16/9]
                  lg:aspect-[16/10]
                  "
                >

                  {/* <Image
                    src={activeImage}
                    alt={vehicle.name}
                    fill
                    priority
                    sizes="
                    (max-width:768px)100vw,
                    (max-width:1200px)60vw,
                    700px
                    "
                    className="
                    object-cover
                    transition
                    duration-700
                    "
                  /> */}

                  

                </div>



              </div>







              {/* Thumbnails */}


              <div
                className="
                flex
                items-center
                gap-2
                border-t
                border-theme
                bg-background
                p-2.5
                "
              >



                <button
                  onClick={prevImage}
                  className="
                  flex
                  h-8
                  w-8
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

                  <ChevronLeft size={16}/>

                </button>





                <div
                  className="
                  flex
                  flex-1
                  gap-2
                  overflow-x-auto
                  no-scrollbar
                  "
                >

                  {gallery.map((img,index)=>(


                    <button
                      key={index}
                      onClick={()=>setActiveImage(img)}
                      className={`
                      relative
                      h-12
                      w-20
                      shrink-0
                      overflow-hidden
                      rounded-lg
                      border-2
                      ${
                        activeImage===img
                        ?"border-green-500"
                        :"border-theme"
                      }
                      sm:h-16
                      sm:w-24
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






                <button
                  onClick={nextImage}
                  className="
                  flex
                  h-8
                  w-8
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

                  <ChevronRight size={16}/>

                </button>



              </div>


            </div>


          </div>








          {/* DETAILS */}


          <div
            className="
            flex
            flex-col
            justify-center
            lg:col-span-5
            "
          >


            <div className="flex items-center gap-3">


              {vehicle.brand?.logo && (

                <div
                  className="
                  flex
                  h-11
                  w-11
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
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain"
                  />

                </div>

              )}




              <div>

                <p
                  className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
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





            <h1
              className="
              mt-4
              text-3xl
              font-extrabold
              leading-tight
              sm:text-4xl
              lg:text-5xl
              "
            >

              {vehicle.name}

            </h1>






            <div className="mt-4 flex items-center gap-3">


              <div className="flex text-yellow-400">

                {[1,2,3,4,5].map(i=>(

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






            <div
              className="
              mt-5
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


              <h2
                className="
                mt-2
                text-4xl
                font-extrabold
                text-green-500
                "
              >

                ₹ {(vehicle.exShowroomPrice/100000).toFixed(2)} Lakh

              </h2>


              <p className="mt-3 text-sm text-muted">

                Final on-road price may vary depending on city,
                insurance and registration.

              </p>


            </div>





            <div className="mt-5">

              <ActionButtons vehicle={vehicle}/>

            </div>



          </div>



        </div>


      </div>


    </section>
    </>

  );

}