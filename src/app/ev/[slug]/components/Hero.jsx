"use client";

export default function Hero({ vehicle }) {
  return (
    <section className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold">
        {vehicle.brand.name} {vehicle.name}
      </h1>

      <p className="mt-4 text-green-400 text-2xl">
        ₹ {(vehicle.exShowroomPrice / 100000).toFixed(2)} Lakh
      </p>

    </section>
  );
}