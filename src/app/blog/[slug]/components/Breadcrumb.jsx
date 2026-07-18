import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

export default function Breadcrumb({
  category,
  title,
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">

        <li>

          <Link
            href="/"
            className="
              flex
              items-center
              gap-1
              transition
              hover:text-green-500
            "
          >
            <House size={16} />

            Home
          </Link>

        </li>

        <ChevronRight size={15} />

        <li>

          <Link
            href="/blog"
            className="transition hover:text-green-500"
          >
            Blog
          </Link>

        </li>

        <ChevronRight size={15} />

        <li>

          <Link
            href={`/blog/category/${category.slug}`}
            className="transition hover:text-green-500"
          >
            {category.name}
          </Link>

        </li>

        <ChevronRight size={15} />

        <li
          className="
            max-w-[240px]
            truncate
            font-medium
            text-foreground
          "
        >
          {title}
        </li>

      </ol>
    </nav>
  );
}