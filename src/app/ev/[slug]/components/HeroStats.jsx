"use client";

import {
  BatteryCharging,
  Gauge,
  Zap,
  Timer,
  GaugeCircle,
  CarFront,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function HeroStats({ vehicle }) {
  const stats = [
    {
      icon: BatteryCharging,
      label: "Battery",
      value: `${vehicle.batteryKwh || "-"} kWh`,
    },
    {
      icon: Gauge,
      label: "Claimed Range",
      value: `${vehicle.claimedRange || "-"} km`,
    },
    {
      icon: Zap,
      label: "Power",
      value: `${vehicle.powerHp || "-"} hp`,
    },
    {
      icon: Timer,
      label: "DC Charging",
      value: vehicle.dcCharging || "-",
    },
    {
      icon: GaugeCircle,
      label: "Top Speed",
      value: vehicle.topSpeed || "-",
    },
    {
      icon: CarFront,
      label: "Drive Type",
      value: vehicle.driveType || "-",
    },
    {
      icon: Briefcase,
      label: "Boot Space",
      value: vehicle.bootSpace || "-",
    },
    {
      icon: ShieldCheck,
      label: "Warranty",
      value: vehicle.warranty || "-",
    },
  ];

  return (
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-bold">
        Key Specifications
      </h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-500"
            >
              <Icon
                size={28}
                className="mb-4 text-green-400"
              />

              <p className="text-sm text-zinc-400">
                {item.label}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

    </section>
  );
}