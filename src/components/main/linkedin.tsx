import Image from "next/image";
import React from "react";

export default function LinkedIn() {
  return (
    <div className="px-4 sm:px-6 py-4">
      <header className="flex items-center justify-between">
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={100}
          height={100}
          className="w-8 h-8"
        />

        <a
          href="https://www.linkedin.com/in/dadanisme/"
          className="btn btn-info  btn-sm"
          target="_blank"
        >
          Connect
        </a>
      </header>

      <h2 className="p mt-2 font-semibold text-black dark:text-white">
        LinkedIn
      </h2>
      <h3 className="text-sm">Muhammad Ramdan</h3>

      <p className="mt-2 line-clamp-2 whitespace-pre-wrap text-xs">
        Experienced Software Engineer with 3 years of expertise, excelling in
        tackling complex challenges across diverse tech stacks. Proficient in
        frontend technologies (React, Next.js), backend technologies (Firebase,
        Google Cloud), and well-versed in machine learning and mobile
        development (React Native).
      </p>
    </div>
  );
}
