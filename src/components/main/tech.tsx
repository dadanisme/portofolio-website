import React from "react";
import TechSlider from "./tech-carousel";
import ArrowLink from "../common/arrow-link";

export default function TechStack() {
  return (
    <div className="px-4 sm:px-6 py-4">
      <header className="flex items-center justify-between">
        <h2 className="p font-semibold text-black dark:text-white">
          Tech Stack
        </h2>
        <ArrowLink className="font-semibold" href="/project">
          See my projects
        </ArrowLink>
      </header>

      <div className="mt-6">
        <TechSlider />
      </div>
    </div>
  );
}
