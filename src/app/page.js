import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { posts } from "@/data/posts";
import Link from "next/link";

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

              {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-8">
            The electric future,
            <span className="text-green-400"> decoded.</span>
          </h1> */}

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
                  Read the latest →
                </button>

                <button className="border border-gray-700 hover:border-green-500 px-8 py-4 rounded-2xl transition-all">
                  Browse reviews
                </button>
                {/* <button className="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold">
              Read Latest →
            </button>

            <button className="border border-gray-700 px-8 py-4 rounded-xl">
              Browse Reviews
            </button> */}
              </div>
            </div>

            {/* Right */}
            {/* <div>
          <img
            src="/ev-car.jpg"
            alt="EV Car"
            className="w-full h-[500px] object-cover rounded-3xl border border-green-900"
          />
        </div> */}

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

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 border-t border-gray-800 pt-10">
            <div>
              <h3 className="text-4xl font-bold text-green-400">150k+</h3>
              <p className="text-gray-500">Monthly Readers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">320+</h3>
              <p className="text-gray-500">Articles</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">40+</h3>
              <p className="text-gray-500">EV Reviews</p>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              Featured <span className="text-green-400">Articles</span>
            </h2>

            <button className="text-green-400 hover:text-green-300">
              View All →
            </button>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {/* Card 1 */}
          {/* <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
      <img
        src="/article1.jpg"
        alt="EV News"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <span className="text-green-400 text-sm">EV NEWS</span>

        <h3 className="text-xl font-bold mt-3">
          Top Electric Cars Coming to India in 2026
        </h3>

        <p className="text-gray-400 mt-3">
          Explore the most anticipated EV launches expected next year.
        </p>
      </div>
    </div> */}

          {/* Card 2 */}
          {/* <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
      <img
        src="/article2.jpg"
        alt="EV Review"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <span className="text-green-400 text-sm">REVIEW</span>

        <h3 className="text-xl font-bold mt-3">
          Tata Curvv EV Full Review
        </h3>

        <p className="text-gray-400 mt-3">
          Range, battery performance and real-world driving experience.
        </p>
      </div>
    </div> */}

          {/* Card 3 */}
          {/* <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
      <img
        src="/article3.jpg"
        alt="Charging"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <span className="text-green-400 text-sm">CHARGING</span>

        <h3 className="text-xl font-bold mt-3">
          Complete Home Charging Guide
        </h3>

        <p className="text-gray-400 mt-3">
          Everything you need to know before installing an EV charger.
        </p>
      </div>
    </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              // <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
                  {/* <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    /> */}
                  <div className="w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">{post.title}</h3>

                    <p className="text-gray-400 mt-3">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Categories */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Popular <span className="text-green-400">Categories</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Explore electric vehicles, charging, batteries and industry news.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition cursor-pointer">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold">Electric Cars</h3>
              <p className="text-gray-400 mt-3">
                Latest EV cars, reviews and comparisons.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition cursor-pointer">
              <div className="text-5xl mb-4">🛵</div>
              <h3 className="text-2xl font-bold">EV Scooters</h3>
              <p className="text-gray-400 mt-3">
                Best electric scooters in India.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition cursor-pointer">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold">Battery Tech</h3>
              <p className="text-gray-400 mt-3">
                Battery innovations and future technology.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition cursor-pointer">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold">Charging</h3>
              <p className="text-gray-400 mt-3">
                Home charging and fast charging guides.
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

        {/* Latest EV News */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              Latest <span className="text-green-400">EV News</span>
            </h2>

            <button className="text-green-400 hover:text-green-300">
              View All News →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition"
              >
                <img
                  src={`/news${item}.jpg`}
                  alt="EV News"
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <span className="text-green-400 text-sm">
                    {new Date().toLocaleDateString()}
                  </span>

                  <h3 className="text-xl font-bold mt-3">
                    EV Industry News Headline {item}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Latest updates from India's growing electric vehicle
                    ecosystem.
                  </p>

                  <button className="mt-5 text-green-400">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
