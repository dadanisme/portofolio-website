import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Navigation } from "@/components/shared/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadramdan.com"),
  title: "Muhammad Ramdan | Software Engineer",
  description:
    "Software Engineer with 5+ years of experience. Team Lead at Stockifi, Apple Developer Academy Alumni. Skilled in TypeScript, React, Node.js, and Swift.",
  keywords: [
    "Muhammad Ramdan",
    "Software Engineer",
    "Team Lead",
    "TypeScript",
    "React",
    "Next.js",
    "Swift",
    "Node.js",
    "Stockifi",
    "Apple Developer Academy",
    "Bandung",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Ramdan" }],
  creator: "Muhammad Ramdan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadramdan.com",
    title: "Muhammad Ramdan | Software Engineer",
    description:
      "Software Engineer with 5+ years of experience. Team Lead at Stockifi, Apple Developer Academy Alumni.",
    siteName: "Muhammad Ramdan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ramdan | Software Engineer",
    description:
      "Software Engineer with 5+ years of experience. Team Lead at Stockifi.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
