import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextTopLoader from "nextjs-toploader";
import TopLoader from "@/components/TopLoader";

export const metadata: Metadata = {
  title: "Nutan | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Nutan, a passionate Frontend Developer skilled in React, Next.js, TypeScript, Tailwind CSS, and modern web technologies. Discover projects, skills, and career journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  if (stored === "dark" || (!stored && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <TopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
