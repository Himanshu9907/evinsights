// // "use client";

// // import { useState } from "react";
// // import {
// //   ChevronDown,
// //   ChevronUp,
// //   BatteryCharging,
// //   Zap,
// //   Gauge,
// //   CheckCircle2,
// //   BadgeCheck,
// // } from "lucide-react";

// // export default function VariantAccordion({ variant }) {
// //   const [open, setOpen] = useState(variant.recommended);

// //   return (
// //     <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-green-500">

// //       {/* Header */}

// //       <button
// //         onClick={() => setOpen(!open)}
// //         className="flex w-full items-center justify-between p-5 text-left"
// //       >
// //         <div className="flex-1">

// //           <div className="flex items-center gap-3 flex-wrap">

// //             <h3 className="text-xl font-bold text-white">
// //               {variant.name}
// //             </h3>

// //             {variant.recommended && (
// //               <span className="flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-black">
// //                 <BadgeCheck size={14} />
// //                 Recommended
// //               </span>
// //             )}

// //           </div>

// //           <p className="mt-2 text-2xl font-bold text-green-400">
// //             ₹ {(variant.price / 100000).toFixed(2)} Lakh
// //           </p>

// //           <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-400">

// //             <span>{variant.battery}</span>

// //             <span>{variant.range}</span>

// //             <span>{variant.power}</span>

// //           </div>

// //         </div>

// //         <div className="ml-4 text-zinc-400">
// //           {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
// //         </div>
// //       </button>

// //       {/* Body */}

// //       <div
// //         className={`transition-all duration-300 ${
// //           open ? "max-h-[500px]" : "max-h-0"
// //         } overflow-hidden`}
// //       >
// //         <div className="border-t border-zinc-800 p-5">

// //           {/* Specs */}

// //           <div className="grid gap-4 sm:grid-cols-3">

// //             <div className="flex items-center gap-3">

// //               <BatteryCharging
// //                 size={18}
// //                 className="text-green-400"
// //               />

// //               <div>

// //                 <p className="text-xs text-zinc-500">
// //                   Battery
// //                 </p>

// //                 <p className="font-semibold">
// //                   {variant.battery}
// //                 </p>

// //               </div>

// //             </div>

// //             <div className="flex items-center gap-3">

// //               <Zap
// //                 size={18}
// //                 className="text-green-400"
// //               />

// //               <div>

// //                 <p className="text-xs text-zinc-500">
// //                   Range
// //                 </p>

// //                 <p className="font-semibold">
// //                   {variant.range}
// //                 </p>

// //               </div>

// //             </div>

// //             <div className="flex items-center gap-3">

// //               <Gauge
// //                 size={18}
// //                 className="text-green-400"
// //               />

// //               <div>

// //                 <p className="text-xs text-zinc-500">
// //                   Power
// //                 </p>

// //                 <p className="font-semibold">
// //                   {variant.power}
// //                 </p>

// //               </div>

// //             </div>

// //           </div>

// //           {/* Features */}

// //           <div className="mt-6">

// //             <h4 className="mb-3 font-semibold text-white">
// //               Key Features
// //             </h4>

// //             <div className="grid gap-2 sm:grid-cols-2">

// //               {variant.features.map((feature) => (
// //                 <div
// //                   key={feature}
// //                   className="flex items-center gap-2 text-sm"
// //                 >
// //                   <CheckCircle2
// //                     size={16}
// //                     className="text-green-400"
// //                   />

// //                   <span className="text-zinc-300">
// //                     {feature}
// //                   </span>

// //                 </div>
// //               ))}

// //             </div>

// //           </div>

// //           {/* Button */}

// //           <button className="mt-6 w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400">

// //             View Full Specifications

// //           </button>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import {
//   ChevronDown,
//   BatteryCharging,
//   Gauge,
//   Zap,
//   CheckCircle2,
//   Star,
// } from "lucide-react";

// export default function VariantAccordion({ variant }) {
//   const [open, setOpen] = useState(variant.recommended || false);

//   return (
//     <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-green-500">

//       {/* Header */}

//       <button
//         onClick={() => setOpen(!open)}
//         className="flex w-full items-center justify-between p-5 text-left"
//       >
//         <div className="flex-1">

//           <div className="flex items-center gap-3 flex-wrap">

//             <h3 className="text-lg font-semibold text-white">
//               {variant.name}
//             </h3>

//             {variant.recommended && (
//               <span className="rounded-full bg-green-500/15 px-2 py-1 text-[11px] font-semibold text-green-400">
//                 ⭐ Best Value
//               </span>
//             )}

//           </div>

//           <p className="mt-2 text-xl font-bold text-green-400">
//             ₹ {(variant.price / 100000).toFixed(2)} Lakh
//           </p>

//           <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-400">

//             <span>{variant.battery}</span>

//             <span>•</span>

//             <span>{variant.range}</span>

//             <span>•</span>

//             <span>{variant.power}</span>

//           </div>

//         </div>

//         <ChevronDown
//           size={22}
//           className={`text-zinc-400 transition duration-300 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {/* Body */}

//       <div
//         className={`grid transition-all duration-300 ${
//           open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
//         }`}
//       >
//         <div className="overflow-hidden">

//           <div className="border-t border-zinc-800 p-5">

//             <div className="grid gap-8 lg:grid-cols-2">

//               {/* Specifications */}

//               <div>

//                 <h4 className="mb-4 font-semibold text-white">
//                   Specifications
//                 </h4>

//                 <div className="space-y-4">

//                   <div className="flex justify-between">

//                     <span className="flex items-center gap-2 text-zinc-400">

//                       <BatteryCharging size={16} />

//                       Battery

//                     </span>

//                     <span className="font-medium text-white">
//                       {variant.battery}
//                     </span>

//                   </div>

//                   <div className="flex justify-between">

//                     <span className="flex items-center gap-2 text-zinc-400">

//                       <Zap size={16} />

//                       Range

//                     </span>

//                     <span className="font-medium text-white">
//                       {variant.range}
//                     </span>

//                   </div>

//                   <div className="flex justify-between">

//                     <span className="flex items-center gap-2 text-zinc-400">

//                       <Gauge size={16} />

//                       Power

//                     </span>

//                     <span className="font-medium text-white">
//                       {variant.power}
//                     </span>

//                   </div>

//                 </div>

//               </div>

//               {/* Features */}

//               <div>

//                 <h4 className="mb-4 font-semibold text-white">
//                   Key Features
//                 </h4>

//                 <div className="space-y-3">

//                   {variant.features.map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-2"
//                     >

//                       <CheckCircle2
//                         size={16}
//                         className="text-green-400"
//                       />

//                       <span className="text-sm text-zinc-300">
//                         {item}
//                       </span>

//                     </div>
//                   ))}

//                 </div>

//               </div>

//             </div>

//             {/* Buttons */}

//             <div className="mt-6 flex flex-col gap-3 sm:flex-row">

//               <button
//                 className="
//                   flex-1
//                   rounded-xl
//                   border
//                   border-zinc-700
//                   py-3
//                   font-medium
//                   text-white
//                   transition
//                   hover:border-green-500
//                 "
//               >
//                 Compare Variant
//               </button>

//               <button
//                 className="
//                   flex-1
//                   rounded-xl
//                   bg-green-500
//                   py-3
//                   font-medium
//                   text-black
//                   transition
//                   hover:bg-green-400
//                 "
//               >
//                 View Details
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }