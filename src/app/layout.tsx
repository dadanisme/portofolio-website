import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ramdan | Software Engineer",
  description: "Muhammad Ramdan is a software engineer based in Indonesia.",
};

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        {children}
        {modal}
      </body>
    </html>
  );
}
