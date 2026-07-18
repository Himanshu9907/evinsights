"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ArticleFAQ({ article }) {
  const faqs = article.faqs || [];

  if (!faqs.length) return null;

  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-4xl px-4 py-14">

      <div className="mb-10">

        <h2 className="text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-muted">
          Everything you need to know about this EV.
        </p>

      </div>

      <div className="space-y-4">

        {faqs.map((faq, index) => {

          const active = open === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-theme bg-card"
            >

              <button
                onClick={() =>
                  setOpen(active ? -1 : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-6
                  py-5
                  text-left
                "
              >

                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    active ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="border-t border-theme px-6 py-5 leading-7 text-muted">
                    {faq.answer}
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