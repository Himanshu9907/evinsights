"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-16">

      {/* Heading */}

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-green-500/10 p-3">
          <HelpCircle size={22} className="text-green-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-1 text-zinc-400">
            Everything you need to know about this EV.
          </p>
        </div>

      </div>

      {/* FAQ */}

      <div className="space-y-4">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.id}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                transition-all
                duration-300
                hover:border-green-500
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-6
                  text-left
                "
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <div className="ml-4">

                  {isOpen ? (
                    <Minus
                      className="text-green-400"
                      size={22}
                    />
                  ) : (
                    <Plus
                      className="text-zinc-400"
                      size={22}
                    />
                  )}

                </div>
              </button>

              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }
                `}
              >
                <div className="overflow-hidden">

                  <div className="border-t border-zinc-800 px-6 py-5">

                    <p className="leading-7 text-zinc-300">
                      {faq.answer}
                    </p>

                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}