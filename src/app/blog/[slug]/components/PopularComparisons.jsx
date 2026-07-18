"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function formatPrice(price) {
  if (!price) return "N/A";
  return `₹${(price / 100000).toFixed(2)} L`;
}

export default function PopularComparisons({
  comparisons,
}) {
  if (!comparisons?.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Popular Comparisons
        </h2>

        <p className="mt-2 text-muted">
          Compare similar EVs before making your purchase.
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        {comparisons.map((comparison) => {

          const car1 = comparison.vehicles?.[0]?.vehicle;
          const car2 = comparison.vehicles?.[1]?.vehicle;

          if (!car1 || !car2) return null;

          return (

            <Link
              key={comparison.id}
              href={`/comparison/${comparison.slug}`}
              className="
                group
                rounded-2xl
                border
                border-theme
                bg-card
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-xl
              "
            >

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

                {/* Car 1 */}

                <div className="text-center">

                  <div className="relative mx-auto h-24 w-full max-w-[130px]">

                    <Image
                      src={car1.image || "/ev-car.jpg"}
                      alt={car1.name}
                      fill
                      className="object-contain"
                    />

                  </div>

                  <h3 className="mt-3 line-clamp-2 font-semibold">
                    {car1.name}
                  </h3>

                  <div className="mt-2 space-y-1 text-xs text-muted">

                    <p>{formatPrice(car1.exShowroomPrice)}</p>

                    <p>{car1.claimedRange} km</p>

                  </div>

                </div>

                {/* VS */}

                <div>

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      font-bold
                      text-primary-foreground
                    "
                  >
                    VS
                  </div>

                </div>

                {/* Car 2 */}

                <div className="text-center">

                  <div className="relative mx-auto h-24 w-full max-w-[130px]">

                    <Image
                      src={car2.image || "/ev-car.jpg"}
                      alt={car2.name}
                      fill
                      className="object-contain"
                    />

                  </div>

                  <h3 className="mt-3 line-clamp-2 font-semibold">
                    {car2.name}
                  </h3>

                  <div className="mt-2 space-y-1 text-xs text-muted">

                    <p>{formatPrice(car2.exShowroomPrice)}</p>

                    <p>{car2.claimedRange} km</p>

                  </div>

                </div>

              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-primary
                  py-3
                  font-medium
                  text-primary-foreground
                  transition
                  group-hover:gap-3
                "
              >
                Compare Full Specs

                <ArrowRight size={18} />

              </div>

            </Link>

          );

        })}

      </div>

    </section>
  );
}