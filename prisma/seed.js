// import { PrismaClient } from "@prisma/client";

// import { brands } from "./seedData/brands.js";
// import { vehicles } from "./seedData/vehicles.js";
// import { categories } from "./seedData/categories.js";
// import { users } from "./seedData/users.js";
// import { articles } from "./seedData/articles.js";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("🌱 Starting database seed...\n");

//   // ==========================================
// // USERS
// // ==========================================

// // for (const user of users) {
// //   await prisma.user.create({
// //     data: user,
// //   });
// // }

// for (const user of users) {
//   await prisma.user.upsert({
//     where: {
//       email: user.email,
//     },
//     update: {},
//     create: user,
//   });
// }

// console.log("✅ Users Seeded");

// // ==========================================
// // CATEGORIES
// // ==========================================

// // for (const category of categories) {
// //   await prisma.category.create({
// //     data: category,
// //   });
// // }

// for (const category of categories) {
//   await prisma.category.upsert({
//     where: {
//       slug: category.slug,
//     },
//     update: {},
//     create: category,
//   });
// }

// console.log("✅ Categories Seeded");

//   // ==========================================
//   // BRANDS
//   // ==========================================

//   const brandMap = {};

//   for (const brand of brands) {
//     // const createdBrand = await prisma.eVBrand.create({
//     //   data: {
//     //     name: brand.name,
//     //     slug: brand.slug,
//     //     logo: brand.logo ?? null,
//     //     country: brand.country ?? null,
//     //   },
//     // });
//      const createdBrand = await prisma.eVBrand.upsert({
//   where: {
//     slug: brand.slug,
//   },

//   update: {
//     name: brand.name,
//     logo: brand.logo ?? null,
//     country: brand.country ?? null,
//   },

//   create: {
//     name: brand.name,
//     slug: brand.slug,
//     logo: brand.logo ?? null,
//     country: brand.country ?? null,
//   },
// });

//     brandMap[brand.name] = createdBrand.id;

//     console.log(`✅ Brand : ${brand.name}`);
//   }

//   console.log("");

//   // ==========================================
//   // VEHICLES
//   // ==========================================

//  for (const vehicle of vehicles) {
//   console.log(`🚗 Seeding ${vehicle.name}`);

//   const model = await prisma.eVModel.upsert({
//     where: {
//       slug: vehicle.slug,
//     },

//     update: {
//       //--------------------------------
//       // Basic
//       //--------------------------------

//       name: vehicle.name,
//       image: vehicle.image,
//       overview: vehicle.overview,
//       featured: vehicle.featured,

//       //--------------------------------
//       // Pricing
//       //--------------------------------

//       exShowroomPrice: vehicle.pricing.exShowroomPrice,

//       //--------------------------------
//       // Battery
//       //--------------------------------

//       batteryKwh: vehicle.battery.batteryKwh,
//       batteryType: vehicle.battery.batteryType,
//       claimedRange: vehicle.battery.claimedRange,
//       realRange: vehicle.battery.realRange,

//       //--------------------------------
//       // Performance
//       //--------------------------------

//       powerHp: parseInt(vehicle.performance.maxPower),
//       torqueNm: parseInt(vehicle.performance.maxTorque),
//       topSpeed: vehicle.performance.topSpeed,
//       acceleration: vehicle.performance.zeroToHundred,

//       //--------------------------------
//       // Dimensions
//       //--------------------------------

//       seating: vehicle.dimensions.seating,
//       bodyType: vehicle.dimensions.bodyType,
//       driveType: vehicle.dimensions.driveType,
//       bootSpace: vehicle.dimensions.bootSpace,
//       groundClearance: vehicle.dimensions.groundClearance,

//       //--------------------------------
//       // Charging
//       //--------------------------------

//       acCharging: vehicle.charging.homeChargingTime,
//       dcCharging: vehicle.charging.dcChargingTime,
//       chargingPort: vehicle.charging.chargingPort,

//       //--------------------------------
//       // Warranty
//       //--------------------------------

//       warranty: vehicle.warranty.vehicleWarranty,
//       batteryWarranty: vehicle.warranty.batteryWarranty,
//       launchDate: vehicle.warranty.launchDate,

//       //--------------------------------

//       brandId: brandMap[vehicle.brand],
//     },

//     create: {
//       //--------------------------------
//       // Basic
//       //--------------------------------

//       name: vehicle.name,
//       slug: vehicle.slug,
//       image: vehicle.image,
//       overview: vehicle.overview,
//       featured: vehicle.featured,

//       //--------------------------------
//       // Pricing
//       //--------------------------------

//       exShowroomPrice: vehicle.pricing.exShowroomPrice,

//       //--------------------------------
//       // Battery
//       //--------------------------------

//       batteryKwh: vehicle.battery.batteryKwh,
//       batteryType: vehicle.battery.batteryType,
//       claimedRange: vehicle.battery.claimedRange,
//       realRange: vehicle.battery.realRange,

//       //--------------------------------
//       // Performance
//       //--------------------------------

//       powerHp: parseInt(vehicle.performance.maxPower),
//       torqueNm: parseInt(vehicle.performance.maxTorque),
//       topSpeed: vehicle.performance.topSpeed,
//       acceleration: vehicle.performance.zeroToHundred,

//       //--------------------------------
//       // Dimensions
//       //--------------------------------

//       seating: vehicle.dimensions.seating,
//       bodyType: vehicle.dimensions.bodyType,
//       driveType: vehicle.dimensions.driveType,
//       bootSpace: vehicle.dimensions.bootSpace,
//       groundClearance: vehicle.dimensions.groundClearance,

//       //--------------------------------
//       // Charging
//       //--------------------------------

//       acCharging: vehicle.charging.homeChargingTime,
//       dcCharging: vehicle.charging.dcChargingTime,
//       chargingPort: vehicle.charging.chargingPort,

//       //--------------------------------
//       // Warranty
//       //--------------------------------

//       warranty: vehicle.warranty.vehicleWarranty,
//       batteryWarranty: vehicle.warranty.batteryWarranty,
//       launchDate: vehicle.warranty.launchDate,

//       //--------------------------------

//       brandId: brandMap[vehicle.brand],
//     },
//   });

//   // ==========================================
//   // SPECIFICATIONS
//   // ==========================================

//   if (vehicle.specs?.length) {
//     await prisma.eVSpec.deleteMany({
//       where: {
//         modelId: model.id,
//       },
//     });

//     await prisma.eVSpec.createMany({
//       data: vehicle.specs.map((spec) => ({
//         key: spec.key,
//         value: spec.value,
//         category: spec.category,
//         modelId: model.id,
//       })),
//     });

//     console.log("   ✓ Specifications");
//   }
//     // ==========================================
//     // VARIANTS
//     // ==========================================

//    if (vehicle.variants?.length) {

//   await prisma.eVVariant.deleteMany({
//     where: {
//       modelId: model.id,
//     },
//   });

//   await prisma.eVVariant.createMany({
//     data: vehicle.variants.map((variant) => ({
//       name: variant.name,
//       price: variant.price,
//       battery: variant.battery,
//       range: variant.range,
//       power: variant.power,
//       torque: variant.torque,
//       topSpeed: variant.topSpeed,
//       acceleration: variant.acceleration,
//       recommended: variant.recommended,
//       modelId: model.id,
//     })),
//   });

//   console.log("   ✓ Variants");
// }

//     // ==========================================
//     // FEATURES
//     // ==========================================

//    if (vehicle.features?.length) {

//   await prisma.eVFeature.deleteMany({
//     where: {
//       modelId: model.id,
//     },
//   });

//   await prisma.eVFeature.createMany({
//         data: vehicle.features.map((feature) => ({
//           title: feature.title,
//           category: feature.category,
//           modelId: model.id,
//         })),
//       });

//       console.log("   ✓ Features");
//     }

//     // ==========================================
//     // GALLERY
//     // ==========================================

//     if (vehicle.gallery?.length) {
//       await prisma.eVGalleryImage.deleteMany({
//   where: {
//     modelId: model.id,
//   },
// });

// await prisma.eVGalleryImage.createMany({
//         data: vehicle.gallery.map((img) => ({
//           image: img.image,
//           caption: img.caption ?? null,
//           isPrimary: img.isPrimary ?? false,
//           modelId: model.id,
//         })),
//       });

//       console.log("   ✓ Gallery");
//     }

//     // ==========================================
//     // COLORS
//     // ==========================================

//     if (vehicle.colors?.length) {
//       await prisma.eVColor.deleteMany({
//   where: {
//     modelId: model.id,
//   },
// });

// await prisma.eVColor.createMany({
//         data: vehicle.colors.map((color) => ({
//           name: color.name,
//           hexCode: color.hexCode,
//           image: color.image ?? null,
//           modelId: model.id,
//         })),
//       });

//       console.log("   ✓ Colors");
//     }

//         // ==========================================
//     // FAQ
//     // ==========================================

//     if (vehicle.faqs?.length) {

//   await prisma.eVFAQ.deleteMany({
//     where: {
//       modelId: model.id,
//     },
//   });

//   await prisma.eVFAQ.createMany({
//     data: vehicle.faqs.map((faq, index) => ({
//       question: faq.question,
//       answer: faq.answer,
//       order: faq.order ?? index + 1,
//       modelId: model.id,
//     })),
//   });

//   console.log("   ✓ FAQs");
// }

//     // ==========================================
//     // PROS
//     // ==========================================

//    if (vehicle.pros?.length) {

//   await prisma.eVPro.deleteMany({
//     where:{
//       modelId:model.id,
//     },
//   });

//   await prisma.eVPro.createMany({
//     data: vehicle.pros.map((pro,index)=>({
//       title: pro.title,
//       order:index+1,
//       modelId:model.id,
//     })),
//   });

//   console.log("   ✓ Pros");
// }

//     // ==========================================
//     // CONS
//     // ==========================================

//     if (vehicle.cons?.length) {

//   await prisma.eVCon.deleteMany({
//     where:{
//       modelId:model.id,
//     },
//   });

//   await prisma.eVCon.createMany({
//     data: vehicle.cons.map((con,index)=>({
//       title:con.title,
//       order:index+1,
//       modelId:model.id,
//     })),
//   });

//   console.log("   ✓ Cons");
// }
//     // ==========================================
//     // SAFETY
//     // ==========================================

//     if (vehicle.safety) {
//       await prisma.eVSafety.deleteMany({
//   where: {
//     modelId: model.id,
//   },
// });

// await prisma.eVSafety.create({
//         data: {
//           ...vehicle.safety,
//           modelId: model.id,
//         },
//       });

//       console.log("   ✓ Safety");
//     }

//     // ==========================================
//     // CHARGING
//     // ==========================================

//     if (vehicle.charging) {

//   await prisma.eVCharging.deleteMany({
//     where:{
//       modelId:model.id,
//     },
//   });

//   await prisma.eVCharging.create({
//     data:{
//       ...vehicle.charging,
//       modelId:model.id,
//     },
//   });

//   console.log("   ✓ Charging");
// }

//     // ==========================================
//     // PERFORMANCE
//     // ==========================================

//     if (vehicle.performance) {

//   await prisma.eVPerformance.deleteMany({
//     where:{
//       modelId:model.id,
//     },
//   });

//   await prisma.eVPerformance.create({
//     data:{
//       zeroToHundred: vehicle.performance.zeroToHundred,
//       motorType: vehicle.performance.motorType,
//       maxPower: vehicle.performance.maxPower,
//       maxTorque: vehicle.performance.maxTorque,
//       driveModes: vehicle.performance.driveModes,
//       regenLevels: vehicle.performance.regenLevels,
//       modelId:model.id,
//     },
//   });

//   console.log("   ✓ Performance");
// }

//     // ==========================================
//     // OWNERSHIP
//     // ==========================================

//     if (vehicle.ownership) {

//   await prisma.eVOwnership.deleteMany({
//     where:{
//       modelId:model.id,
//     },
//   });

//   await prisma.eVOwnership.create({
//     data:{
//       ...vehicle.ownership,
//       modelId:model.id,
//     },
//   });

//   console.log("   ✓ Ownership");
// }
   
//     // ==========================================
//     // RATING
//     // ==========================================

//     if (vehicle.rating) {

//   await prisma.eVRating.deleteMany({
//     where:{
//       modelId:model.id,
//     },
//   });

//   await prisma.eVRating.create({
//     data:{
//       ...vehicle.rating,
//       modelId:model.id,
//     },
//   });

//   console.log("   ✓ Rating");
// }

// console.log(`✅ ${vehicle.name} Completed\n`);

// } // 👈 YE vehicle loop close karega

//  // ==========================================
// // ARTICLES
// // ==========================================

// for (const article of articles) {

//   const author = await prisma.user.findUnique({
//     where: {
//       email: article.author,
//     },
//   });


//   const category = await prisma.category.findUnique({
//     where: {
//       slug: article.category,
//     },
//   });


//   if (!author || !category) {
//     console.log(
//       `❌ Missing author/category for article: ${article.title}`
//     );
//     continue;
//   }


//   await prisma.article.upsert({

//     where: {
//       slug: article.slug,
//     },


//     update: {

//       title: article.title,

//       excerpt: article.excerpt,

//       content: article.content,

//       image: article.image,

//       published: article.published,

//       authorId: author.id,

//       categoryId: category.id,

//     },


//     create: {

//       title: article.title,

//       slug: article.slug,

//       excerpt: article.excerpt,

//       content: article.content,

//       image: article.image,

//       published: article.published,

//       authorId: author.id,

//       categoryId: category.id,

//     },

//   });


//   console.log(`📰 Article Seeded: ${article.title}`);

// }


// console.log("✅ Articles Seeded");

//   console.log("🎉 Database Seed Completed Successfully!");
// }



// main()
//   .catch((error) => {
//     console.error("❌ Seed Error:");
//     console.error(error);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });


import { PrismaClient } from "@prisma/client";

import { brands } from "./seedData/brands.js";
import { vehicles } from "./seedData/vehicles.js";
import { categories } from "./seedData/categories.js";
import { users } from "./seedData/users.js";
import { articles } from "./seedData/articles.js";

const prisma = new PrismaClient();

//////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////

function toInt(value) {
  if (value === null || value === undefined) {
    return null;
  }

  const number = Number.parseInt(value, 10);

  return Number.isNaN(number) ? null : number;
}

function logSection(title) {
  console.log("");
  console.log("==========================================");
  console.log(title);
  console.log("==========================================");
}

async function replaceChildCollection({
  model,
  modelId,
  data,
}) {
  await model.deleteMany({
    where: {
      modelId,
    },
  });

  if (!data?.length) {
    return;
  }

  await model.createMany({
    data,
  });
}

async function replaceChildRecord({
  model,
  modelId,
  data,
}) {
  await model.deleteMany({
    where: {
      modelId,
    },
  });

  if (!data) {
    return;
  }

  await model.create({
    data,
  });
}

//////////////////////////////////////////////////////
// MAIN
//////////////////////////////////////////////////////

async function main() {
  console.log("🌱 Starting Database Seed");


    //////////////////////////////////////////////////////
  // USERS
  //////////////////////////////////////////////////////

  logSection("USERS");

  for (const user of users) {
    await prisma.user.upsert({
      where: {
        email: user.email,
      },

      update: {
        name: user.name,
      },

      create: {
        ...user,
      },
    });

    console.log(`✅ ${user.name}`);
  }

  //////////////////////////////////////////////////////
  // CATEGORIES
  //////////////////////////////////////////////////////

  logSection("CATEGORIES");

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },

      update: {
        name: category.name,
      },

      create: {
        ...category,
      },
    });

    console.log(`✅ ${category.name}`);
  }

  //////////////////////////////////////////////////////
  // BRANDS
  //////////////////////////////////////////////////////

  logSection("BRANDS");

  const brandMap = {};

  for (const brand of brands) {
    const savedBrand = await prisma.eVBrand.upsert({
      where: {
        slug: brand.slug,
      },

      update: {
        name: brand.name,
        logo: brand.logo ?? null,
        country: brand.country ?? null,
      },

      create: {
        name: brand.name,
        slug: brand.slug,
        logo: brand.logo ?? null,
        country: brand.country ?? null,
      },
    });

    brandMap[brand.name] = savedBrand.id;

    console.log(`✅ ${brand.name}`);
  }

  //////////////////////////////////////////////////////
  // VEHICLES
  //////////////////////////////////////////////////////

  logSection("VEHICLES");

  for (const vehicle of vehicles) {

    console.log(`🚗 ${vehicle.name}`);

    if (!brandMap[vehicle.brand]) {
      console.log(
        `❌ Brand "${vehicle.brand}" not found`
      );
      continue;
    }

    const model = await prisma.eVModel.upsert({

      where: {
        slug: vehicle.slug,
      },

      update: {

        name: vehicle.name,
        image: vehicle.image,
        overview: vehicle.overview,
        featured: vehicle.featured,

        exShowroomPrice:
          vehicle.pricing.exShowroomPrice,

        batteryKwh:
          vehicle.battery.batteryKwh,

        batteryType:
          vehicle.battery.batteryType,

        claimedRange:
          vehicle.battery.claimedRange,

        realRange:
          vehicle.battery.realRange,

        powerHp:
          toInt(vehicle.performance.maxPower),

        torqueNm:
          toInt(vehicle.performance.maxTorque),

        topSpeed:
          vehicle.performance.topSpeed,

        acceleration:
          vehicle.performance.zeroToHundred,

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

        acCharging:
          vehicle.charging.homeChargingTime,

        dcCharging:
          vehicle.charging.dcChargingTime,

        chargingPort:
          vehicle.charging.chargingPort,

        warranty:
          vehicle.warranty.vehicleWarranty,

        batteryWarranty:
          vehicle.warranty.batteryWarranty,

        launchDate:
          vehicle.warranty.launchDate,

        brandId:
          brandMap[vehicle.brand],
      },

      create: {

        name: vehicle.name,
        slug: vehicle.slug,
        image: vehicle.image,
        overview: vehicle.overview,
        featured: vehicle.featured,

        exShowroomPrice:
          vehicle.pricing.exShowroomPrice,

        batteryKwh:
          vehicle.battery.batteryKwh,

        batteryType:
          vehicle.battery.batteryType,

        claimedRange:
          vehicle.battery.claimedRange,

        realRange:
          vehicle.battery.realRange,

        powerHp:
          toInt(vehicle.performance.maxPower),

        torqueNm:
          toInt(vehicle.performance.maxTorque),

        topSpeed:
          vehicle.performance.topSpeed,

        acceleration:
          vehicle.performance.zeroToHundred,

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

        acCharging:
          vehicle.charging.homeChargingTime,

        dcCharging:
          vehicle.charging.dcChargingTime,

        chargingPort:
          vehicle.charging.chargingPort,

        warranty:
          vehicle.warranty.vehicleWarranty,

        batteryWarranty:
          vehicle.warranty.batteryWarranty,

        launchDate:
          vehicle.warranty.launchDate,

        brandId:
          brandMap[vehicle.brand],
      },

    });

        //////////////////////////////////////////////////////
    // SPECIFICATIONS
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVSpec,
      modelId: model.id,
      data: (vehicle.specs ?? []).map((spec) => ({
        key: spec.key,
        value: spec.value,
        category: spec.category,
        modelId: model.id,
      })),
    });

    console.log("   ✓ Specifications");

    //////////////////////////////////////////////////////
    // VARIANTS
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVVariant,
      modelId: model.id,
      data: (vehicle.variants ?? []).map((variant) => ({
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

    //////////////////////////////////////////////////////
    // FEATURES
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVFeature,
      modelId: model.id,
      data: (vehicle.features ?? []).map((feature) => ({
        title: feature.title,
        category: feature.category,
        modelId: model.id,
      })),
    });

    console.log("   ✓ Features");

    //////////////////////////////////////////////////////
    // GALLERY
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVGalleryImage,
      modelId: model.id,
      data: (vehicle.gallery ?? []).map((image) => ({
        image: image.image,
        caption: image.caption ?? null,
        isPrimary: image.isPrimary ?? false,
        modelId: model.id,
      })),
    });

    console.log("   ✓ Gallery");

    //////////////////////////////////////////////////////
    // COLORS
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVColor,
      modelId: model.id,
      data: (vehicle.colors ?? []).map((color) => ({
        name: color.name,
        hexCode: color.hexCode,
        image: color.image ?? null,
        modelId: model.id,
      })),
    });

    console.log("   ✓ Colors");

        //////////////////////////////////////////////////////
    // FAQS
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVFAQ,
      modelId: model.id,
      data: (vehicle.faqs ?? []).map((faq, index) => ({
        question: faq.question,
        answer: faq.answer,
        order: faq.order ?? index + 1,
        modelId: model.id,
      })),
    });

    console.log("   ✓ FAQs");

    //////////////////////////////////////////////////////
    // PROS
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVPro,
      modelId: model.id,
      data: (vehicle.pros ?? []).map((pro, index) => ({
        title: pro.title,
        order: index + 1,
        modelId: model.id,
      })),
    });

    console.log("   ✓ Pros");

    //////////////////////////////////////////////////////
    // CONS
    //////////////////////////////////////////////////////

    await replaceChildCollection({
      model: prisma.eVCon,
      modelId: model.id,
      data: (vehicle.cons ?? []).map((con, index) => ({
        title: con.title,
        order: index + 1,
        modelId: model.id,
      })),
    });

    console.log("   ✓ Cons");

    //////////////////////////////////////////////////////
    // SAFETY
    //////////////////////////////////////////////////////

    await replaceChildRecord({
      model: prisma.eVSafety,
      modelId: model.id,
      data: vehicle.safety
        ? {
            ...vehicle.safety,
            modelId: model.id,
          }
        : null,
    });

    console.log("   ✓ Safety");

    //////////////////////////////////////////////////////
    // CHARGING
    //////////////////////////////////////////////////////

    await replaceChildRecord({
      model: prisma.eVCharging,
      modelId: model.id,
      data: vehicle.charging
        ? {
            ...vehicle.charging,
            modelId: model.id,
          }
        : null,
    });

    console.log("   ✓ Charging");

        //////////////////////////////////////////////////////
    // PERFORMANCE
    //////////////////////////////////////////////////////

    await replaceChildRecord({
      model: prisma.eVPerformance,
      modelId: model.id,
      data: vehicle.performance
        ? {
            zeroToHundred: vehicle.performance.zeroToHundred,
            motorType: vehicle.performance.motorType,
            maxPower: vehicle.performance.maxPower,
            maxTorque: vehicle.performance.maxTorque,
            driveModes: vehicle.performance.driveModes,
            regenLevels: vehicle.performance.regenLevels,
            modelId: model.id,
          }
        : null,
    });

    console.log("   ✓ Performance");

    //////////////////////////////////////////////////////
    // OWNERSHIP
    //////////////////////////////////////////////////////

    await replaceChildRecord({
      model: prisma.eVOwnership,
      modelId: model.id,
      data: vehicle.ownership
        ? {
            ...vehicle.ownership,
            modelId: model.id,
          }
        : null,
    });

    console.log("   ✓ Ownership");

    //////////////////////////////////////////////////////
    // RATING
    //////////////////////////////////////////////////////

    await replaceChildRecord({
      model: prisma.eVRating,
      modelId: model.id,
      data: vehicle.rating
        ? {
            ...vehicle.rating,
            modelId: model.id,
          }
        : null,
    });

    console.log("   ✓ Rating");

    console.log(`✅ ${vehicle.name} Completed`);
    console.log("");
  }

  //////////////////////////////////////////////////////
  // ARTICLES
  //////////////////////////////////////////////////////

  logSection("ARTICLES");
  for (const article of articles) {

    const author = await prisma.user.findUnique({
      where: {
        email: article.author,
      },
    });

    if (!author) {
      console.log(
        `❌ Author not found for article: ${article.title}`
      );
      continue;
    }

    const category = await prisma.category.findUnique({
      where: {
        slug: article.category,
      },
    });

    if (!category) {
      console.log(
        `❌ Category not found for article: ${article.title}`
      );
      continue;
    }

    await prisma.article.upsert({

      where: {
        slug: article.slug,
      },

      update: {

        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        image: article.image ?? null,
        published: article.published,

        authorId: author.id,
        categoryId: category.id,
        pros: article.pros ?? [],
cons: article.cons ?? [],
keyPoints: article.keyPoints ?? [],
faqs: article.faqs ?? null,

      },

      create: {

        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        image: article.image ?? null,
        published: article.published,

        authorId: author.id,
        categoryId: category.id,
        pros: article.pros ?? [],
cons: article.cons ?? [],
keyPoints: article.keyPoints ?? [],
faqs: article.faqs ?? null,

      },

    });

    console.log(`📰 ${article.title}`);

  }

  console.log("");
  console.log("✅ Articles Seeded");
  console.log("");
  console.log("🎉 Database Seed Completed Successfully!");
}

main()
  .then(() => {
    console.log("");
    console.log("======================================");
    console.log("🎉 ALL DATA SEEDED SUCCESSFULLY");
    console.log("======================================");
  })
  .catch((error) => {
    console.error("");
    console.error("======================================");
    console.error("❌ SEED FAILED");
    console.error("======================================");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🔌 Prisma disconnected.");
  });