"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  X,
  ChevronRight,
  Home,
  Car,
  GitCompareArrows,
  Newspaper,
  Info,
  Mail,
  Heart,
} from "lucide-react";

const links = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "EV Cars",
    href: "/ev",
    icon: Car,
  },
  {
    label: "Comparison",
    href: "/comparison",
    icon: GitCompareArrows,
  },
  {
    label: "News",
    href: "/blog",
    icon: Newspaper,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function MobileNav({
  open,
  onClose,
}) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-40
          bg-black/50
          backdrop-blur-sm
          lg:hidden
        "
      />

      {/* Drawer */}

      <aside
        className="
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[320px]
          max-w-[85%]
          flex-col
          border-r
          border-theme
          bg-background
          shadow-2xl
          lg:hidden
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-theme
            p-5
          "
        >
          <div>

            <h2
              className="
                text-xl
                font-bold
                text-foreground
              "
            >
              EV Insights
            </h2>

            <p
              className="
                text-xs
                text-muted
              "
            >
              India's EV Platform
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-10
              w-10
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

        {/* Navigation */}

        <div
          className="
            flex-1
            overflow-y-auto
            p-4
          "
        >
          <div className="space-y-2">

            {links.map((item) => {

              const Icon = item.icon;

              const active =
                pathname === item.href ||
                (
                  item.href !== "/" &&
                  pathname.startsWith(item.href)
                );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-3
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-green-500
                          text-black
                          shadow-lg
                        `
                        : `
                          bg-card
                          text-foreground
                          hover:border-green-500
                          hover:bg-green-500/10
                        `
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Icon size={20} />

                    <span
                      className="
                        font-medium
                      "
                    >
                      {item.label}
                    </span>

                  </div>

                  <ChevronRight size={18} />

                </Link>
              );

            })}

          </div>

          {/* Saved */}

          <div className="mt-8">

            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-wider
                text-muted
              "
            >
              Quick Access
            </p>

            <Link
              href="/saved"
              onClick={onClose}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-card
                px-4
                py-3
                transition
                hover:bg-green-500/10
              "
            >
              <Heart size={20} />

              Saved Vehicles

            </Link>

          </div>

        </div>

        {/* Footer */}

        <div
          className="
            border-t
            border-theme
            p-5
          "
        >
          <p
            className="
              text-sm
              font-semibold
            "
          >
            EV Insights Hub
          </p>

          <p
            className="
              mt-1
              text-xs
              text-muted
            "
          >
            Version 1.0
          </p>

        </div>

      </aside>
    </>
  );
}