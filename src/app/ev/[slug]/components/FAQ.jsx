"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ vehicle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!vehicle?.faqs?.length) return null;

  return (
    <section className="mt-14">

      {/* Header */}

      <div id="faq" className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
          FAQs
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Everything you need to know about{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>
          .
        </p>

      </div>

      <div className="space-y-4">

        {vehicle.faqs.map((faq, index) => {

          const isOpen = activeIndex === index;

          return (

            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                transition-all
                duration-300
                hover:border-green-500/30
              "
            >

              <button
                onClick={() =>
                  setActiveIndex(
                    isOpen ? -1 : index
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-5
                  text-left
                "
              >

                <h3 className="pr-6 text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                {isOpen ? (
                  <Minus
                    size={20}
                    className="text-green-400"
                  />
                ) : (
                  <Plus
                    size={20}
                    className="text-zinc-400"
                  />
                )}

              </button>
                            <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ease-in-out
                  ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }
                `}
              >

                <div className="overflow-hidden">

                  <div className="border-t border-zinc-800 px-5 pb-5 pt-4">

                    <p className="leading-7 text-zinc-400">

                      {faq.answer}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Bottom Note */}

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-5">

        <h3 className="text-lg font-semibold text-white">
          Still have questions?
        </h3>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          If you couldn't find the answer you're looking for,
          feel free to contact our team. We'll help you with
          specifications, charging, ownership costs and buying
          guidance for{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>
          .
        </p>

        <button
          className="
            mt-5
            rounded-xl
            bg-green-500
            px-5
            py-3
            text-sm
            font-semibold
            text-black
            transition
            hover:bg-green-400
          "
        >
          Contact Expert
        </button>

      </div>

    </section>
  );
}