// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Providers from "./providers";
// import Script from "next/script";
// import ScrollToTop from "./components/ScrollToTop";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   metadataBase: new URL("https://evinsightshub.in"),

//   title: {
//     default: "EV Insight Hub",
//     template: "%s | EV Insight Hub",
//   },

//   description:
//     "Latest EV news, reviews, comparisons and buying guides.",

//   openGraph: {
//     title: "EV Insight Hub",
//     description: "Latest EV News & Reviews",
//     url: "https://evinsightshub.in",
//     siteName: "EV Insight Hub",
//     type: "website",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning
//       className={`${geistSans.variable} ${geistMono.variable}`}
//     >
//       <body>
//         <Providers>{children}</Providers>
//         <ScrollToTop />
//       </body>
//     </html>
//   );
// }

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body>
// // <Providers>
// //  {children}
// // </Providers>
// // </body>

// //      <Script
// //         src="https://www.googletagmanager.com/gtag/js?id=G-X89F8BE3WF"
// //         strategy="afterInteractive"
// //       />

// //       <Script id="google-analytics" strategy="afterInteractive">
// //         {`
// //           window.dataLayer = window.dataLayer || [];
// //           function gtag(){dataLayer.push(arguments);}
// //           gtag('js', new Date());
// //           gtag('config', 'G-X89F8BE3WF');
// //         `}
// //       </Script>
// //     </html>
// //   );
// // }

import "./globals.css";

// import Navbar from "./components/Navbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Providers from "./providers";

export const metadata = {
  title: "EV Insights Hub",
  description: "India's Modern Electric Vehicle Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className="bg-background text-foreground transition-colors duration-300"> */}
      <body className="bg-background text-foreground">
        <Providers>
          <Navbar />

          {/* Navbar fixed hai isliye top spacing */}
          {/* <main className="pt-[120px] min-h-screen"> */}
          {/* <main
            className="
    pt-16
    lg:pt-[120px]
    min-h-screen
  "
          > */}
          <main className="pt-16 lg:pt-20 min-h-screen">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
