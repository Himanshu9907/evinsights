import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function PreviousNextArticle({
  previous,
  next,
}) {
  if (!previous && !next) return null;

  return (
    <section className="mt-16 border-t border-theme pt-10">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Previous */}

        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="
              group
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
              transition
              hover:border-green-500
            "
          >
            <div className="flex items-center gap-2 text-sm text-muted">

              <ArrowLeft size={16} />

              Previous Article

            </div>

            <h3
              className="
                mt-3
                text-lg
                font-bold
                transition
                group-hover:text-green-500
              "
            >
              {previous.title}
            </h3>

          </Link>
        ) : (
          <div />
        )}

        {/* Next */}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="
              group
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
              text-right
              transition
              hover:border-green-500
            "
          >
            <div
              className="
                flex
                items-center
                justify-end
                gap-2
                text-sm
                text-muted
              "
            >
              Next Article

              <ArrowRight size={16} />

            </div>

            <h3
              className="
                mt-3
                text-lg
                font-bold
                transition
                group-hover:text-green-500
              "
            >
              {next.title}
            </h3>

          </Link>
        ) : (
          <div />
        )}

      </div>

    </section>
  );
}