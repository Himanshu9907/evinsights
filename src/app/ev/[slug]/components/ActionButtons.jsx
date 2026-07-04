
"use client";

import { useEffect, useState } from "react";
import { ArrowRightLeft, Heart, Share2 } from "lucide-react";
import { isCarSaved, toggleSavedCar } from "@/lib/savedCars";

// export default function ActionButtons() {
//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: document.title,
//           url: window.location.href,
//         });
//       } catch {}
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied!");
//     }
//   };

export default function ActionButtons({ vehicle }) {

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (vehicle?.slug) {
      setSaved(isCarSaved(vehicle.slug));
    }
  }, [vehicle]);

  const handleSave = () => {
    const status = toggleSavedCar(vehicle.slug);

    setSaved(status);
  };

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

      {/* <button
        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 py-2.5 text-sm text-white transition hover:border-red-500 hover:text-red-400"
      >
        <Heart size={16} />
        Save
      </button> */}

      <button
  onClick={handleSave}
  className={`flex-1 flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm transition

    ${
      saved
        ? "border-red-500 bg-red-500/10 text-red-400"
        : "border-zinc-700 bg-zinc-900 text-white hover:border-red-500 hover:text-red-400"
    }
  `}
>

  <Heart
    size={16}
    fill={saved ? "currentColor" : "none"}
  />

  {saved ? "Saved" : "Save"}

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