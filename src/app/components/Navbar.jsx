// import Link from "next/link";

// export default function Navbar() {
//   return (
//     // <nav className="sticky top-0 z-50 border-b border-green-900/20 bg-black/70 backdrop-blur-x1">
//     // <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
//     // <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
//             ⚡
//           </div>

//           <h1 className="text-2xl font-bold text-white">
//             EV <span className="text-green-400">Insights</span>
//           </h1>
//         </Link>

//         {/* Menu */}
//         <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">
//           <li>
//             <Link href="/" className="hover:text-green-400 transition">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link href="/blog" className="hover:text-green-400 transition">
//               Blog
//             </Link>
//           </li>

//           <li>
//             <Link
//               href="/comparisons"
//               className="hover:text-green-400 transition"
//             >
//               Comparisons
//             </Link>
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-green-400 transition">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/contact" className="hover:text-green-400 transition">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Subscribe Button */}
//         <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl transition">
//           Subscribe
//         </button>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/comparison", label: "Comparison" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

  return (
    // <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          EV <span className="text-green-400">Insights</span>
        </Link>

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link
  href="/"
  className={`transition ${
    pathname === "/"
      ? "text-green-400 font-semibold"
      : "hover:text-green-400"
  }`}
>
  Home
</Link>

          <Link href="/blog" className="hover:text-green-400 transition">
            Blog
          </Link>

          <Link href="/comparison" className="hover:text-green-400 transition">
            Comparison
          </Link>

          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </div> */}

        <div className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`transition ${
        pathname === link.href ||
        pathname.startsWith(link.href + "/")
          ? "text-green-400 font-semibold"
          : "text-white hover:text-green-400"
      }`}
    >
      {link.label}
    </Link>
  ))}
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
              Blog
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