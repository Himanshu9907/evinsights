import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import BlogArticle from "./components/BlogArticle";
import RelatedArticles from "./components/RelatedArticles";
import ArticleSidebar from "./components/ArticleSidebar";
import ReadingProgress from "./components/ReadingProgress";
import PreviousNextArticle from "./components/PreviousNextArticle";
import RelatedEVCars from "./components/RelatedEVCars";
import PopularComparisons from "./components/PopularComparisons";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = await prisma.article.findUnique({
    where: {
      slug,
    },
    include: {
      author: true,
      category: true,
    },
  });

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const image = article.image || "/ev-car.jpg";

  return {
    title: article.title,
    description: article.excerpt,

    keywords: [
      article.category.name,
      "Electric Vehicle",
      "EV News",
      "EV Review",
      "EV Buying Guide",
      article.title,
    ],

    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [image],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const [article, latestArticles, categories, relatedCars, comparisons] =
    await Promise.all([
      prisma.article.findUnique({
        where: {
          slug,
        },
        include: {
          author: true,
          category: true,
        },
      }),

      prisma.article.findMany({
        where: {
          published: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),

      prisma.category.findMany({
        include: {
          _count: {
            select: {
              articles: {
                where: {
                  published: true,
                },
              },
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      }),

      prisma.eVModel.findMany({
        where: {
          featured: true,
        },

        include: {
          brand: true,
        },

        take: 3,
      }),

      prisma.eVComparison.findMany({
        where: {
          featured: true,
        },
        include: {
          vehicles: {
            include: {
              vehicle: true,
            },
            orderBy: {
              order: "asc",
            },
          },
        },
        take: 2,
      }),
    ]);

  if (!article) {
    notFound();
  }

  const headings = [];

  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;

  let match;

  while ((match = regex.exec(article.content)) !== null) {
    headings.push(match[1].replace(/<[^>]+>/g, ""));
  }

  const relatedArticles = await prisma.article.findMany({
    where: {
      published: true,

      categoryId: article.categoryId,

      slug: {
        not: article.slug,
      },
    },

    take: 3,

    orderBy: {
      createdAt: "desc",
    },
  });

  const previous = await prisma.article.findFirst({
    where: {
      published: true,
      createdAt: {
        lt: article.createdAt,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const next = await prisma.article.findFirst({
    where: {
      published: true,
      createdAt: {
        gt: article.createdAt,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  console.log("Comparisons:", comparisons.length);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <ReadingProgress />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Main Article */}

          <div className="lg:col-span-8">
            <BlogArticle article={article} previous={previous} next={next} />
          </div>

          {/* Sidebar */}

          <div className="lg:col-span-4">
            <ArticleSidebar
              latest={latestArticles}
              categories={categories}
              headings={headings}
            />
          </div>
        </div>
      </section>

      <RelatedEVCars cars={relatedCars} />

      <PopularComparisons comparisons={comparisons} />

      <RelatedArticles articles={relatedArticles} />
    </main>
  );
}
