"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

export default function Gallery({ vehicle }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!vehicle?.gallery?.length) return null;

  return (
    <section id="gallery"className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
          Gallery
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Photo Gallery
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Explore the exterior, interior and premium design of{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>
          .
        </p>

      </div>

      {/* Images */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {vehicle.gallery.map((item, index) => {

          const image =
            typeof item === "string"
              ? item
              : item.image;

          const caption =
            typeof item === "string"
              ? `Image ${index + 1}`
              : item.caption;

          return (

            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-500/30
              "
            >

              <div className="relative overflow-hidden">

                <img
                  src={image}
                  alt={caption}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/10
                    opacity-0
                    transition
                    duration-300
                    group-hover:bg-black/40
                    group-hover:opacity-100
                  "
                >

                  <div className="rounded-full bg-white/20 p-4 backdrop-blur">

                    <ImageIcon
                      size={26}
                      className="text-white"
                    />

                  </div>

                </div>

              </div>

              <div className="border-t border-zinc-800 p-4">

                <h3 className="font-semibold text-white">
                  {caption}
                </h3>

              </div>

            </div>

          );

        })}

      </div>

            {/* ========================= */}
      {/* LIGHTBOX */}
      {/* ========================= */}

      {selectedIndex !== null && (

        <div
          onClick={() => setSelectedIndex(null)}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
          "
        >

          {/* Close */}

          <button
            onClick={() => setSelectedIndex(null)}
            className="
              absolute
              right-6
              top-6
              h-11
              w-11
              rounded-full
              bg-white/10
              text-2xl
              text-white
              transition
              hover:bg-white/20
            "
          >
            ×
          </button>

          {/* Previous */}

          <button
            onClick={(e) => {
              e.stopPropagation();

              setSelectedIndex((prev) =>
                prev === 0
                  ? vehicle.gallery.length - 1
                  : prev - 1
              );
            }}
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              px-4
              py-3
              text-2xl
              text-white
              transition
              hover:bg-white/20
            "
          >
            ‹
          </button>

          {/* Image */}

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl"
          >

            <img
              src={
                typeof vehicle.gallery[selectedIndex] === "string"
                  ? vehicle.gallery[selectedIndex]
                  : vehicle.gallery[selectedIndex].image
              }
              alt=""
              className="
                max-h-[85vh]
                w-auto
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            {/* Caption */}

            <div className="mt-4 text-center">

              <h3 className="text-lg font-semibold text-white">

                {typeof vehicle.gallery[selectedIndex] === "string"
                  ? `Image ${selectedIndex + 1}`
                  : vehicle.gallery[selectedIndex].caption}

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                {selectedIndex + 1} / {vehicle.gallery.length}

              </p>

            </div>

          </div>

          {/* Next */}

          <button
            onClick={(e) => {
              e.stopPropagation();

              setSelectedIndex((prev) =>
                prev === vehicle.gallery.length - 1
                  ? 0
                  : prev + 1
              );
            }}
            className="
              absolute
              right-6
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              px-4
              py-3
              text-2xl
              text-white
              transition
              hover:bg-white/20
            "
          >
            ›
          </button>

        </div>

      )}

    </section>
  );
}