"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SimilarEVs({ vehicle }) {
  const similarCars = [
    {
      name: "Tata Curvv EV",
      slug: "tata-curvv-ev",
      image: "/curvv-ev.jpg",
      price: "₹17.49 Lakh",
      range: "502 km",
    },
    {
      name: "Mahindra BE 6",
      slug: "mahindra-be-6",
      image: "/be6.jpg",
      price: "₹18.90 Lakh",
      range: "557 km",
    },
    {
      name: "Mahindra XEV 9e",
      slug: "mahindra-xev-9e",
      image: "/xev-9e.jpg",
      price: "₹21.90 Lakh",
      range: "656 km",
    },
  ].filter((car) => car.slug !== vehicle.slug);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="mb-5 flex items-center justify-between">

        <h3 className="text-lg font-bold text-white">
          Similar EVs
        </h3>

        <Link
          href="/ev"
          className="text-sm text-green-400 hover:text-green-300"
        >
          View All
        </Link>

      </div>

      <div className="space-y-4">

        {similarCars.map((car) => (
          <Link
            key={car.slug}
            href={`/ev/${car.slug}`}
            className="group flex gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-3 transition hover:border-green-500 hover:bg-zinc-800"
          >

            <div className="relative h-20 w-28 overflow-hidden rounded-lg">

              <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="112px"
                className="object-cover transition duration-300 group-hover:scale-105"
              />

            </div>

            <div className="flex flex-1 flex-col justify-between">

              <div>

                <h4 className="line-clamp-2 font-semibold text-white">
                  {car.name}
                </h4>

                <p className="mt-1 text-sm text-zinc-400">
                  {car.price}
                </p>

                <p className="text-sm text-green-400">
                  {car.range}
                </p>

              </div>

              <span className="mt-2 flex items-center gap-1 text-sm font-medium text-green-400">
                View Details
                <ArrowRight size={14} />
              </span>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}