import Image from "next/image";
import React from "react";

export default function GitHub() {
  return (
    <div className="px-6 py-4">
      <header className="flex items-center justify-between">
        <Image
          src="/github.svg"
          alt="GitHub"
          width={100}
          height={100}
          className="w-8 h-8"
        />
      </header>

      <h2 className="p mt-2 font-semibold text-black dark:text-white">
        GitHub
      </h2>
      <h3 className="text-sm">@dadanisme</h3>
      <a
        href="https://github.com/dadanisme"
        className="btn btn-neutral btn-sm mt-2"
        target="_blank"
      >
        Follow
      </a>
    </div>
  );
}
