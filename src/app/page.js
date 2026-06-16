import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { posts } from "@/data/posts";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";

const featuredReviews = posts
  .filter((post) => post.category === "Reviews")
  .slice(0, 3);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-18">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[85vh]">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/3 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[150px]" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="inline-block border border-green-500 text-green-400 px-6 py-3 rounded-full">
                Independent. Data-driven. Reader-first.
              </div>
              <h1 className="text-6xl lg:text-8xl font-extrabold leading-[0.95] mt-8">
                The electric
                <br />
                future,
                <span className="text-green-400"> decoded.</span>
              </h1>

              <p className="text-gray-400 text-xl mt-6 max-w-xl">
                In-depth EV reviews, breaking industry news, and charging guides
                for EV enthusiasts.
              </p>

              <div className="flex gap-5 mt-10">
                <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-semibold transition-all">
                  Latest News
                </button>

                <button className="border border-gray-700 hover:border-green-500 px-8 py-4 rounded-2xl transition-all">
                  Compare EVs
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full"></div>

              <img
                src="/ev-car.jpg"
                alt="EV Car"
                className="relative w-full h-[550px] object-cover rounded-[32px] border border-green-900/50 shadow-[0_0_80px_rgba(34,197,94,0.25)]"
              />
            </div>
          </div>
        </section>

        {/* Latest EV News */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              Latest <span className="text-green-400">EV News</span>
            </h2>
            <Link href="/blog" className="text-green-400 hover:text-green-300">
              View All Reviews →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition hover:-translate-y-2 duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-400 text-sm">
                        {post.category}
                      </span>

                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold">{post.title}</h3>

                    <p className="text-gray-400 mt-3">{post.excerpt}</p>

                    <div className="mt-5 text-green-400 font-medium">
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
            <h2 className="text-4xl font-bold">
              Featured <span className="text-green-400">Reviews</span>
            </h2>

            <Link href="/blog" className="text-green-400 hover:text-green-300">
              View All Reviews →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                        Review
                      </span>

                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mt-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{post.date}</span>

                      <span className="text-green-400 font-semibold">
                        Read Review →
                      </span>
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
            <h2 className="text-4xl font-bold">
              Popular <span className="text-green-400">Comparisons</span>
            </h2>

            <Link
              href="/comparison"
              className="text-green-400 hover:text-green-300"
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
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose
              <span className="text-green-400"> EV Insights Hub</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Your trusted source for electric vehicle news, reviews,
              comparisons and buying guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-4xl mb-4">📰</div>

              <h3 className="text-xl font-bold mb-3">Latest EV News</h3>

              <p className="text-gray-400">
                Stay updated with the latest electric vehicle launches, battery
                technology and industry developments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-4xl mb-4">🚗</div>

              <h3 className="text-xl font-bold mb-3">Honest Reviews</h3>

              <p className="text-gray-400">
                Detailed reviews covering range, performance, charging speed and
                ownership experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-4xl mb-4">⚖️</div>

              <h3 className="text-xl font-bold mb-3">EV Comparisons</h3>

              <p className="text-gray-400">
                Compare specifications, pricing, battery, charging and features
                side-by-side.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-4xl mb-4">🔋</div>

              <h3 className="text-xl font-bold mb-3">Buying Guides</h3>

              <p className="text-gray-400">
                Learn about charging, batteries, incentives and EV ownership
                before buying.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-4xl mx-auto text-center py-24">
          <h2 className="text-4xl font-bold">Stay Updated with EV News</h2>

          <div className="flex gap-4 mt-8 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl bg-zinc-900"
            />

            <button className="bg-green-500 text-black px-8 rounded-xl">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
