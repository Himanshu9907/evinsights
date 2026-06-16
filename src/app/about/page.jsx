import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about EV Insights Hub, your trusted source for electric vehicle news, reviews and comparisons.",
};

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <main className="bg-black text-white min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
            About EV Insights Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            Driving the Future of
            <span className="text-green-400"> Electric Mobility</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
            EV Insights Hub provides the latest electric vehicle news,
            detailed reviews, charging guides, battery technology updates,
            and EV comparisons to help users make informed decisions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              Our mission is to make electric vehicle information simple,
              reliable and accessible for everyone. Whether you are buying
              your first EV, comparing models, or staying updated with
              industry trends, EV Insights Hub helps you stay informed.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-green-400">
              What We Cover
            </h3>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>⚡ EV News & Industry Updates</li>
              <li>🚗 Electric Car Reviews</li>
              <li>🔋 Battery Technology</li>
              <li>⚙️ Charging Guides</li>
              <li>📊 EV Comparisons</li>
              <li>💰 Buying Guides</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">100+</h3>
            <p className="text-gray-400 mt-3">Articles</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">50+</h3>
            <p className="text-gray-400 mt-3">EV Reviews</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">25+</h3>
            <p className="text-gray-400 mt-3">Comparisons</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">1000+</h3>
            <p className="text-gray-400 mt-3">Monthly Readers</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Trust EV Insights Hub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Accurate Information
            </h3>

            <p className="text-gray-400">
              We focus on delivering verified and easy-to-understand EV content.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Detailed Comparisons
            </h3>

            <p className="text-gray-400">
              Compare vehicles side-by-side with detailed specifications.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Future Focused
            </h3>

            <p className="text-gray-400">
              Stay updated with EV technology, batteries and charging trends.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold">
            Join the EV Revolution
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Explore our latest articles, comparisons and EV guides.
          </p>

          <Link
            href="/blog"
            className="inline-block mt-8 bg-green-500 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Explore Articles
          </Link>

        </div>
      </section>

    </main>

    <Footer />
    </>
  );
}