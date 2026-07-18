"use client";

import { useEffect, useRef, useState } from "react";

import { Search, X } from "lucide-react";

import SearchDropdown from "./SearchDropdown";

export default function MobileSearch({
  open,
  onClose,
}) {
  const searchRef = useRef(null);

  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  // ===============================
  // Close on ESC
  // ===============================

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleKey
      );
  }, [onClose]);

  // ===============================
  // Debounce Search
  // ===============================

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );

        const data = await res.json();

        setResults(data);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // ===============================
  // Hide
  // ===============================

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/50
        backdrop-blur-md
        lg:hidden
      "
    >
      <div
        className="
          bg-background
          p-4
        "
      >
        {/* Search Header */}

        <div className="flex items-center gap-3">

          <div
            ref={searchRef}
            className="relative flex-1"
          >
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-muted
              "
            />

            <input
              autoFocus
              type="text"
              placeholder="Search EV Cars..."
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              className="
                h-12
                w-full
                rounded-xl
                border
                border-theme
                bg-card
                pl-11
                pr-10
                outline-none
                focus:border-green-500
              "
            />

            {loading && (
              <div
                className="
                  absolute
                  right-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  animate-spin
                  rounded-full
                  border-2
                  border-green-500
                  border-t-transparent
                "
              />
            )}

            {results.length > 0 && (
              <SearchDropdown
                loading={loading}
                query={query}
                results={results}
                onClose={() => {
                  onClose();
                  setQuery("");
                }}
              />
            )}
          </div>

          {/* Close */}

          <button
            onClick={onClose}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-theme
              bg-card
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* Popular Searches */}

        <div className="mt-6">

          <p className="mb-3 text-xs text-muted">
            Popular Searches
          </p>

          <div className="flex flex-wrap gap-2">

            {[
              "Tata Curvv EV",
              "Nexon EV",
              "Mahindra BE 6",
              "Hyundai Creta Electric",
              "BYD Seal",
              "MG Windsor EV",
            ].map((item) => (

              <button
                key={item}
                onClick={() =>
                  setQuery(item)
                }
                className="
                  rounded-full
                  border
                  border-theme
                  bg-card
                  px-4
                  py-2
                  text-sm
                  transition
                  hover:border-green-500
                  hover:text-green-500
                "
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}