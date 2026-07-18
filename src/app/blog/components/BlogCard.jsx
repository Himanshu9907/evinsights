import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  Clock3,
  ArrowRight,
  User,
} from "lucide-react";

export default function BlogCard({ article }) {
  const formattedDate = new Date(
    article.createdAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-theme
        bg-card
        shadow-theme
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-500/40
      "
    >
      {/* Image */}

      <Link
        href={`/blog/${article.slug}`}
        className="block"
      >
        <div
          className="
            relative
            h-56
            overflow-hidden
          "
        >
          <Image
            src={article.image || "/ev-car.jpg"}
            alt={article.title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent
            "
          />

          {/* Category */}

          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-green-500
              px-3
              py-1.5
              text-xs
              font-bold
              text-black
            "
          >
            {article.category.name}
          </span>
        </div>
      </Link>

      {/* Content */}

      <div className="p-6">

        {/* Meta */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-4
            text-xs
            text-muted
          "
        >
          <span className="flex items-center gap-1">

            <CalendarDays size={14} />

            {formattedDate}

          </span>

          <span className="flex items-center gap-1">

            <Clock3 size={14} />

            {article.readTime || 5} min

          </span>

          <span className="flex items-center gap-1">

            <User size={14} />

            {article.author.name}

          </span>
        </div>

        {/* Title */}

        <Link
          href={`/blog/${article.slug}`}
        >
          <h3
            className="
              mt-5
              line-clamp-2
              text-xl
              font-bold
              leading-snug
              text-foreground
              transition-colors
              duration-300
              group-hover:text-green-500
            "
          >
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}

        <p
          className="
            mt-4
            line-clamp-3
            text-sm
            leading-7
            text-muted
          "
        >
          {article.excerpt}
        </p>

        {/* Footer */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <Link
            href={`/blog/${article.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-green-500
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            Read Article

            <ArrowRight size={16} />
          </Link>

          <div
            className="
              rounded-full
              bg-green-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-green-500
              "
            >
              EV Insights
        
          </div>
        </div>

      </div>
    </article>
  );
}