import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ComparisonPage() {
  return (
    <>
    <Navbar />
    <main className="bg-black text-white min-h-screen pt-20">

      {/* Hero Section */}
      {/* <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <span className="inline-block border border-green-500 text-green-400 px-5 py-2 rounded-full">
            EV Comparison Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            Compare Electric
            <span className="text-green-400"> Vehicles</span>
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl">
            Compare range, battery, charging speed, performance,
            features and pricing of India's top electric vehicles.
          </p>
        </div>
      </section> */}

      <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">

  <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
    EV Comparison
  </span>

  <h1 className="text-5xl md:text-6xl font-bold mt-8">
  EV <span className="text-green-400">Comparisons</span>
</h1>

  <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
    Compare range, battery, performance,
    pricing and features side by side.
  </p>

</div>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-3xl font-bold text-green-400">
              {comparisons.length}
            </h3>
            <p className="text-gray-400 mt-2">
              Comparisons
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-3xl font-bold text-green-400">
              20+
            </h3>
            <p className="text-gray-400 mt-2">
              EV Models
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-3xl font-bold text-green-400">
              500+
            </h3>
            <p className="text-gray-400 mt-2">
              Specs Compared
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-3xl font-bold text-green-400">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Data Driven
            </p>
          </div>

        </div>
      </section>

      {/* Comparison Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold mb-12">
          Popular EV Comparisons
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {comparisons.map((item) => (
            <Link
              key={item.slug}
              href={`/comparison/${item.slug}`}
              className="group"
            >
              <div className="bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-green-500 transition overflow-hidden">

                {/* Top */}
                <div className="h-2 bg-green-500"></div>

                <div className="p-8">

                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-zinc-800 px-4 py-2 rounded-xl text-sm">
                      EV vs EV
                    </div>

                    <span className="text-green-400">
                      →
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight">
                    {item.car1}
                  </h3>

                  <div className="text-green-400 text-lg font-semibold my-3">
                    VS
                  </div>

                  <h3 className="text-2xl font-bold leading-tight">
                    {item.car2}
                  </h3>

                  <div className="mt-8 flex justify-between text-sm text-gray-400">
                    <span>
                      {item.specs.length} Specs
                    </span>

                    <span className="group-hover:text-green-400">
                      Compare →
                    </span>
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}