"use client";

import {
  Trophy,
  BatteryCharging,
  Gauge,
  IndianRupee,
  Zap,
  Crown,
} from "lucide-react";

function formatPrice(price) {
  if (!price) return "N/A";
  return `₹${(price / 100000).toFixed(2)} Lakh`;
}

export default function QuickWinner({ comparison }) {
  if (!comparison) return null;

  const { car1, car2 } = comparison;

  const compareItems = [
    {
      title: "Price",
      icon: <IndianRupee size={18} />,
      value1: car1.exShowroomPrice || 0,
      value2: car2.exShowroomPrice || 0,
      display1: formatPrice(car1.exShowroomPrice),
      display2: formatPrice(car2.exShowroomPrice),
      higherBetter: false,
    },

    {
      title: "Battery",
      icon: <BatteryCharging size={18} />,
      value1: car1.batteryKwh || 0,
      value2: car2.batteryKwh || 0,
      display1: car1.batteryKwh
        ? `${car1.batteryKwh} kWh`
        : "N/A",
      display2: car2.batteryKwh
        ? `${car2.batteryKwh} kWh`
        : "N/A",
      higherBetter: true,
    },

    {
      title: "Claimed Range",
      icon: <Zap size={18} />,
      value1: car1.claimedRange || 0,
      value2: car2.claimedRange || 0,
      display1: car1.claimedRange
        ? `${car1.claimedRange} km`
        : "N/A",
      display2: car2.claimedRange
        ? `${car2.claimedRange} km`
        : "N/A",
      higherBetter: true,
    },

    {
      title: "Top Speed",
      icon: <Gauge size={18} />,
      value1: car1.topSpeed || 0,
      value2: car2.topSpeed || 0,
      display1: car1.topSpeed
        ? `${car1.topSpeed} km/h`
        : "N/A",
      display2: car2.topSpeed
        ? `${car2.topSpeed} km/h`
        : "N/A",
      higherBetter: true,
    },
  ];

  let score1 = 0;
  let score2 = 0;

  const results = compareItems.map((item) => {
    let winner = "draw";

    if (item.higherBetter) {
      if (item.value1 > item.value2) {
        winner = "car1";
        score1++;
      } else if (item.value2 > item.value1) {
        winner = "car2";
        score2++;
      }
    } else {
      if (item.value1 < item.value2) {
        winner = "car1";
        score1++;
      } else if (item.value2 < item.value1) {
        winner = "car2";
        score2++;
      }
    }

    return {
      ...item,
      winner,
    };
  });

  const overallWinner =
    score1 === score2
      ? null
      : score1 > score2
      ? car1
      : car2;

  return (
    <section className="mt-16">

      {/* Heading */}

      <div className="text-center">

        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-green-500
          "
        >
          <Trophy size={16} />

          Quick Winner
        </span>

        <h2
          className="
            mt-5
            text-3xl
            font-bold
            text-foreground
            md:text-4xl
          "
        >
          Comparison Summary
        </h2>

        <p
          className="
            mt-3
            text-muted
            max-w-2xl
            mx-auto
          "
        >
          Instantly see which electric vehicle
          performs better across the most
          important buying factors.
        </p>

      </div>
            {/* Overall Winner */}

      <div
        className="
          mt-12
          rounded-3xl
          border
          border-theme
          bg-card
          p-8
          shadow-theme
        "
      >
        <div className="flex flex-col items-center text-center">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-green-500/10
              text-green-500
            "
          >
            <Crown size={38} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-foreground">
            {overallWinner
              ? `${overallWinner.name} Wins`
              : "It's a Tie"}
          </h3>

          <p className="mt-2 text-muted">

            {overallWinner
              ? `${overallWinner.name} wins in ${Math.max(
                  score1,
                  score2
                )} out of ${results.length} categories.`
              : "Both EVs perform equally across the compared specifications."}

          </p>

        </div>

        {/* Score Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-background
              p-6
            "
          >
            <h4 className="text-lg font-bold text-foreground">
              {car1.name}
            </h4>

            <div className="mt-4 text-5xl font-black text-green-500">
              {score1}
            </div>

            <p className="mt-2 text-muted">
              Categories Won
            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-background
              p-6
            "
          >
            <h4 className="text-lg font-bold text-foreground">
              {car2.name}
            </h4>

            <div className="mt-4 text-5xl font-black text-green-500">
              {score2}
            </div>

            <p className="mt-2 text-muted">
              Categories Won
            </p>

          </div>

        </div>

      </div>

      {/* Category Comparison */}

      <div className="mt-12 space-y-5">
                {results.map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
              shadow-theme
              transition-all
              duration-300
              hover:border-green-500
            "
          >
            <div className="grid items-center gap-6 md:grid-cols-[220px_1fr_120px_1fr]">

              {/* Category */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/10
                    text-green-500
                  "
                >
                  {item.icon}
                </div>

                <div>

                  <p className="font-semibold text-foreground">
                    {item.title}
                  </p>

                  <p className="text-sm text-muted">
                    Comparison
                  </p>

                </div>

              </div>

              {/* Car 1 */}

              <div
                className={`
                  rounded-xl
                  border
                  p-4
                  transition-all

                  ${
                    item.winner === "car1"
                      ? "border-green-500 bg-green-500/10"
                      : "border-theme bg-background"
                  }
                `}
              >
                <p className="text-sm text-muted">
                  {car1.name}
                </p>

                <p className="mt-1 font-bold text-foreground">
                  {item.display1}
                </p>
              </div>

              {/* Winner */}

              <div className="flex justify-center">

                {item.winner === "draw" ? (
                  <span
                    className="
                      rounded-full
                      border
                      border-theme
                      bg-background
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-muted
                    "
                  >
                    Draw
                  </span>
                ) : (
                  <span
                    className="
                      rounded-full
                      bg-green-500
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-black
                    "
                  >
                    Winner
                  </span>
                )}

              </div>

              {/* Car 2 */}

              <div
                className={`
                  rounded-xl
                  border
                  p-4
                  transition-all

                  ${
                    item.winner === "car2"
                      ? "border-green-500 bg-green-500/10"
                      : "border-theme bg-background"
                  }
                `}
              >
                <p className="text-sm text-muted">
                  {car2.name}
                </p>

                <p className="mt-1 font-bold text-foreground">
                  {item.display2}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}