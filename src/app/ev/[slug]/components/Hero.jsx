"use client";

import Image from "next/image";

import ActionButtons from "./ActionButtons";

import { BadgeCheck } from "lucide-react";

export default function Hero({ vehicle }) {
  return (
    <>
      <main className="bg-black text-white mt-5">
        <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 items-start">
            {/* LEFT IMAGE */}

            <div className="lg:col-span-7">
              <div className="relative max-w-[620px] mx-auto overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                {vehicle.featured && (
                  <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-black">
                    <BadgeCheck size={16} />
                    Featured EV
                  </div>
                )}

                <div className="relative aspect-[16/10]">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    priority
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-5 max-w-[380px] w-full">
              {/* Brand */}

              <p className="text-[11px] uppercase tracking-[2px] font-semibold text-green-400">
                {vehicle.brand.name}
              </p>

              {/* Title */}

              <h1 className="mt-1 text-2xl md:text-3xl xl:text-[34px] font-bold leading-tight">
                {vehicle.name}
              </h1>

              {/* Price */}

              <div className="mt-4">
                <p className="text-xs text-zinc-400">Ex-Showroom Price</p>

                <h2 className="mt-1 text-2xl md:text-3xl font-bold">
                  ₹ {(vehicle.exShowroomPrice / 100000).toFixed(2)} Lakh
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                  *Price may vary by city.
                </p>
              </div>

              {/* Quick Specs */}

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <p className="text-[11px] text-zinc-500">Battery</p>
                  <h3 className="mt-1 text-base font-semibold">
                    {vehicle.batteryKwh} kWh
                  </h3>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <p className="text-[11px] text-zinc-500">Range</p>
                  <h3 className="mt-1 text-base font-semibold">
                    {vehicle.claimedRange} km
                  </h3>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <p className="text-[11px] text-zinc-500">Power</p>
                  <h3 className="mt-1 text-base font-semibold">
                    {vehicle.powerHp} hp
                  </h3>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <p className="text-[11px] text-zinc-500">Charging</p>
                  <h3 className="mt-1 text-base font-semibold">
                    {vehicle.dcCharging}
                  </h3>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-5">
                <ActionButtons />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
