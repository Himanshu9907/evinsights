// import Navbar from "@/app/components/Navbar";
// import { prisma } from "@/lib/prisma";
// import Footer from "@/app/components/Footer";

// export default async function EVDetailPage({ params }) {
//   const { slug } = await params;

//   const car = await prisma.eVModel.findUnique({
//     where: {
//       slug: slug,
//     },
//     include: {
//       brand: true,
//       specs: true,
//     },
//   });

//   if (!car) {
//     return <div>Car not found</div>;
//   }

//   return (
//     <>
//     <Navbar />
//     <main className="max-w-6xl mx-auto px-6 py-10 mt-20">
//      {/* Main Image */}
//       <img
//   src={car.image || "/ev-car.jpg"}
//   alt={car.name}
//   className="w-full h-[400px] object-cover rounded-2xl mb-8"
// />

//       {/* <h1 className="text-5xl font-bold">
//   {car.name}
// </h1>

// <p className="text-green-400 text-xl mt-2">
//   {car.brand.name}
// </p>

// <div className="grid md:grid-cols-3 gap-4 mt-8">
//   <div className="bg-zinc-900 p-6 rounded-2xl">
//     <h3 className="text-zinc-400">Price</h3>
//     <p className="text-2xl font-bold">{car.price}</p>
//   </div>

//   <div className="bg-zinc-900 p-6 rounded-2xl">
//     <h3 className="text-zinc-400">Range</h3>
//     <p className="text-2xl font-bold">{car.range}</p>
//   </div>

//   <div className="bg-zinc-900 p-6 rounded-2xl">
//     <h3 className="text-zinc-400">Battery</h3>
//     <p className="text-2xl font-bold">{car.battery}</p>
//   </div>
// </div>

// <h2 className="text-3xl font-bold mt-12 mb-6">
//   Specifications
// </h2>

// <div className="bg-zinc-900 rounded-2xl overflow-hidden">
//   {car.specs.map((spec) => (
//     <div
//       key={spec.id}
//       className="flex justify-between p-4 border-b border-zinc-800"
//     >
//       <span>{spec.key}</span>
//       <span>{spec.value}</span>
//     </div>
//   ))}
// </div> */}

// <div className="grid lg:grid-cols-4 gap-8">

//   <div className="lg:col-span-3">

//     {/* Hero */}
//     <h1 className="text-5xl font-bold">{car.name}</h1>

//     <p className="text-green-400 text-xl mt-2">
//       {car.brand.name}
//     </p>

//     {/* Quick Specs */}
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//       <div className="bg-zinc-900 p-6 rounded-2xl">
//         <p className="text-zinc-400">Price</p>
//         <p className="font-bold">{car.price}</p>
//       </div>

//       <div className="bg-zinc-900 p-6 rounded-2xl">
//         <p className="text-zinc-400">Range</p>
//         <p className="font-bold">{car.range}</p>
//       </div>

//       <div className="bg-zinc-900 p-6 rounded-2xl">
//         <p className="text-zinc-400">Battery</p>
//         <p className="font-bold">{car.battery}</p>
//       </div>

//       <div className="bg-zinc-900 p-6 rounded-2xl">
//         <p className="text-zinc-400">Charging</p>
//         <p className="font-bold">{car.charging}</p>
//       </div>
//     </div>

//     {/* Specifications */}
//     <h2 className="text-3xl font-bold mt-12 mb-6">
//       Specifications
//     </h2>

//     <div className="bg-zinc-900 rounded-2xl overflow-hidden">
//       {car.specs.map((spec) => (
//         <div
//           key={spec.id}
//           className="flex justify-between p-4 border-b border-zinc-800"
//         >
//           <span>{spec.key}</span>
//           <span>{spec.value}</span>
//         </div>
//       ))}
//     </div>

//   </div>

//   {/* Sidebar */}
//   {/* <aside className="space-y-6">

//     <div className="bg-zinc-900 p-6 rounded-2xl sticky top-24"> */}
//     <aside className="lg:col-span-1">
//   <div className="bg-zinc-900 p-6 rounded-2xl sticky top-24">
//       {/* <h3 className="text-xl font-bold mb-4">
//         Quick Overview
//       </h3>

//       <ul className="space-y-3">
//         <li>Price: {car.price}</li>
//         <li>Range: {car.range}</li>
//         <li>Battery: {car.battery}</li>
//         <li>Charging: {car.charging}</li>
//       </ul> */}

//       <div>
//     <h3 className="text-xl font-bold mb-4">
//       Quick Overview
//     </h3>

//     <ul className="space-y-3 text-zinc-300">
//       <li>💰 Price: {car.price}</li>
//       <li>🔋 Battery: {car.battery}</li>
//       <li>⚡ Range: {car.range}</li>
//       <li>🚀 Charging: {car.charging}</li>
//     </ul>
//   </div>

//   <div className="border-t border-zinc-800 pt-4">
//     <h4 className="font-semibold mb-3">
//       Key Highlights
//     </h4>

//     <ul className="space-y-2 text-sm text-zinc-400">
//       <li>✔ Long Driving Range</li>
//       <li>✔ Fast Charging Support</li>
//       <li>✔ Connected Car Tech</li>
//       <li>✔ 5 Star Safety Features</li>
//     </ul>
//   </div>

//   <div className="border-t border-zinc-800 pt-4">
//     <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold">
//       Compare This EV
//     </button>
//   </div>
//     </div>

//   </aside>

// </div>
      
//     </main>
//     <Footer />
//     </>
//   );
// }


import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import Hero from "./components/Hero";

export default async function EVDetailPage({ params }) {
  const { slug } = await params;

  const vehicle = await prisma.eVModel.findUnique({
    where: {
      slug,
    },
    include: {
      brand: true,
    },
  });

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <Hero vehicle={vehicle} />

    </main>
  );
}