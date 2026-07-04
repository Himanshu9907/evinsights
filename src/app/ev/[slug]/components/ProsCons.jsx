"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function ProsCons({ vehicle }) {
  if (!vehicle) return null;

  return (
    <section id="proscons" className="mt-14">

      {/* Header */}

      <div className="mb-8">

        <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-400">
          Pros & Cons
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Pros & Cons
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Every EV has strengths and compromises. Here's a quick
          overview of what makes{" "}
          <span className="font-semibold text-white">
            {vehicle.name}
          </span>{" "}
          stand out.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* ===================== */}
        {/* PROS */}
        {/* ===================== */}

        <div
          className="
            rounded-2xl
            border
            border-green-500/20
            bg-zinc-900
            p-6
          "
        >

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10">

              <CheckCircle2
                size={22}
                className="text-green-400"
              />

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Pros
              </h3>

              <p className="text-sm text-zinc-400">
                What we liked
              </p>

            </div>

          </div>

          <div className="space-y-3">

            {vehicle.pros?.map((pro, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-950/40
                  p-4
                  transition
                  hover:border-green-500/30
                "
              >

                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <p className="text-sm leading-6 text-zinc-300">
                  {typeof pro === "string"
                    ? pro
                    : pro.title}
                </p>

              </div>

            ))}

          </div>

        </div>

                {/* ===================== */}
        {/* CONS */}
        {/* ===================== */}

        <div
          className="
            rounded-2xl
            border
            border-red-500/20
            bg-zinc-900
            p-6
          "
        >

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">

              <XCircle
                size={22}
                className="text-red-400"
              />

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Cons
              </h3>

              <p className="text-sm text-zinc-400">
                Things to consider
              </p>

            </div>

          </div>

          <div className="space-y-3">

            {vehicle.cons?.map((con, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-950/40
                  p-4
                  transition
                  hover:border-red-500/30
                "
              >

                <XCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-red-400"
                />

                <p className="text-sm leading-6 text-zinc-300">
                  {typeof con === "string"
                    ? con
                    : con.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}