"use client";

import {
  BatteryCharging,
  Zap,
  Gauge,
  PlugZap,
  Home,
  ShieldCheck,
} from "lucide-react";

export default function BatteryChargingSection({ vehicle }) {
  const items = [
    {
      icon: BatteryCharging,
      label: "Battery Capacity",
      value: `${vehicle.batteryKwh} kWh`,
    },
    {
      icon: Zap,
      label: "Claimed Range",
      value: `${vehicle.claimedRange} km`,
    },
    {
      icon: Gauge,
      label: "Real World Range",
      value: `${vehicle.realRange} km`,
    },
    {
      icon: PlugZap,
      label: "DC Fast Charging",
      value: vehicle.dcCharging,
    },
    {
      icon: Home,
      label: "AC Home Charging",
      value: vehicle.acCharging,
    },
    {
      icon: ShieldCheck,
      label: "Battery Warranty",
      value: vehicle.warranty,
    },
  ];

  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Battery & Charging
        </h2>

        <p className="mt-2 text-zinc-400">
          Battery, charging speed and driving range at a glance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-4
                transition-all
                duration-300
                hover:border-green-500
                hover:bg-zinc-800
                hover:-translate-y-1
              "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 flex-shrink-0">
                <Icon
                  size={22}
                  className="text-green-400 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}