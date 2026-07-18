// import { comparisons } from "@/data/comparisons";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import HeroComparison from "./components/HeroComparison";

// export default async function ComparisonPage({ params }) {
//   const { slug } = await params;

//   const comparison = comparisons.find((item) => item.slug === slug);

//   if (!comparison) {
//     notFound();
//   }

//   return (
//     <>
//       {/* <Navbar /> */}
//       <HeroComparison />
//       <main className="bg-black text-white min-h-screen pt-20">
//         {/* Hero */}
//         <section className="relative overflow-hidden border-b border-zinc-800">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

//           <div className="max-w-7xl mx-auto px-6 py-20 relative">
//             <Link
//               href="/comparison"
//               className="text-green-400 hover:text-green-300"
//             >
//               ← Back to Comparisons
//             </Link>

//             <div className="mt-10 text-center">
//               <span className="inline-block px-4 py-2 rounded-full border border-green-500 text-green-400">
//                 EV Comparison
//               </span>

//               <h1 className="text-4xl md:text-6xl font-bold mt-8">
//                 {comparison.car1}
//                 <span className="text-green-400"> VS </span>
//                 {comparison.car2}
//               </h1>

//               <p className="text-gray-400 mt-6 text-lg">
//                 Compare range, battery, performance, pricing and features side
//                 by side.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Car Cards */}
//         {/* Vehicle Images */}
//         <section className="max-w-7xl mx-auto px-6 py-16">
//           <div className="grid md:grid-cols-2 gap-8 mt-12">
//             <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
//               <img
//                 src={comparison.image1}
//                 alt={comparison.car1}
//                 className="w-full h-72 object-cover"
//               />

//               <div className="p-8">
//                 <h2 className="text-3xl font-bold">{comparison.car1}</h2>
//               </div>
//             </div>

//             <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
//               <img
//                 src={comparison.image2}
//                 alt={comparison.car2}
//                 className="w-full h-72 object-cover"
//               />

//               <div className="p-8">
//                 <h2 className="text-3xl font-bold">{comparison.car2}</h2>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Specs Table */}
//         <section className="max-w-7xl mx-auto px-6 pb-16">
//           <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
//             <div className="p-8 border-b border-zinc-800">
//               <h2 className="text-3xl font-bold">Detailed Specifications</h2>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-zinc-800">
//                     <th className="p-6 text-left">Feature</th>

//                     <th className="p-6 text-left text-green-400">
//                       {comparison.car1}
//                     </th>

//                     <th className="p-6 text-left text-green-400">
//                       {comparison.car2}
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {comparison.specs.map((spec) => (
//                     <tr key={spec.feature} className="border-b border-zinc-800">
//                       <td className="p-6 font-medium">{spec.feature}</td>

//                       <td className="p-6">{spec.car1}</td>

//                       <td className="p-6">{spec.car2}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* Verdict */}
//         <section className="max-w-7xl mx-auto px-6 pb-24">
//           <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-3xl p-10">
//             <h2 className="text-3xl font-bold mb-6">Final Verdict</h2>

//             <p className="text-gray-300 leading-8 text-lg">
//               Tata Curvv EV offers better range, bigger battery, faster
//               charging, ADAS and more premium features. Nexon EV remains a
//               value-for-money option.
//             </p>
//           </div>
//         </section>

//         {/* More Comparisons */}
//         <section className="max-w-7xl mx-auto px-6 pb-24">
//           <h2 className="text-3xl font-bold mb-8">More EV Comparisons</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {comparisons
//               .filter((item) => item.slug !== comparison.slug)
//               .map((item) => (
//                 <Link
//                   key={item.slug}
//                   href={`/comparison/${item.slug}`}
//                   className="group"
//                 >
//                   <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition">
//                     <div className="p-6">
//                       <div className="text-green-400 text-sm mb-3">
//                         EV Comparison
//                       </div>

//                       <h3 className="text-xl font-bold">{item.car1}</h3>

//                       <div className="text-green-400 my-2 font-semibold">
//                         VS
//                       </div>

//                       <h3 className="text-xl font-bold">{item.car2}</h3>

//                       <div className="mt-6 text-green-400 group-hover:translate-x-1 transition">
//                         Compare →
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </section>
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }


import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import HeroComparison from "./components/HeroComparison";
import StickyCompareNav from "./components/StickyCompareNav";
import QuickWinner from "./components/QuickWinner";
// import PriceComparison from "./components/PriceComparison";
// import SpecsComparison from "./components/SpecsComparison";
// import BatteryComparison from "./components/BatteryComparison";
// import ChargingComparison from "./components/ChargingComparison";
// import PerformanceComparison from "./components/PerformanceComparison";
// import FeaturesComparison from "./components/FeaturesComparison";
// import ProsConsComparison from "./components/ProsConsComparison";
// import Verdict from "./components/Verdict";
// import SimilarComparisons from "./components/SimilarComparisons";

export default async function ComparisonPage({ params }) {
  const { slug } = await params;

  const [car1Slug, car2Slug] = slug.split("-vs-");

  if (!car1Slug || !car2Slug) {
    notFound();
  }

  const [car1, car2] = await Promise.all([
    prisma.eVModel.findUnique({
      where: {
        slug: car1Slug,
      },
      include: {
        brand: true,
        specs: true,
        features: true,
        pros: true,
        cons: true,
        charging: true,
        performance: true,
        safety: true,
        ownership: true,
      },
    }),

    prisma.eVModel.findUnique({
      where: {
        slug: car2Slug,
      },
      include: {
        brand: true,
        specs: true,
        features: true,
        pros: true,
        cons: true,
        charging: true,
        performance: true,
        safety: true,
        ownership: true,
      },
    }),
  ]);

// const [car1, car2] = await Promise.all([
//   prisma.eVModel.findUnique({
//     where: {
//       slug: car1Slug,
//     },
//   }),

//   prisma.eVModel.findUnique({
//     where: {
//       slug: car2Slug,
//     },
//   }),
// ]);

// console.log("Car 1:", car1);
// console.log("Car 2:", car2);

  if (!car1 || !car2) {
    notFound();
  }

  const comparison = {
    car1,
    car2,
  };

  return (
    <main className="container mx-auto px-4 py-0">

      <StickyCompareNav />

      <HeroComparison comparison={comparison} />

      <QuickWinner comparison={comparison} />

      {/* <PriceComparison comparison={comparison} /> */}

      {/* <SpecsComparison comparison={comparison} /> */}

      {/* <BatteryComparison comparison={comparison} /> */}

      {/* <ChargingComparison comparison={comparison} /> */}
{/*  */}
      {/* <PerformanceComparison comparison={comparison} /> */}

      {/* <FeaturesComparison comparison={comparison} /> */}

      {/* <ProsConsComparison comparison={comparison} /> */}

      {/* <Verdict comparison={comparison} /> */}

      {/* <SimilarComparisons comparison={comparison} /> */}

    </main>
  );
}
