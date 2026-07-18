"use client";

import Link from "next/link";

export default function Pagination({ page, totalPages }) {
  return (
    <div className="mt-14 flex items-center justify-center gap-3">

      {page > 1 && (
        <Link
          href={`/ev?page=${page - 1}`}
          className="rounded-xl border border-theme px-5 py-3 hover:bg-card"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          key={i}
          href={`/ev?page=${i + 1}`}
          className={`h-11 w-11 rounded-xl flex items-center justify-center border

          ${
            page === i + 1
              ? "bg-green-500 text-black border-green-500"
              : "border-theme hover:bg-card"
          }`}
        >
          {i + 1}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          href={`/ev?page=${page + 1}`}
          className="rounded-xl border border-theme px-5 py-3 hover:bg-card"
        >
          Next
        </Link>
      )}

    </div>
  );
}