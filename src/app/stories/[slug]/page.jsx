import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { stories } from "../storiesData";

import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  BookOpen,
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found | EVInsights Hub",
    };
  }

  return {
    title: `${story.title} Story | EVInsights Hub`,

    description: story.excerpt,
  };
}

export default async function StoryPage({ params }) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-theme">

        <Image
          src={story.cover}
          alt={story.title}
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-background/80 to-background" />

        <div className="relative mx-auto max-w-5xl px-5 py-20">

          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-green-500 hover:underline"
          >
            <ArrowLeft size={18} />

            Back to Stories
          </Link>

          <span className="mt-8 inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500">
            {story.category}
          </span>

          <h1 className="mt-6 text-5xl font-black text-foreground">

            {story.title}

          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">

            {story.excerpt}

          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted">

            <div className="flex items-center gap-2">

              <Clock3 size={16} />

              {story.readTime}

            </div>

            <div className="flex items-center gap-2">

              <BookOpen size={16} />

              {story.slides.length} Slides

            </div>

          </div>

        </div>

      </section>

      {/* Story */}

      <section className="mx-auto max-w-5xl px-5 py-16">

        <div className="space-y-10">

          {story.slides.map((slide, index) => (

            <div
              key={slide.id}
              className="overflow-hidden rounded-3xl border border-theme bg-card shadow-theme"
            >

              <div className="relative aspect-[16/9]">

                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <span className="text-sm font-semibold text-green-500">

                  Slide {index + 1}

                </span>

                <h2 className="mt-3 text-3xl font-bold">

                  {slide.title}

                </h2>

                <p className="mt-5 text-lg leading-8 text-muted">

                  {slide.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-5 pb-24">

        <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-10 text-center">

          <h2 className="text-3xl font-bold">

            Want Complete Details?

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">

            Read our detailed review including complete
            specifications, charging, battery, range,
            features and buying advice.

          </p>

          <Link
            href={story.articleUrl}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Read Full Review

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>

    </main>
  );
}