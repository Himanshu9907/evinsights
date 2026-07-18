"use client";

import Link from "next/link";
import { List } from "lucide-react";

export default function TableOfContents({ headings = [] }) {
  if (!headings.length) return null;

  return (
    <div
      className="
        rounded-3xl
        border
        border-theme
        bg-card
        p-6
      "
    >
      <div className="mb-5 flex items-center gap-2">
        <List
          size={20}
          className="text-green-500"
        />

        <h3
          className="
            text-xl
            font-bold
          "
        >
          Table of Contents
        </h3>
      </div>

      <nav>
        <ul className="space-y-3">

          {headings.map((heading, index) => (

            <li key={index}>

              <Link
                href={`#${heading.id}`}
                className="
                  block
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  text-muted
                  transition
                  hover:bg-background
                  hover:text-green-500
                "
              >
                {heading.title}
              </Link>

            </li>

          ))}

        </ul>
      </nav>
    </div>
  );
}