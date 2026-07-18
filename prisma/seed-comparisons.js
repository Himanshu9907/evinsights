import { PrismaClient } from "@prisma/client";
import { comparisons } from "./seedData/comparisons.js";

const prisma = new PrismaClient();

async function main() {

  console.log("=================================");
  console.log("SEEDING COMPARISONS");
  console.log("=================================\n");

  for (const comparison of comparisons) {

    const createdComparison = await prisma.eVComparison.upsert({

      where: {
        slug: comparison.slug,
      },

      update: {
        title: comparison.title,
        description: comparison.description,
        featured: comparison.featured,
      },

      create: {
        title: comparison.title,
        slug: comparison.slug,
        description: comparison.description,
        featured: comparison.featured,
      },
    });

    // Remove old vehicles

    await prisma.eVComparisonVehicle.deleteMany({
      where: {
        comparisonId: createdComparison.id,
      },
    });

    // Add vehicles

    for (let i = 0; i < comparison.vehicles.length; i++) {

      const vehicle = await prisma.eVModel.findUnique({
        where: {
          slug: comparison.vehicles[i],
        },
      });

      if (!vehicle) {
        console.log(`Vehicle not found: ${comparison.vehicles[i]}`);
        continue;
      }

      await prisma.eVComparisonVehicle.create({
        data: {
          comparisonId: createdComparison.id,
          vehicleId: vehicle.id,
          order: i + 1,
        },
      });
    }

    console.log(`✓ ${comparison.title}`);
  }

  console.log("\n=================================");
  console.log("COMPARISONS SEEDED");
  console.log("=================================");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });