import React from "react";
import Header from "./header";

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="wide-box-x">
      <Header />

      <main className="mt-4">{children}</main>
    </div>
  );
}
