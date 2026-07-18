import {
  Mail,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Newsletter() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-green-500/20
        bg-card
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          h-80
          w-80
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-8
          py-16
          lg:flex
          lg:items-center
          lg:justify-between
          lg:gap-16
        "
      >
        {/* Left */}

        <div className="max-w-2xl">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-green-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-green-500
            "
          >
            <Zap size={16} />

            Free Newsletter
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-foreground
            "
          >
            Never Miss An
            <span className="text-green-500">
              {" "}EV Update
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-muted
            "
          >
            Subscribe to EV Insights Hub and receive
            the latest electric vehicle news,
            launches, comparisons,
            battery technology updates,
            government subsidy news,
            and buying guides directly
            in your inbox.
          </p>

          {/* Benefits */}

          <div
            className="
              mt-8
              grid
              gap-3
              sm:grid-cols-2
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "
              />

              Latest EV News

            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "
              />

              New Car Launches

            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "
              />

              Buying Guides

            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "
              />

              Comparison Articles

            </div>

          </div>

        </div>

        {/* Right */}

        <div
          className="
            mt-12
            rounded-3xl
            border
            border-theme
            bg-background
            p-8
            lg:mt-0
            lg:w-[420px]
          "
        >

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-green-500
              text-black
            "
          >
            <Mail size={28} />
          </div>

          <h3
            className="
              mt-6
              text-2xl
              font-bold
            "
          >
            Join 10,000+
            EV Enthusiasts
          </h3>

          <p
            className="
              mt-3
              text-muted
              leading-7
            "
          >
            Weekly newsletter.
            No spam.
            Unsubscribe anytime.
          </p>

          <form className="mt-8">

            <input
              type="email"
              placeholder="Enter your email"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-theme
                bg-card
                px-4
                outline-none
                transition
                focus:border-green-500
              "
            />

            <button
              type="submit"
              className="
                mt-4
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-500
                font-semibold
                text-black
                transition
                hover:scale-[1.02]
              "
            >
              Subscribe Now

              <ArrowRight size={18} />

            </button>

          </form>

          <p
            className="
              mt-5
              text-center
              text-xs
              text-muted
            "
          >
            🔒 Your email is safe with us.
          </p>

        </div>

      </div>

    </section>
  );
}