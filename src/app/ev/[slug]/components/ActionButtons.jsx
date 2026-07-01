
"use client";

import { ArrowRightLeft, Heart, Share2 } from "lucide-react";

export default function ActionButtons() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <div className="mt-5 flex gap-2">

      <button
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-500 py-2.5 text-sm font-semibold text-black transition hover:bg-green-400"
      >
        <ArrowRightLeft size={16} />
        Compare
      </button>

      <button
        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 py-2.5 text-sm text-white transition hover:border-red-500 hover:text-red-400"
      >
        <Heart size={16} />
        Save
      </button>

      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 py-2.5 text-sm text-white transition hover:border-green-500"
      >
        <Share2 size={16} />
        Share
      </button>

    </div>
  );
}