// "use client";

// import Link from "next/link";
// import {
//   IndianRupee,
//   BatteryCharging,
//   Gauge,
//   Zap,
//   ArrowRight,
//   Share2,
//   Star,
//   Calculator,
//   Wallet,
//   Scale,
//   CarFront,
//   ChevronRight,
// } from "lucide-react";

// export default function VehicleSidebar({ vehicle, similarEVs }) {
//   if (!vehicle) return null;

//   const formatPrice = (price) => {
//     return `₹ ${(price / 100000).toFixed(2)} Lakh`;
//   };

//   const navItems = [
//     {
//       title: "Specifications",
//       id: "specifications",
//     },
//     {
//       title: "Battery & Charging",
//       id: "battery",
//     },
//     {
//       title: "Performance",
//       id: "performance",
//     },
//     {
//       title: "Variants",
//       id: "variants",
//     },
//     {
//       title: "Features",
//       id: "features",
//     },
//     {
//       title: "Gallery",
//       id: "gallery",
//     },
//     {
//       title: "Pros & Cons",
//       id: "proscons",
//     },
//     {
//       title: "FAQ",
//       id: "faq",
//     },
//   ];

//   return (
//     <aside className="space-y-5 lg:sticky lg:top-24">
//       {/* ====================== */}
//       {/* PRICE CARD */}
//       {/* ====================== */}

//       <div className="overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950">
//         <div className="border-b border-zinc-800 p-6">
//           <span className="inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
//             Ex-showroom Price
//           </span>

//           <div className="mt-4 flex items-center gap-2">
//             <IndianRupee size={28} className="text-green-400" />

//             <h2 className="text-3xl font-bold text-white">
//               {formatPrice(vehicle.exShowroomPrice)}
//             </h2>
//           </div>

//           <p className="mt-3 text-sm leading-6 text-zinc-400">
//             Final on-road price may vary depending on your city, insurance and
//             registration.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 divide-x divide-zinc-800">
//           <div className="p-5">
//             <p className="text-xs uppercase tracking-wider text-zinc-500">
//               Range
//             </p>

//             <p className="mt-2 text-xl font-bold text-white">
//               {vehicle.claimedRange} km
//             </p>
//           </div>

//           <div className="p-5">
//             <p className="text-xs uppercase tracking-wider text-zinc-500">
//               Battery
//             </p>

//             <p className="mt-2 text-xl font-bold text-white">
//               {vehicle.batteryKwh} kWh
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ====================== */}
//       {/* QUICK NAVIGATION */}
//       {/* ====================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
//         <h3 className="mb-5 text-lg font-semibold text-white">
//           Quick Navigation
//         </h3>

//         <div className="space-y-2">
//           {navItems.map((item) => (
//             <a
//               key={item.id}
//               href={`#${item.id}`}
//               className="group flex items-center justify-between rounded-xl border border-zinc-800 px-4 py-3 transition hover:border-green-500 hover:bg-zinc-800"
//             >
//               <span className="text-sm text-zinc-300 group-hover:text-white">
//                 {item.title}
//               </span>

//               <ChevronRight
//                 size={16}
//                 className="text-zinc-500 transition group-hover:text-green-400"
//               />
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* ====================== */}
//       {/* QUICK SPECS */}
//       {/* ====================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
//         <h3 className="mb-5 text-lg font-semibold text-white">Quick Specs</h3>

//         <div className="grid grid-cols-2 gap-3">
//           <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
//             <BatteryCharging size={20} className="mb-3 text-green-400" />

//             <p className="text-xs uppercase tracking-wider text-zinc-500">
//               Battery
//             </p>

//             <h4 className="mt-2 text-lg font-bold text-white">
//               {vehicle.batteryKwh} kWh
//             </h4>
//           </div>

//           <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
//             <Zap size={20} className="mb-3 text-yellow-400" />

//             <p className="text-xs uppercase tracking-wider text-zinc-500">
//               Range
//             </p>

//             <h4 className="mt-2 text-lg font-bold text-white">
//               {vehicle.claimedRange} km
//             </h4>
//           </div>

//           <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
//             <Gauge size={20} className="mb-3 text-blue-400" />

//             <p className="text-xs uppercase tracking-wider text-zinc-500">
//               Power
//             </p>

//             <h4 className="mt-2 text-lg font-bold text-white">
//               {vehicle.powerHp} HP
//             </h4>
//           </div>

//           <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
//             <CarFront size={20} className="mb-3 text-purple-400" />

//             <p className="text-xs uppercase tracking-wider text-zinc-500">
//               Top Speed
//             </p>

//             <h4 className="mt-2 text-lg font-bold text-white">
//               {vehicle.topSpeed} km/h
//             </h4>
//           </div>
//         </div>
//       </div>

//       {/* ====================== */}
//       {/* QUICK ACTIONS */}
//       {/* ====================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
//         <h3 className="mb-5 text-lg font-semibold text-white">Quick Actions</h3>

//         <div className="space-y-3">
//           <a
//             href="#emi"
//             className="flex items-center justify-between rounded-xl bg-green-500 px-4 py-3 font-semibold text-black transition hover:bg-green-400"
//           >
//             <div className="flex items-center gap-3">
//               <Calculator size={18} />

//               <span>EMI Calculator</span>
//             </div>

//             <ArrowRight size={18} />
//           </a>

//           <a
//             href="#charging-cost"
//             className="flex items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800"
//           >
//             <div className="flex items-center gap-3">
//               <BatteryCharging size={18} className="text-green-400" />

//               <span>Charging Cost</span>
//             </div>

//             <ArrowRight size={18} />
//           </a>

//           <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
//             <div className="flex items-center gap-3">
//               <Scale size={18} className="text-blue-400" />

//               <span>Compare EV</span>
//             </div>

//             <ArrowRight size={18} />
//           </button>

//           <button className="flex w-full items-center justify-between rounded-xl border border-zinc-700 px-4 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
//             <div className="flex items-center gap-3">
//               <CarFront size={18} className="text-purple-400" />

//               <span>Book Test Drive</span>
//             </div>

//             <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* ====================== */}
// {/* SHARE */}
// {/* ====================== */}

// <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

//   <h3 className="mb-5 text-lg font-semibold text-white">
//     Share this EV
//   </h3>

//   <button
//     onClick={async () => {
//       if (navigator.share) {
//         await navigator.share({
//           title: vehicle.name,
//           text: `Check out ${vehicle.name} on EVInsightsHub`,
//           url: window.location.href,
//         });
//       } else {
//         await navigator.clipboard.writeText(window.location.href);
//         alert("Link copied successfully!");
//       }
//     }}
//     className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800"
//   >
//     <Share2 size={18} className="text-green-400" />
//     Share Vehicle
//   </button>

// </div>

//       {/* ====================== */}
//       {/* SIMILAR EVs */}
//       {/* ====================== */}

//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
//         <div className="mb-5 flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-white">Similar EVs</h3>

//           <Link
//             href="/ev"
//             className="text-sm font-medium text-green-400 hover:text-green-300"
//           >
//             View All
//           </Link>
//         </div>

//         <div className="space-y-4">
//           {similarEVs?.map((car) => (
//             <Link
//               key={car.slug}
//               href={`/ev/${car.slug}`}
//               className="block rounded-xl border border-zinc-800 p-4 transition hover:border-green-500 hover:bg-zinc-800"
//             >
//               <h4 className="font-semibold text-white">{car.name}</h4>

//               <div className="mt-2 flex items-center justify-between text-sm">
//                 <span className="text-zinc-400">
//                   ₹ {(car.exShowroomPrice / 100000).toFixed(2)} Lakh
//                 </span>

//                 <span className="font-medium text-green-400">
//                   {car.claimedRange} km
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
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
  Scale,
  CarFront,
  ChevronRight,
} from "lucide-react";

export default function VehicleSidebar({
  vehicle,
  similarEVs,
}) {
  if (!vehicle) return null;

  // const formatPrice = (price) => {
  //   if (!price) return "N/A";
  //   return `₹ ${(price / 100000).toFixed(2)} Lakh`;
  // };

  function formatPrice(startingPrice, endingPrice) {
  if (!startingPrice) return "N/A";

  const start = (startingPrice / 100000).toFixed(2);

  if (!endingPrice || startingPrice === endingPrice) {
    return `₹${start} Lakh`;
  }

  const end = (endingPrice / 100000).toFixed(2);

  return `₹${start} - ${end} Lakh`;
}


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
    // <aside className="space-y-5 lg:sticky lg:top-24">
    <aside className="space-y-5">

      {/* PRICE CARD */}

      <div className="overflow-hidden rounded-2xl border border-theme bg-card shadow-theme">

        <div className="border-b border-theme p-6">

          <span className="inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-500">

            Ex-showroom Price

          </span>

          <div className="mt-4 flex items-center gap-2">

            <IndianRupee
              size={28}
              className="text-green-500"
            />

            {/* <h2 className="text-3xl font-bold text-foreground">

              {formatPrice(vehicle.exShowroomPrice)}

            </h2> */}

            <h2 className="text-3xl font-bold text-foreground">
  {formatPrice(
    vehicle.startingPrice,
    vehicle.endingPrice
  )}
</h2>

          </div>

          <p className="mt-3 text-sm leading-6 text-muted">

            Final on-road price may vary depending on your city,
            insurance and registration.

          </p>

        </div>

        <div className="grid grid-cols-2 divide-x divide-border">

          <div className="p-5">

            <p className="text-xs uppercase tracking-wider text-muted">
              Range
            </p>

            <p className="mt-2 text-xl font-bold text-foreground">

              {vehicle.claimedRange || "-"} km

            </p>

          </div>

          <div className="p-5">

            <p className="text-xs uppercase tracking-wider text-muted">
              Battery
            </p>

            <p className="mt-2 text-xl font-bold text-foreground">

              {vehicle.batteryKwh || "-"} kWh

            </p>

          </div>

        </div>

      </div>

      {/* QUICK NAVIGATION */}

      <div className="rounded-2xl border border-theme bg-card p-6 shadow-theme">

        <h3 className="mb-5 text-lg font-semibold text-foreground">

          Quick Navigation

        </h3>

        <div className="space-y-2">

          {navItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                group
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-theme
                px-4
                py-3
                transition
                hover:border-green-500
                hover:bg-background
              "
            >

              <span className="text-sm text-foreground">

                {item.title}

              </span>

              <ChevronRight
                size={16}
                className="text-muted group-hover:text-green-500"
              />

            </a>

          ))}

        </div>

      </div>
            {/* QUICK SPECS */}

      <div className="rounded-2xl border border-theme bg-card p-6 shadow-theme">

        <h3 className="mb-5 text-lg font-semibold text-foreground">
          Quick Specs
        </h3>

        <div className="space-y-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <BatteryCharging
                size={18}
                className="text-green-500"
              />

              <span className="text-sm text-muted">
                Battery
              </span>

            </div>

            <span className="font-semibold text-foreground">
              {vehicle.batteryKwh || "-"} kWh
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Zap
                size={18}
                className="text-green-500"
              />

              <span className="text-sm text-muted">
                Claimed Range
              </span>

            </div>

            <span className="font-semibold text-foreground">
              {vehicle.claimedRange || "-"} km
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Gauge
                size={18}
                className="text-green-500"
              />

              <span className="text-sm text-muted">
                Power
              </span>

            </div>

            <span className="font-semibold text-foreground">
              {vehicle.powerHp || "-"} HP
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <CarFront
                size={18}
                className="text-green-500"
              />

              <span className="text-sm text-muted">
                Seating
              </span>

            </div>

            <span className="font-semibold text-foreground">
              {vehicle.seating || "-"} Seater
            </span>

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div className="rounded-2xl border border-theme bg-card p-6 shadow-theme">

        <h3 className="mb-5 text-lg font-semibold text-foreground">
          Quick Actions
        </h3>

        <div className="grid gap-3">

          <Link
            href={`/comparison?car=${vehicle.slug}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-theme
              py-3
              font-medium
              text-foreground
              transition
              hover:border-green-500
              hover:bg-background
            "
          >
            <Scale size={18} />

            Compare EV

          </Link>

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-theme
              py-3
              font-medium
              text-foreground
              transition
              hover:border-green-500
              hover:bg-background
            "
          >
            <Calculator size={18} />

            EMI Calculator

          </button>

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-theme
              py-3
              font-medium
              text-foreground
              transition
              hover:border-green-500
              hover:bg-background
            "
          >
            <Share2 size={18} />

            Share

          </button>

        </div>

      </div>
            {/* SIMILAR EVs */}

      <div className="rounded-2xl border border-theme bg-card p-6 shadow-theme">

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-lg font-semibold text-foreground">
            Similar EVs
          </h3>

          <Link
            href="/ev"
            className="text-sm font-medium text-green-500 hover:underline"
          >
            View All
          </Link>

        </div>

        <div className="space-y-4">

          {similarEVs?.length ? (

            similarEVs.map((car) => (

              <Link
                key={car.slug}
                href={`/ev/${car.slug}`}
                className="
                  group
                  flex
                  gap-4
                  rounded-xl
                  border
                  border-theme
                  p-3
                  transition-all
                  hover:border-green-500
                  hover:bg-background
                "
              >

                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">

                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <h4 className="line-clamp-2 font-semibold text-foreground">

                      {car.name}

                    </h4>

                    {/* <p className="mt-1 text-sm text-muted">

                      {formatPrice(car.exShowroomPrice)}

                    </p> */}

                    <p className="mt-1 text-sm text-muted">
  {formatPrice(
    car.startingPrice,
    car.endingPrice
  )}
</p>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-muted">

                      {car.claimedRange || "-"} km

                    </span>

                    <ArrowRight
                      size={16}
                      className="text-green-500 transition group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            ))

          ) : (

            <p className="text-sm text-muted">
              No similar EVs available.
            </p>

          )}

        </div>

      </div>

      {/* CTA */}

      <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent p-6">

        <h3 className="text-xl font-bold text-foreground">
          Looking for the best EV?
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted">
          Compare specifications, battery, charging, range and
          performance before making your decision.
        </p>

        <Link
          href="/comparison"
          className="
            mt-5
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-500
            py-3
            font-semibold
            text-black
            transition
            hover:bg-green-400
          "
        >
          Compare Electric Cars

          <ArrowRight size={18} />

        </Link>

      </div>

    </aside>
  );
}