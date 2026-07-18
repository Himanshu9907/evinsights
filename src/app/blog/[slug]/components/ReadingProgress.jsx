"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent =
        docHeight > 0
          ? (scrollTop / docHeight) * 100
          : 0;

      setProgress(percent);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="
        fixed
        top-16
        lg:top-20
        left-0
        z-50
        h-[3px]
        w-full
        bg-transparent
      "
    >
      <div
        className="
          h-full
          bg-green-500
          transition-[width]
          duration-100
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}