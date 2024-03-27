import Background from "@/components/background";
import Link from "next/link";
import React from "react";
import { IoIosConstruct } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-svh">
      <Background />
      <div className="text-center relative z-10 flex flex-col items-center">
        <IoIosConstruct className="text-9xl text-primary" />
        <h1 className="text-4xl text-primary font-bold">307</h1>
        <p className="text-lg">Under Construction</p>
        <Link href="/" className="mt-4 btn btn-primary btn-sm">
          Back to home
        </Link>
      </div>
    </div>
  );
}
