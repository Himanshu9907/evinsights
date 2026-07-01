"use client";

import { CheckCircle2, BatteryCharging, Zap, Gauge } from "lucide-react";

export default function TimelineCard({
  variant,
  active,
  onClick,
  priceDifference,
}) {
  return (
    <div className="relative pl-12">

      {/* Vertical Line */}

      <div className="absolute left-5 top-0 h-full w-[2px] bg-zinc-800" />

      {/* Timeline Dot */}

      <button
        onClick={onClick}
        className={`
          absolute
          left-[11px]
          top-7
          h-5
          w-5
          rounded-full
          border-4
          transition-all
          duration-300
          ${
            active
              ? "border-green-500 bg-green-500 shadow-lg shadow-green-500/40"
              : "border-zinc-600 bg-zinc-900 hover:border-green-400"
          }
        `}
      />

      {/* Price Difference */}

      {priceDifference && (
        <div className="absolute left-11 -top-3">

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
            +₹{priceDifference} L
          </span>

        </div>
      )}

      {/* Card */}

      <div
        onClick={onClick}
        className={`
          cursor-pointer
          rounded-2xl
          border
          transition-all
          duration-300

          ${
            active
              ? "border-green-500 bg-zinc-900"
              : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
          }
        `}
      >

        {/* Header */}

        <div className="p-5">

          <div className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <h3 className="text-xl font-bold text-white">
                  {variant.name}
                </h3>

                {variant.recommended && (
                  <span className="rounded-full bg-green-500 px-2 py-1 text-[10px] font-semibold text-black">
                    ⭐ Best Value
                  </span>
                )}

              </div>

              <p className="mt-2 text-2xl font-bold text-green-400">
                ₹ {(variant.price / 100000).toFixed(2)} Lakh
              </p>

            </div>

          </div>

        </div>

        {/* Expanded */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500

            ${
              active
                ? "max-h-[600px]"
                : "max-h-0"
            }
          `}
        >

          <div className="border-t border-zinc-800 p-5">

            {/* Specs */}

            <div className="grid gap-4 md:grid-cols-3">

              <div className="flex items-center gap-3">

                <BatteryCharging
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Battery
                  </p>

                  <p>{variant.battery}</p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Zap
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Range
                  </p>

                  <p>{variant.range}</p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Gauge
                  size={18}
                  className="text-green-400"
                />

                <div>

                  <p className="text-xs text-zinc-500">
                    Power
                  </p>

                  <p>{variant.power}</p>

                </div>

              </div>

            </div>

            {/* Features */}

            <div className="mt-6">

              <h4 className="mb-4 font-semibold text-white">
                Key Features
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">

                {variant.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-2"
                  >

                    <CheckCircle2
                      size={16}
                      className="text-green-400"
                    />

                    <span className="text-sm text-zinc-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-6 flex gap-3">

              <button className="flex-1 rounded-xl border border-zinc-700 py-3 hover:border-green-500">
                Compare
              </button>

              <button className="flex-1 rounded-xl bg-green-500 py-3 font-semibold text-black hover:bg-green-400">
                View Details
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}