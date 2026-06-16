// import Link from "next/link";
// import { posts } from "@/data/posts";
// import Navbar from "../components/Navbar";

// export default function BlogPage() {
//   return (
//     <>
//     <Navbar />
//     <main className="bg-black text-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-20">

//         <h1 className="text-5xl font-bold mb-12">
//           EV <span className="text-green-400">Blog</span>
//         </h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post) => (
//             <Link
//               key={post.slug}
//               href={`/blog/${post.slug}`}
//               className="block"
//             >
//               <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">

//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-56 object-cover"
//                 />

//                 <div className="p-6">
//                   <h2 className="text-xl font-bold">
//                     {post.title}
//                   </h2>

//                   <p className="text-gray-400 mt-3">
//                     {post.excerpt}
//                   </p>
//                 </div>

//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </main>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      <section className="relative overflow-hidden border-b border-zinc-800 pt-20">
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
      </section>

      <div className="flex flex-wrap gap-3 mt-6 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === category
                ? "bg-green-500 text-black border-green-500"
                : "border-zinc-700 text-white hover:border-green-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
      
      <Footer />
    </>
  );
}
