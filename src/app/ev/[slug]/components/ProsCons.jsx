"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function ProsCons({ vehicle }) {
  if (!vehicle) return null;

  const pros = vehicle.pros || [];
  const cons = vehicle.cons || [];

  return (
    <section className="mt-16">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Pros & Cons
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Our quick summary after evaluating the vehicle.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Pros */}

        <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-5">

          <div className="mb-5 flex items-center gap-2">

            <CheckCircle2
              size={22}
              className="text-green-400"
            />

            <h3 className="text-lg font-semibold text-white">
              What We Like
            </h3>

          </div>

          <div className="space-y-4">

            {/* {pros.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </div>
            ))} */}


{pros.map((item) => (
  <div
    key={item.id}
    className="flex items-start gap-3"
  >
    <CheckCircle2
      size={18}
      className="mt-0.5 shrink-0 text-green-400"
    />

    <span className="text-sm text-zinc-300">
      {item.title}
    </span>
  </div>
))}
          </div>

        </div>

        {/* Cons */}

        <div className="rounded-2xl border border-red-500/20 bg-zinc-900 p-5">

          <div className="mb-5 flex items-center gap-2">

            <XCircle
              size={22}
              className="text-red-400"
            />

            <h3 className="text-lg font-semibold text-white">
              Things To Improve
            </h3>

          </div>

          <div className="space-y-4">

            {/* {cons.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <XCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-red-400"
                />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </div>
            ))} */}

            {cons.map((item) => (
  <div
    key={item.id}
    className="flex items-start gap-3"
  >
    <XCircle
      size={18}
      className="mt-0.5 shrink-0 text-red-400"
    />

    <span className="text-sm text-zinc-300">
      {item.title}
    </span>
  </div>
))}

          </div>

        </div>

      </div>

    </section>
  );
}