import {
  Newspaper,
  Zap,
  Search,
} from "lucide-react";

// export default function BlogHero() {
export default function BlogHero({ articleCount }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-theme
        bg-background
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          py-20
          lg:py-28
        "
      >
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-green-500/30
            bg-green-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-green-500
          "
        >
          <Zap size={16} />

          Latest Electric Vehicle Updates
        </div>

        {/* Heading */}

        <h1
          className="
            mt-6
            max-w-4xl
            text-4xl
            font-black
            leading-tight
            text-foreground
            md:text-5xl
            lg:text-6xl
          "
        >
          EV News,
          <span className="text-green-500">
            {" "}Reviews{" "}
          </span>
          &
          <span className="text-green-500">
            {" "}Buying Guides
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-muted
          "
        >
          Stay updated with the latest electric vehicle news,
          in-depth reviews, comparison articles, buying guides,
          battery technology updates and EV industry insights
          from India and around the world.
        </p>

        {/* Search */}

        <div
          className="
            mt-10
            max-w-2xl
          "
        >
          <div className="relative">

            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-muted
              "
            />

            <input
              type="text"
              placeholder="Search EV articles..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-theme
                bg-card
                pl-14
                pr-5
                text-foreground
                outline-none
                transition-all
                focus:border-green-500
                focus:ring-4
                focus:ring-green-500/10
              "
            />

          </div>
        </div>

        {/* Stats */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-3
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
            "
          >
            <Newspaper
              className="text-green-500"
              size={28}
            />

            {/* <h3
              className="
                mt-4
                text-3xl
                font-bold
              "
            >
              <h3 className="text-5xl font-black">
  {articleCount}
</h3>

<p className="mt-2 text-muted">
  {articleCount === 1 ? "EV Article" : "EV Articles"}
</p>
            </h3> */}

            <div className="mt-4">

  <h3 className="text-5xl font-black">
    {articleCount}
  </h3>

  <p className="mt-2 text-muted">
    {articleCount === 1 ? "EV Article" : "EV Articles"}
  </p>

</div>

          
          </div>

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
            "
          >
            <Zap
              className="text-green-500"
              size={28}
            />

            <h3
              className="
                mt-4
                text-3xl
                font-bold
              "
            >
              Daily
            </h3>

            <p className="mt-1 text-muted">
              News Updates
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-theme
              bg-card
              p-6
            "
          >
            <Search
              className="text-green-500"
              size={28}
            />

            <h3
              className="
                mt-4
                text-3xl
                font-bold
              "
            >
              Reviews
            </h3>

            <p className="mt-1 text-muted">
              Expert Buying Guides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}