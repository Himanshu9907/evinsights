"use client";

import { Search } from "lucide-react";

export default function SearchButton({
  onClick,
  active = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open Search"
      title="Search EV Cars"
      className={`
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        transition-all
        duration-300
        active:scale-95

        ${
          active
            ? `
              border-green-500
              bg-green-500
              text-black
              shadow-lg
              shadow-green-500/30
            `
            : `
              border-theme
              bg-card
              text-foreground
              hover:border-green-500
              hover:text-green-500
            `
        }
      `}
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          inset-0
          bg-green-500/10
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <Search
        size={19}
        className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />
    </button>
  );
}