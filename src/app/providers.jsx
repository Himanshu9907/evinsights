"use client";

// import { ThemeProvider } from "next-themes";

// export default function Providers({ children }) {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="dark">
//       {children}
//     </ThemeProvider>
//   );
// }

// "use client";

// import { ThemeProvider } from "next-themes";

// export default function Providers({ children }) {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="dark"
//       enableSystem={true}
//       disableTransitionOnChange={false}
//     >
//       {children}
//     </ThemeProvider>
//   );
// }

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}