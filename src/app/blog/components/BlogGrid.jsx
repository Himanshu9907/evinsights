import BlogCard from "./BlogCard";

export default function BlogGrid({
  articles,
}) {
  if (!articles || articles.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-theme
          bg-card
          p-16
          text-center
        "
      >
        <h3
          className="
            text-2xl
            font-bold
            text-foreground
          "
        >
          No Articles Found
        </h3>

        <p
          className="
            mt-3
            text-muted
          "
        >
          Please check back later.
        </p>
      </div>
    );
  }

  return (
    <section>

      {/* Heading */}

      <div
        className="
          mb-8
          flex
          items-center
          justify-between
        "
      >
        <div>

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-green-500
            "
          >
            Latest Articles
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-black
              text-foreground
            "
          >
            Recent EV Stories
          </h2>

        </div>

      </div>

      {/* Grid */}

      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

    </section>
  );
}