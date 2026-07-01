import {
  BatteryCharging,
  Zap,
  Gauge,
  Car,
  Ruler,
  ShieldCheck,
} from "lucide-react";

export default function Specifications({ vehicle }) {
  const sections = [
    {
      title: "Battery & Range",
      icon: BatteryCharging,
      items: [
        ["Battery Capacity", `${vehicle.batteryKwh} kWh`],
        ["Claimed Range", `${vehicle.claimedRange} km`],
        ["Real Range", `${vehicle.realRange} km`],
        ["AC Charging", vehicle.acCharging],
        ["DC Charging", vehicle.dcCharging],
      ],
    },

    {
      title: "Performance",
      icon: Zap,
      items: [
        ["Power", `${vehicle.powerHp} hp`],
        ["Torque", `${vehicle.torqueNm} Nm`],
        ["Top Speed", `${vehicle.topSpeed} km/h`],
        ["Drive Type", vehicle.driveType],
      ],
    },

    {
      title: "Dimensions",
      icon: Ruler,
      items: [
        ["Body Type", vehicle.bodyType],
        ["Seating", `${vehicle.seating} Seats`],
        ["Boot Space", `${vehicle.bootSpace} L`],
        ["Ground Clearance", `${vehicle.groundClearance} mm`],
      ],
    },

    {
      title: "Other Details",
      icon: ShieldCheck,
      items: [
        ["Warranty", vehicle.warranty],
        ["Launch Year", vehicle.launchDate],
      ],
    },
  ];

  return (
    <section className="mt-0">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Specifications
        </h2>

        <p className="mt-2 text-zinc-400">
          Complete technical specifications of the {vehicle.name}.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <div
              key={section.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-500"
            >

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-green-500/10 p-3">

                  <Icon
                    size={22}
                    className="text-green-400"
                  />

                </div>

                <h3 className="text-xl font-semibold">
                  {section.title}
                </h3>

              </div>

              <div className="space-y-4">

                {section.items.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-zinc-800 pb-3"
                  >

                    <span className="text-zinc-400">
                      {label}
                    </span>

                    <span className="font-semibold text-white">
                      {value}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}