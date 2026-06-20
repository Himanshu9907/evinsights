import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { posts } from "@/data/posts";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import {
  ShieldCheck,
  Newspaper,
  BatteryCharging,
  GitCompareArrows,
} from "lucide-react";

const featuredReviews = posts
  .filter((post) => post.category === "Reviews")
  .slice(0, 3);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-18">
        {/* Hero Section */}

        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background Blur */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 lg:left-1/3 lg:translate-x-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-green-500/10 rounded-full blur-[100px] md:blur-[150px]" />

            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-green-500/10 rounded-full blur-[80px] md:blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative">
            {/* Left */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-block border border-green-500 text-green-400 px-5 py-2.5 rounded-full text-sm md:text-base">
                Independent. Data-driven. Reader-first.
              </div>

              <h1 className="mt-8 font-extrabold leading-[1] text-5xl sm:text-6xl lg:text-8xl">
                The electric
                <br />
                future,
                <span className="text-green-400"> decoded.</span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg lg:text-xl mt-6 max-w-xl mx-auto lg:mx-0">
                In-depth EV reviews, breaking industry news, detailed
                comparisons and charging guides for every EV buyer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                <Link
                  href="/blog"
                  className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-semibold transition text-center"
                >
                  Latest News
                </Link>

                <Link
                  href="/comparison"
                  className="border border-zinc-700 hover:border-green-500 px-8 py-4 rounded-2xl transition text-center"
                >
                  Compare EVs
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative order-first lg:order-last">
              <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full"></div>

              <img
                src="/ev-car.jpg"
                alt="EV Car"
                className="relative w-full h-[260px] sm:h-[380px] md:h-[450px] lg:h-[550px] object-cover rounded-[32px] border border-green-900/50 shadow-[0_0_80px_rgba(34,197,94,0.25)]"
              />
            </div>
          </div>
        </section>

        {/* Latest EV News */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex items-center justify-between mb-12">
            {/* <h2 className="text-4xl font-bold"> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Latest <span className="text-green-400">EV News</span>
            </h2>
            <Link
              href="/blog"
              className="text-green-400 hover:text-green-300 whitespace-nowrap"
            >
              View All Reviews →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition flex flex-col h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-400 text-sm">
                        {post.category}
                      </span>

                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold mt-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mt-3 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 text-green-400 font-medium hover:text-green-300">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Feature Reviews */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="text-green-400">Reviews</span>
            </h2>

            <Link
              href="/blog"
              className="text-green-400 hover:text-green-300 whitespace-nowrap"
            >
              View All Reviews →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Rating */}
                    <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full font-bold shadow-lg">
                      ⭐ {post.rating}
                    </div>

                    {/* Review Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
                      Review
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold line-clamp-2 group-hover:text-green-400 transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mt-3 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-3 mt-6 border-t border-zinc-800 pt-5">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="font-semibold text-sm mt-1">
                          {post.price}
                        </p>
                      </div>

                      <div className="text-center border-x border-zinc-800">
                        <p className="text-xs text-gray-500">Range</p>
                        <p className="font-semibold text-sm mt-1">
                          {post.range}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-gray-500">Battery</p>
                        <p className="font-semibold text-sm mt-1">
                          {post.battery}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Comparisons */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Popular <span className="text-green-400">Comparisons</span>
            </h2>

            <Link
              href="/comparison"
              className="text-green-400 hover:text-green-300 whitespace-nowrap"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisons.slice(0, 3).map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/comparison/${comparison.slug}`}
                className="block"
              >
                <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="grid grid-cols-2">
                    <img
                      src={comparison.image1}
                      alt={comparison.car1}
                      className="w-full h-48 object-cover"
                    />

                    <img
                      src={comparison.image2}
                      alt={comparison.car2}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                      Comparison
                    </span>

                    <h3 className="text-xl font-bold mt-4">
                      {comparison.car1}
                      <span className="text-green-400"> VS </span>
                      {comparison.car2}
                    </h3>

                    <p className="text-gray-400 mt-3">
                      Compare specifications, range, battery, charging speed,
                      performance and pricing.
                    </p>

                    <div className="mt-6 text-green-400 font-semibold">
                      Compare Now →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <span className="text-green-400 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Why Trust
              <span className="text-green-400"> EV Insight Hub?</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              We provide independent reviews, reliable EV news and expert buying
              advice to help you make smarter decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition group">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-green-400" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Independent Reviews</h3>

              <p className="text-gray-400 mt-3">
                Honest and unbiased EV reviews based on real-world research.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <Newspaper className="w-8 h-8 text-green-400" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Latest EV News</h3>

              <p className="text-gray-400 mt-3">
                Stay updated with launches, policies and industry developments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <BatteryCharging className="w-8 h-8 text-green-400" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Charging Guides</h3>

              <p className="text-gray-400 mt-3">
                Learn charging costs, battery care and practical EV ownership
                tips.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <GitCompareArrows className="w-8 h-8 text-green-400" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Smart Comparisons</h3>

              <p className="text-gray-400 mt-3">
                Compare EVs by price, range, battery and features before buying.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-green-950 border border-zinc-800 p-8 md:p-12">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                  📩 Newsletter
                </span>

                <h2 className="mt-5 text-3xl md:text-5xl font-bold">
                  Stay Ahead of the
                  <span className="text-green-400"> EV Revolution</span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-lg mx-auto lg:mx-0">
                  Get the latest EV news, reviews, buying guides and comparisons
                  delivered directly to your inbox.
                </p>
              </div>

              {/* Right */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-14 rounded-xl bg-black/40 border border-zinc-700 px-5 outline-none focus:border-green-500"
                  />

                  <button className="h-14 px-8 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition">
                    Subscribe
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center sm:text-left">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-500">
              <span>✓ Weekly EV Updates</span>

              <span>✓ Independent Reviews</span>

              <span>✓ No Spam</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
