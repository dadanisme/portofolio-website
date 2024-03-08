import Link from "next/link";
import React from "react";

export default function Project() {
  return (
    <div>
      <Link href="/project/1" className="btn btn-primary">
        Project 1
      </Link>
    </div>
  );
}
