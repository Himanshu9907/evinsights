import { PrismaClient } from "@prisma/client";

import { brands } from "./seedData/brands.js";
import { vehicles } from "./seedData/vehicles.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...\n");

  // ==========================================
  // DELETE OLD DATA (Children → Parent)
  // ==========================================

  await prisma.eVComparisonVehicle.deleteMany();
  await prisma.eVComparison.deleteMany();

  await prisma.eVNews.deleteMany();

  await prisma.eVReview.deleteMany();

  await prisma.eVRating.deleteMany();

  await prisma.eVOwnership.deleteMany();

  await prisma.eVPerformance.deleteMany();

  await prisma.eVCharging.deleteMany();

  await prisma.eVSafety.deleteMany();

  await prisma.eVFAQ.deleteMany();

  await prisma.eVPro.deleteMany();

  await prisma.eVCon.deleteMany();

  await prisma.eVGalleryImage.deleteMany();

  await prisma.eVColor.deleteMany();

  await prisma.eVFeature.deleteMany();

  await prisma.eVVariant.deleteMany();

  await prisma.eVSpec.deleteMany();

  await prisma.eVModel.deleteMany();

  await prisma.eVBrand.deleteMany();

  console.log("🗑 Database cleaned.\n");

  // ==========================================
  // BRANDS
  // ==========================================

  const brandMap = {};

  for (const brand of brands) {
    const createdBrand = await prisma.eVBrand.create({
      data: {
        name: brand.name,
        slug: brand.slug,
        logo: brand.logo ?? null,
        country: brand.country ?? null,
      },
    });

    brandMap[brand.name] = createdBrand.id;

    console.log(`✅ Brand : ${brand.name}`);
  }

  console.log("");

  // ==========================================
  // VEHICLES
  // ==========================================

  for (const vehicle of vehicles) {
    console.log(`🚗 Seeding ${vehicle.name}`);

    const model = await prisma.eVModel.create({
      data: {
        //--------------------------------
        // Basic
        //--------------------------------

        name: vehicle.name,
        slug: vehicle.slug,
        image: vehicle.image,
        overview: vehicle.overview,
        featured: vehicle.featured,

        //--------------------------------
        // Pricing
        //--------------------------------

        exShowroomPrice:
          vehicle.pricing.exShowroomPrice,

        //--------------------------------
        // Battery
        //--------------------------------

        batteryKwh:
          vehicle.battery.batteryKwh,

        batteryType:
          vehicle.battery.batteryType,

        claimedRange:
          vehicle.battery.claimedRange,

        realRange:
          vehicle.battery.realRange,

        //--------------------------------
        // Performance Summary
        //--------------------------------

        powerHp:
          parseInt(vehicle.performance.maxPower),

        torqueNm:
          parseInt(vehicle.performance.maxTorque),

        topSpeed:
          vehicle.performance.topSpeed,

        acceleration:
          vehicle.performance.zeroToHundred,

        //--------------------------------
        // Dimensions
        //--------------------------------

        seating:
          vehicle.dimensions.seating,

        bodyType:
          vehicle.dimensions.bodyType,

        driveType:
          vehicle.dimensions.driveType,

        bootSpace:
          vehicle.dimensions.bootSpace,

        groundClearance:
          vehicle.dimensions.groundClearance,

        //--------------------------------
        // Charging Summary
        //--------------------------------

        acCharging:
          vehicle.charging.homeChargingTime,

        dcCharging:
          vehicle.charging.dcChargingTime,

        chargingPort:
          vehicle.charging.chargingPort,

        //--------------------------------
        // Warranty
        //--------------------------------

        warranty:
          vehicle.warranty.vehicleWarranty,

        batteryWarranty:
          vehicle.warranty.batteryWarranty,

        launchDate:
          vehicle.warranty.launchDate,

        //--------------------------------

        brandId: brandMap[vehicle.brand],
      },
    });

    // model.id ko next part me use karenge

        // ==========================================
    // SPECIFICATIONS
    // ==========================================

    if (vehicle.specs?.length) {
      await prisma.eVSpec.createMany({
        data: vehicle.specs.map((spec) => ({
          key: spec.key,
          value: spec.value,
          category: spec.category,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Specifications");
    }

    // ==========================================
    // VARIANTS
    // ==========================================

    if (vehicle.variants?.length) {
      await prisma.eVVariant.createMany({
        data: vehicle.variants.map((variant) => ({
          name: variant.name,
          price: variant.price,
          battery: variant.battery,
          range: variant.range,
          power: variant.power,
          torque: variant.torque,
          topSpeed: variant.topSpeed,
          acceleration: variant.acceleration,
          recommended: variant.recommended,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Variants");
    }

    // ==========================================
    // FEATURES
    // ==========================================

    if (vehicle.features?.length) {
      await prisma.eVFeature.createMany({
        data: vehicle.features.map((feature) => ({
          title: feature.title,
          category: feature.category,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Features");
    }

    // ==========================================
    // GALLERY
    // ==========================================

    if (vehicle.gallery?.length) {
      await prisma.eVGalleryImage.createMany({
        data: vehicle.gallery.map((img) => ({
          image: img.image,
          caption: img.caption ?? null,
          isPrimary: img.isPrimary ?? false,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Gallery");
    }

    // ==========================================
    // COLORS
    // ==========================================

    if (vehicle.colors?.length) {
      await prisma.eVColor.createMany({
        data: vehicle.colors.map((color) => ({
          name: color.name,
          hexCode: color.hexCode,
          image: color.image ?? null,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Colors");
    }

        // ==========================================
    // FAQ
    // ==========================================

    if (vehicle.faqs?.length) {
      await prisma.eVFAQ.createMany({
        data: vehicle.faqs.map((faq, index) => ({
          question: faq.question,
          answer: faq.answer,
          order: faq.order ?? index + 1,
          modelId: model.id,
        })),
      });

      console.log("   ✓ FAQs");
    }

    // ==========================================
    // PROS
    // ==========================================

    if (vehicle.pros?.length) {
      await prisma.eVPro.createMany({
        data: vehicle.pros.map((pro, index) => ({
          title: pro.title,
          order: index + 1,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Pros");
    }

    // ==========================================
    // CONS
    // ==========================================

    if (vehicle.cons?.length) {
      await prisma.eVCon.createMany({
        data: vehicle.cons.map((con, index) => ({
          title: con.title,
          order: index + 1,
          modelId: model.id,
        })),
      });

      console.log("   ✓ Cons");
    }

    // ==========================================
    // SAFETY
    // ==========================================

    if (vehicle.safety) {
      await prisma.eVSafety.create({
        data: {
          ...vehicle.safety,
          modelId: model.id,
        },
      });

      console.log("   ✓ Safety");
    }

    // ==========================================
    // CHARGING
    // ==========================================

    if (vehicle.charging) {
      await prisma.eVCharging.create({
        data: {
          ...vehicle.charging,
          modelId: model.id,
        },
      });

      console.log("   ✓ Charging");
    }

    // ==========================================
    // PERFORMANCE
    // ==========================================

    if (vehicle.performance) {
      await prisma.eVPerformance.create({
  data: {
    zeroToHundred: vehicle.performance.zeroToHundred,

    motorType: vehicle.performance.motorType,

    maxPower: vehicle.performance.maxPower,

    maxTorque: vehicle.performance.maxTorque,

    driveModes: vehicle.performance.driveModes,

    regenLevels: vehicle.performance.regenLevels,

    modelId: model.id,
  },
});

      console.log("   ✓ Performance");
    }

    // ==========================================
    // OWNERSHIP
    // ==========================================

    if (vehicle.ownership) {
      await prisma.eVOwnership.create({
        data: {
          ...vehicle.ownership,
          modelId: model.id,
        },
      });

      console.log("   ✓ Ownership");
    }

    // ==========================================
    // RATING
    // ==========================================

    if (vehicle.rating) {
      await prisma.eVRating.create({
        data: {
          ...vehicle.rating,
          modelId: model.id,
        },
      });

      console.log("   ✓ Rating");
    }

    console.log(`✅ ${vehicle.name} Completed\n`);
  }

  console.log("🎉 Database Seed Completed Successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed Error:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });