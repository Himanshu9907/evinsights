"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Search,
  Car,
} from "lucide-react";

export default function SearchDropdown({
  loading,
  results,
  query,
  onClose,
}) {
  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-[110%]
        z-[100]
        overflow-hidden
        rounded-2xl
        border
        border-theme
        bg-card
        shadow-theme
      "
    >
      {/* Loading */}

      {loading && (
        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            p-6
          "
        >
          <div
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-green-500
              border-t-transparent
            "
          />

          <span className="text-sm text-muted">
            Searching...
          </span>
        </div>
      )}

      {/* Empty */}

      {!loading &&
        query.length >= 2 &&
        results.length === 0 && (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-3
              p-8
            "
          >
            <Car
              size={34}
              className="text-muted"
            />

            <p className="font-semibold text-foreground">
              No EV Found
            </p>

            <span className="text-sm text-muted">
              Try another keyword.
            </span>
          </div>
        )}

      {/* Results */}

      {!loading &&
        results.length > 0 && (
          <div
            className="
              max-h-[420px]
              overflow-y-auto
            "
          >
            {results.map((car) => (
              <Link
                key={car.id}
                href={`/ev/${car.slug}`}
                onClick={onClose}
                className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-theme
                  p-4
                  transition
                  hover:bg-background
                "
              >
                {/* Image */}

                <div
                  className="
                    relative
                    h-16
                    w-24
                    overflow-hidden
                    rounded-xl
                    bg-background
                  "
                >
                  <Image
                    src={
                      car.image ||
                      "/cars/placeholder.png"
                    }
                    alt={car.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Details */}

                <div className="flex-1">

                  <h4
                    className="
                      font-semibold
                      text-foreground
                    "
                  >
                    {car.name}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-muted
                    "
                  >
                    {car.brand?.name}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-green-500
                    "
                  >
                    ₹
                    {car.exShowroomPrice
                      ? (
                          car.exShowroomPrice /
                          100000
                        ).toFixed(2)
                      : "--"}{" "}
                    Lakh
                  </p>

                </div>

              </Link>
            ))}
          </div>
        )}

      {/* Footer */}

      {!loading &&
        results.length > 0 && (
          <div
            className="
              flex
              items-center
              justify-center
              border-t
              border-theme
              bg-background
              p-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                text-muted
              "
            >
              <Search size={14} />

              Showing {results.length} result
              {results.length > 1 && "s"}
            </div>
          </div>
        )}
    </div>
  );
}