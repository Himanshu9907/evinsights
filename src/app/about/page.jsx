// import Link from "next/link";


// export const metadata = {
//   title: "About Us",
//   description:
//     "Learn more about EV Insights Hub, your trusted source for electric vehicle news, reviews and comparisons.",
// };

// export default function AboutPage() {
//   return (
//     <>
    
//     <main className="bg-black text-white min-h-screen pt-20">

//       {/* Hero Section */}
//       <section className="relative overflow-hidden border-b border-zinc-800">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

//         <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">
//           <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
//             About EV Insights Hub
//           </span>

//           <h1 className="text-5xl md:text-6xl font-bold mt-8">
//             Driving the Future of
//             <span className="text-green-400"> Electric Mobility</span>
//           </h1>

//           <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
//             EV Insights Hub provides the latest electric vehicle news,
//             detailed reviews, charging guides, battery technology updates,
//             and EV comparisons to help users make informed decisions.
//           </p>
//         </div>
//       </section>

//       {/* Mission */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h2 className="text-4xl font-bold mb-6">
//               Our Mission
//             </h2>

//             <p className="text-gray-400 leading-8 text-lg">
//               Our mission is to make electric vehicle information simple,
//               reliable and accessible for everyone. Whether you are buying
//               your first EV, comparing models, or staying updated with
//               industry trends, EV Insights Hub helps you stay informed.
//             </p>
//           </div>

//           <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
//             <h3 className="text-2xl font-bold text-green-400">
//               What We Cover
//             </h3>

//             <ul className="mt-6 space-y-4 text-gray-300">
//               <li>⚡ EV News & Industry Updates</li>
//               <li>🚗 Electric Car Reviews</li>
//               <li>🔋 Battery Technology</li>
//               <li>⚙️ Charging Guides</li>
//               <li>📊 EV Comparisons</li>
//               <li>💰 Buying Guides</li>
//             </ul>
//           </div>

//         </div>
//       </section>

//       {/* Stats */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
//             <h3 className="text-4xl font-bold text-green-400">100+</h3>
//             <p className="text-gray-400 mt-3">Articles</p>
//           </div>

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
//             <h3 className="text-4xl font-bold text-green-400">50+</h3>
//             <p className="text-gray-400 mt-3">EV Reviews</p>
//           </div>

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
//             <h3 className="text-4xl font-bold text-green-400">25+</h3>
//             <p className="text-gray-400 mt-3">Comparisons</p>
//           </div>

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
//             <h3 className="text-4xl font-bold text-green-400">1000+</h3>
//             <p className="text-gray-400 mt-3">Monthly Readers</p>
//           </div>

//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Why Trust EV Insights Hub?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
//             <h3 className="text-2xl font-bold mb-4">
//               Accurate Information
//             </h3>

//             <p className="text-gray-400">
//               We focus on delivering verified and easy-to-understand EV content.
//             </p>
//           </div>

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
//             <h3 className="text-2xl font-bold mb-4">
//               Detailed Comparisons
//             </h3>

//             <p className="text-gray-400">
//               Compare vehicles side-by-side with detailed specifications.
//             </p>
//           </div>

//           <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
//             <h3 className="text-2xl font-bold mb-4">
//               Future Focused
//             </h3>

//             <p className="text-gray-400">
//               Stay updated with EV technology, batteries and charging trends.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="max-w-5xl mx-auto px-6 pb-24">
//         <div className="bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30 rounded-3xl p-12 text-center">

//           <h2 className="text-4xl font-bold">
//             Join the EV Revolution
//           </h2>

//           <p className="text-gray-400 mt-6 text-lg">
//             Explore our latest articles, comparisons and EV guides.
//           </p>

//           <Link
//             href="/blog"
//             className="inline-block mt-8 bg-green-500 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
//           >
//             Explore Articles
//           </Link>

//         </div>
//       </section>

//     </main>


//     </>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CarFront,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "About EVInsights Hub | India's Electric Vehicle Platform",

  description:
    "Learn more about EVInsights Hub, our mission, editorial standards, EV reviews, buying guides, comparisons and commitment to providing trusted electric vehicle information.",

  keywords: [
    "EVInsights Hub",
    "About EVInsights",
    "Electric Vehicle India",
    "EV Reviews",
    "EV Comparison",
    "EV Buying Guide",
    "Electric Cars",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-theme">

        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />

        <div className="relative mx-auto max-w-7xl px-4 py-24">

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-green-500
            "
            >
              India's Growing Electric Vehicle Knowledge Platform
            </span>

            <h1
              className="
              mt-8
              text-5xl
              font-black
              leading-tight
              md:text-6xl
            "
            >
              About
              <span className="text-green-500">
                {" "}
                EVInsights Hub
              </span>
            </h1>

            <p
              className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-muted
            "
            >
              EVInsights Hub is an independent electric vehicle
              information platform dedicated to helping Indian
              buyers make smarter decisions through trusted reviews,
              detailed specifications, EV comparisons, buying
              guides, charging knowledge and industry updates.
            </p>

            <div
              className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-4
            "
            >
              <Link
                href="/ev"
                className="
                rounded-xl
                bg-green-500
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
              >
                Explore EV Cars
              </Link>

              <Link
                href="/comparison"
                className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-theme
                px-8
                py-4
                font-semibold
                transition
                hover:bg-card
              "
              >
                Compare Cars

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </section>

            {/* OUR STORY */}

      <section className="mx-auto max-w-7xl px-4 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-green-500">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Built for India's
              <span className="text-green-500">
                {" "}Electric Future
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-muted">
              Electric vehicles are transforming the Indian automobile
              industry. Every month new EVs, charging technologies,
              batteries and features are introduced, making buying
              decisions more confusing than ever.
            </p>

            <p className="mt-6 text-lg leading-9 text-muted">
              EVInsights Hub was created with one simple goal —
              provide reliable, easy-to-understand and unbiased
              information so every buyer can confidently choose the
              right electric vehicle.
            </p>

            <p className="mt-6 text-lg leading-9 text-muted">
              Instead of overwhelming readers with marketing claims,
              we focus on practical information such as real-world
              range, charging, ownership costs, specifications,
              features and detailed comparisons.
            </p>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            <div className="rounded-3xl border border-theme bg-card p-8">

              <CarFront className="mb-5 text-green-500" size={34} />

              <h3 className="text-2xl font-bold">
                Independent Reviews
              </h3>

              <p className="mt-4 leading-8 text-muted">
                We publish detailed reviews covering performance,
                battery, charging, comfort, safety, ownership cost
                and practical usability instead of promotional
                marketing content.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-card p-8">

              <Zap className="mb-5 text-green-500" size={34} />

              <h3 className="text-2xl font-bold">
                EV Buying Guides
              </h3>

              <p className="mt-4 leading-8 text-muted">
                Whether you're buying your first EV or upgrading to
                a premium electric SUV, our buying guides simplify
                every decision with easy explanations and comparisons.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-card p-8">

              <ShieldCheck
                className="mb-5 text-green-500"
                size={34}
              />

              <h3 className="text-2xl font-bold">
                Trusted Information
              </h3>

              <p className="mt-4 leading-8 text-muted">
                Accuracy matters. We continuously review and update
                specifications, pricing, charging information and
                features so readers always receive the latest
                available information.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-2">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h3 className="text-3xl font-black">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-9 text-muted">
              Our mission is to make electric vehicle information
              simple, transparent and accessible for everyone.
              We aim to help buyers compare vehicles confidently,
              understand EV technology and choose the right car
              without confusion.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h3 className="text-3xl font-black">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-9 text-muted">
              We envision EVInsights Hub becoming one of India's
              most trusted electric vehicle knowledge platforms,
              helping millions of readers stay informed about EVs,
              charging infrastructure, battery technology and the
              future of sustainable mobility.
            </p>

          </div>

        </div>

      </section>

            {/* WHY TRUST EVINSIGHTS HUB */}

      <section className="mx-auto max-w-7xl px-4 py-24">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Why Trust Us
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Why Readers Trust
            <span className="text-green-500">
              {" "}EVInsights Hub
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-muted">
            Every article published on EVInsights Hub is created with
            accuracy, transparency and practicality in mind. We focus
            on helping readers make informed EV buying decisions rather
            than promoting any particular manufacturer.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <h3 className="text-xl font-bold">
              Verified Specifications
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Vehicle specifications are researched from official
              manufacturer sources and verified before publishing.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <h3 className="text-xl font-bold">
              Honest Reviews
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Reviews focus on practical ownership, real-world range,
              comfort, charging and usability instead of marketing
              language.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <h3 className="text-xl font-bold">
              Regular Updates
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Specifications, pricing and features are updated whenever
              significant changes are announced.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <h3 className="text-xl font-bold">
              Buyer Focused
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Our content is written to answer the questions real
              buyers ask before purchasing an electric vehicle.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <h3 className="text-xl font-bold">
              Comparison Driven
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Side-by-side comparisons help readers understand which EV
              delivers better value for their needs and budget.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <h3 className="text-xl font-bold">
              Independent Platform
            </h3>

            <p className="mt-4 leading-8 text-muted">
              EVInsights Hub is committed to providing informative,
              research-based content designed to educate readers about
              electric mobility.
            </p>

          </div>

        </div>

      </section>

      {/* WHAT WE COVER */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-7xl px-4 py-24">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-500">
              What We Cover
            </span>

            <h2 className="mt-4 text-4xl font-black">
              Everything You Need To Know About EVs
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-theme bg-background p-8">
              <h3 className="text-xl font-bold">EV Reviews</h3>
              <p className="mt-4 leading-8 text-muted">
                Detailed reviews covering performance, battery,
                charging, comfort and ownership.
              </p>
            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <h3 className="text-xl font-bold">EV Comparisons</h3>
              <p className="mt-4 leading-8 text-muted">
                Compare electric cars side-by-side to identify the best
                option for your budget.
              </p>
            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <h3 className="text-xl font-bold">Buying Guides</h3>
              <p className="mt-4 leading-8 text-muted">
                Beginner-friendly guides that simplify electric vehicle
                buying decisions.
              </p>
            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <h3 className="text-xl font-bold">Charging Guides</h3>
              <p className="mt-4 leading-8 text-muted">
                Learn AC charging, DC fast charging, home charging and
                charging infrastructure.
              </p>
            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <h3 className="text-xl font-bold">Latest EV News</h3>
              <p className="mt-4 leading-8 text-muted">
                Stay updated with the newest launches, battery
                technology and industry developments.
              </p>
            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <h3 className="text-xl font-bold">Specifications</h3>
              <p className="mt-4 leading-8 text-muted">
                Explore complete specifications, dimensions, range,
                charging and safety information.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PLATFORM STATS */}

      <section className="mx-auto max-w-7xl px-4 py-24">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-theme bg-card p-10 text-center">
            <h3 className="text-5xl font-black text-green-500">100+</h3>
            <p className="mt-4 font-medium text-muted">
              Electric Vehicles Covered
            </p>
          </div>

          <div className="rounded-3xl border border-theme bg-card p-10 text-center">
            <h3 className="text-5xl font-black text-green-500">500+</h3>
            <p className="mt-4 font-medium text-muted">
              Specifications Verified
            </p>
          </div>

          <div className="rounded-3xl border border-theme bg-card p-10 text-center">
            <h3 className="text-5xl font-black text-green-500">100+</h3>
            <p className="mt-4 font-medium text-muted">
              Buying Guides & Reviews
            </p>
          </div>

          <div className="rounded-3xl border border-theme bg-card p-10 text-center">
            <h3 className="text-5xl font-black text-green-500">24×7</h3>
            <p className="mt-4 font-medium text-muted">
              Information Available
            </p>
          </div>

        </div>

      </section>

            {/* EDITORIAL PROCESS */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-7xl px-4 py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-500">
              Editorial Process
            </span>

            <h2 className="mt-4 text-4xl font-black">
              How We Create Every Article
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted">
              Every article on EVInsights Hub follows a structured
              editorial workflow to maintain accuracy, consistency and
              trustworthiness.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-theme bg-background p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white">
                1
              </div>

              <h3 className="text-xl font-bold">
                Research
              </h3>

              <p className="mt-4 leading-8 text-muted">
                We collect specifications, pricing and feature details
                from reliable manufacturer sources.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white">
                2
              </div>

              <h3 className="text-xl font-bold">
                Verification
              </h3>

              <p className="mt-4 leading-8 text-muted">
                Data is checked and reviewed before being published to
                minimize inaccuracies.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white">
                3
              </div>

              <h3 className="text-xl font-bold">
                Editorial Review
              </h3>

              <p className="mt-4 leading-8 text-muted">
                Articles are edited for clarity, readability and
                practical usefulness for EV buyers.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-background p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white">
                4
              </div>

              <h3 className="text-xl font-bold">
                Continuous Updates
              </h3>

              <p className="mt-4 leading-8 text-muted">
                Content is updated whenever significant pricing,
                specifications or feature changes are announced.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Common Questions
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          <div className="rounded-2xl border border-theme bg-card p-8">
            <h3 className="text-xl font-bold">
              Is EVInsights Hub affiliated with any automobile manufacturer?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              No. EVInsights Hub is an independent platform focused on
              providing educational content, reviews and buying
              guidance related to electric vehicles.
            </p>
          </div>

          <div className="rounded-2xl border border-theme bg-card p-8">
            <h3 className="text-xl font-bold">
              How often is the information updated?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              We regularly review and update articles whenever official
              specifications, pricing or features change.
            </p>
          </div>

          <div className="rounded-2xl border border-theme bg-card p-8">
            <h3 className="text-xl font-bold">
              What type of content does EVInsights Hub publish?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              We publish EV reviews, comparisons, buying guides,
              charging guides, ownership information, news and detailed
              vehicle specifications.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-theme">

        <div className="mx-auto max-w-5xl px-4 py-24 text-center">

          <h2 className="text-4xl font-black">
            Join Thousands of EV Enthusiasts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted">
            Whether you're buying your first electric vehicle or simply
            staying informed about the latest EV technology,
            EVInsights Hub is committed to delivering trusted,
            practical and easy-to-understand information for every
            reader.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/ev"
              className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore EV Cars
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-theme px-8 py-4 font-semibold transition hover:bg-card"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}