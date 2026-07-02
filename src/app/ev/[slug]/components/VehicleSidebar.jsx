"use client";

import {
  BatteryCharging,
  Gauge,
  Zap,
  Star,
  IndianRupee,
} from "lucide-react";

export default function VehicleSidebar({ vehicle }) {
  if (!vehicle) return null;

  const formatPrice = (price) => {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  };

  return (
    <aside className="sticky top-24 space-y-5">

      {/* ===================== */}
      {/* PRICE CARD */}
      {/* ===================== */}

      <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-6">

        <p className="text-sm text-zinc-400">
          Ex-showroom Price
        </p>

        <div className="mt-3 flex items-center gap-2">

          <IndianRupee
            size={26}
            className="text-green-400"
          />

          <h2 className="text-3xl font-bold text-white">
            {formatPrice(vehicle.exShowroomPrice)}
          </h2>

        </div>

        <p className="mt-3 text-sm text-zinc-500">
          Price may vary based on city and variant.
        </p>

      </div>

      {/* ===================== */}
      {/* QUICK SPECS */}
      {/* ===================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-5 text-lg font-semibold text-white">
          Quick Specs
        </h3>

        <div className="space-y-4">

          {/* Battery */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <BatteryCharging
                size={20}
                className="text-green-400"
              />

              <span className="text-sm text-zinc-400">
                Battery
              </span>

            </div>

            <span className="font-semibold text-white">
              {vehicle.batteryKwh} kWh
            </span>

          </div>

          {/* Range */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Zap
                size={20}
                className="text-yellow-400"
              />

              <span className="text-sm text-zinc-400">
                Range
              </span>

            </div>

            <span className="font-semibold text-white">
              {vehicle.claimedRange} km
            </span>

          </div>

          {/* Power */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Gauge
                size={20}
                className="text-blue-400"
              />

              <span className="text-sm text-zinc-400">
                Power
              </span>

            </div>

            <span className="font-semibold text-white">
              {vehicle.powerHp} HP
            </span>

          </div>

          {/* Rating */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Star
                size={20}
                className="text-amber-400"
              />

              <span className="text-sm text-zinc-400">
                Rating
              </span>

            </div>

            <span className="font-semibold text-white">
              {vehicle.rating?.overall ?? "4.7"} / 5
            </span>

          </div>

        </div>

      </div>

            {/* ===================== */}
      {/* EXPERT RATING */}
      {/* ===================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-4 text-lg font-semibold text-white">
          Expert Rating
        </h3>

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">

            <span className="text-2xl font-bold text-green-400">
              {vehicle.rating?.overall ?? "4.7"}
            </span>

          </div>

          <div>

            <div className="flex text-yellow-400">

              {[1, 2, 3, 4, 5].map((star) => (

                <Star
                  key={star}
                  size={18}
                  fill={
                    star <= Math.round(vehicle.rating?.overall ?? 5)
                      ? "currentColor"
                      : "none"
                  }
                />

              ))}

            </div>

            <p className="mt-2 text-sm text-zinc-400">
              Overall Expert Score
            </p>

          </div>

        </div>

      </div>

      {/* ===================== */}
      {/* ACTION BUTTONS */}
      {/* ===================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-4 text-lg font-semibold text-white">
          Quick Actions
        </h3>

        <div className="space-y-3">

          <button className="w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400">
            Compare EV
          </button>

          <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
            EMI Calculator
          </button>

          <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
            Charging Cost
          </button>

          <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
            Book Test Drive
          </button>

        </div>

      </div>

      {/* ===================== */}
      {/* SHARE */}
      {/* ===================== */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-4 text-lg font-semibold text-white">
          Share
        </h3>

        <button className="w-full rounded-xl border border-zinc-700 py-3 font-semibold text-white transition hover:border-green-500 hover:bg-zinc-800">
          Share Vehicle
        </button>

      </div>

    </aside>
  );
}