"use client";

import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

export default function TopLoader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const target = document.documentElement;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDark = target.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      }
    });

    observer.observe(target, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <NextTopLoader
      color={isDarkMode ? "blue" : "black"}
      showSpinner={true}
      height={3}
      speed={200}
    />
  );
}
