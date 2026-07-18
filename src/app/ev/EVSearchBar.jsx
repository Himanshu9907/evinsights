"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EVSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");

  // URL change hone par input update karo
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = searchParams.get("q") || "";

      // Agar value same hai to kuch mat karo
      if (current === query.trim()) return;

      const params = new URLSearchParams(searchParams.toString());

      if (query.trim()) {
        params.set("q", query.trim());
      } else {
        params.delete("q");
      }

      router.replace(`/ev?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-muted"
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search EV by name or brand..."
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
          placeholder:text-muted
          outline-none
          transition
          focus:border-green-500
        "
      />
    </div>
  );
}