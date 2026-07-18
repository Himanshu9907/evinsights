// "use client";

// export default function HeroNavigation() {

//   const links = [
//     ["Overview","overview"],
//     ["Specifications","specifications"],
//     ["Battery","battery"],
//     ["Performance","performance"],
//     ["Variants","variants"],
//     ["Features","features"],
//     ["Gallery","gallery"],
//     ["Pros & Cons","proscons"],
//     ["FAQ","faq"],
//   ];


//   return (

//     <div
//       className="
//       sticky
//       top-16
//       z-40
//       border-y
//       border-theme
//       bg-card/95
//       backdrop-blur-xl
//       "
//     >

//       <div
//         className="
//         mx-auto
//         max-w-7xl
//         overflow-x-auto
//         px-3
//         no-scrollbar
//         "
//       >

//         <div
//           className="
//           flex
//           w-max
//           gap-2
//           py-2
//           "
//         >

//           {links.map(([title,id])=>(

//             <a
//               key={id}
//               href={`#${id}`}
//               className="
//               whitespace-nowrap
//               rounded-xl
//               px-4
//               py-2
//               text-sm
//               font-medium
//               text-muted
//               transition
//               hover:bg-green-500
//               hover:text-black
//               "
//             >

//               {title}

//             </a>

//           ))}

//         </div>

//       </div>

//     </div>

//   );
// }

"use client";

export default function HeroNavigation() {
  const links = [
    ["Overview", "overview"],
    ["Specifications", "specifications"],
    ["Battery", "battery"],
    ["Performance", "performance"],
    ["Variants", "variants"],
    ["Features", "features"],
    ["Gallery", "gallery"],
    ["Pros & Cons", "proscons"],
    ["FAQ", "faq"],
  ];

  return (
    <nav
      className="
        sticky
        top-[64px]
        lg:top-[80px]
        z-40
        border-y
        border-theme
        bg-background/95
        backdrop-blur-xl
        shadow-sm
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          overflow-x-auto
          scrollbar-hide
          px-2
          sm:px-4
        "
      >
        <div
          className="
            flex
            min-w-max
            items-center
            gap-2
            py-2
          "
        >
          {links.map(([title, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="
                shrink-0
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-muted
                transition-all
                duration-200
                hover:bg-green-500
                hover:text-black
              "
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}