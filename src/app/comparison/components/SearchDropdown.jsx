
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Search,
  BatteryCharging,
  Gauge,
  IndianRupee,
  Check,
} from "lucide-react";

export default function SearchDropdown({
  title,
  search,
  setSearch,
  selectedCar,
  setSelectedCar,
  results,
}) {

  function formatPrice(startingPrice, endingPrice) {
  if (!startingPrice) return "N/A";

  const start = (startingPrice / 100000).toFixed(2);

  if (!endingPrice || startingPrice === endingPrice) {
    return `₹${start} Lakh`;
  }

  const end = (endingPrice / 100000).toFixed(2);

  return `₹${start} - ${end} Lakh`;
}
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  useEffect(() => {
    setOpen(search.length > 0);
  }, [search]);

  const filteredResults = useMemo(() => {
    return results;
  }, [results]);

  function selectCar(car) {
    setSelectedCar(car);
    setSearch("");
    setOpen(false);
    setActiveIndex(-1);
  }

  function handleKeyDown(e) {
    if (!filteredResults.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        setActiveIndex((prev) =>
          prev >= filteredResults.length - 1
            ? 0
            : prev + 1
        );

        break;

      case "ArrowUp":
        e.preventDefault();

        setActiveIndex((prev) =>
          prev <= 0
            ? filteredResults.length - 1
            : prev - 1
        );

        break;

      case "Enter":
        e.preventDefault();

        if (activeIndex >= 0) {
          selectCar(filteredResults[activeIndex]);
        }

        break;

      case "Escape":
        setOpen(false);
        break;
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
    >

      {/* Label */}

      <label
        className="
          mb-3
          block
          text-sm
          font-semibold
          text-foreground
        "
      >
        {title}
      </label>

      {/* Search */}

      <div className="relative">

        <Search
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-muted
          "
        />

        <input
          type="text"
          value={selectedCar ? selectedCar.name : search}
          placeholder="Search by brand or car name..."
          onChange={(e) => {
            setSelectedCar(null);
            setSearch(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className="
            w-full
            rounded-2xl
            border
            border-theme
            bg-card
            py-4
            pl-12
            pr-4
            text-foreground
            placeholder:text-muted
            shadow-theme
            outline-none
            transition-all
            duration-300
            focus:border-green-500
            focus:ring-4
            focus:ring-green-500/10
          "
        />
      </div>
            {/* ========================= */}
      {/* Search Results */}
      {/* ========================= */}

      {open && filteredResults.length > 0 && (
        <div
          className="
            absolute
            z-50
            mt-3
            max-h-[420px]
            w-full
            overflow-y-auto
            rounded-2xl
            border
            border-theme
            bg-card
            shadow-theme
          "
        >
          {filteredResults.map((car, index) => (
            <button
              key={car.id}
              type="button"
              onClick={() => selectCar(car)}
              className={`
                group
                flex
                w-full
                items-center
                gap-4
                border-b
                border-theme
                p-4
                text-left
                transition-all
                duration-200
                last:border-none
                ${
                  activeIndex === index
                    ? "bg-green-500/10"
                    : "hover:bg-muted/40"
                }
              `}
            >
              {/* Image */}

              <div
                className="
                  relative
                  h-20
                  w-28
                  overflow-hidden
                  rounded-xl
                  border
                  border-theme
                  bg-background
                "
              >
                <Image
                  src={car.image || "/placeholder-car.png"}
                  alt={car.name}
                  fill
                  className="object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">

                  <span
                    className="
                      rounded-full
                      bg-green-500/10
                      px-2
                      py-1
                      text-xs
                      font-semibold
                      text-green-500
                    "
                  >
                    {car.brand.name}
                  </span>

                </div>

                <h4 className="mt-2 truncate text-base font-bold text-foreground">
                  {car.name}
                </h4>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">

                  {/* <span className="flex items-center gap-1">
                    <IndianRupee size={14} />
                    {car.exShowroomPrice
                      ? `₹${(car.exShowroomPrice / 100000).toFixed(2)} L`
                      : "N/A"}
                  </span> */}

                  <span className="flex items-center gap-1">
  <IndianRupee size={14} />
  {formatPrice(
    car.startingPrice,
    car.endingPrice
  )}
</span>

                  <span className="flex items-center gap-1">
                    <BatteryCharging size={14} />
                    {car.batteryKwh
                      ? `${car.batteryKwh} kWh`
                      : "N/A"}
                  </span>

                  <span className="flex items-center gap-1">
                    <Gauge size={14} />
                    {car.claimedRange
                      ? `${car.claimedRange} km`
                      : "N/A"}
                  </span>

                </div>

              </div>

              {/* Selected */}

              {selectedCar?.id === car.id && (
                <div
                  className="
                    rounded-full
                    bg-green-500
                    p-2
                    text-black
                  "
                >
                  <Check size={16} />
                </div>
              )}

            </button>
          ))}
        </div>
      )}

      {/* ========================= */}
      {/* No Results */}
      {/* ========================= */}

      {!selectedCar &&
        search &&
        filteredResults.length === 0 && (

          <div
            className="
              absolute
              z-50
              mt-3
              w-full
              rounded-2xl
              border
              border-theme
              bg-card
              p-8
              text-center
              shadow-theme
            "
          >
            <div className="text-4xl">
              🚗
            </div>

            <h3 className="mt-4 font-semibold text-foreground">
              No vehicle found
            </h3>

            <p className="mt-2 text-sm text-muted">
              Try searching using the brand name or vehicle model.
            </p>

          </div>

        )}
              {/* ========================= */}
      {/* Selected Car Preview */}
      {/* ========================= */}

      {selectedCar && (
        <div
          className="
            mt-4
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/5
            p-4
          "
        >
          {/* <div className="flex items-center justify-between gap-4"> */}
          <div
  className="
    flex
    flex-col
    gap-4
    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>

            {/* Left */}

            {/* <div className="flex items-center gap-4"> */}
            <div
  className="
    flex
    w-full
    min-w-0
    items-center
    gap-3
  "
>

              <div
                className="
                  relative
h-16
w-24
shrink-0
sm:h-20
sm:w-28
                  overflow-hidden
                  rounded-xl
                  border
                  border-theme
                  bg-background
                "
              >
                <Image
                  src={selectedCar.image || "/placeholder-car.png"}
                  alt={selectedCar.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div>

                {/* Brand */}

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-green-500/10
                    px-2
                    py-1
                    text-xs
                    font-semibold
                    text-green-500
                  "
                >
                  {selectedCar.brand.name}
                </span>

                {/* Name */}

                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {selectedCar.name}
                </h3>

                {/* Specs */}

                <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted">

                  {/* <span>
                    ₹
                    {selectedCar.exShowroomPrice
                      ? (selectedCar.exShowroomPrice / 100000).toFixed(2)
                      : "N/A"}{" "}
                    Lakh
                  </span> */}

                  <span>
  {formatPrice(
    selectedCar.startingPrice,
    selectedCar.endingPrice
  )}
</span>

                  <span>•</span>

                  <span>
                    {selectedCar.batteryKwh || "N/A"} kWh
                  </span>

                  <span>•</span>

                  <span>
                    {selectedCar.claimedRange || "N/A"} km
                  </span>

                </div>

              </div>

            </div>

            {/* Change Button */}

            <button
              type="button"
              onClick={() => {
                setSelectedCar(null);
                setSearch("");
                setOpen(false);
              }}
              className="
                rounded-xl
                border
                border-red-500/20
                px-4
                py-2
                text-sm
                font-medium
                text-red-500
                transition
                hover:bg-red-500/10
              "
            >
              Change
            </button>

          </div>

        </div>
      )}

    </div>
  );
}