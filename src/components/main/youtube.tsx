import Image from "next/image";
import React from "react";

export default function YouTube() {
  return (
    <div className="px-4 sm:px-6 py-4">
      <header className="flex items-center justify-between">
        <Image
          src="/youtube.svg"
          alt="YouTube"
          width={100}
          height={100}
          className="w-8 h-8"
        />

        <a
          href="https://www.youtube.com/channel/UC0T7x4I2c7oAn0N4oZGVXdQ"
          className="btn btn-error  btn-sm"
          target="_blank"
        >
          Subscribe
        </a>
      </header>

      <h2 className="p mt-2 font-semibold text-black dark:text-white">
        YouTube
      </h2>
      <h3 className="text-sm">Muhammad Ramdan</h3>

      <p className="mt-2 line-clamp-2 whitespace-pre-wrap text-xs">
        A channel where I share some of my knowledge and experience in software
        engineering, piano, and other things.
      </p>
    </div>
  );
}
