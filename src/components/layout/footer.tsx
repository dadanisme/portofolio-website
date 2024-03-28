import React from "react";
import Rainbow from "../rainbow-text";
import clsx from "clsx";
import { NavLink } from "./navbar";

const getCommitCount = () => {
  const commitCount = require("git-commit-count");
  const fs = require("fs");

  let count: string = ((commitCount() + 1) / 100).toFixed(2);
  if (process.env.NODE_ENV === "development") {
    fs.writeFileSync("public/commit-count.txt", count);
  } else {
    count = fs.readFileSync("public/commit-count.txt", "utf-8");
  }

  return count;
};

export default async function Footer() {
  const commitCount = getCommitCount();
  return (
    <>
      <footer
        className={clsx(
          "mt-4 w-full wide-box-x border-t-[0.5px] border-t-neutral-content/20 py-8",
          "flex flex-col xl:flex-row items-center justify-between gap-4"
        )}
      >
        <h3 className="h5 font-semibold flex items-center justify-center xl:justify-start gap-2">
          <Rainbow>muhammadramdan.com</Rainbow>{" "}
          <span className="badge badge-secondary badge-outline badge-sm">
            {commitCount}
          </span>
        </h3>

        <div>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>{" "}
        </div>
      </footer>
      <div className="bg-secondary py-1 box-x">
        <p className="text-secondary-content text-xs text-center">
          © 2024 Muhammad Ramdan. All rights reserved.
        </p>
      </div>
    </>
  );
}
