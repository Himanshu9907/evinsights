"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CalendarDays, Clock3, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Reviews", "News", "Charging", "Buying Guide"];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              ⚡ EV News & Reviews
            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Latest
              <span className="text-green-400"> Electric Vehicle</span>
              <br />
              News, Reviews & Guides
            </h1>

            <p className="mt-6 text-zinc-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-8">
              Explore breaking EV news, expert car reviews, buying guides,
              charging solutions and battery technology updates from around the
              world.
            </p>
          </div>
        </div>
      </section>

      {/* stat section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400">
              {posts.length}
            </h2>

            <p className="text-zinc-400 mt-2">Articles</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400">20+</h2>

            <p className="text-zinc-400 mt-2">Reviews</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400">50+</h2>

            <p className="text-zinc-400 mt-2">News</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400">24×7</h2>

            <p className="text-zinc-400 mt-2">Updates</p>
          </div>
        </div>
      </div>

      {/* ================= Featured Article ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured
            <span className="text-green-400"> Story</span>
          </h2>

          <span className="hidden md:block text-zinc-400">Editor's Pick</span>
        </div>

        <Link href={`/blog/${featuredPost.slug}`}>
          <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 hover:border-green-500 transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-72 sm:h-96 lg:h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex w-fit rounded-full bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2 text-sm">
                  {featuredPost.category}
                </span>

                <h2 className="mt-6 text-3xl lg:text-5xl font-bold leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-6 text-zinc-400 leading-8 text-lg">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-zinc-500">
                  <span>{featuredPost.date}</span>

                  <span>•</span>

                  <span>{featuredPost.readTime}</span>
                </div>

                <button className="mt-10 w-fit rounded-xl bg-green-500 hover:bg-green-400 text-black px-6 py-3 font-semibold transition">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Row */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Search */}

          <div className="w-full lg:max-w-md">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Sort */}

          {/* <select className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500 transition">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Popular</option>
          </select> */}
        </div>

        {/* Category Pills */}

        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition duration-300 border font-medium ${
                activeCategory === category
                  ? "bg-green-500 text-black border-green-500"
                  : "border-zinc-700 text-zinc-300 hover:border-green-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results */}

        <div className="mt-8 text-zinc-400">
          Showing
          <span className="text-green-400 font-semibold">
            {" "}
            {filteredPosts.length}{" "}
          </span>
          Articles
        </div>
      </section>

      {/* <section className="relative overflow-hidden border-b border-zinc-800 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
            EV News & Reviews
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            Latest EV
            <span className="text-green-400"> Articles</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
            Stay updated with electric vehicle news, reviews, comparisons,
            charging guides and battery technology.
          </p>
        </div>
      </section> */}

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 flex flex-col h-[250px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                    {post.category}
                  </span>

                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-400 mt-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-gray-500 text-sm">{post.date}</span>

                  <span className="text-green-400 font-semibold">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}

      {/* ================= Latest Articles ================= */}

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

    {filteredPosts
      .filter((post) => post.slug !== featuredPost.slug)
      .map((post) => (

        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group"
        >

          <article className="h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 hover:border-green-500 transition-all duration-300 hover:-translate-y-2">

            {/* Image */}

            <div className="relative overflow-hidden">

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute top-4 left-4">

                <span className="rounded-full bg-green-500 text-black px-3 py-1 text-xs font-semibold">

                  {post.category}

                </span>

              </div>

            </div>

            {/* Content */}

            <div className="p-6 flex flex-col h-[270px]">

              <h2 className="text-2xl font-bold line-clamp-2 group-hover:text-green-400 transition">

                {post.title}

              </h2>

              <p className="mt-4 text-zinc-400 line-clamp-3 flex-grow">

                {post.excerpt}

              </p>

              {/* Meta */}

              <div className="flex items-center justify-between mt-6 text-sm text-zinc-500">

                <div className="flex items-center gap-2">

                  <CalendarDays size={16} />

                  {post.date}

                </div>

                <div className="flex items-center gap-2">

                  <Clock3 size={16} />

                  {post.readTime}

                </div>

              </div>

              {/* Button */}

              <div className="mt-6">

                <span className="inline-flex items-center gap-2 text-green-400 font-semibold group-hover:gap-4 transition-all">

                  Read Article

                  <ArrowRight size={18} />

                </span>

              </div>

            </div>

          </article>

        </Link>

      ))}

  </div>

</section>

      <Footer />
    </>
  );
}
