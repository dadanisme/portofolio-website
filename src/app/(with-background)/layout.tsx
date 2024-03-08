import Background from "@/components/background";
import React from "react";

export default function BackgroundLayout({ children }: ChildrenProps) {
  return (
    <>
      <main className="relative z-10">{children}</main>

      <section className="fixed inset-0 z-0">
        <Background />
      </section>
    </>
  );
}
