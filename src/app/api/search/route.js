// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// function formatPrice(price) {
//   if (!price) return null;
//   return `₹${(price / 100000).toFixed(2)} Lakh`;
// }

// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);

//     const query = searchParams.get("q")?.trim();

//     if (!query || query.length < 1) {
//       return NextResponse.json([]);
//     }

//     const cars = await prisma.eVModel.findMany({
//       where: {
//         OR: [
//           {
//             name: {
//               contains: query,
//               mode: "insensitive",
//             },
//           },
//           {
//             brand: {
//               name: {
//                 contains: query,
//                 mode: "insensitive",
//               },
//             },
//           },
//         ],
//       },

//       include: {
//         brand: true,
//       },

//       orderBy: {
//         featured: "desc",
//       },

//       take: 8,
//     });

//     const results = cars.map((car) => ({
//       id: car.id,
//       name: car.name,
//       slug: car.slug,
//       image: car.image,
//       price: formatPrice(car.exShowroomPrice),
//       range: car.claimedRange,
//       battery: car.batteryKwh,
//       brand: {
//         name: car.brand?.name,
//         logo: car.brand?.logo,
//       },
//     }));

//     return NextResponse.json(results);
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         message: "Something went wrong",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q");

  if (!q || q.trim().length < 1) {
    return NextResponse.json([]);
  }

  const cars = await prisma.eVModel.findMany({
    where: {
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
    },

    include: {
      brand: true,
    },

    take: 8,
  });

  return NextResponse.json(cars);
}