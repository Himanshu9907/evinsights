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

  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-10">
            EV <span className="text-green-400">Blog</span>
          </h1>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="flex flex-wrap gap-3 mb-10">
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
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6">
                    <h2 className="text-xl font-bold">{post.title}</h2>

                    <p className="text-gray-400 mt-3">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No articles found.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
