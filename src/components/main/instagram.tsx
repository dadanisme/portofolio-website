import Image from "next/image";
import React from "react";

export default function Instagram() {
  return (
    <div className="px-6 py-4">
      <header className="flex items-center justify-between">
        <Image
          src="/instagram.svg"
          alt="Instagram"
          width={100}
          height={100}
          className="w-8 h-8"
        />
      </header>

      <h2 className="p mt-2 font-semibold text-black dark:text-white">
        Instagram
      </h2>
      <h3 className="text-sm">@dadanis.me</h3>
      <a
        href="https://www.instagram.com/dadanis.me"
        className="btn btn-secondary btn-sm mt-2"
        target="_blank"
      >
        Follow
      </a>
    </div>
  );
}
