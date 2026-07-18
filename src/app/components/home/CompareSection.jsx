"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CompareSection({ cars }) {
  const router = useRouter();

  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");

  const handleCompare = () => {
    if (!car1 || !car2) return;

    if (car1 === car2) return;

    router.push(`/comparison/${car1}-vs-${car2}`);
  };

  return (
    <section className="bg-background py-16">

      <div className="mx-auto max-w-7xl px-5">

        <div className="rounded-3xl border border-theme bg-card p-8 shadow-theme">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">

            {/* Left */}

            <div className="max-w-lg">

              <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500">
                Compare EVs
              </span>

              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Compare Electric Cars
              </h2>

              <p className="mt-3 text-muted">
                Compare price, range, battery, charging,
                performance and features side-by-side.
              </p>

            </div>

            {/* Right */}

            <div className="flex w-full max-w-xl flex-col gap-4">

              <select
                value={car1}
                onChange={(e) => setCar1(e.target.value)}
                className="h-12 rounded-xl border border-theme bg-background px-4 text-foreground outline-none focus:border-green-500"
              >
                <option value="">Select First EV</option>

                {cars.map((car) => (
                  <option
                    key={car.slug}
                    value={car.slug}
                  >
                    {car.name}
                  </option>
                ))}

              </select>

              <select
                value={car2}
                onChange={(e) => setCar2(e.target.value)}
                className="h-12 rounded-xl border border-theme bg-background px-4 text-foreground outline-none focus:border-green-500"
              >
                <option value="">Select Second EV</option>

                {cars.map((car) => (
                  <option
                    key={car.slug}
                    value={car.slug}
                  >
                    {car.name}
                  </option>
                ))}

              </select>
                            <button
                onClick={handleCompare}
                disabled={!car1 || !car2 || car1 === car2}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-green-500
                  font-semibold
                  text-black
                  transition
                  hover:bg-green-400
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <ArrowRightLeft size={18} />
                Compare Now
              </button>

            </div>

          </div>

          {/* Popular Comparisons */}

          <div className="mt-10 border-t border-theme pt-6">

            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Popular Comparisons
            </h3>

            <div className="flex flex-wrap gap-3">

              <button
                onClick={() =>
                  router.push(
                    "/comparison/tata-curvv-ev-vs-tata-nexon-ev"
                  )
                }
                className="rounded-full border border-theme bg-background px-4 py-2 text-sm transition hover:border-green-500 hover:text-green-500"
              >
                Tata Curvv EV vs Nexon EV
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/comparison/mahindra-be-6-vs-mahindra-xev-9e"
                  )
                }
                className="rounded-full border border-theme bg-background px-4 py-2 text-sm transition hover:border-green-500 hover:text-green-500"
              >
                BE 6 vs XEV 9e
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/comparison/mg-windsor-ev-vs-mg-zs-ev"
                  )
                }
                className="rounded-full border border-theme bg-background px-4 py-2 text-sm transition hover:border-green-500 hover:text-green-500"
              >
                Windsor EV vs ZS EV
              </button>

              <button
                onClick={() => router.push("/comparison")}
                className="rounded-full border border-green-500 px-4 py-2 text-sm font-medium text-green-500 transition hover:bg-green-500 hover:text-black"
              >
                View All Comparisons →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}