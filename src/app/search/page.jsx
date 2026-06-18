"use client";
import { useState } from "react";
import { posts } from "@/data/posts";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
    <Navbar />
    <main className="bg-black text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold">
          Search
          <span className="text-green-400"> EV Content</span>
        </h1>

        <p className="text-gray-400 mt-4">Find News, Reviews & Comparisons</p>

        {/* 👇 Yahi par add karna hai */}
        <div className="mt-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search EV articles..."
            className="w-full max-w-2xl h-16 px-6 rounded-2xl bg-zinc-900 border border-zinc-700 outline-none focus:border-green-500"
          />
        </div>
      </section>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-6">
                  <span className="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-4 group-hover:text-green-400 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
