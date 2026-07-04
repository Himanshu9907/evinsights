"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "News & Reviews" },
    { href: "/ev", label: "EV Cars" },
    { href: "/comparison", label: "Comparison" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          EV <span className="text-green-400">Insights Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-green-400 font-semibold"
                  : "text-white hover:text-green-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        {/* <Link
          href="/search"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 hover:border-green-500 transition"
        >
          <Search size={18} />
        </Link> */}

        {/* Right Icons */}
<div className="hidden md:flex items-center gap-3">

  {/* Saved Cars */}
  <Link
    href="/saved"
    className="relative flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 hover:border-red-500 transition"
  >
    <Heart size={18} />

    <span
      id="saved-count"
      className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-[10px] font-bold flex items-center justify-center"
    >
      0
    </span>
  </Link>

  {/* Search */}
  <Link
    href="/search"
    className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 hover:border-green-500 transition"
  >
    <Search size={18} />
  </Link>

</div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              News & Reviews
            </Link>

            <Link href="/ev" onClick={() => setMenuOpen(false)}>
              EV Cars
            </Link>

            <Link href="/comparison" onClick={() => setMenuOpen(false)}>
              Comparison
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
