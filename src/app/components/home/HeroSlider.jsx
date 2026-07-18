"use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image: "/curvv-ev.jpg",
//     title: "Tata Curvv EV",
//     subtitle: "Future Ready Coupe SUV",
//     description:
//       "Discover India's smartest electric coupe SUV with premium features and long driving range.",
//   },
//   {
//     image: "/be6.jpg",
//     title: "Mahindra BE 6",
//     subtitle: "Born Electric",
//     description:
//       "Experience futuristic performance with Mahindra's next-generation electric SUV.",
//   },
//   {
//     image: "/windsor-ev.jpg",
//     title: "MG Windsor EV",
//     subtitle: "Luxury Meets Electric",
//     description:
//       "Premium electric mobility with cutting-edge technology and comfort.",
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden">

//       {slides.map((slide, index) => (
//         <div
//           key={slide.title}
//           className={`absolute inset-0 transition-all duration-700 ${
//             current === index
//               ? "opacity-100 scale-100"
//               : "opacity-0 scale-105"
//           }`}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             priority={index === 0}
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-black/55"></div>
//         </div>
//       ))}

//       <button
//         onClick={() =>
//           setCurrent(current === 0 ? slides.length - 1 : current - 1)
//         }
//         className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-green-500"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() =>
//           setCurrent((current + 1) % slides.length)
//         }
//         className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-green-500"
//       >
//         <ChevronRight />
//       </button>

//       <div className="absolute inset-0 z-10 flex items-center">

//         <div className="mx-auto w-full max-w-7xl px-6">

//           <span className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-black">
//             India's Smart EV Platform
//           </span>

//           <h1 className="mt-6 max-w-2xl text-5xl font-extrabold text-white lg:text-7xl">
//             {slides[current].title}
//           </h1>

//           <p className="mt-5 text-xl text-green-400">
//             {slides[current].subtitle}
//           </p>

//           <p className="mt-5 max-w-xl text-lg text-zinc-200">
//             {slides[current].description}
//           </p>

//           <div className="mt-10 flex gap-4">

//             <Link
//               href="/ev"
//               className="rounded-full bg-green-500 px-8 py-4 font-bold text-black hover:bg-green-400"
//             >
//               Explore EVs
//             </Link>

//             <Link
//               href="/comparison"
//               className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white hover:text-black"
//             >
//               Compare
//             </Link>

//           </div>

//         </div>

//       </div>

//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-3 rounded-full transition-all ${
//               current === index
//                 ? "w-10 bg-green-500"
//                 : "w-3 bg-white/40"
//             }`}
//           />
//         ))}

//       </div>

//     </section>
//   );
// }



import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/curvv-ev.jpg",
    title: "Tata Curvv EV",
    subtitle: "Future Ready Coupe SUV",
    description:
      "Discover India's smartest electric coupe SUV with premium features and long driving range.",
  },
  {
    image: "/be6.jpg",
    title: "Mahindra BE 6",
    subtitle: "Born Electric",
    description:
      "Experience futuristic performance with Mahindra's next-generation electric SUV.",
  },
  {
    image: "/windsor-ev.jpg",
    title: "MG Windsor EV",
    subtitle: "Luxury Meets Electric",
    description:
      "Premium electric mobility with cutting-edge technology and comfort.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden h-[420px] sm:h-[480px] lg:h-[540px]">

      {/* Slides */}

      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-700 ${
            current === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        </div>
      ))}

      {/* Previous */}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-green-500"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-green-500"
      >
        <ChevronRight size={22} />
      </button>

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-center">

        <div className="mx-auto w-full max-w-7xl px-6">

          <span className="inline-flex rounded-full bg-green-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black">
            India's Smart EV Platform
          </span>

          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-white lg:text-6xl">
            {slides[current].title}
          </h1>

          <h2 className="mt-3 text-lg font-semibold text-green-400 lg:text-xl">
            {slides[current].subtitle}
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-200">
            {slides[current].description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
                        <Link
              href="/ev"
              className="rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-green-400"
            >
              Explore EVs
            </Link>

            <Link
              href="/comparison"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              Compare EVs
            </Link>

          </div>

        </div>

      </div>

      {/* Slider Dots */}

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-green-500"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}

      </div>

    </section>
  );
}