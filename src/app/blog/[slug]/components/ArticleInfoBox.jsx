"use client";

import { Info } from "lucide-react";

export default function ArticleInfoBox({
  title = "Quick Information",
  children,
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div
        className="
          rounded-2xl
          border
          border-theme
          bg-card
          p-6
          shadow-sm
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-primary/10
              text-primary
            "
          >
            <Info size={22} />
          </div>

          <h2 className="text-2xl font-bold">
            {title}
          </h2>
        </div>

        <div
          className="
            text-muted
            leading-8
            space-y-4
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}