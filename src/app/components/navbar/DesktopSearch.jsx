"use client";

import { useEffect, useRef, useState } from "react";

import { Search } from "lucide-react";

import SearchDropdown from "./SearchDropdown";

export default function DesktopSearch() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const searchRef = useRef(null);

  // ===========================
  // Outside Click
  // ===========================

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  // ===========================
  // Debounce Search
  // ===========================

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setShowDropdown(false);
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

        setShowDropdown(true);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div
      ref={searchRef}
      className="
        relative
        hidden
        w-full
        max-w-xl
        lg:block
      "
    >
      {/* Search Box */}

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          z-10
          -translate-y-1/2
          text-muted
        "
      />

      <input
        type="text"
        placeholder="Search EV Cars..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        onFocus={() => {
          if (results.length > 0) {
            setShowDropdown(true);
          }
        }}
        className="
          h-11
          w-full
          rounded-full
          border
          border-theme
          bg-card
          pl-12
          pr-4
          text-sm
          outline-none
          transition-all
          focus:border-green-500
        "
      />

      {/* Spinner */}

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

      {/* Dropdown */}

      {showDropdown && (
        <SearchDropdown
          query={query}
          loading={loading}
          results={results}
          onClose={() => {
            setShowDropdown(false);
            setQuery("");
          }}
        />
      )}
    </div>
  );
}