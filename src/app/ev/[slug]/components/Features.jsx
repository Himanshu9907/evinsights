import {
  ShieldCheck,
  Camera,
  Smartphone,
  BatteryCharging,
  Sun,
  Snowflake,
  Wifi,
  Gauge,
  Zap,
  Car,
  CheckCircle2,
} from "lucide-react";

export default function Features({ vehicle }) {
  const getIcon = (feature) => {
    const text = feature.toLowerCase();

    if (text.includes("adas")) return ShieldCheck;
    if (text.includes("camera")) return Camera;
    if (text.includes("android")) return Smartphone;
    if (text.includes("apple")) return Smartphone;
    if (text.includes("battery")) return BatteryCharging;
    if (text.includes("charging")) return Zap;
    if (text.includes("sunroof")) return Sun;
    if (text.includes("ventilated")) return Snowflake;
    if (text.includes("connected")) return Wifi;
    if (text.includes("cruise")) return Gauge;
    if (text.includes("v2l")) return BatteryCharging;

    return CheckCircle2;
  };

  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          Key Features
        </h2>

        <p className="mt-2 text-zinc-400">
          Premium features available in {vehicle.name}.
        </p>

      </div>

      {/* Features Grid */}

     
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

  {(vehicle.features || []).map((feature, index) => {
          const Icon = getIcon(feature);

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
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-500
                hover:shadow-lg
                hover:shadow-green-500/10
              "
            >
              <div
                className="
                  rounded-xl
                  bg-green-500/10
                  p-3
                  transition
                  group-hover:bg-green-500
                "
              >
                <Icon
                  size={22}
                  className="text-green-400 group-hover:text-black"
                />
              </div>

              <span className="font-medium text-white">
                {feature}
              </span>
            </div>
          );
        })}

      </div>
    </section>
  );
}