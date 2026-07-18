import Link from "next/link";
import {
  Search,
  Folder,
  Clock3,
  ArrowRight,
} from "lucide-react";
import TableOfContents from "./TableOfContents";

export default function ArticleSidebar({
  latest,
  categories,
  headings,
}) {
  return (
    <aside
      className="
        space-y-8
        lg:sticky
        lg:top-24
      "
    >
      {/* Search */}

      <div className="rounded-3xl border border-theme bg-card p-6">

        <h3 className="mb-5 text-xl font-bold">

          Search

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
            placeholder="Search articles..."
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

      <TableOfContents headings={headings} />

      {/* Categories */}

      <div className="rounded-3xl border border-theme bg-card p-6">

        <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

          <Folder
            size={18}
            className="text-green-500"
          />

          Categories

        </h3>

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
              "
            >

              <span>

                {category.name}

              </span>

              <span
                className="
                  rounded-full
                  bg-green-500/10
                  px-2
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

      <div className="rounded-3xl border border-theme bg-card p-6">

        <h3 className="mb-5 text-xl font-bold">

          Latest Articles

        </h3>

        <div className="space-y-5">

          {latest.map((article) => (

            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="block group"
            >

              <h4
                className="
                  font-semibold
                  transition
                  group-hover:text-green-500
                  line-clamp-2
                "
              >
                {article.title}
              </h4>

              <div className="mt-2 flex items-center gap-2 text-sm text-muted">

                <Clock3 size={14} />

                {new Date(article.createdAt).toLocaleDateString("en-IN")}

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* Newsletter */}

      <div
        className="
          rounded-3xl
          border
          border-green-500/30
          bg-gradient-to-br
          from-green-500/10
          to-transparent
          p-6
        "
      >

        <h3 className="text-2xl font-bold">

          Stay Updated

        </h3>

        <p className="mt-3 text-sm leading-7 text-muted">

          Subscribe to receive EV news,
          reviews and buying guides.

        </p>

        <input
          type="email"
          placeholder="Your email"
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

    </aside>
  );
}