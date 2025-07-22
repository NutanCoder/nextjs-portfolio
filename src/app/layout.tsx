import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Nutan Singh | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Nutan Singh, a passionate Frontend Developer skilled in React, Next.js, TypeScript, Tailwind CSS, and modern web technologies. Discover projects, skills, and career journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="blue" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
