"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EVSearchBar() {

  const router = useRouter();

  const searchParams = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get("q") || ""
  );

  useEffect(() => {

    const timer = setTimeout(() => {

      const params = new URLSearchParams(searchParams);

      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }

      router.push(`/ev?${params.toString()}`);

    }, 300);

    return () => clearTimeout(timer);

  }, [query]);

  return (

    <div className="relative">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search EV by name or brand..."
        className="
        w-full
        h-14
        rounded-2xl
        bg-zinc-900
        border
        border-zinc-800
        pl-14
        pr-5
        outline-none
        focus:border-green-500
        transition"
      />

    </div>

  );
}