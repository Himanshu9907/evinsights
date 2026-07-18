"use client";

import Image from "next/image";
import {
  BatteryCharging,
  Gauge,
  IndianRupee,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function SelectedCarCard({ car }) {
  if (!car) return null;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-white via-white to-emerald-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-emerald-500/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-emerald-950/20">

      {/* Background Glow */}

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">

            <CheckCircle2 size={14} />

            Selected Vehicle

          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">

            {car.brand.name}

          </span>

        </div>

        {/* Vehicle Image */}

        <div className="relative mt-6 h-48 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">

          <Image
            src={car.image || "/placeholder-car.png"}
            alt={car.name}
            fill
            priority
            className="object-contain transition duration-500 group-hover:scale-105"
          />

        </div>

        {/* Vehicle Name */}

        <div className="mt-6">

          <h3 className="text-2xl font-bold tracking-tight">

            {car.name}

          </h3>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">

            Compare this EV with another electric vehicle.

          </p>

        </div>

        {/* Quick Specs */}

        <div className="mt-6 grid grid-cols-2 gap-4">
                      {/* Price */}

          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-800/60">

            <div className="flex items-center gap-2 text-emerald-600">

              <IndianRupee size={18} />

              <span className="text-xs font-semibold uppercase">
                Price
              </span>

            </div>

            <p className="mt-3 text-lg font-bold">
              {car.exShowroomPrice
                ? `₹${(car.exShowroomPrice / 100000).toFixed(2)} Lakh`
                : "N/A"}
            </p>

          </div>

          {/* Battery */}

          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-800/60">

            <div className="flex items-center gap-2 text-green-600">

              <BatteryCharging size={18} />

              <span className="text-xs font-semibold uppercase">
                Battery
              </span>

            </div>

            <p className="mt-3 text-lg font-bold">
              {car.batteryKwh || "N/A"} kWh
            </p>

          </div>

          {/* Range */}

          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-800/60">

            <div className="flex items-center gap-2 text-blue-600">

              <Gauge size={18} />

              <span className="text-xs font-semibold uppercase">
                Range
              </span>

            </div>

            <p className="mt-3 text-lg font-bold">
              {car.claimedRange || "N/A"} km
            </p>

          </div>

          {/* Power */}

          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-800/60">

            <div className="flex items-center gap-2 text-yellow-500">

              <Zap size={18} />

              <span className="text-xs font-semibold uppercase">
                Power
              </span>

            </div>

            <p className="mt-3 text-lg font-bold">
              {car.power || "N/A"} PS
            </p>

          </div>

        </div>

        {/* Bottom Highlight */}

        <div className="mt-6 rounded-2xl border border-emerald-300 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-5 dark:border-emerald-500/20">

          <h4 className="font-bold">
            Ready for Comparison
          </h4>

          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Select another electric vehicle to compare price, battery,
            range, charging, performance, dimensions, features and safety
            side by side.
          </p>

        </div>

      </div>

    </div>
  );
}