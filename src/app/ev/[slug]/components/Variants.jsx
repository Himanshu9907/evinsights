"use client";

import VariantAccordion from "./VariantAccordion";

export default function Variants({ vehicle }) {
  if (!vehicle.variants?.length) return null;

  return (
    <section className="mt-20">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          Variants
        </h2>

        <p className="mt-2 text-zinc-400">
          Compare all available variants and choose the one that fits your needs.
        </p>

      </div>

      <div className="space-y-5">

        {vehicle.variants.map((variant) => (
          <VariantAccordion
            key={variant.name}
            variant={variant}
          />
        ))}

      </div>

    </section>
  );
}