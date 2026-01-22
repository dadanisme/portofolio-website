import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/shared/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadramdan.com"),
  title: "Muhammad Ramdan | Software Engineer",
  description:
    "Software Engineer with 5+ years of experience. Team Lead at Stockifi, Apple Developer Academy Alumni. Skilled in TypeScript, React, Node.js, and Swift.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Stockifi",
    "Apple Developer Academy",
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Python",
    "Swift",
  ],
  authors: [{ name: "Muhammad Ramdan" }],
  openGraph: {
    title: "Muhammad Ramdan | Software Engineer",
    description:
      "Software Engineer with 5+ years of experience. Team Lead at Stockifi, Apple Developer Academy Alumni. Skilled in TypeScript, React, Node.js, and Swift.",
    url: "https://muhammadramdan.com",
    siteName: "Muhammad Ramdan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ramdan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ramdan | Software Engineer",
    description:
      "Software Engineer with 5+ years of experience. Team Lead at Stockifi, Apple Developer Academy Alumni.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
