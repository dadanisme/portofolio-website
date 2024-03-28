import Background from "@/components/background";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-svh">
      <Background />
      <div className="text-center relative z-10 ">
        <h1 className="text-4xl text-secondary font-bold">404</h1>
        <p className="text-lg">Page not found</p>
        <Link href="/" className="mt-4 btn btn-secondary btn-sm">
          Back to home
        </Link>
      </div>
    </div>
  );
}
