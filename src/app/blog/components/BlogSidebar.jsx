import Link from "next/link";
import Image from "next/image";

import {
  Search,
  TrendingUp,
  Newspaper,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

export default async function BlogSidebar({
  latest,
}) {
  const categories =
    await prisma.category.findMany({
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
    });

  return (
    <div
      className="
        space-y-8
        lg:sticky
        lg:top-24
      "
    >
      {/* Search */}

      <div
        className="
          rounded-3xl
          border
          border-theme
          bg-card
          p-6
        "
      >
        <h3
          className="
            mb-5
            text-xl
            font-bold
          "
        >
          Search Articles
        </h3>

        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-muted
            "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-theme
              bg-background
              pl-11
              pr-4
              outline-none
              focus:border-green-500
            "
          />

        </div>

      </div>

      {/* Categories */}

      <div
        className="
          rounded-3xl
          border
          border-theme
          bg-card
          p-6
        "
      >
        <div className="mb-5 flex items-center gap-2">

          <Newspaper
            size={20}
            className="text-green-500"
          />

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Categories
          </h3>

        </div>

        <div className="space-y-3">

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-theme
                px-4
                py-3
                transition
                hover:border-green-500
                hover:bg-background
              "
            >
              <span>
                {category.name}
              </span>

              <span
                className="
                  rounded-full
                  bg-green-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-green-500
                "
              >
                {category._count.articles}
              </span>

            </Link>
          ))}

        </div>

      </div>

      {/* Latest */}

      <div
        className="
          rounded-3xl
          border
          border-theme
          bg-card
          p-6
        "
      >
        <div className="mb-5 flex items-center gap-2">

          <TrendingUp
            size={20}
            className="text-green-500"
          />

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Latest Posts
          </h3>

        </div>

        <div className="space-y-5">

          {latest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="
                group
                flex
                gap-4
              "
            >
              <div
                className="
                  relative
                  h-20
                  w-28
                  overflow-hidden
                  rounded-xl
                  flex-shrink-0
                "
              >
                <Image
                  src={
                    post.image ||
                    "/ev-car.jpg"
                  }
                  alt={post.title}
                  fill
                  className="
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <div>

                <h4
                  className="
                    line-clamp-2
                    font-semibold
                    transition
                    group-hover:text-green-500
                  "
                >
                  {post.title}
                </h4>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-muted
                  "
                >
                  <CalendarDays
                    size={13}
                  />

                  {new Date(
                    post.createdAt
                  ).toLocaleDateString(
                    "en-IN"
                  )}

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

      {/* Newsletter */}

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-green-500/30
          bg-gradient-to-br
          from-green-500/10
          to-transparent
          p-6
        "
      >
        <h3
          className="
            text-2xl
            font-bold
          "
        >
          Stay Updated
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-muted
          "
        >
          Get the latest EV news,
          launches and buying guides
          directly in your inbox.
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="
            mt-5
            h-11
            w-full
            rounded-xl
            border
            border-theme
            bg-background
            px-4
            outline-none
            focus:border-green-500
          "
        />

        <button
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-500
            py-3
            font-semibold
            text-black
            transition
            hover:scale-[1.02]
          "
        >
          Subscribe

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}