"use client";

import Image from "next/image";
import Link from "next/link";

import ActionButtons from "./ActionButtons";

import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Camera,
  Star,
} from "lucide-react";

export default function Hero({ vehicle }) {
  return (
    <section className="relative overflow-hidden bg-black text-white mt-0">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.12),transparent_45%)]" />

      {/* Navigation */}
      <div className="sticky top-16 z-40 border-y border-zinc-800 bg-zinc-900/90 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto no-scrollbar px-3">
          <div className="flex w-max gap-2 py-3">

            {[
              ["Overview", "overview"],
              ["Specifications", "specifications"],
              ["Battery", "battery"],
              ["Performance", "performance"],
              ["Variants", "variants"],
              ["Features", "features"],
              ["Gallery", "gallery"],
              ["Pros & Cons", "proscons"],
              ["FAQ", "faq"],
            ].map(([title, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-green-500 hover:text-black"
              >
                {title}
              </a>
            ))}

          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 mt-10">

        <div className="grid gap-10 lg:grid-cols-12">

          {/* ================================= */}
          {/* LEFT SIDE */}
          {/* ================================= */}

          <div className="order-1 lg:col-span-7">

            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

              <div className="relative">

                {/* Featured Badge */}

                {vehicle.featured && (
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-black shadow-lg sm:left-6 sm:top-6 sm:text-sm">

                    <BadgeCheck size={16} />

                    Featured EV

                  </div>
                )}

                {/* Gallery Counter */}

                <div className="absolute right-4 top-4 z-20 rounded-full bg-black/70 px-3 py-2 backdrop-blur sm:right-6 sm:top-6">

                  <div className="flex items-center gap-2 text-xs sm:text-sm">

                    <Camera size={15} />

                    <span>
                      {vehicle.gallery?.length || 1} Photos
                    </span>

                  </div>

                </div>

                {/* Main Image */}

                <div className="relative aspect-[16/10]">

                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    priority
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 60vw, 700px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                </div>

              </div>

              {/* Desktop Thumbnail Gallery */}

              <div className="hidden md:flex items-center gap-3 border-t border-zinc-800 bg-zinc-950 p-4">

                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-green-500">

                  <ChevronLeft size={18} />

                </button>

                <div className="flex flex-1 gap-3 overflow-x-auto no-scrollbar">

                  {[1, 2, 3, 4].map((item) => (

                    <div
                      key={item}
                      className="relative h-20 w-32 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-zinc-800 transition hover:border-green-500"
                    >

                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />

                    </div>

                  ))}

                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-green-500">

                  <ChevronRight size={18} />

                </button>

              </div>

            </div>

          </div>
                    {/* ================================= */}
          {/* RIGHT SIDE */}
          {/* ================================= */}

          <div className="order-2 lg:col-span-5">

            {/* Brand */}

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">

                <Image
                  src={vehicle.brand.logo}
                  alt={vehicle.brand.name}
                  width={34}
                  height={34}
                  className="h-auto w-auto object-contain"
                />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[2px] text-green-400">
                  {vehicle.brand.name}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Electric Vehicle
                </p>

              </div>

            </div>

            {/* Title */}

            <h1 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-5xl">

              {vehicle.name}

            </h1>

            {/* Rating */}

            <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-5">

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                ))}

              </div>

              <span className="font-semibold">

                {vehicle.rating?.overall ?? "4.8"}

              </span>

              <span className="text-sm text-zinc-500">

                ({vehicle.rating?.reviews ?? 126} Reviews)

              </span>

            </div>

            {/* Price Card */}

            <div className="mt-8 rounded-3xl border border-green-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 sm:p-6">

              <p className="text-sm text-zinc-400">
                Ex-Showroom Price
              </p>

              <div className="mt-3 flex flex-wrap items-end gap-2">

                <h2 className="text-3xl font-bold sm:text-4xl">

                  ₹ {(vehicle.exShowroomPrice / 100000).toFixed(2)}

                </h2>

                <span className="pb-1 text-lg text-zinc-400">

                  Lakh

                </span>

              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-500">

                Final on-road price may vary depending on your city,
                insurance and registration charges.

              </p>

            </div>

            {/* Quick Specs */}

            {/* <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-green-500">

                <p className="text-xs uppercase tracking-wider text-zinc-500">

                  Battery

                </p>

                <h3 className="mt-2 text-xl font-bold">

                  {vehicle.batteryKwh} kWh

                </h3>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-green-500">

                <p className="text-xs uppercase tracking-wider text-zinc-500">

                  Range

                </p>

                <h3 className="mt-2 text-xl font-bold">

                  {vehicle.claimedRange} km

                </h3>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-green-500">

                <p className="text-xs uppercase tracking-wider text-zinc-500">

                  Power

                </p>

                <h3 className="mt-2 text-xl font-bold">

                  {vehicle.powerHp} HP

                </h3>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-green-500">

                <p className="text-xs uppercase tracking-wider text-zinc-500">

                  Charging

                </p>

                <h3 className="mt-2 text-xl font-bold">

                  {vehicle.dcCharging}

                </h3>

              </div>

            </div> */}

            {/* Action Buttons */}

            <div className="mt-8">

              <ActionButtons vehicle={vehicle} />

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


