"use client";

import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

export default function TopLoader() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>();

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
        } else {
          setIsDarkMode(false);
        }
      }
    });

    observer.observe(target, { attributes: true });

    return () => observer.disconnect();
  }, []);

  if (isDarkMode == undefined) return null;

  return (
    <NextTopLoader
      color={isDarkMode ? "blue" : "black"}
      showSpinner={true}
      height={3}
      speed={200}
    />
  );
}
