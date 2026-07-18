
// import { prisma } from "@/lib/prisma";
// import EVListing from "./EVListing";
// import EVSearchBar from "./EVSearchBar";
// import Filters from "./Filters";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default async function EVPage({ searchParams }) {
//   const params = await searchParams;

//   const q = params?.q ?? "";

//   const brand = params?.brand ?? "";

//   const price = params?.price ?? "";

//   const range = params?.range ?? "";

//   const battery = params?.battery ?? "";

//   const sort = params?.sort || "";

//   // Brands for Filter
//   const brands = await prisma.eVBrand.findMany({
//     orderBy: {
//       name: "asc",
//     },
//   });

//   // Vehicles
//   const vehicles = await prisma.eVModel.findMany({
//     where: {
//       ...(q
//         ? {
//             OR: [
//               {
//                 name: {
//                   contains: q,
//                   mode: "insensitive",
//                 },
//               },
//               {
//                 brand: {
//                   name: {
//                     contains: q,
//                     mode: "insensitive",
//                   },
//                 },
//               },
//             ],
//           }
//         : {}),

//       ...(brand
//         ? {
//             brand: {
//               slug: brand,
//             },
//           }
//         : {}),

//       ...(price
//         ? {
//             exShowroomPrice: {
//               lte: Number(price) * 100000,
//             },
//           }
//         : {}),

//       ...(range
//         ? {
//             claimedRange: {
//               gte: Number(range),
//             },
//           }
//         : {}),

//         ...(battery
//   ? {
//       batteryKwh: {
//         gte: Number(battery),
//       },
//     }
//   : {}),
//     },

//     include: {
//       brand: true,
//     },

//     // orderBy: {
//     //   exShowroomPrice: "asc",
//     orderBy:
//   sort === "price-asc"
//     ? { exShowroomPrice: "asc" }
//     : sort === "price-desc"
//     ? { exShowroomPrice: "desc" }
//     : sort === "range-desc"
//     ? { claimedRange: "desc" }
//     : sort === "battery-desc"
//     ? { batteryKwh: "desc" }
//     : sort === "newest"
//     ? { launchDate: "desc" }
//     : { exShowroomPrice: "asc" },
    
//   });

//   return (
//     <>
//       {/* <Navbar /> */}
//       <main className="min-h-screen bg-black text-white mt-20">
//         <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
//           <h1 className="text-4xl font-bold md:text-6xl">
//             Explore
//             <span className="text-green-400"> Electric Vehicles</span>
//           </h1>

//           <p className="mt-4 max-w-2xl text-gray-400">
//             Browse electric cars with complete specifications, battery,
//             charging, performance and pricing.
//           </p>

//           <div className="mt-8">
//             <EVSearchBar />
//           </div>

//           <div className="mt-6">
//             <Filters brands={brands} />
//           </div>

//           <div className="mt-10">
//             <EVListing vehicles={vehicles} />
//           </div>
//         </section>
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }


// import { prisma } from "@/lib/prisma";

// import EVListing from "./EVListing";
// import EVSearchBar from "./EVSearchBar";
// import Filters from "./Filters";
// import Pagination from "./Pagination";

// export default async function EVPage({ searchParams }) {
//   const params = await searchParams;

//   const page = Number(params?.page || 1);

//   const limit = 9;

//   const skip = (page - 1) * limit;

//   const q = params?.q ?? "";
//   const brand = params?.brand ?? "";
//   const price = params?.price ?? "";
//   const range = params?.range ?? "";
//   const battery = params?.battery ?? "";
//   const sort = params?.sort ?? "";

//   // Brands
//   const brands = await prisma.eVBrand.findMany({
//     orderBy: {
//       name: "asc",
//     },
//   });

//   // Vehicles
//   const vehicles = await prisma.eVModel.findMany({
//     where: {
//       ...(q
//         ? {
//             OR: [
//               {
//                 name: {
//                   contains: q,
//                   mode: "insensitive",
//                 },
//               },
//               {
//                 brand: {
//                   name: {
//                     contains: q,
//                     mode: "insensitive",
//                   },
//                 },
//               },
//             ],
//           }
//         : {}),

//       ...(brand
//         ? {
//             brand: {
//               slug: brand,
//             },
//           }
//         : {}),

//       ...(price
//         ? {
//             exShowroomPrice: {
//               lte: Number(price) * 100000,
//             },
//           }
//         : {}),

//       ...(range
//         ? {
//             claimedRange: {
//               gte: Number(range),
//             },
//           }
//         : {}),

//       ...(battery
//         ? {
//             batteryKwh: {
//               gte: Number(battery),
//             },
//           }
//         : {}),
//     },

//     include: {
//       brand: true,
//     },

//     take: limit,
//       skip,

//     orderBy:
//       sort === "price-asc"
//         ? { exShowroomPrice: "asc" }
//         : sort === "price-desc"
//         ? { exShowroomPrice: "desc" }
//         : sort === "range-desc"
//         ? { claimedRange: "desc" }
//         : sort === "battery-desc"
//         ? { batteryKwh: "desc" }
//         : sort === "newest"
//         ? { launchDate: "desc" }
//         : { exShowroomPrice: "asc" },
//   });

 

// const totalVehicles = await prisma.eVModel.count({
//   where: {
//     ...(q
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
//       : {}),

//     ...(brand
//       ? {
//           brand: {
//             slug: brand,
//           },
//         }
//       : {}),

//     ...(price
//       ? {
//           exShowroomPrice: {
//             lte: Number(price) * 100000,
//           },
//         }
//       : {}),

//     ...(range
//       ? {
//           claimedRange: {
//             gte: Number(range),
//           },
//         }
//       : {}),

//     ...(battery
//       ? {
//           batteryKwh: {
//             gte: Number(battery),
//           },
//         }
//       : {}),
//   },
// });

//   return (
//     <main className="min-h-screen bg-background text-foreground">

//       {/* Hero */}

//       <section className="border-b border-theme bg-card">

//         <div className="mx-auto max-w-7xl px-5 py-14">

//           <span className="rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-500">
//             Explore India's EV Market
//           </span>

//           <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
//             Explore
//             <span className="text-green-500">
//               {" "}Electric Vehicles
//             </span>
//           </h1>

//           <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
//             Browse electric cars with complete specifications,
//             battery capacity, driving range, charging speed,
//             performance, features and latest pricing.
//           </p>

//           <div className="mt-10">
//             <EVSearchBar />
//           </div>

//         </div>

//       </section>

//       {/* Filters */}

//       <section className="mx-auto max-w-7xl px-5 py-8">

//         <Filters brands={brands} />

//       </section>

//       {/* Listing */}

//       <section className="mx-auto max-w-7xl px-5 pb-16">

//         <div className="mb-8 flex items-center justify-between">

//           <div>

//             <h2 className="text-3xl font-bold">
//               Electric Cars
//             </h2>

//             <p className="mt-2 text-muted">
//               {vehicles.length} EVs Available
//             </p>

//           </div>

//         </div>

//         <EVListing vehicles={vehicles} />

//         <Pagination
//     page={page}
//     totalPages={totalPages}
// />

//       </section>

//     </main>
//   );
// }

import { prisma } from "@/lib/prisma";

import EVListing from "./EVListing";
import EVSearchBar from "./EVSearchBar";
import Filters from "./Filters";
import Pagination from "./Pagination";

export default async function EVPage({ searchParams }) {
  const params = await searchParams;

  // ==========================================
  // Query Params
  // ==========================================

  const page = Number(params?.page || 1);

  const limit = 9;

  const skip = (page - 1) * limit;

  const q = params?.q ?? "";
  const brand = params?.brand ?? "";
  const price = params?.price ?? "";
  const range = params?.range ?? "";
  const battery = params?.battery ?? "";
  const sort = params?.sort ?? "";

  // ==========================================
  // Common Filters
  // ==========================================

  const where = {
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
  };

  // ==========================================
  // Brands
  // ==========================================

  const brands = await prisma.eVBrand.findMany({
    orderBy: {
      name: "asc",
    },
  });
    // ==========================================
  // Total Vehicles
  // ==========================================

  const totalVehicles = await prisma.eVModel.count({
    where,
  });

  const totalPages = Math.ceil(totalVehicles / limit);

  // ==========================================
  // Vehicles
  // ==========================================

  const vehicles = await prisma.eVModel.findMany({
    where,

    include: {
      brand: true,
    },

    take: limit,

    skip,

    orderBy:
      sort === "price-asc"
        ? {
            exShowroomPrice: "asc",
          }
        : sort === "price-desc"
        ? {
            exShowroomPrice: "desc",
          }
        : sort === "range-desc"
        ? {
            claimedRange: "desc",
          }
        : sort === "battery-desc"
        ? {
            batteryKwh: "desc",
          }
        : sort === "newest"
        ? {
            launchDate: "desc",
          }
        : {
            exShowroomPrice: "asc",
          },
  });

  // ==========================================
  // Page
  // ==========================================

  return (
        <main className="min-h-screen bg-background text-foreground">

      {/* Hero */}

      <section className="border-b border-theme bg-card">

        <div className="mx-auto max-w-7xl px-5 py-14">

          <span className="rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-500">
            Explore India's EV Market
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Explore
            <span className="text-green-500">
              {" "}Electric Vehicles
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Browse electric cars with complete specifications,
            battery capacity, driving range, charging speed,
            performance, features and latest pricing.
          </p>

          <div className="mt-10">
            <EVSearchBar />
          </div>

        </div>

      </section>

      {/* Filters */}

      <section className="mx-auto max-w-7xl px-5 py-8">

        <Filters brands={brands} />

      </section>

      {/* Listing */}

      <section className="mx-auto max-w-7xl px-5 pb-20">

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              Electric Cars
            </h2>

            <p className="mt-2 text-muted">
              {totalVehicles} EVs Available
            </p>

          </div>

          <div className="rounded-xl border border-theme bg-card px-4 py-2 text-sm text-muted">

            Page <span className="font-semibold text-foreground">{page}</span>
            {" "}
            of
            {" "}
            <span className="font-semibold text-foreground">
              {totalPages}
            </span>

          </div>

        </div>

        <EVListing vehicles={vehicles} />

        {/* Pagination */}

        {totalPages > 1 && (

          <Pagination
            page={page}
            totalPages={totalPages}
          />

        )}

      </section>

    </main>
  );
}