"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ArrowLeftRight,
  Car,
  Sparkles,
} from "lucide-react";

import SearchDropdown from "./SearchDropdown";
// import SelectedCarCard from "./SelectedCarCard";
export default function CompareSelector({
  cars,
  defaultCar1,
}) {
  const router = useRouter();

 const [car1, setCar1] = useState(defaultCar1 ?? null);
const [car2, setCar2] = useState(null);

 const [search1, setSearch1] = useState(
  defaultCar1
    ? `${defaultCar1.brand.name} ${defaultCar1.name}`
    : ""
);
  const [search2, setSearch2] = useState("");

  useEffect(() => {
  if (defaultCar1) {
    setCar1(defaultCar1);
    setSearch1(
      `${defaultCar1.brand.name} ${defaultCar1.name}`
    );
  }
}, [defaultCar1]);

  const filterCars = (query, oppositeCar) => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return cars.filter((car) => {
      const matches =
        car.name.toLowerCase().includes(q) ||
        car.brand.name.toLowerCase().includes(q);

      const duplicate = oppositeCar?.id === car.id;

      return matches && !duplicate;
    });
  };

  const results1 = useMemo(
    () => filterCars(search1, car2),
    [search1, car2]
  );

  const results2 = useMemo(
    () => filterCars(search2, car1),
    [search2, car1]
  );

  function swapCars() {
    const first = car1;
    const second = car2;

    setCar1(second);
    setCar2(first);

    setSearch1("");
    setSearch2("");
  }

  function compareNow() {
    if (!car1 || !car2) return;

    router.push(
      `/comparison/${car1.slug}-vs-${car2.slug}`
    );
  }

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[34px]
      border
      border-theme
      bg-background
      shadow-theme
      "
    >

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 p-8">

        {/* Badge */}

        <div className="flex justify-center">

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-green-500/20
            bg-card
            px-5
            py-2
            shadow-theme
            "
          >

            <Sparkles
              size={18}
              className="text-green-500"
            />

            <span className="font-semibold text-foreground">
              India's Smart EV Comparison Tool
            </span>

          </div>

        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-4xl text-center">

          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">

            Compare Electric Cars

          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">

            Compare price, battery, range,
            charging, specifications,
            performance and features of any
            electric vehicle in India.

          </p>

        </div>
                {/* Compare Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_120px_1fr]">

          {/* Left Side */}

          <div>

            <SearchDropdown
              title="First Vehicle"
              search={search1}
              setSearch={setSearch1}
              selectedCar={car1}
              setSelectedCar={setCar1}
              results={results1}
            />

            {/* {car1 && (

              <div className="mt-6">

                <SelectedCarCard car={car1} />

              </div>

            )} */}

          </div>

          {/* Center */}

          <div className="flex flex-col items-center justify-center gap-6">

            <div
              className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border-4
              border-green-500
              bg-card
              text-3xl
              font-black
              text-green-500
              shadow-theme
              "
            >

              VS

            </div>

            <button
              onClick={swapCars}
              disabled={!car1 || !car2}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-theme
                bg-card
                shadow-theme
                transition-all
                duration-300
                hover:rotate-180
                hover:border-green-500
                hover:text-green-500
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >

              <ArrowLeftRight size={22} />

            </button>

          </div>

          {/* Right Side */}

          <div>

            <SearchDropdown
              title="Second Vehicle"
              search={search2}
              setSearch={setSearch2}
              selectedCar={car2}
              setSelectedCar={setCar2}
              results={results2}
            />

            {/* {car2 && (

              <div className="mt-6">

                <SelectedCarCard car={car2} />

              </div>

            )} */}

          </div>

        </div>

        {/* Compare Button */}

        <div className="mt-14 flex justify-center">

          <button
            onClick={compareNow}
            disabled={!car1 || !car2}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-green-500
              px-10
              py-4
              text-lg
              font-bold
              text-black
              shadow-theme
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-green-400
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            <Car
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            Compare Vehicles

          </button>

        </div>
                {/* Bottom Stats */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
              shadow-theme
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-500
            "
          >

            <h3 className="text-lg font-bold text-foreground">
              Compare Price
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              Compare ex-showroom price, on-road price,
              ownership cost and value for money.
            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
              shadow-theme
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-500
            "
          >

            <h3 className="text-lg font-bold text-foreground">
              Compare Battery
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              Battery size, real-world range,
              charging speed, AC & DC charging
              comparison.
            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
              shadow-theme
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-500
            "
          >

            <h3 className="text-lg font-bold text-foreground">
              Compare Features
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              ADAS, infotainment, safety,
              comfort and technology features
              side-by-side.
            </p>

          </div>

        </div>

        {/* Popular Brands */}

        <div className="mt-16">

          <h2 className="text-center text-2xl font-bold text-foreground">
            Popular EV Brands
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            {[
              "Tata",
              "Mahindra",
              "MG",
              "BYD",
              "Hyundai",
              "Kia",
              "BMW",
              "Mercedes-Benz",
              "Volvo",
              "Citroen",
            ].map((brand) => (

              <span
                key={brand}
                className="
                  rounded-full
                  border
                  border-theme
                  bg-card
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-foreground
                  shadow-theme
                  transition-all
                  duration-300
                  hover:border-green-500
                  hover:bg-green-500
                  hover:text-black
                "
              >
                {brand}
              </span>

            ))}

          </div>

        </div>

        {/* Footer CTA */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-green-500/20
            bg-green-500/5
            p-8
            text-center
          "
        >

          <h3 className="text-2xl font-bold text-foreground">
            Can't decide which EV to buy?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            Select any two electric vehicles above and
            compare price, battery, range, charging,
            performance, specifications, dimensions,
            ownership cost and features in one place.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              mt-8
              rounded-xl
              bg-green-500
              px-6
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-green-400
            "
          >
            Start Comparing
          </button>

        </div>

      </div>

    </section>
  );
}