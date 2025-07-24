import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '@/components/navigation';
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
  title: "Muhammad Ramdan (dadanisme) - World-Class Developer & Product Innovator",
  description: "Full-Stack Software Engineer, team leader at Stockifi.io, and Apple Developer Academy participant building scalable solutions from idea to production.",
  keywords: ["Muhammad Ramdan", "dadanisme", "Full-Stack Developer", "React", "TypeScript", "Team Lead", "Stockifi", "Bali"],
  authors: [{ name: "Muhammad Ramdan", url: "https://github.com/dadanisme" }],
  openGraph: {
    title: "Muhammad Ramdan - World-Class Developer & Product Innovator",
    description: "Building scalable solutions from idea to production",
    type: "website",
    locale: "en_US",
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
