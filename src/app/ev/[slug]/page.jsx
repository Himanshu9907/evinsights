// import { notFound } from "next/navigation";
// import { prisma } from "@/lib/prisma";
// import Specifications from "./components/Specifications";

// import Hero from "./components/Hero";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import Gallery from "./components/Gallery";
// import Features from "./components/Features";
// import Sidebar from "./components/Sidebar";
// import BatteryChargingSection from "./components/BatteryCharging";
// import ChargingCostCalculator from "./components/ChargingCostCalculator";
// import Performance from "./components/Performance";
// import Variants from "./components/Variants";
// import VariantsTimeline from "./components/VariantsTimeline";
// import ProsCons from "./components/ProsCons";
// import FAQ from "./components/FAQ";
// import VehicleSidebar from "./components/VehicleSidebar";
// import EMICalculator from "./components/EMICalculator";


// export default async function EVDetailPage({ params }) {
//   const { slug } = await params;

//   const vehicle = await prisma.eVModel.findUnique({
//     where: {
//       slug,
//     },
//     include: {
//       brand: true,

//       faqs: {
//         orderBy: {
//           order: "asc",
//         },
//       },

//       features: {
//         orderBy: {
//           order: "asc",
//         },
//       },

//       gallery: {
//         orderBy: {
//           order: "asc",
//         },
//       },

//       pros: {
//         orderBy: {
//           order: "asc",
//         },
//       },

//       cons: {
//         orderBy: {
//           order: "asc",
//         },
//       },

//       colors: true,
//       specs: true,
//       variants: true,
//       safety: true,
//       charging: true,
//       performance: true,
//       ownership: true,
//     },
//   });

//   // console.log(vehicle.faqs);

//   // console.log({
//   //   features: vehicle.features,
//   //   gallery: vehicle.gallery,
//   //   pros: vehicle.pros,
//   //   cons: vehicle.cons,
//   // });

//   if (!vehicle) {
//     notFound();
//   }

//   console.log({
//     features: vehicle.features,
//     gallery: vehicle.gallery,
//     pros: vehicle.pros,
//     cons: vehicle.cons,
//   });

//   vehicle.variants = [
//     {
//       name: "Executive",
//       price: 1399000,
//       battery: "38 kWh",
//       range: "332 km",
//       power: "136 HP",
//       recommended: false,
//       features: [
//         "LED Headlamps",
//         "Automatic Climate Control",
//         "Rear Camera",
//         "Cruise Control",
//       ],
//     },
//     {
//       name: "Exclusive",
//       price: 1549000,
//       battery: "50 kWh",
//       range: "461 km",
//       power: "176 HP",
//       recommended: false,
//       features: [
//         "Panoramic Sunroof",
//         "Wireless Android Auto",
//         "Wireless Apple CarPlay",
//         "360° Camera",
//       ],
//     },
//     {
//       name: "Essence",
//       price: 1699000,
//       battery: "50 kWh",
//       range: "461 km",
//       power: "176 HP",
//       recommended: true,
//       features: [
//         "ADAS Level 2",
//         "Ventilated Seats",
//         "360° Camera",
//         "Premium Audio System",
//         "V2L Support",
//       ],
//     },
//   ];

//   const similarEVs = await prisma.eVModel.findMany({
//     where: {
//       brandId: vehicle.brandId,
//       NOT: {
//         slug: vehicle.slug,
//       },
//     },
//     select: {
//       name: true,
//       slug: true,
//       image: true,
//       exShowroomPrice: true,
//       claimedRange: true,
//     },
//     take: 3,
//   });

//   return (
//     <>
    
//       <main className="min-h-screen bg-black text-white ">
//         <Hero vehicle={vehicle} />
//         <div className="mx-auto mt-2 max-w-7xl px-4 md:px-6">
//           <div className="grid gap-8 lg:grid-cols-12">
//             <div className="space-y-10 lg:col-span-8">
//               <Specifications vehicle={vehicle} />

//               <BatteryChargingSection vehicle={vehicle} />

//               <ChargingCostCalculator vehicle={vehicle} />

//               <Performance vehicle={vehicle} />

//               <Variants vehicle={vehicle} />

//               <EMICalculator vehicle={vehicle} />

//               <Features vehicle={vehicle} />

//               <Gallery vehicle={vehicle} />

//               <ProsCons vehicle={vehicle} />

//               <FAQ vehicle={vehicle} />
//             </div>

            
//             <div className="w-full lg:col-span-4">
//               <VehicleSidebar vehicle={vehicle} similarEVs={similarEVs} />
//             </div>
//           </div>
//         </div>
//       </main>
    
//     </>
//   );
// }


import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import Hero from "./components/Hero";
import Specifications from "./components/Specifications";
import BatteryChargingSection from "./components/BatteryCharging";
import ChargingCostCalculator from "./components/ChargingCostCalculator";
import Performance from "./components/Performance";
import Variants from "./components/Variants";
import EMICalculator from "./components/EMICalculator";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import ProsCons from "./components/ProsCons";
import FAQ from "./components/FAQ";
import VehicleSidebar from "./components/VehicleSidebar";

export default async function EVDetailPage({ params }) {
  const { slug } = await params;

  const vehicle = await prisma.eVModel.findUnique({
    where: {
      slug,
    },
    include: {
      brand: true,

      faqs: {
        orderBy: {
          order: "asc",
        },
      },

      features: {
        orderBy: {
          order: "asc",
        },
      },

      gallery: {
        orderBy: {
          order: "asc",
        },
      },

      pros: {
        orderBy: {
          order: "asc",
        },
      },

      cons: {
        orderBy: {
          order: "asc",
        },
      },

      colors: true,
      specs: true,
      variants: true,
      safety: true,
      charging: true,
      performance: true,
      ownership: true,
    },
  });

  if (!vehicle) {
    notFound();
  }

 

  // const similarEVs = await prisma.eVModel.findMany({
  //   where: {
  //     brandId: vehicle.brandId,
  //     NOT: {
  //       slug: vehicle.slug,
  //     },
  //   },
  //   select: {
  //     name: true,
  //     slug: true,
  //     image: true,
  //     exShowroomPrice: true,
  //     claimedRange: true,
  //   },
  //   take: 3,
  // });

  const similarEVs = await prisma.eVModel.findMany({
  where: {
    brandId: vehicle.brandId,
    NOT: {
      slug: vehicle.slug,
    },
  },
  select: {
    name: true,
    slug: true,
    image: true,

    startingPrice: true,
    endingPrice: true,

    claimedRange: true,
  },
  take: 3,
});

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <Hero vehicle={vehicle} />

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-12">

          {/* Left Content */}

          <div className="space-y-8 lg:col-span-8">

            <Specifications vehicle={vehicle} />

            <BatteryChargingSection vehicle={vehicle} />

            <ChargingCostCalculator vehicle={vehicle} />

            <Performance vehicle={vehicle} />

            <Variants vehicle={vehicle} />

            <EMICalculator vehicle={vehicle} />

            <Features vehicle={vehicle} />

            <Gallery vehicle={vehicle} />

            <ProsCons vehicle={vehicle} />

            <FAQ vehicle={vehicle} />

          </div>

          {/* Sidebar */}

          <aside className="lg:col-span-4">

            <VehicleSidebar
              vehicle={vehicle}
              similarEVs={similarEVs}
            />

          </aside>

        </div>

      </section>

    </main>
  );
}
