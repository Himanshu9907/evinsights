// "use client";

// import { useEffect, useState } from "react";

// import {
//   LayoutDashboard,
//   Trophy,
//   IndianRupee,
//   BatteryCharging,
//   Zap,
//   Gauge,
//   Star,
//   ThumbsUp,
//   Flag,
// } from "lucide-react";

// const sections = [
//   {
//     id: "overview",
//     label: "Overview",
//     icon: LayoutDashboard,
//   },
//   {
//     id: "quick-winner",
//     label: "Winner",
//     icon: Trophy,
//   },
//   {
//     id: "price",
//     label: "Price",
//     icon: IndianRupee,
//   },
//   {
//     id: "battery",
//     label: "Battery",
//     icon: BatteryCharging,
//   },
//   {
//     id: "charging",
//     label: "Charging",
//     icon: Zap,
//   },
//   {
//     id: "performance",
//     label: "Performance",
//     icon: Gauge,
//   },
//   {
//     id: "features",
//     label: "Features",
//     icon: Star,
//   },
//   {
//     id: "pros-cons",
//     label: "Pros & Cons",
//     icon: ThumbsUp,
//   },
//   {
//     id: "verdict",
//     label: "Verdict",
//     icon: Flag,
//   },
// ];

// export default function StickyCompareNav() {
//   const [active, setActive] = useState("overview");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: "-30% 0px -60% 0px",
//         threshold: 0,
//       }
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section.id);

//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   function scrollToSection(id) {
//     const element = document.getElementById(id);

//     if (!element) return;

//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }

//   return (
//     <div
//       className="
//         sticky
//         top-15
//         md:top-20
//         z-40
//       "
//     >
//       <div
//         className="
//           rounded-2xl
//           border
//           border-theme
//           bg-card/90
//           shadow-theme
//           backdrop-blur-xl
//         "
//       >
//         <div
//           className="
//             flex
//             gap-2
//             overflow-x-auto
//             p-3
//             scrollbar-hide
//           "
//         >

//                   {sections.map((section) => {
//             const Icon = section.icon;

//             const isActive = active === section.id;

//             return (
//               <button
//                 key={section.id}
//                 onClick={() => scrollToSection(section.id)}
//                 className={`
//                   group
//                   relative
//                   flex
//                   shrink-0
//                   items-center
//                   gap-2
//                   rounded-xl
//                   px-5
//                   py-3
//                   text-sm
//                   font-semibold
//                   transition-all
//                   duration-300

//                   ${
//                     isActive
//                       ? `
//                         bg-green-500
//                         text-black
//                         shadow-lg
//                       `
//                       : `
//                         bg-background
//                         text-muted
//                         border
//                         border-theme
//                         hover:border-green-500
//                         hover:bg-green-500/10
//                         hover:text-green-500
//                       `
//                   }
//                 `}
//               >
//                 {/* Icon */}

//                 <Icon
//                   size={18}
//                   className={`
//                     transition-transform
//                     duration-300
//                     ${
//                       isActive
//                         ? "scale-110"
//                         : "group-hover:scale-110"
//                     }
//                   `}
//                 />

//                 {/* Label */}

//                 <span className="whitespace-nowrap">
//                   {section.label}
//                 </span>

//                 {/* Active Dot */}

//                 {isActive && (
//                   <span
//                     className="
//                       absolute
//                       -bottom-1
//                       left-1/2
//                       h-2
//                       w-2
//                       -translate-x-1/2
//                       rounded-full
//                       bg-black
//                     "
//                   />
//                 )}
//               </button>
//             );
//           })}

//                   </div>

//         {/* Bottom Gradient Line */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-x-0
//             bottom-0
//             h-px
//             bg-gradient-to-r
//             from-transparent
//             via-green-500/40
//             to-transparent
//           "
//         />

//       </div>

//       {/* Mobile Scroll Hint */}

//       <div
//         className="
//           mt-3
//           flex
//           justify-center
//           md:hidden
//         "
//       >
//         <span
//           className="
//             rounded-full
//             border
//             border-theme
//             bg-background
//             px-3
//             py-1
//             text-xs
//             text-muted
//           "
//         >
//           ← Swipe to see more →
//         </span>
//       </div>

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Trophy,
  IndianRupee,
  BatteryCharging,
  Zap,
  Gauge,
  Star,
  ThumbsUp,
  Flag,
} from "lucide-react";

const sections = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "quick-winner", label: "Winner", icon: Trophy },
  { id: "price", label: "Price", icon: IndianRupee },
  { id: "battery", label: "Battery", icon: BatteryCharging },
  { id: "charging", label: "Charging", icon: Zap },
  { id: "performance", label: "Performance", icon: Gauge },
  { id: "features", label: "Features", icon: Star },
  { id: "pros-cons", label: "Pros & Cons", icon: ThumbsUp },
  { id: "verdict", label: "Verdict", icon: Flag },
];

export default function StickyCompareNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  function scrollToSection(id) {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight =
      window.innerWidth >= 1024 ? 140 : 120;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  return (
    <nav
      className="
        sticky
        top-16
        lg:top-20
        z-40
        w-full
      "
    >
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-theme
          bg-background/90
          shadow-theme
          backdrop-blur-xl
        "
      >
       <div
  className="
    flex
    w-full
    gap-2
    overflow-x-auto
    overflow-y-hidden
    whitespace-nowrap
    px-3
    py-3
    scrollbar-hide
    touch-pan-x
    [-webkit-overflow-scrolling:touch]
  "
>
          {sections.map((section) => {
            const Icon = section.icon;

            const isActive =
              active === section.id;

            return (
              <button
                key={section.id}
                onClick={() =>
                  scrollToSection(section.id)
                }
                className={`
                  group
                  relative
                  flex
                  shrink-0
                  snap-start
                  items-center
                  gap-2
                  rounded-xl
                  px-4
                  py-3
                  sm:px-5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-green-500
                        text-black
                        shadow-lg
                      `
                      : `
                        border
                        border-theme
                        bg-card
                        text-muted
                        hover:border-green-500
                        hover:bg-green-500/10
                        hover:text-green-500
                      `
                  }
                `}
              >
                <Icon
                  size={17}
                  className={`
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "scale-110"
                        : "group-hover:scale-110"
                    }
                  `}
                />

                <span className="whitespace-nowrap text-[13px] sm:text-sm">
                  {section.label}
                </span>

                {isActive && (
                  <span
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-1.5
                      w-1.5
                      -translate-x-1/2
                      rounded-full
                      bg-black
                    "
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-green-500/40
            to-transparent
          "
        />
      </div>

      <div
        className="
          mt-2
          flex
          justify-center
          lg:hidden
        "
      >
        <span
          className="
            rounded-full
            border
            border-theme
            bg-background
            px-3
            py-1
            text-xs
            text-muted
          "
        >
          ← Swipe to see more →
        </span>
      </div>
    </nav>
  );
}