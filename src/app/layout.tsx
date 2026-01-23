import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/projects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: siteConfig.title + " | " + siteConfig.name,
  description: siteConfig.headline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
