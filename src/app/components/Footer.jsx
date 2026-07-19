// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { ArrowRight } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaXTwitter,
// } from "react-icons/fa6";

// const quickLinks = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "EV Cars",
//     href: "/ev",
//   },
//   {
//     title: "Compare Cars",
//     href: "/comparison",
//   },
//   {
//     title: "News",
//     href: "/news",
//   },
//   {
//     title: "Blog",
//     href: "/blog",
//   },
// ];

// const companyLinks = [
//   {
//     title: "About Us",
//     href: "/about",
//   },
//   {
//     title: "Contact",
//     href: "/contact",
//   },
//   {
//     title: "Privacy Policy",
//     href: "/privacy-policy",
//   },
//   {
//     title: "Terms & Conditions",
//     href: "/terms-and-conditions",
//   },
//   {
//     title: "Disclaimer",
//     href: "/disclaimer",
//   },
// ];

// const brands = [
//   {
//     title: "Tata EV",
//     href: "/brand/tata",
//   },
//   {
//     title: "Mahindra EV",
//     href: "/brand/mahindra",
//   },
//   {
//     title: "MG Motor",
//     href: "/brand/mg",
//   },
//   {
//     title: "BYD",
//     href: "/brand/byd",
//   },
//   {
//     title: "Hyundai",
//     href: "/brand/hyundai",
//   },
// ];

// const socials = [
//   {
//     icon: <FaFacebookF size={18} />,
//     href: "#",
//   },
//   {
//     icon: <FaInstagram size={18} />,
//     href: "#",
//   },
//   {
//     icon: <FaYoutube size={18} />,
//     href: "#",
//   },
//   {
//     icon: <FaXTwitter size={18} />,
//     href: "#",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="mt-24 border-t border-theme bg-background">

//       <div className="mx-auto max-w-7xl px-4 py-16">

//         {/* Top Card */}

//         <div className="overflow-hidden rounded-3xl border border-theme bg-card">

//           <div className="grid lg:grid-cols-12">

//             {/* Left */}

//             <div className="border-b border-theme p-10 lg:col-span-5 lg:border-b-0 lg:border-r">

//               <Link
//                 href="/"
//                 className="flex items-center gap-3"
//               >
//                 <Image
//     src="/logos/logo.png"
//     alt="EVInsights Hub"
//     width={220}
//     height={50}
//     priority
//     className="
//       hidden
//       h-11
//       w-auto
//       transition-transform
//       duration-300
//       group-hover:scale-105
//       md:block
//     "
//   />

//     {/* Mobile Logo */}

//   <Image
//     src="/logos/mobilelogo.png"
//     alt="EVInsights Hub"
//     width={42}
//     height={42}
//     priority
//     className="
//       block
//       h-11
//       w-auto
//       transition-transform
//       duration-300
//       group-hover:scale-105
//       md:hidden
//     "
//   />


//               </Link>

//               <p className="mt-6 max-w-md leading-8 text-muted">
//                 Discover India's latest electric cars, compare EVs,
//                 explore specifications, charging, battery range,
//                 ownership cost and unbiased buying guides.
//               </p>

//               {/* Newsletter */}

//               <div className="mt-8">

//                 <h3 className="mb-3 text-lg font-bold">
//                   Subscribe Newsletter
//                 </h3>

//                 <div className="flex overflow-hidden rounded-xl border border-theme">

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="
//                       flex-1
//                       bg-transparent
//                       px-4
//                       py-3
//                       outline-none
//                     "
//                   />

//                   <button
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                       bg-primary
//                       px-5
//                       font-medium
//                       text-white
//                       transition
//                       hover:opacity-90
//                     "
//                   >
//                     Subscribe

//                     <ArrowRight size={18} />

//                   </button>

//                 </div>

//               </div>

//               {/* Social */}

//               <div className="mt-8 flex gap-3">

//                 {socials.map((social, index) => (

//                   <Link
//                     key={index}
//                     href={social.href}
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-xl
//                       border
//                       border-theme
//                       transition
//                       hover:bg-primary
//                       hover:text-white
//                     "
//                   >
//                     {social.icon}
//                   </Link>

//                 ))}

//               </div>

//             </div>

//             {/* Right */}

//             <div className="grid gap-10 p-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">

//               {/* Quick Links */}

//               <div>

//                 <h3 className="mb-5 text-lg font-bold">
//                   Quick Links
//                 </h3>

//                 <ul className="space-y-4">

//                   {quickLinks.map((item) => (

//                     <li key={item.title}>

//                       <Link
//                         href={item.href}
//                         className="text-muted transition hover:text-primary"
//                       >
//                         {item.title}
//                       </Link>

//                     </li>

//                   ))}

//                 </ul>

//               </div>

//               {/* Company */}

//               <div>

//                 <h3 className="mb-5 text-lg font-bold">
//                   Company
//                 </h3>

//                 <ul className="space-y-4">

//                   {companyLinks.map((item) => (

//                     <li key={item.title}>

//                       <Link
//                         href={item.href}
//                         className="text-muted transition hover:text-primary"
//                       >
//                         {item.title}
//                       </Link>

//                     </li>

//                   ))}

//                 </ul>

//               </div>

//               {/* Popular Brands */}

//               <div>

//                 <h3 className="mb-5 text-lg font-bold">
//                   Popular EV Brands
//                 </h3>

//                 <ul className="space-y-4">

//                   {brands.map((item) => (

//                     <li key={item.title}>

//                       <Link
//                         href={item.href}
//                         className="text-muted transition hover:text-primary"
//                       >
//                         {item.title}
//                       </Link>

//                     </li>

//                   ))}

//                 </ul>

//               </div>

//             </div>

//           </div>

//         </div>
//                 {/* Bottom */}

//         <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-theme pt-8 text-center text-sm text-muted md:flex-row">

//           <p>
//             © {new Date().getFullYear()}{" "}
//             <span className="font-semibold text-foreground">
//               EVInsights
//             </span>
//             . All rights reserved.
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-5">

//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-primary"
//             >
//               Privacy
//             </Link>

//             <Link
//               href="/terms-and-conditions"
//               className="transition hover:text-primary"
//             >
//               Terms
//             </Link>

//             <Link
//               href="/disclaimer"
//               className="transition hover:text-primary"
//             >
//               Disclaimer
//             </Link>

//             <Link
//               href="/contact"
//               className="transition hover:text-primary"
//             >
//               Contact
//             </Link>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "EV Cars", href: "/ev" },
  { title: "Compare Cars", href: "/comparison" },
  { title: "News", href: "/news" },
  { title: "Blog", href: "/blog" },
];

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Disclaimer", href: "/disclaimer" },
];

const brands = [
  { title: "Tata EV", href: "/brand/tata" },
  { title: "Mahindra EV", href: "/brand/mahindra" },
  { title: "MG Motor", href: "/brand/mg" },
  { title: "BYD", href: "/brand/byd" },
  { title: "Hyundai", href: "/brand/hyundai" },
];

const socials = [
  {
    icon: <FaFacebookF size={18} />,
    href: "#",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "#",
  },
  {
    icon: <FaYoutube size={18} />,
    href: "#",
  },
  {
    icon: <FaXTwitter size={18} />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-theme bg-background">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        <div className="overflow-hidden rounded-3xl border border-theme bg-card shadow-theme">

          <div className="grid lg:grid-cols-12">

            {/* LEFT */}

            <div className="border-b border-theme p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">

              <Link href="/" className="inline-flex items-center">

                {/* Desktop Logo */}

                <Image
                  src="/logos/logo.png"
                  alt="EVInsights Hub"
                  width={220}
                  height={50}
                  priority
                  className="hidden h-11 w-auto md:block"
                />

                {/* Mobile Logo */}

                <Image
                  src="/logos/mobilelogo.png"
                  alt="EVInsights Hub"
                  width={44}
                  height={44}
                  priority
                  className="block h-11 w-auto md:hidden"
                />

              </Link>

              <p className="mt-6 max-w-md text-base leading-8 text-muted">

                Discover India's latest electric cars, compare EVs,
                explore specifications, charging, battery range,
                ownership cost and unbiased buying guides.

              </p>

              {/* Newsletter */}

              <div className="mt-8">

                <h3 className="mb-4 text-xl font-bold">
                  Subscribe Newsletter
                </h3>

                <div className="flex flex-col gap-3 sm:flex-row">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-theme
                      bg-background
                      px-4
                      py-3
                      outline-none
                      transition
                      focus:border-green-500
                    "
                  />

                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-green-500
                      px-6
                      py-3
                      font-semibold
                      text-black
                      transition
                      hover:bg-green-400
                      sm:w-auto
                      sm:whitespace-nowrap
                    "
                  >
                    Subscribe

                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>

              {/* Social */}

              <div className="mt-8 flex flex-wrap gap-3">

                {socials.map((social, index) => (

                  <Link
                    key={index}
                    href={social.href}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-theme
                      transition
                      hover:border-green-500
                      hover:bg-green-500
                      hover:text-black
                    "
                  >
                    {social.icon}
                  </Link>

                ))}

              </div>

            </div>
                        {/* RIGHT */}

            <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8 lg:col-span-7 lg:grid-cols-3 lg:p-10">

              {/* Quick Links */}

              <div>

                <h3 className="mb-5 text-lg font-bold">
                  Quick Links
                </h3>

                <ul className="space-y-4">

                  {quickLinks.map((item) => (

                    <li key={item.title}>

                      <Link
                        href={item.href}
                        className="text-muted transition hover:text-green-500"
                      >
                        {item.title}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

              {/* Company */}

              <div>

                <h3 className="mb-5 text-lg font-bold">
                  Company
                </h3>

                <ul className="space-y-4">

                  {companyLinks.map((item) => (

                    <li key={item.title}>

                      <Link
                        href={item.href}
                        className="text-muted transition hover:text-green-500"
                      >
                        {item.title}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

              {/* Popular Brands */}

              <div>

                <h3 className="mb-5 text-lg font-bold">
                  Popular EV Brands
                </h3>

                <ul className="space-y-4">

                  {brands.map((item) => (

                    <li key={item.title}>

                      <Link
                        href={item.href}
                        className="text-muted transition hover:text-green-500"
                      >
                        {item.title}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-theme
            pt-8
            text-center
            text-sm
            text-muted
            md:flex-row
            md:text-left
          "
        >

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">
              EVInsights Hub
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">

            <Link
              href="/privacy-policy"
              className="transition hover:text-green-500"
            >
              Privacy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-green-500"
            >
              Terms
            </Link>

            <Link
              href="/disclaimer"
              className="transition hover:text-green-500"
            >
              Disclaimer
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-green-500"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}