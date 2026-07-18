import { prisma } from "@/lib/prisma";

import BlogHero from "./components/BlogHero";
import FeaturedArticle from "./components/FeaturedArticle";
import BlogGrid from "./components/BlogGrid";
import BlogSidebar from "./components/BlogSidebar";
import Newsletter from "./components/Newsletter";
import EmptyState from "./components/EmptyState";

export const metadata = {
  title: "EV News, Reviews & Buying Guides",
  description:
    "Latest Electric Vehicle news, reviews, comparisons and buying guides from EV Insights Hub.",
};

export default async function BlogPage() {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },

    include: {
      author: true,
      category: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  const articleCount = articles.length;

  if (!articles.length) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <BlogHero articleCount={articleCount} />
        <EmptyState />
      </main>
    );
  }

  const featured = articles[0];

  const latest = articles.slice(1);

  return (
    <main className="bg-background text-foreground min-h-screen">

      <BlogHero articleCount={articleCount} />

      <section className="mx-auto max-w-7xl px-4 py-12">

        <FeaturedArticle article={featured} />

      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 lg:grid-cols-12">

        {/* Blog */}

        <div className="lg:col-span-8">

          <BlogGrid articles={latest} />

        </div>

        {/* Sidebar */}

        <aside className="lg:col-span-4">

          <BlogSidebar
            latest={articles.slice(0, 5)}
          />

        </aside>

      </section>

      <Newsletter />

    </main>
  );
}


// import { prisma } from "@/lib/prisma";
// import BlogClient from "./BlogClient";

// export const metadata = {
//   title: "EV News, Reviews & Buying Guides | EV Insights Hub",
//   description:
//     "Latest Electric Vehicle news, reviews, buying guides and industry updates from EV Insights Hub.",
// };

// export default async function BlogPage() {
//   const articles = await prisma.article.findMany({
//     where: {
//       published: true,
//     },

//     include: {
//       author: true,
//       category: true,
//     },

//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return <BlogClient articles={articles} />;
// }