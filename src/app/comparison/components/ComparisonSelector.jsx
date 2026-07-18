"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ComparisonSelector({ cars }) {
  const router = useRouter();

  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");

  const handleCompare = () => {
    if (!car1 || !car2) return;

    if (car1 === car2) {
      alert("Please select two different cars.");
      return;
    }

    router.push(`/comparison/${car1}-vs-${car2}`);
  };

  return (
    <section className="bg-background py-14">

      <div className="mx-auto max-w-5xl px-5">

        <div className="rounded-3xl border border-theme bg-card p-8 shadow-theme">

          <h2 className="text-center text-2xl font-bold text-foreground">
            Select Cars to Compare
          </h2>

          <p className="mt-2 text-center text-muted">
            Choose any two electric vehicles and compare them instantly.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto_1fr]">

            {/* Car 1 */}

            <select
              value={car1}
              onChange={(e) => setCar1(e.target.value)}
              className="h-14 rounded-xl border border-theme bg-background px-4 text-foreground outline-none transition focus:border-green-500"
            >
              <option value="">Select First EV</option>

              {cars.map((car) => (
                <option key={car.slug} value={car.slug}>
                  {car.name}
                </option>
              ))}
            </select>

            {/* VS */}

            <div className="flex items-center justify-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-black shadow-lg">

                <ArrowRightLeft size={22} />

              </div>

            </div>

            {/* Car 2 */}

            <select
              value={car2}
              onChange={(e) => setCar2(e.target.value)}
              className="h-14 rounded-xl border border-theme bg-background px-4 text-foreground outline-none transition focus:border-green-500"
            >
              <option value="">Select Second EV</option>

              {cars.map((car) => (
                <option key={car.slug} value={car.slug}>
                  {car.name}
                </option>
              ))}
            </select>

          </div>

          <div className="mt-8 text-center">

            <button
              onClick={handleCompare}
              disabled={!car1 || !car2 || car1 === car2}
              className="rounded-full bg-green-500 px-10 py-4 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Compare Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}