// import { posts } from "@/data/posts";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// export default async function BlogPost({ params }) {
//   const { slug } = await params;

//   const post = posts.find((p) => p.slug === slug);

//   const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-6 pt-28">
//         <div className="mb-6">
//           <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
//             EV News
//           </span>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           {post.title}
//         </h1>

//         <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400">
//           <span>👤 EV Insights Team</span>

//           <span>📅 June 14, 2026</span>

//           <span>⏱️ 5 min read</span>
//         </div>

//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-[500px] object-cover rounded-3xl mt-10"
//         />
//       </div>

//       <main className="bg-black text-white min-h-screen pt-24">0
//         <article className="max-w-4xl mx-auto px-6 py-12">
//           <Link href="/" className="text-green-400">
//             ← Back to Home
//           </Link>

//           <h1 className="text-5xl font-bold mt-6">{post.title}</h1>

//           <p className="text-gray-400 mt-4">Published on June 11, 2026</p>

//           <div className="prose prose-invert prose-lg max-w-none mt-12">
//             <p className="text-xl text-gray-300 leading-9">{post.content}</p>
//           </div>

//           <div className="mt-16 border-t border-zinc-800 pt-8">
//             <h3 className="text-2xl font-bold mb-6">Share this article</h3>

//             <div className="flex gap-4">
//               <button className="bg-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-800">
//                 Twitter
//               </button>

//               <button className="bg-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-800">
//                 LinkedIn
//               </button>

//               <button className="bg-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-800">
//                 WhatsApp
//               </button>
//             </div>
//           </div>
//         </article>

//         <section className="max-w-6xl mx-auto px-6 pb-20">
//           <h2 className="text-3xl font-bold mb-8">
//             Related <span className="text-green-400">Posts</span>
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {relatedPosts.map((item) => (
//               <Link key={item.slug} href={`/blog/${item.slug}`}>
//                 <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-48 object-cover"
//                   />

//                   <div className="p-5">
//                     <h3 className="font-bold">{item.title}</h3>

//                     <p className="text-gray-400 mt-2 text-sm">{item.excerpt}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

// import { posts } from "@/data/posts";
// import { notFound } from "next/navigation";

// export default function BlogPost({ params }) {
//   const post = posts.find(
//     (p) => p.slug === params.slug
//   );

//   if (!post) {
//     notFound();
//   }

//   return (
//     <main className="max-w-4xl mx-auto px-6 py-20">

//       <h1 className="text-5xl font-bold mb-6">
//         {post.title}
//       </h1>

//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full rounded-3xl mb-10"
//       />

//       <article>
//         {post.content}
//       </article>

//     </main>
//   );
// }

// import { posts } from "@/data/posts";
// import { notFound } from "next/navigation";

// export default async function BlogPost({ params }) {
//   const { slug } = await params;

//   const post = posts.find(
//     (p) => p.slug === slug
//   );

//   if (!post) {
//     notFound();
//   }

//   return (
//     <main>
//       <h1>{post.title}</h1>
//     </main>
//   );
// }

import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { comparisons } from "@/data/comparisons";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
    <Navbar />
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <article>
            {/* Article Content */}
            <section className="max-w-5xl mx-auto px-6 pt-20">
              <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                {post.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex gap-4 text-gray-400 mt-6">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </section>

            {/* Featured Image */}
            <section className="max-w-6xl mx-auto px-6 mt-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </section>

            {/* Quick Summary */}
            <section className="max-w-4xl mx-auto px-6 mt-12">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>

                <p className="text-gray-300 leading-8">{post.excerpt}</p>
              </div>
            </section>

            {/* Article Content */}
            <section className="max-w-4xl mx-auto px-6 py-16">
              <article className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </article>
            </section>

            {/* Verdict */}
            <section className="max-w-4xl mx-auto px-6 mb-20">
              <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 border border-green-500 rounded-3xl p-10">
                <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>

                <p className="text-gray-300 leading-8">
                  EVs generally offer lower running and maintenance costs,
                  making them a smart long-term choice for high-mileage drivers.
                </p>
              </div>
            </section>

            {/* Related Articles */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
              <h2 className="text-4xl font-bold mb-10">Related Articles</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`}>
                    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-52 object-cover"
                      />

                      <div className="p-6">
                        <span className="text-green-400 text-sm">
                          {item.category}
                        </span>

                        <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside>


            
            {/* Sidebar */}

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden mt-20">

  <div className="px-6 py-5 border-b border-zinc-800">
    <h3 className="text-xl font-bold">
      🔥 Trending Articles
    </h3>
  </div>

  <div className="p-5 space-y-5">

    {posts.slice(0, 4).map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="block group"
      >

        <div className="flex gap-4">

          <div className="relative flex-shrink-0">

            <img
              src={post.image}
              alt={post.title}
              className="w-28 h-20 object-cover rounded-2xl"
            />

            <div className="absolute top-2 left-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              {post.category}
            </div>

          </div>

          <div>

            <h4 className="font-semibold leading-6 group-hover:text-green-400 transition line-clamp-2">
              {post.title}
            </h4>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

          </div>

        </div>

      </Link>
    ))}

  </div>

</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden mt-10">

  <div className="px-6 py-5 border-b border-zinc-800">
    <h3 className="text-xl font-bold">
      ⚡ Popular Comparisons
    </h3>
  </div>

  <div className="p-5 space-y-5">

    {comparisons.slice(0, 3).map((item) => (

      <Link
        key={item.slug}
        href={`/comparison/${item.slug}`}
        className="block group"
      >

        <div className="rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">

          <div className="grid grid-cols-2">

            <img
              src={item.image1}
              alt={item.car1}
              className="h-28 w-full object-cover"
            />

            <img
              src={item.image2}
              alt={item.car2}
              className="h-28 w-full object-cover"
            />

          </div>

          <div className="p-4">

            <h4 className="font-semibold group-hover:text-green-400 transition">
              {item.car1}
              <span className="text-green-400"> VS </span>
              {item.car2}
            </h4>

          </div>

        </div>

      </Link>

    ))}

  </div>

</div>

        

            <div className="bg-green-500/10 border border-green-500 rounded-3xl p-6 mt-10">
              <h3 className="text-xl font-bold mb-3">Subscribe</h3>

              <p className="text-gray-300 mb-4">
                Get latest EV news directly in your inbox.
              </p>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-black border border-zinc-700"
              />

              <button className="w-full mt-3 bg-green-500 text-black py-3 rounded-xl font-semibold">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
