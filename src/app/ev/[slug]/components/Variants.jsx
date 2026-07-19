"use client";

import {
  BatteryCharging,
  Gauge,
  Zap,
  Timer,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Variants({ vehicle }) {
  if (!vehicle?.variants?.length) return null;

  return (
    <section id="variants" className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span
          className="
            inline-flex
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-3
            py-1
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-green-500
          "
        >
          Variants
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Available Variants
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-muted">
          Compare all available variants of{" "}
          <span className="font-semibold text-foreground">
            {vehicle.name}
          </span>.
        </p>

      </div>

      <div className="grid gap-5">

        {vehicle.variants.map((variant) => (

          <div
            key={variant.name}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-theme
              bg-card
              p-5
              shadow-theme
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-500
            "
          >

            {/* Recommended Badge */}

            {variant.recommended && (

              <div className="absolute right-5 top-5">

                <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">

                  <Award size={14} />

                  Recommended

                </span>

              </div>

            )}

            {/* Top */}

            <div className="mb-6">

              <h3 className="text-2xl font-bold text-foreground">
                {variant.name}
              </h3>

              <p className="mt-2 text-3xl font-bold text-green-500">
  {variant.price != null
    ? `₹ ${variant.price.toLocaleString("en-IN")}`
    : "Price Coming Soon"}
</p>

              <span className="text-sm text-muted">
                Ex-Showroom
              </span>

            </div>

            {/* Specs */}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              <div className="flex items-center gap-3 rounded-xl border border-theme bg-background p-3">

                <BatteryCharging
                  size={18}
                  className="text-green-500"
                />

                <div>

                  <p className="text-xs text-muted">
                    Battery
                  </p>

                  <p className="font-semibold text-foreground">
                    {variant.battery ?? "N/A"}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-theme bg-background p-3">

                <Gauge
                  size={18}
                  className="text-green-500"
                />

                <div>

                  <p className="text-xs text-muted">
                    Range
                  </p>

                  <p className="font-semibold text-foreground">
                    {variant.range ?? "N/A"} km
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-theme bg-background p-3">

                <Zap
                  size={18}
                  className="text-green-500"
                />

                <div>

                  <p className="text-xs text-muted">
                    Power
                  </p>

                  <p className="font-semibold text-foreground">
                    {variant.power ?? "N/A"} HP
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-theme bg-background p-3">

                <Zap
                  size={18}
                  className="text-green-500"
                />

                <div>

                  <p className="text-xs text-muted">
                    Torque
                  </p>

                  <p className="font-semibold text-foreground">
                    {variant.torque ?? "N/A"} Nm
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-theme bg-background p-3">

                <Gauge
                  size={18}
                  className="text-green-500"
                />

                <div>

                  <p className="text-xs text-muted">
                    Top Speed
                  </p>

                  <p className="font-semibold text-foreground">
                    {variant.topSpeed ?? "N/A"} km/h
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-theme bg-background p-3">

                <Timer
                  size={18}
                  className="text-green-500"
                />

                <div>

                  <p className="text-xs text-muted">
                    0–100 km/h
                  </p>

                  <p className="font-semibold text-foreground">
                    {variant.acceleration ?? "N/A"} s
                  </p>

                </div>

              </div>
                          </div>

            {/* Highlights */}

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="inline-flex items-center gap-2 rounded-full border border-theme bg-background px-3 py-1 text-xs text-muted">

                <CheckCircle2
                  size={14}
                  className="text-green-500"
                />

                Fast Charging

              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-theme bg-background px-3 py-1 text-xs text-muted">

                <CheckCircle2
                  size={14}
                  className="text-green-500"
                />

                Connected Car

              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-theme bg-background px-3 py-1 text-xs text-muted">

                <CheckCircle2
                  size={14}
                  className="text-green-500"
                />

                Warranty Included

              </span>

            </div>

            {/* Buttons */}

            {/* <div className="mt-6 flex flex-wrap gap-3">

              <button
                className="
                  rounded-xl
                  bg-green-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-green-400
                "
              >
                Book Test Drive
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-theme
                  bg-background
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-foreground
                  transition
                  hover:border-green-500
                  hover:bg-card
                "
              >
                Compare Variant
              </button>

            </div> */}

          </div>

        ))}

      </div>

    </section>
  );
}