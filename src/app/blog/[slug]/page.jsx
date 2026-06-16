import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28">
        <div className="mb-6">
          <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
            EV News
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400">
          <span>👤 EV Insights Team</span>

          <span>📅 June 14, 2026</span>

          <span>⏱️ 5 min read</span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover rounded-3xl mt-10"
        />
      </div>

      <main className="bg-black text-white min-h-screen pt-24">
        <article className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/" className="text-green-400">
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold mt-6">{post.title}</h1>

          <p className="text-gray-400 mt-4">Published on June 11, 2026</p>

          <div className="prose prose-invert prose-lg max-w-none mt-12">
            <p className="text-xl text-gray-300 leading-9">{post.content}</p>
          </div>

          <div className="mt-16 border-t border-zinc-800 pt-8">
            <h3 className="text-2xl font-bold mb-6">Share this article</h3>

            <div className="flex gap-4">
              <button className="bg-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-800">
                Twitter
              </button>

              <button className="bg-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-800">
                LinkedIn
              </button>

              <button className="bg-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-800">
                WhatsApp
              </button>
            </div>
          </div>
        </article>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            Related <span className="text-green-400">Posts</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`}>
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold">{item.title}</h3>

                    <p className="text-gray-400 mt-2 text-sm">{item.excerpt}</p>
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
