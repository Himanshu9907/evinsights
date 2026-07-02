import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Specifications from "./components/Specifications";

import Hero from "./components/Hero";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Sidebar from "./components/Sidebar";
import BatteryChargingSection from "./components/BatteryCharging";
import ChargingCostCalculator from "./components/ChargingCostCalculator";
import Performance from "./components/Performance";
import Variants from "./components/Variants";
import VariantsTimeline from "./components/VariantsTimeline";
import ProsCons from "./components/ProsCons";
import FAQ from "./components/FAQ";

export default async function EVDetailPage({ params }) {
  const { slug } = await params;

  // const vehicle = await prisma.eVModel.findUnique({
  //   where: {
  //     slug,
  //   },
  //   include: {
  //     brand: true,
  //   },
  // });

// const vehicle = await prisma.eVModel.findUnique({
//   where: {
//     slug,
//   },
//   include: {
//     brand: true,
//     faqs: {
//       orderBy: {
//         order: "asc",
//       },
//     },
//   },
// });


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

// console.log(vehicle.faqs);

  // console.log({
  //   features: vehicle.features,
  //   gallery: vehicle.gallery,
  //   pros: vehicle.pros,
  //   cons: vehicle.cons,
  // });

  if (!vehicle) {
    notFound();
  }

  console.log({
  features: vehicle.features,
  gallery: vehicle.gallery,
  pros: vehicle.pros,
  cons: vehicle.cons,
});

  vehicle.variants = [
    {
      name: "Executive",
      price: 1399000,
      battery: "38 kWh",
      range: "332 km",
      power: "136 HP",
      recommended: false,
      features: [
        "LED Headlamps",
        "Automatic Climate Control",
        "Rear Camera",
        "Cruise Control",
      ],
    },
    {
      name: "Exclusive",
      price: 1549000,
      battery: "50 kWh",
      range: "461 km",
      power: "176 HP",
      recommended: false,
      features: [
        "Panoramic Sunroof",
        "Wireless Android Auto",
        "Wireless Apple CarPlay",
        "360° Camera",
      ],
    },
    {
      name: "Essence",
      price: 1699000,
      battery: "50 kWh",
      range: "461 km",
      power: "176 HP",
      recommended: true,
      features: [
        "ADAS Level 2",
        "Ventilated Seats",
        "360° Camera",
        "Premium Audio System",
        "V2L Support",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <Hero vehicle={vehicle} />

        <div className="mx-auto mt-2 max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-10">
              <Specifications vehicle={vehicle} />

              <BatteryChargingSection vehicle={vehicle} />

              <ChargingCostCalculator vehicle={vehicle} />

              <Performance vehicle={vehicle} />

              {/* <Variants vehicle={vehicle} /> */}

              <VariantsTimeline vehicle={vehicle} />

              <Features vehicle={vehicle} />

              <Gallery vehicle={vehicle} />

              <ProsCons vehicle={vehicle} />

              <FAQ faqs={vehicle.faqs} />
            </div>

            <Sidebar vehicle={vehicle} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
