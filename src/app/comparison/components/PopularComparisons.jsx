import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PopularComparisons() {
  const comparisons = [
    {
      title: "Tata Curvv EV",
      vs: "Tata Nexon EV",
      slug: "tata-curvv-ev-vs-tata-nexon-ev",
    },
    {
      title: "Mahindra BE 6",
      vs: "Mahindra XEV 9e",
      slug: "mahindra-be-6-vs-mahindra-xev-9e",
    },
    {
      title: "MG Windsor EV",
      vs: "Hyundai Creta EV",
      slug: "mg-windsor-ev-vs-hyundai-creta-ev",
    },
    {
      title: "BYD Atto 3",
      vs: "MG ZS EV",
      slug: "byd-atto-3-vs-mg-zs-ev",
    },
  ];

  return (
    <section className="bg-background py-20">

      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-12 text-center">

          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500">
            Popular Comparisons
          </span>

          <h2 className="mt-5 text-4xl font-bold text-foreground">
            Most Compared EVs
          </h2>

          <p className="mt-3 text-muted">
            Compare India's most popular electric vehicles.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {comparisons.map((item) => (
            <Link
              key={item.slug}
              href={`/comparison/${item.slug}`}
              className="
                group
                rounded-2xl
                border
                border-theme
                bg-card
                p-6
                shadow-theme
                transition-all
                hover:-translate-y-1
                hover:border-green-500
              "
            >
              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-green-500 font-semibold">
                    VS
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {item.vs}
                  </h3>

                </div>

                <ArrowRight
                  className="text-green-500 transition group-hover:translate-x-1"
                  size={24}
                />

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}