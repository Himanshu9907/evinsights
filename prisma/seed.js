import { PrismaClient } from "@prisma/client";
import { brands } from "./seedData/brands.js";
import { vehicles } from "./seedData/vehicles.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ----------------------------
  // Insert Brands
  // ----------------------------

  for (const brand of brands) {
    await prisma.eVBrand.upsert({
      where: {
        slug: brand.slug,
      },
      update: {
        name: brand.name,
        logo: brand.logo,
        country: brand.country,
      },
      create: brand,
    });
  }

  console.log("✅ Brands Inserted");

  // ----------------------------
  // Insert Vehicles
  // ----------------------------

  for (const vehicle of vehicles) {
   const dbBrand = await prisma.eVBrand.findUnique({
  where: {
    slug: vehicle.brand.toLowerCase(),
  },
});

if (!dbBrand) {
  console.log(`Brand not found: ${vehicle.brand}`);
  continue;
}

const { brand, ...vehicleData } = vehicle;

await prisma.eVModel.upsert({
  where: {
    slug: vehicle.slug,
  },
  update: {
    ...vehicleData,
    brandId: dbBrand.id,
  },
  create: {
    ...vehicleData,
    brandId: dbBrand.id,
  },
});
  }

  console.log("✅ Vehicles Inserted");

  console.log("🎉 Database Ready");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
