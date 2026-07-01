"use client";

import { useState } from "react";
import TimelineCard from "./TimelineCard";

export default function VariantsTimeline({ vehicle }) {
  if (!vehicle?.variants?.length) return null;

  // Price ke hisaab se sort
  const variants = [...vehicle.variants].sort(
    (a, b) => a.price - b.price
  );

  // Default active = Recommended ya pehla variant
  const defaultVariant =
    variants.find((v) => v.recommended)?.name ||
    variants[0].name;

  const [activeVariant, setActiveVariant] =
    useState(defaultVariant);

  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-10">

        <h2 className="text-3xl font-bold text-white">
          Variants
        </h2>

        <p className="mt-2 max-w-2xl text-zinc-400">
          Compare every variant, understand the price difference,
          and choose the one that suits your budget.
        </p>

      </div>

      {/* Timeline */}

      <div className="space-y-8">

        {variants.map((variant, index) => {

          let priceDifference = null;

          if (index > 0) {
            const diff =
              (variant.price - variants[index - 1].price) /
              100000;

            priceDifference = diff.toFixed(2);
          }

          return (
            <TimelineCard
              key={variant.name}
              variant={variant}
              active={
                activeVariant === variant.name
              }
              onClick={() =>
                setActiveVariant(
                  activeVariant === variant.name
                    ? ""
                    : variant.name
                )
              }
              priceDifference={priceDifference}
            />
          );
        })}

      </div>

    </section>
  );
}

