import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import React from "react";

export default function BackgroundLayout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
