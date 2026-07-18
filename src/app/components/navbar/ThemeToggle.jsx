"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  Sun,
  Moon,
} from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    if (!mounted) return;

    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title="Toggle Theme"
      className="
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
        border-theme
        bg-card
        transition-all
        duration-300
        hover:border-green-500
        hover:shadow-lg
        hover:shadow-green-500/20
        active:scale-95
      "
    >
      {/* Glow */}

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

      {!mounted ? (
        <div className="h-5 w-5" />
      ) : theme === "dark" ? (
        <Sun
          size={19}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:rotate-180
          "
        />
      ) : (
        <Moon
          size={19}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:-rotate-12
          "
        />
      )}
    </button>
  );
}