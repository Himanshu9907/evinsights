// import { prisma } from "@/lib/prisma";
// import Link from "next/link";

// export default async function EVPage() {

//   const vehicles = await prisma.eVModel.findMany({
//     include: {
//       brand: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <div>
// <div className="max-w-7xl mx-auto p-10">

//     <h1 className="text-4xl font-bold mb-10">
//       All EVs
//     </h1>

//    <div className="max-w-7xl mx-auto px-6 py-12">
//   <div className="mb-10">
//     <h1 className="text-5xl font-bold text-white">
//       Explore <span className="text-green-400">Electric Vehicles</span>
//     </h1>

//     <p className="text-gray-400 mt-3 text-lg">
//       Browse EV specifications, pricing, battery, range and more.
//     </p>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {vehicles.map((vehicle) => (
//       <Link
//         key={vehicle.id}
//         href={`/ev/${vehicle.slug}`}
//       >
//         <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition-all duration-300 hover:-translate-y-2 group h-full">

//           <img
//             src={vehicle.image}
//             alt={vehicle.name}
//             className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
//           />

//           <div className="p-6">

//             <div className="flex items-center justify-between">

//               <span className="text-green-400 font-semibold">
//                 {vehicle.brand.name}
//               </span>

//               <span className="text-gray-500 text-sm">
//                 {vehicle.bodyType}
//               </span>

//             </div>

//             <h2 className="text-2xl font-bold mt-3">
//               {vehicle.name}
//             </h2>

//             <p className="text-green-400 text-2xl font-bold mt-2">
//               ₹
//               {vehicle.exShowroomPrice?.toLocaleString("en-IN")}
//             </p>

//             <div className="grid grid-cols-3 gap-4 mt-6">

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Range
//                 </p>

//                 <p className="font-semibold">
//                   {vehicle.claimedRange} km
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Battery
//                 </p>

//                 <p className="font-semibold">
//                   {vehicle.batteryKwh} kWh
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Power
//                 </p>

//                 <p className="font-semibold">
//                   {vehicle.powerHp} HP
//                 </p>
//               </div>

//             </div>

//             <button className="w-full mt-8 bg-green-500 text-black py-3 rounded-xl font-semibold hover:bg-green-400 transition">
//               View Details →
//             </button>

//           </div>

//         </div>
//       </Link>
//     ))}
//   </div>
// </div>

//   </div>
//     </div>
//   );
// }

// import Link from "next/link";
// import { prisma } from "@/lib/prisma";
// import EVSearchBar from "../components/EVSearchBar";

// export default async function EVPage() {
//   const vehicles = await prisma.eVModel.findMany({
//     include: {
//       brand: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <main className="min-h-screen bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
//         {/* Hero */}
//         <div className="mb-12">
//           <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
//             EV Database
//           </span>

//           <h1 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
//             Explore
//             <span className="text-green-400"> Electric Vehicles</span>
//           </h1>

//           <p className="mt-5 text-gray-400 text-base md:text-lg max-w-3xl">
//             Browse electric cars with complete specifications, battery,
//             performance, charging, price and range.
//           </p>
//         </div>

//         <div className="mt-10">
//   <EVSearchBar />
// </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-13">
//           {vehicles.map((vehicle) => (
//             <Link key={vehicle.id} href={`/ev/${vehicle.slug}`}>
//               <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-green-500 md:hover:-translate-y-2 h-full group cursor-pointer">

//                 {/* Image */}
//                 <div className="overflow-hidden">
//                   <img
//                     src={vehicle.image}
//                     alt={vehicle.name}
//                     className="w-full h-48 sm:h-56 object-cover transition duration-500 md:group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 md:p-6 flex flex-col h-full">

//                   {/* Brand */}
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-green-400 text-sm font-semibold">
//                       {vehicle.brand.name}
//                     </span>

//                     <span className="text-gray-500 text-sm">
//                       {vehicle.bodyType}
//                     </span>
//                   </div>

//                   {/* Name */}
//                   <h2 className="text-xl md:text-2xl font-bold leading-snug">
//                     {vehicle.name}
//                   </h2>

//                   {/* Price */}
//                   <p className="text-green-400 text-xl md:text-2xl font-bold mt-3">
//                     ₹
//                     {vehicle.exShowroomPrice?.toLocaleString("en-IN")}
//                   </p>

//                   {/* Specs */}
//                   <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6">

//                     <div className="bg-zinc-800 rounded-xl p-3 text-center">
//                       <p className="text-xs text-gray-500">Range</p>

//                       <p className="font-semibold text-sm md:text-base mt-1">
//                         {vehicle.claimedRange} km
//                       </p>
//                     </div>

//                     <div className="bg-zinc-800 rounded-xl p-3 text-center">
//                       <p className="text-xs text-gray-500">Battery</p>

//                       <p className="font-semibold text-sm md:text-base mt-1">
//                         {vehicle.batteryKwh} kWh
//                       </p>
//                     </div>

//                     <div className="bg-zinc-800 rounded-xl p-3 text-center">
//                       <p className="text-xs text-gray-500">Power</p>

//                       <p className="font-semibold text-sm md:text-base mt-1">
//                         {vehicle.powerHp} HP
//                       </p>
//                     </div>
//                   </div>

//                   {/* Button */}
//                   <button className="mt-8 w-full bg-green-500 hover:bg-green-400 text-black py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition">
//                     View Details →
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// import { prisma } from "@/lib/prisma";
// import EVListing from "./EVListing";
// import EVSearchBar from "./EVSearchBar";
// import Filters from "./Filters";

// export default async function EVPage({ searchParams }) {
//   const q = searchParams?.q ?? "";

//   const vehicles = await prisma.eVModel.findMany({
//     where: q
//       ? {
//           OR: [
//             {
//               name: {
//                 contains: q,
//                 mode: "insensitive",
//               },
//             },
//             {
//               brand: {
//                 name: {
//                   contains: q,
//                   mode: "insensitive",
//                 },
//               },
//             },
//           ],
//         }
//       : {},

//     include: {
//       brand: true,
//     },

//     orderBy: {
//       featured: "desc",
//     },
//   });

// export default async function EVPage({ searchParams }) {
//   const params = await searchParams;
//   const q = params?.q ?? "";

// const vehicles = await prisma.eVModel.findMany({
//   where: q
//     ? {
//         OR: [
//           {
//             name: {
//               contains: q,
//               mode: "insensitive",
//             },
//           },
//           {
//             brand: {
//               name: {
//                 contains: q,
//                 mode: "insensitive",
//               },
//             },
//           },
//         ],
//       }
//     : {},
//   include: {
//     brand: true,
//   },
//   orderBy: {
//     featured: "desc",
//   },
// });

//   const vehicles = await prisma.eVModel.findMany({
//   where: {
//     ...(brand
//       ? {
//           brand: {
//             slug: brand,
//           },
//         }
//       : {}),
//   },

//   include: {
//     brand: true,
//   },

//   orderBy: {
//     exShowroomPrice: "asc",
//   },
// });

//   return (
//     <main className="min-h-screen bg-black text-white">

//       <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">

//         <h1 className="text-4xl md:text-6xl font-bold">
//           Explore
//           <span className="text-green-400"> Electric Vehicles</span>
//         </h1>

//         <p className="text-gray-400 mt-4 max-w-2xl">
//           Browse electric cars with complete specifications,
//           battery, charging, performance and pricing.
//         </p>

//         <div className="mt-8">
//           <EVSearchBar />
//         </div>

//         <div className="mt-6">
//           <Filters brands={brands} />
//         </div>

//         <div className="mt-10">
//           <EVListing vehicles={vehicles} />
//         </div>

//       </section>

//     </main>
//   );
// }

import { prisma } from "@/lib/prisma";
import EVListing from "./EVListing";
import EVSearchBar from "./EVSearchBar";
import Filters from "./Filters";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function EVPage({ searchParams }) {
  const params = await searchParams;

  const q = params?.q ?? "";

  const brand = params?.brand ?? "";

  const price = params?.price ?? "";

  const range = params?.range ?? "";

  const battery = params?.battery ?? "";

  const sort = params?.sort || "";

  // Brands for Filter
  const brands = await prisma.eVBrand.findMany({
    orderBy: {
      name: "asc",
    },
  });

  // Vehicles
  const vehicles = await prisma.eVModel.findMany({
    where: {
      ...(q
        ? {
            OR: [
              {
                name: {
                  contains: q,
                  mode: "insensitive",
                },
              },
              {
                brand: {
                  name: {
                    contains: q,
                    mode: "insensitive",
                  },
                },
              },
            ],
          }
        : {}),

      ...(brand
        ? {
            brand: {
              slug: brand,
            },
          }
        : {}),

      ...(price
        ? {
            exShowroomPrice: {
              lte: Number(price) * 100000,
            },
          }
        : {}),

      ...(range
        ? {
            claimedRange: {
              gte: Number(range),
            },
          }
        : {}),

        ...(battery
  ? {
      batteryKwh: {
        gte: Number(battery),
      },
    }
  : {}),
    },

    include: {
      brand: true,
    },

    // orderBy: {
    //   exShowroomPrice: "asc",
    orderBy:
  sort === "price-asc"
    ? { exShowroomPrice: "asc" }
    : sort === "price-desc"
    ? { exShowroomPrice: "desc" }
    : sort === "range-desc"
    ? { claimedRange: "desc" }
    : sort === "battery-desc"
    ? { batteryKwh: "desc" }
    : sort === "newest"
    ? { launchDate: "desc" }
    : { exShowroomPrice: "asc" },
    
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white mt-20">
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <h1 className="text-4xl font-bold md:text-6xl">
            Explore
            <span className="text-green-400"> Electric Vehicles</span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Browse electric cars with complete specifications, battery,
            charging, performance and pricing.
          </p>

          <div className="mt-8">
            <EVSearchBar />
          </div>

          <div className="mt-6">
            <Filters brands={brands} />
          </div>

          <div className="mt-10">
            <EVListing vehicles={vehicles} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
