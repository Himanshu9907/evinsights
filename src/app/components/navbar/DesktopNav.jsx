"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { navLinks } from "./navLinks";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        hidden
        items-center
        gap-2
        lg:flex
      "
    >
      {navLinks.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" &&
            pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              group
              relative
              overflow-hidden
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                active
                  ? `
                    bg-green-500
                    text-black
                    shadow-lg
                    shadow-green-500/30
                  `
                  : `
                    text-muted
                    hover:bg-card
                    hover:text-green-500
                  `
              }
            `}
          >
            {/* Hover Background */}

            {!active && (
              <span
                className="
                  absolute
                  inset-0
                  scale-0
                  rounded-full
                  bg-green-500/10
                  transition-transform
                  duration-300
                  group-hover:scale-100
                "
              />
            )}

            {/* Text */}

            <span className="relative z-10">
              {item.label}
            </span>

            {/* Active Line */}

            {active && (
              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-1
                  w-8
                  -translate-x-1/2
                  rounded-full
                  bg-black
                "
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}