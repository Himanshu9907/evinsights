"use client";

import { Gauge, Zap, Wind, ArrowRightCircle } from "lucide-react";

export default function Performance({ vehicle }) {
  const items = [
    {
      icon: Gauge,
      value: `${vehicle.powerHp} HP`,
      label: "Power",
    },
    {
      icon: Zap,
      value: `${vehicle.torqueNm} Nm`,
      label: "Torque",
    },
    {
      icon: Wind,
      value: `${vehicle.topSpeed} km/h`,
      label: "Top Speed",
    },
    {
      icon: ArrowRightCircle,
      value: vehicle.driveType,
      label: "Drive Type",
    },
  ];

  return (
    <section className="mt-16">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Performance
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Key performance figures of the {vehicle.name}.
        </p>

      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900">

        <div className="grid grid-cols-2 divide-x divide-y divide-zinc-800 lg:grid-cols-4 lg:divide-y-0">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-5
                  transition-all
                  duration-300
                  hover:bg-zinc-800
                "
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10">

                  <Icon
                    size={20}
                    className="text-green-400 transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="text-xs text-zinc-400">
                    {item.label}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}