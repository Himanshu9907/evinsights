import { User, CalendarDays } from "lucide-react";

export default function AuthorCard({ author, publishedAt }) {
  return (
    <section
      className="
        mt-14
        rounded-3xl
        border
        border-theme
        bg-card
        p-8
      "
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Avatar */}

        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-green-500/10
            text-green-500
          "
        >
          <User size={34} />
        </div>

        {/* Info */}

        <div className="flex-1">

          <p className="text-sm text-muted">
            Written by
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {author.name}
          </h3>

          <div
            className="
              mt-3
              flex
              flex-wrap
              items-center
              gap-4
              text-sm
              text-muted
            "
          >
            <div className="flex items-center gap-2">
              <CalendarDays size={15} />
              {new Date(publishedAt).toLocaleDateString("en-IN")}
            </div>
          </div>

          <p
            className="
              mt-5
              leading-8
              text-muted
            "
          >
            EV enthusiast and automotive content writer covering
            electric vehicle news, reviews, charging technology,
            ownership experience and buying guides.
          </p>

        </div>

      </div>
    </section>
  );
}