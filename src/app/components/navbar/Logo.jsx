"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        group
        flex
        items-center
        gap-3
        shrink-0
      "
    >
      <>
  {/* Desktop Logo */}

  <Image
    src="/logos/logo.png"
    alt="EVInsights Hub"
    width={280}
    height={60}
    priority
    className="
      hidden
      h-11
      w-auto
      transition-transform
      duration-300
      group-hover:scale-105
      md:block
    "
  />

  {/* Mobile Logo */}

  <Image
    src="/logos/mobilelogo.png"
    alt="EVInsights Hub"
    width={46}
    height={46}
    priority
    className="
      block
      h-11
      w-auto
      transition-transform
      duration-300
      group-hover:scale-105
      md:hidden
    "
  />
</>

      
    </Link>
  );
}