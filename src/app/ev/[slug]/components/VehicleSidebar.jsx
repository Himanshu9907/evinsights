// "use client";

// import {
//   BatteryCharging,
//   Gauge,
//   Zap,
//   Star,
//   IndianRupee,
// } from "lucide-react";
// import ActionButtons from "./ActionButtons";
// import SimilarEVs from "./SimilarEVs";

// export default function VehicleSidebar({ vehicle }) {
//   if (!vehicle) return null;

//   const formatPrice = (price) => {
//     return `₹${(price / 100000).toFixed(2)} Lakh`;
//   };

//   return (
//     <aside className="sticky top-24 space-y-5">

//       {/* ===================== */}
//       {/* PRICE CARD */}
//       {/* ===================== */}

//       <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-6">

//         <p className="text-sm text-zinc-400">
//           Ex-showroom Price
//         </p>

//         <div className="mt-3 flex items-center gap-2">

//           <IndianRupee
//             size={26}
//             className="text-green-400"
//           />

//           <h2 className="text-3xl font-bold text-white">
//             {formatPrice(vehicle.exShowroomPrice)}
//           </h2>

//         </div>

//         <p className="mt-3 text-sm text-zinc-500">
//           Price may vary based on city and variant.
//         </p>

//       </div>

//       {/* ===================== */}
//       {/* QUICK SPECS */}
//       {/* ===================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//         <h3 className="mb-5 text-lg font-semibold text-white">
//           Quick Specs
//         </h3>

//         <div className="space-y-4">

//           {/* Battery */}

//           <div className="flex items-center justify-between">

//             <div className="flex items-center gap-3">

//               <BatteryCharging
//                 size={20}
//                 className="text-green-400"
//               />

//               <span className="text-sm text-zinc-400">
//                 Battery
//               </span>

//             </div>

//             <span className="font-semibold text-white">
//               {vehicle.batteryKwh} kWh
//             </span>

//           </div>

//           {/* Range */}

//           <div className="flex items-center justify-between">

//             <div className="flex items-center gap-3">

//               <Zap
//                 size={20}
//                 className="text-yellow-400"
//               />

//               <span className="text-sm text-zinc-400">
//                 Range
//               </span>

//             </div>

//             <span className="font-semibold text-white">
//               {vehicle.claimedRange} km
//             </span>

//           </div>

//           {/* Power */}

//           <div className="flex items-center justify-between">

//             <div className="flex items-center gap-3">

//               <Gauge
//                 size={20}
//                 className="text-blue-400"
//               />

//               <span className="text-sm text-zinc-400">
//                 Power
//               </span>

//             </div>

//             <span className="font-semibold text-white">
//               {vehicle.powerHp} HP
//             </span>

//           </div>

//           {/* Rating */}

//           <div className="flex items-center justify-between">

//             <div className="flex items-center gap-3">

//               <Star
//                 size={20}
//                 className="text-amber-400"
//               />

//               <span className="text-sm text-zinc-400">
//                 Rating
//               </span>

//             </div>

//             <span className="font-semibold text-white">
//               {vehicle.rating?.overall ?? "4.7"} / 5
//             </span>

//           </div>

//         </div>

//       </div>

//             {/* ===================== */}
//       {/* EXPERT RATING */}
//       {/* ===================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//         <h3 className="mb-4 text-lg font-semibold text-white">
//           Expert Rating
//         </h3>

//         <div className="flex items-center gap-4">

//           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">

//             <span className="text-2xl font-bold text-green-400">
//               {vehicle.rating?.overall ?? "4.7"}
//             </span>

//           </div>

//           <div>

//             <div className="flex text-yellow-400">

//               {[1, 2, 3, 4, 5].map((star) => (

//                 <Star
//                   key={star}
//                   size={18}
//                   fill={
//                     star <= Math.round(vehicle.rating?.overall ?? 5)
//                       ? "currentColor"
//                       : "none"
//                   }
//                 />

//               ))}

//             </div>

//             <p className="mt-2 text-sm text-zinc-400">
//               Overall Expert Score
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* ===================== */}
//       {/* ACTION BUTTONS */}
//       {/* ===================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//         <h3 className="mb-4 text-lg font-semibold text-white">
//           Quick Actions
//         </h3>

//         <div className="space-y-3">

//           <button className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400">
//             Compare EV
//           </button>

//           <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
//             EMI Calculator
//           </button>

//           <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
//             Charging Cost
//           </button>

//           <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
//             Book Test Drive
//           </button>

//         </div>

//       </div>

//       {/* ===================== */}
//       {/* SHARE */}
//       {/* ===================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//         <h3 className="mb-4 text-lg font-semibold text-white">
//           Share
//         </h3>

//         <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
//           Share Vehicle
//         </button>

//       </div>

//             <ActionButtons vehicle={vehicle} />

//             <SimilarEVs vehicle={vehicle} />

//     </aside>
//   );
// }

"use client";

import Link from "next/link";
import {
  IndianRupee,
  BatteryCharging,
  Gauge,
  Zap,
  ArrowRight,
  Share2,
  Star,
  Calculator,
  Wallet,
  Scale,
  CarFront,
  ChevronRight,
} from "lucide-react";

export default function VehicleSidebar({ vehicle, similarEVs }) {
  if (!vehicle) return null;

  const formatPrice = (price) => {
    return `₹ ${(price / 100000).toFixed(2)} Lakh`;
  };

  const navItems = [
    {
      title: "Specifications",
      id: "specifications",
    },
    {
      title: "Battery & Charging",
      id: "battery",
    },
    {
      title: "Performance",
      id: "performance",
    },
    {
      title: "Variants",
      id: "variants",
    },
    {
      title: "Features",
      id: "features",
    },
    {
      title: "Gallery",
      id: "gallery",
    },
    {
      title: "Pros & Cons",
      id: "proscons",
    },
    {
      title: "FAQ",
      id: "faq",
    },
  ];

  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      {/* ====================== */}
      {/* PRICE CARD */}
      {/* ====================== */}

      <div className="overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950">
        <div className="border-b border-zinc-800 p-6">
          <span className="inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
            Ex-showroom Price
          </span>

          <div className="mt-4 flex items-center gap-2">
            <IndianRupee size={28} className="text-green-400" />

            <h2 className="text-3xl font-bold text-white">
              {formatPrice(vehicle.exShowroomPrice)}
            </h2>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Final on-road price may vary depending on your city, insurance and
            registration.
          </p>
        </div>

        <div className="grid grid-cols-2 divide-x divide-zinc-800">
          <div className="p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Range
            </p>

            <p className="mt-2 text-xl font-bold text-white">
              {vehicle.claimedRange} km
            </p>
          </div>

          <div className="p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Battery
            </p>

            <p className="mt-2 text-xl font-bold text-white">
              {vehicle.batteryKwh} kWh
            </p>
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* QUICK NAVIGATION */}
      {/* ====================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-5 text-lg font-semibold text-white">
          Quick Navigation
        </h3>

        <div className="space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center justify-between rounded-xl border border-zinc-800 px-4 py-3 transition hover:border-green-500 hover:bg-zinc-800"
            >
              <span className="text-sm text-zinc-300 group-hover:text-white">
                {item.title}
              </span>

              <ChevronRight
                size={16}
                className="text-zinc-500 transition group-hover:text-green-400"
              />
            </a>
          ))}
        </div>
      </div>

      {/* ====================== */}
      {/* QUICK SPECS */}
      {/* ====================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-5 text-lg font-semibold text-white">Quick Specs</h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <BatteryCharging size={20} className="mb-3 text-green-400" />

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Battery
            </p>

            <h4 className="mt-2 text-lg font-bold text-white">
              {vehicle.batteryKwh} kWh
            </h4>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <Zap size={20} className="mb-3 text-yellow-400" />

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Range
            </p>

            <h4 className="mt-2 text-lg font-bold text-white">
              {vehicle.claimedRange} km
            </h4>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <Gauge size={20} className="mb-3 text-blue-400" />

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Power
            </p>

            <h4 className="mt-2 text-lg font-bold text-white">
              {vehicle.powerHp} HP
            </h4>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <CarFront size={20} className="mb-3 text-purple-400" />

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Top Speed
            </p>

            <h4 className="mt-2 text-lg font-bold text-white">
              {vehicle.topSpeed} km/h
            </h4>
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* EXPERT RATING */}
      {/* ====================== */}

      {/* <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Expert Rating</h3>

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
            Verified
          </span>
        </div>

        <div className="mt-6 flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-500/20 bg-green-500/10">
            <span className="text-3xl font-bold text-green-400">
              {vehicle.rating?.overall ?? "4.7"}
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill={
                    star <= Math.round(vehicle.rating?.overall ?? 5)
                      ? "currentColor"
                      : "none"
                  }
                  className="text-yellow-400"
                />
              ))}
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              One of the highest-rated electric vehicles in its segment based on
              range, performance, technology and value for money.
            </p>
          </div>
        </div>
      </div> */}

      {/* ====================== */}
      {/* QUICK ACTIONS */}
      {/* ====================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-5 text-lg font-semibold text-white">Quick Actions</h3>

        <div className="space-y-3">
          <a
            href="#emi"
            className="flex items-center justify-between rounded-xl bg-green-500 px-4 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            <div className="flex items-center gap-3">
              <Calculator size={18} />

              <span>EMI Calculator</span>
            </div>

            <ArrowRight size={18} />
          </a>

          <a
            href="#charging-cost"
            className="flex items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800"
          >
            <div className="flex items-center gap-3">
              <BatteryCharging size={18} className="text-green-400" />

              <span>Charging Cost</span>
            </div>

            <ArrowRight size={18} />
          </a>

          <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
            <div className="flex items-center gap-3">
              <Scale size={18} className="text-blue-400" />

              <span>Compare EV</span>
            </div>

            <ArrowRight size={18} />
          </button>

          <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
            <div className="flex items-center gap-3">
              <CarFront size={18} className="text-purple-400" />

              <span>Book Test Drive</span>
            </div>

            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ====================== */}
      {/* SHARE */}
      {/* ====================== */}

      {/* <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-5 text-lg font-semibold text-white">Share this EV</h3>

        <div className="space-y-3">
          <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-green-500 hover:bg-zinc-800">
            <div className="flex items-center gap-3">
              <Share2 size={18} className="text-green-400" />

              <span className="font-medium text-white">Copy Link</span>
            </div>

            <ArrowRight size={16} />
          </button>

          <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-green-500 hover:bg-zinc-800">
            <span className="font-medium text-white">WhatsApp</span>

            <ArrowRight size={16} />
          </button>

          <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-green-500 hover:bg-zinc-800">
            <span className="font-medium text-white">Facebook</span>

            <ArrowRight size={16} />
          </button>
        </div>
      </div> */}

      {/* ====================== */}
{/* SHARE */}
{/* ====================== */}

<div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

  <h3 className="mb-5 text-lg font-semibold text-white">
    Share this EV
  </h3>

  <button
    onClick={async () => {
      if (navigator.share) {
        await navigator.share({
          title: vehicle.name,
          text: `Check out ${vehicle.name} on EVInsightsHub`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied successfully!");
      }
    }}
    className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800"
  >
    <Share2 size={18} className="text-green-400" />
    Share Vehicle
  </button>

</div>

      {/* ====================== */}
      {/* SIMILAR EVs */}
      {/* ====================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Similar EVs</h3>

          <Link
            href="/ev"
            className="text-sm font-medium text-green-400 hover:text-green-300"
          >
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {similarEVs?.map((car) => (
            <Link
              key={car.slug}
              href={`/ev/${car.slug}`}
              className="block rounded-xl border border-zinc-800 p-4 transition hover:border-green-500 hover:bg-zinc-800"
            >
              <h4 className="font-semibold text-white">{car.name}</h4>

              {/* <div className="mt-2 flex items-center justify-between text-sm">

                <span className="text-zinc-400">
                  {car.price}
                </span>

                <span className="font-medium text-green-400">
                  {car.range}
                </span>

              </div> */}

              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-zinc-400">
                  ₹ {(car.exShowroomPrice / 100000).toFixed(2)} Lakh
                </span>

                <span className="font-medium text-green-400">
                  {car.claimedRange} km
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
