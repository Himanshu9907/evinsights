"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Clock3,
  Images,
} from "lucide-react";

export default function StoryCard({ story }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        border
        border-theme
        bg-card
        shadow-theme
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-green-500
        hover:shadow-[0_25px_60px_rgba(34,197,94,.15)]
      "
    >
      {/* Image */}

      <div className="relative aspect-[9/16] overflow-hidden">

        <Image
          src={story.cover}
          alt={story.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Category */}

        <div className="absolute left-4 top-4">

          <span
            className="
              rounded-full
              bg-green-500
              px-3
              py-1
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-black
            "
          >
            {story.category}
          </span>

        </div>

        {/* Featured */}

        {story.featured && (

          <div className="absolute right-4 top-4">

            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-1
                text-xs
                font-semibold
                text-white
                backdrop-blur-md
              "
            >
              Featured
            </span>

          </div>

        )}

        {/* Content */}

        <div className="absolute inset-x-0 bottom-0 p-5">

          <h3
            className="
              text-2xl
              font-black
              leading-tight
              text-white
            "
          >
            {story.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-white/80
            "
          >
            {story.excerpt}
          </p>

        </div>

      </div>

      {/* Footer */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-theme
          px-5
          py-4
        "
      >
        <div className="flex items-center gap-5">

          <div className="flex items-center gap-2 text-muted">

            <Clock3 size={16} />

            <span className="text-sm">
              {story.readTime}
            </span>

          </div>

          <div className="flex items-center gap-2 text-muted">

            <Images size={16} />

            <span className="text-sm">
              {story.slides.length} Slides
            </span>

          </div>

        </div>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-green-500/10
            text-green-500
            transition-all
            duration-300
            group-hover:rotate-45
            group-hover:bg-green-500
            group-hover:text-black
          "
        >
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-12
          -top-12
          h-40
          w-40
          rounded-full
          bg-green-500/10
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
          "
        />
    </Link>
  );
}