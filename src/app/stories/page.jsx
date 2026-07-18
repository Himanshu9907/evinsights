import { stories } from "./storiesData";

import StoryCard from "./StoryCard";

import Link from "next/link";

import {
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "EV Stories | EVInsights Hub",

  description:
    "Discover quick EV stories covering electric cars, launches, buying guides, reviews and EV news in India.",
};

export default function StoriesPage() {
  const featuredStory = stories.find((story) => story.featured);

  const otherStories = stories.filter((story) => !story.featured);

  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-theme">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-500">

              <Sparkles size={16} />

              EV STORIES

            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-foreground lg:text-7xl">

              Electric Vehicle
              <br />

              Stories

            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">

              Read quick visual stories covering electric cars,
              launches, reviews, buying guides, charging,
              battery technology and the future of EVs in India.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#stories"
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                Explore Stories

                <ArrowRight size={18} />

              </Link>

              <div className="inline-flex items-center gap-3 rounded-full border border-theme bg-card px-7 py-4">

                <BookOpen size={18} />

                <span>{stories.length} Stories</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Featured */}

      {featuredStory && (

        <section className="mx-auto max-w-7xl px-5 py-16">

          <div className="mb-8 flex items-center gap-3">

            <TrendingUp
              size={22}
              className="text-green-500"
            />

            <h2 className="text-3xl font-bold">

              Featured Story

            </h2>

          </div>

          <div className="max-w-md">

            <StoryCard story={featuredStory} />

          </div>

        </section>

      )}

      {/* Grid */}

      <section
        id="stories"
        className="mx-auto max-w-7xl px-5 pb-24"
      >

        <div className="mb-10">

          <h2 className="text-3xl font-bold">

            Latest Stories

          </h2>

          <p className="mt-2 text-muted">

            Explore quick visual stories about electric vehicles.

          </p>

        </div>

        <div
          className="
            grid
            gap-7
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          {otherStories.map((story) => (

            <StoryCard
              key={story.id}
              story={story}
            />

          ))}

        </div>

      </section>

    </main>
  );
}