import {
  BatteryCharging,
  Zap,
  Ruler,
  ShieldCheck,
} from "lucide-react";

export default function Specifications({ vehicle }) {
  const sections = [
    {
      title: "Battery & Range",
      icon: BatteryCharging,
      items: [
        ["Battery", `${vehicle.batteryKwh} kWh`],
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
        ["Power", `${vehicle.powerHp} HP`],
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
        [
          "Ground Clearance",
          `${vehicle.groundClearance} mm`,
        ],
      ],
    },

    {
      title: "Warranty",
      icon: ShieldCheck,
      items: [
        ["Vehicle Warranty", vehicle.warranty],
        ["Launch Year", vehicle.launchDate],
      ],
    },
  ];

  return (
    <section className="mt-0">

      {/* Header */}

      <div className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
          Specifications
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Technical Specifications
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Explore the complete specifications of{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>
          .
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-5 lg:grid-cols-2">

        {sections.map((section) => {

          const Icon = section.icon;

          return (

            <div
              key={section.title}
              className="
                group
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-500/30
                hover:shadow-lg
              "
            >

              {/* Card Header */}

              <div className="mb-5 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/10
                    transition
                    group-hover:bg-green-500/20
                  "
                >

                  <Icon
                    size={20}
                    className="text-green-400"
                  />

                </div>

                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>

              </div>

              {/* Items */}

              <div className="space-y-2">

                {section.items.map(([label, value]) => (

                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      border
                      border-zinc-800
                      bg-zinc-950/40
                      px-4
                      py-3
                      transition
                      hover:border-zinc-700
                      hover:bg-zinc-950
                    "
                  >

                    <span className="text-sm text-zinc-400">
                      {label}
                    </span>

                    <span className="text-sm font-semibold text-white text-right">
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