"use client";

import Image from "next/image";
import Link from "next/link";

import {
  BatteryCharging,
  Gauge,
  IndianRupee,
  ArrowRight,
  Zap,
  Trophy,
} from "lucide-react";

function formatPrice(price) {
  if (!price) return "N/A";
  return `₹${(price / 100000).toFixed(2)} Lakh`;
}

export default function HeroComparison({ comparison }) {
  if (!comparison) return null;

  const { car1, car2 } = comparison;

  const winner =
    (car1.claimedRange || 0) >=
    (car2.claimedRange || 0)
      ? car1
      : car2;

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-theme
        bg-card
        shadow-theme
      "
    >

      {/* Background Glow */}

      <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 p-6 md:p-10">

        {/* Badge */}

        <div className="flex justify-center">

          <span
            className="
              inline-flex
              items-center
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
            Electric Vehicle Comparison
          </span>

        </div>

        {/* Heading */}

        <div className="mt-8 text-center">

          <h1
            className="
              text-3xl
              font-extrabold
              leading-tight
              text-foreground
              md:text-5xl
            "
          >

            {car1.name}

            <span className="mx-3 text-green-500">
              VS
            </span>

            {car2.name}

          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-muted
              leading-7
            "
          >
            Compare price, battery capacity,
            driving range, charging speed,
            performance, warranty and
            specifications side-by-side
            before buying your next EV.
          </p>

        </div>

        {/* Winner */}

        <div className="mt-8 flex justify-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-5
              py-2
              font-semibold
              text-yellow-500
            "
          >

            <Trophy size={18} />

            Better Claimed Range

            <span className="font-bold text-foreground">
              {winner.name}
            </span>

          </div>

        </div>

        {/* Compare Cards */}

        <div
          className="
            mt-14
            grid
            items-center
            gap-10
            lg:grid-cols-[1fr_170px_1fr]
          "
        >

          {/* LEFT */}

          <CarCard
            car={car1}
            formatPrice={formatPrice}
          />

          {/* VS */}

          <div className="flex flex-col items-center justify-center">

            <div
              className="
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-green-500
                to-emerald-400
                text-4xl
                font-black
                text-black
                shadow-theme
              "
            >
              VS
            </div>

            <span
              className="
                mt-5
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
              Side by Side
            </span>

          </div>

          {/* RIGHT */}

          <CarCard
            car={car2}
            formatPrice={formatPrice}
          />

        </div>

      </div>

    </section>
  );
}
        /* ---------------------------------------- */
/* Car Card */
/* ---------------------------------------- */

function CarCard({ car, formatPrice }) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-theme
        bg-card
        p-6
        shadow-theme
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-500
      "
    >

      {/* Image */}

      <div
        className="
          relative
          h-64
          overflow-hidden
          rounded-2xl
          border
          border-theme
          bg-background
        "
      >

        <Image
          src={car.image || "/cars/placeholder.png"}
          alt={car.name}
          fill
          priority
          className="
            object-contain
            p-5
            transition
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* Brand */}

      <div className="mt-6 flex items-center justify-center gap-3">

        {car.brand?.logo && (
          <Image
            src={car.brand.logo}
            alt={car.brand.name}
            width={30}
            height={30}
            className="object-contain"
          />
        )}

        <span className="text-sm font-medium text-muted">
          {car.brand?.name}
        </span>

      </div>

      {/* Name */}

      <h2 className="mt-3 text-center text-2xl font-bold text-foreground">
        {car.name}
      </h2>

      {/* Specs */}

      <div className="mt-8 grid gap-4">

        <Spec
          icon={<IndianRupee size={18} />}
          label="Price"
          value={formatPrice(car.exShowroomPrice)}
        />

        <Spec
          icon={<BatteryCharging size={18} />}
          label="Battery"
          value={
            car.batteryKwh
              ? `${car.batteryKwh} kWh`
              : "N/A"
          }
        />

        <Spec
          icon={<Zap size={18} />}
          label="Claimed Range"
          value={
            car.claimedRange
              ? `${car.claimedRange} km`
              : "N/A"
          }
        />

        <Spec
          icon={<Gauge size={18} />}
          label="Top Speed"
          value={
            car.topSpeed
              ? `${car.topSpeed} km/h`
              : "N/A"
          }
        />

      </div>

      {/* Button */}

      <Link
        href={`/ev/${car.slug}`}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-green-500
          px-5
          py-3
          font-semibold
          text-black
          transition-all
          duration-300
          hover:bg-green-400
        "
      >

        View Full Details

        <ArrowRight size={18} />

      </Link>

    </div>
  );
}

/* ---------------------------------------- */
/* Spec Item */
/* ---------------------------------------- */

function Spec({ icon, label, value }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-theme
        bg-background
        px-4
        py-3
        transition-all
        duration-300
        hover:border-green-500
        hover:bg-green-500/5
      "
    >

      {/* Left */}

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-green-500/10
            text-green-500
          "
        >
          {icon}
        </div>

        <span className="text-sm font-medium text-muted">
          {label}
        </span>

      </div>

      {/* Right */}

      <span className="text-sm font-bold text-foreground">
        {value || "N/A"}
      </span>

    </div>
  );
}
       
