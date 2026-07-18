// "use client";

// import {
//   Link2,
//   Share2,
//   Copy,
// } from "lucide-react";

// export default function ShareButtons({ title }) {
//   const shareUrl =
//     typeof window !== "undefined"
//       ? window.location.href
//       : "";

//   const encodedUrl = encodeURIComponent(shareUrl);
//   const encodedTitle = encodeURIComponent(title);

//   const copyLink = async () => {
//     try {
//       await navigator.clipboard.writeText(shareUrl);
//       alert("Link copied!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <section className="mt-14 border-t border-theme pt-8">

//       <div className="flex flex-wrap items-center gap-4">

//         <div className="flex items-center gap-2 font-semibold">

//           <Share2 size={18} />

//           Share Article

//         </div>

//         <a
//           href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-xl
//             border
//             border-theme
//             transition
//             hover:border-green-500
//             hover:text-green-500
//           "
//         >
//           <Facebook size={18} />
//         </a>

//         <a
//           href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-xl
//             border
//             border-theme
//             transition
//             hover:border-green-500
//             hover:text-green-500
//           "
//         >
//           <Linkedin size={18} />
//         </a>

//         <button
//           onClick={copyLink}
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-xl
//             border
//             border-theme
//             transition
//             hover:border-green-500
//             hover:text-green-500
//           "
//         >
//           <Link2 size={18} />
//         </button>

//       </div>

//     </section>
//   );
// }


"use client";

import { Link2, Share2 } from "lucide-react";

export default function ShareButtons({ title }) {
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="mt-14 border-t border-theme pt-8">
      <div className="flex flex-wrap items-center gap-4">

        <div className="flex items-center gap-2 font-semibold">
          <Share2 size={18} />
          Share Article
        </div>

        {/* X (Twitter) */}

        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-theme px-4 py-2 transition hover:border-green-500 hover:text-green-500"
        >
          X
        </a>

        {/* Facebook */}

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-theme px-4 py-2 transition hover:border-green-500 hover:text-green-500"
        >
          Facebook
        </a>

        {/* LinkedIn */}

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-theme px-4 py-2 transition hover:border-green-500 hover:text-green-500"
        >
          LinkedIn
        </a>

        {/* Copy */}

        <button
          onClick={copyLink}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-theme transition hover:border-green-500 hover:text-green-500"
        >
          <Link2 size={18} />
        </button>

      </div>
    </section>
  );
}