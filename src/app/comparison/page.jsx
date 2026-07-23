// import { prisma } from "@/lib/prisma";
// import CompareSelector from "./components/CompareSelector";

// export default async function ComparisonHomePage({
//   searchParams,
// }) {

//   const params = await searchParams;

// const car1Slug = params?.car1 ?? "";

//   const cars = await prisma.eVModel.findMany({
//     select: {
//       id: true,
//       name: true,
//       slug: true,
//       image: true,
//       brand: {
//         select: {
//           name: true,
//         },
//       },
//     },
//     orderBy: {
//       name: "asc",
//     },
//   });

//   const selectedCar1 = car1Slug
//   ? await prisma.eVModel.findUnique({
//       where: {
//         slug: car1Slug,
//       },
//       select: {
//         id: true,
//         name: true,
//         slug: true,
//         image: true,
//         brand: {
//           select: {
//             name: true,
//           },
//         },
//       },
//     })
//   : null;

//   return (
//     <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
//       <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

//        <CompareSelector
//   cars={cars}
//   defaultCar1={selectedCar1}
// />

//       </section>
//     </main>
//   );
// }

// import { prisma } from "@/lib/prisma";
// import CompareSelector from "./components/CompareSelector";

// export default async function ComparisonHomePage({ searchParams }) {
//   const params = await searchParams;

//   const car1Slug = params?.car1 || null;

//   // All cars for search dropdown
//   const cars = await prisma.eVModel.findMany({
//     select: {
//       id: true,
//       name: true,
//       slug: true,
//       image: true,
//       brand: {
//         select: {
//           name: true,
//         },
//       },
//     },
//     orderBy: {
//       name: "asc",
//     },
//   });

//   // Auto selected first car
//   let defaultCar1 = null;

//   if (car1Slug) {
//     defaultCar1 = await prisma.eVModel.findUnique({
//       where: {
//         slug: car1Slug,
//       },
//       select: {
//         id: true,
//         name: true,
//         slug: true,
//         image: true,
//         brand: {
//           select: {
//             name: true,
//           },
//         },
//       },
//     });
//   }

//   return (
//     <main className="min-h-screen bg-background text-foreground">
//       <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-10 text-center">
//           <h1 className="text-3xl font-bold sm:text-4xl">
//             Compare Electric Cars
//           </h1>

//           <p className="mt-3 text-muted">
//             Select two EVs and compare price, battery, range,
//             charging, performance, features and specifications.
//           </p>
//         </div>

//         <CompareSelector
//           cars={cars}
//           defaultCar1={defaultCar1}
//         />
//       </section>
//     </main>
//   );
// }


import { prisma } from "@/lib/prisma";
import CompareSelector from "./components/CompareSelector";

export default async function ComparisonHomePage({
  searchParams,
}) {
  const params = await searchParams;

  const car1Slug = params?.car1 ?? "";

  // const cars = await prisma.eVModel.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     slug: true,
  //     image: true,
  //     brand: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  //   orderBy: {
  //     name: "asc",
  //   },
  // });

  // const selectedCar1 = car1Slug
  //   ? await prisma.eVModel.findUnique({
  //       where: {
  //         slug: car1Slug,
  //       },
  //       select: {
  //         id: true,
  //         name: true,
  //         slug: true,
  //         image: true,
  //         brand: {
  //           select: {
  //             name: true,
  //           },
  //         },
  //       },
  //     })
  //   : null;

  const cars = await prisma.eVModel.findMany({
  select: {
    id: true,
    name: true,
    slug: true,
    image: true,

    startingPrice: true,
    endingPrice: true,

    batteryKwh: true,
    claimedRange: true,

    brand: {
      select: {
        name: true,
      },
    },
  },
  orderBy: {
    name: "asc",
  },
});

const selectedCar1 = car1Slug
  ? await prisma.eVModel.findUnique({
      where: {
        slug: car1Slug,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        image: true,

        startingPrice: true,
        endingPrice: true,

        batteryKwh: true,
        claimedRange: true,

        brand: {
          select: {
            name: true,
          },
        },
      },
    })
  : null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-6
          sm:px-6
          sm:py-8
          lg:px-8
          lg:py-12
        "
      >
        <CompareSelector
          cars={cars}
          defaultCar1={selectedCar1}
        />
      </section>
    </main>
  );
}