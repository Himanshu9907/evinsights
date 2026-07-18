import Link from "next/link";
import Image from "next/image";

export default function RelatedArticles({ articles }) {
  if (!articles.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 border-t border-theme">

      <h2 className="mb-10 text-3xl font-bold">
        Related Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group overflow-hidden rounded-2xl border border-theme bg-card transition hover:-translate-y-1 hover:border-green-500"
          >

            <div className="relative aspect-[16/9]">

              <Image
                src={article.image || "/ev-car.jpg"}
                alt={article.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />

            </div>

            <div className="p-5">

              <h3 className="line-clamp-2 text-xl font-bold group-hover:text-green-500">

                {article.title}

              </h3>

              <p className="mt-3 line-clamp-3 text-sm text-muted">

                {article.excerpt}

              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}