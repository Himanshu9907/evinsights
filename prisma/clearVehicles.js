import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🗑️ Deleting vehicle data...");

  await prisma.$transaction([
    prisma.eVComparisonVehicle.deleteMany(),
    prisma.eVNews.deleteMany(),
    prisma.eVRating.deleteMany(),
    prisma.eVReview.deleteMany(),

    prisma.eVOwnership.deleteMany(),
    prisma.eVPerformance.deleteMany(),
    prisma.eVCharging.deleteMany(),
    prisma.eVSafety.deleteMany(),

    prisma.eVCon.deleteMany(),
    prisma.eVPro.deleteMany(),

    prisma.eVColor.deleteMany(),
    prisma.eVGalleryImage.deleteMany(),
    prisma.eVFeature.deleteMany(),
    prisma.eVFAQ.deleteMany(),
    prisma.eVVariant.deleteMany(),
    prisma.eVSpec.deleteMany(),

    prisma.eVModel.deleteMany(),
  ]);

  console.log("✅ All vehicle data deleted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });