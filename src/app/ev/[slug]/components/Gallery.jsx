"use client";

import Image from "next/image";

export default function Gallery({ vehicle }) {
  const images =
    vehicle.gallery?.length > 0 ? vehicle.gallery : [vehicle.image];

  return (
    <section className="mt-20">

      <div className="mb-8">
        <h2 className="text-3xl font-bold">Gallery</h2>

        <p className="mt-2 text-zinc-400">
          Explore {vehicle.name} from every angle.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <div className="relative aspect-[4/3]">

              <Image
                src={img}
                alt={`${vehicle.name} ${index + 1}`}
                fill
                sizes="(max-width:768px) 50vw,
                       (max-width:1024px) 33vw,
                       25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            {/* Hover Overlay */}

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">

              <span className="opacity-0 group-hover:opacity-100 text-white font-medium transition">
                View Image
              </span>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}