

"use client";

import Link from "next/link";
import Image from "next/image";

import {
  BatteryCharging,
  Gauge,
  Zap,
  ArrowRight,
  GitCompareArrows,
  Star,
} from "lucide-react";

function formatPrice(startingPrice, endingPrice) {
  if (!startingPrice) return "N/A";

  const start = (startingPrice / 100000).toFixed(2);

  if (!endingPrice || startingPrice === endingPrice) {
    return `₹${start} Lakh`;
  }

  const end = (endingPrice / 100000).toFixed(2);

  return `₹${start} - ${end} Lakh`;
}


export default function EVCard({ vehicle }) {
  return (
    <>
      {/* ================= MOBILE CARD ================= */}

      <div
        className="
          sm:hidden
          overflow-hidden
          rounded-2xl
          border
          border-theme
          bg-card
          shadow-theme
          transition-all
          duration-300
          hover:border-green-500
        "
      >
        {/* Image */}

        <div className="relative">

          <div
            className="
              relative
              aspect-[16/9]
              overflow-hidden
            "
          >
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              sizes="100vw"
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>

          {/* Featured Badge */}

          {vehicle.featured && (
            <span
              className="
                absolute
                left-3
                top-3
                rounded-full
                bg-green-500
                px-3
                py-1
                text-[11px]
                font-semibold
                text-black
              "
            >
              Featured
            </span>
          )}

          {/* Wishlist */}

          <button
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-background/90
              backdrop-blur
              transition
              hover:bg-green-500
              hover:text-black
            "
          >
            <Star size={15} />
          </button>

        </div>

        {/* Content */}

        <div className="p-4">

          {/* Brand */}

          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-wider
              text-green-500
            "
          >
            {vehicle.brand?.name}
          </p>

          {/* Name */}

          <h2
            className="
              mt-1
              line-clamp-2
              text-xl
              font-bold
              leading-6
              text-foreground
            "
          >
            {vehicle.name}
          </h2>

          {/* Rating */}

          <div
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-theme
              px-3
              py-1
            "
          >
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-xs font-medium">
              {vehicle.rating?.overall || "4.8"}
            </span>

            <span className="text-xs text-muted">
              ({vehicle.rating?.reviews || 126})
            </span>

          </div>

          {/* Price */}

          <div className="mt-4">

            <h3
              className="
                text-2xl
                font-extrabold
                text-green-500
              "
            >
              ₹{" "}
              {vehicle.startingPrice
  ? vehicle.startingPrice.toLocaleString("en-IN")
  : "N/A"}
            </h3>

            <p className="text-sm text-muted">
              Ex-showroom Price
            </p>

          </div>
                    {/* Specs */}

          <div className="mt-5 grid grid-cols-3 gap-2">

            <div
              className="
                flex
                flex-col
                items-center
                rounded-xl
                bg-background
                py-3
              "
            >
              <BatteryCharging
                size={18}
                className="text-green-500"
              />

              <span className="mt-2 text-[10px] text-muted">
                Battery
              </span>

              <span className="mt-1 text-xs font-bold">
                {vehicle.batteryKwh || "-"} kWh
              </span>

            </div>

            <div
              className="
                flex
                flex-col
                items-center
                rounded-xl
                bg-background
                py-3
              "
            >
              <Zap
                size={18}
                className="text-green-500"
              />

              <span className="mt-2 text-[10px] text-muted">
                Range
              </span>

              <span className="mt-1 text-xs font-bold">
                {vehicle.claimedRange || "-"} km
              </span>

            </div>

            <div
              className="
                flex
                flex-col
                items-center
                rounded-xl
                bg-background
                py-3
              "
            >
              <Gauge
                size={18}
                className="text-green-500"
              />

              <span className="mt-2 text-[10px] text-muted">
                Power
              </span>

              <span className="mt-1 text-xs font-bold">
                {vehicle.powerHp || "-"} HP
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-5 flex gap-3">

            <Link
  href={`/comparison?car1=${vehicle.slug}`}
  className="
    flex
    flex-1
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-theme
    py-3
    text-sm
    font-medium
    transition-all
    duration-300
    hover:border-green-500
    hover:bg-green-500
    hover:text-black
  "
>
  <GitCompareArrows size={15} />
  Compare
</Link>
            <Link
              href={`/ev/${vehicle.slug}`}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-500
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-green-400
              "
            >
              Details
              <ArrowRight size={15} />
            </Link>

          </div>

        </div>

      </div>

      {/* ================= DESKTOP CARD ================= */}

      <div
        className="
          hidden
          sm:block
          group
          overflow-hidden
          rounded-2xl
          border
          border-theme
          bg-card
          shadow-theme
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-green-500
        "
      >
                {/* Image */}

        <div className="relative h-48 overflow-hidden">

          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {vehicle.featured && (
            <span
              className="
                absolute
                left-3
                top-3
                rounded-full
                bg-green-500
                px-3
                py-1
                text-[11px]
                font-semibold
                text-black
              "
            >
              Featured
            </span>
          )}

          <button
            className="
              absolute
              right-3
              top-3
              rounded-full
              bg-background/90
              p-2
              shadow
              transition
              hover:bg-green-500
              hover:text-black
            "
          >
            <Star size={15} />
          </button>

        </div>

        {/* Content */}

        <div className="p-5">

          <p className="text-sm font-medium text-green-500">
            {vehicle.brand?.name}
          </p>

          <h2 className="mt-2 line-clamp-1 text-xl font-bold text-foreground">
            {vehicle.name}
          </h2>

          <div className="mt-3">

            {/* <p className="text-2xl font-bold text-green-500">
              ₹{" "}
              {vehicle.exShowroomPrice
                ? vehicle.exShowroomPrice.toLocaleString("en-IN")
                : "N/A"}
            </p> */}

            <p className="text-2xl font-bold text-green-500">
  {formatPrice(
    vehicle.startingPrice,
    vehicle.endingPrice
  )}
</p>

            <p className="text-sm text-muted">
              Ex-showroom
            </p>

          </div>

          {/* Specs */}

          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="flex items-center gap-3 rounded-xl bg-background p-3">

              <BatteryCharging
                size={18}
                className="text-green-500"
              />

              <div>

                <p className="text-xs text-muted">
                  Battery
                </p>

                <p className="text-sm font-semibold">
                  {vehicle.batteryKwh
                    ? `${vehicle.batteryKwh} kWh`
                    : "-"}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-background p-3">

              <Zap
                size={18}
                className="text-green-500"
              />

              <div>

                <p className="text-xs text-muted">
                  Range
                </p>

                <p className="text-sm font-semibold">
                  {vehicle.claimedRange
                    ? `${vehicle.claimedRange} km`
                    : "-"}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-background p-3">

              <Gauge
                size={18}
                className="text-green-500"
              />

              <div>

                <p className="text-xs text-muted">
                  Power
                </p>

                <p className="text-sm font-semibold">
                  {vehicle.powerHp
                    ? `${vehicle.powerHp} HP`
                    : "-"}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-background p-3">

              <BatteryCharging
                size={18}
                className="text-green-500"
              />

              <div>

                <p className="text-xs text-muted">
                  Charging
                </p>

                <p className="text-sm font-semibold">
                  {vehicle.dcCharging || "-"}
                </p>

              </div>

            </div>

          </div>
                    {/* Buttons */}

          <div className="mt-6 flex gap-3">

            <Link
  href={`/comparison?car1=${vehicle.slug}`}
  className="
    flex
    flex-1
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-theme
    py-3
    text-sm
    font-medium
    transition-all
    duration-300
    hover:border-green-500
    hover:bg-green-500
    hover:text-black
  "
>
  <GitCompareArrows size={16} />
  Compare
</Link>

            <Link
              href={`/ev/${vehicle.slug}`}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-500
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-green-400
              "
            >
              Details
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </div>

    </>
  );
}