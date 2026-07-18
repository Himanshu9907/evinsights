"use client";

import { useState } from "react";

import {
  Menu,
} from "lucide-react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import DesktopSearch from "./DesktopSearch";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileSearchOpen, setMobileSearchOpen] =
    useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-theme
          bg-background/90
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            gap-4
            px-4
            lg:h-20
            lg:px-8
          "
        >
          {/* ===================== */}
          {/* LEFT */}
          {/* ===================== */}

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                setMobileMenuOpen(true)
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-theme
                bg-card
                transition
                hover:border-green-500
                lg:hidden
              "
            >
              <Menu size={22} />
            </button>

            <Logo />

          </div>

          {/* ===================== */}
          {/* CENTER */}
          {/* ===================== */}

          <div
            className="
              hidden
              flex-1
              items-center
              justify-center
              px-8
              lg:flex
            "
          >
            <DesktopNav />
          </div>

          {/* ===================== */}
          {/* RIGHT */}
          {/* ===================== */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {/* Desktop Search */}

            <DesktopSearch />

            {/* Mobile Search */}

            <div className="lg:hidden">

              <SearchButton
                onClick={() =>
                  setMobileSearchOpen(true)
                }
              />

            </div>

            {/* Theme */}

            <ThemeToggle />

          </div>

        </div>
                {/* Bottom Highlight */}

        <div
          className="
            hidden
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-green-500/40
            to-transparent
            lg:block
          "
        />

      </header>

      {/* ===================== */}
      {/* Mobile Drawer */}
      {/* ===================== */}

      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* ===================== */}
      {/* Mobile Search */}
      {/* ===================== */}

      <MobileSearch
        open={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
      />
    </>
  );
}