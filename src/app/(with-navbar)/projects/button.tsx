import { A } from "@/components/common/elements";
import clsx from "clsx";
import React from "react";
import { IoLogoGithub, IoLockClosed } from "react-icons/io5";

interface Repo {
  repo: string;
  isPrivate?: boolean;
}

export default function GithubButton({ repo, isPrivate }: Repo) {
  return (
    <A
      className={clsx(
        "flex items-center mt-2 badge badge-outline badge-sm p-3 rounded-xl",
        "hover:bg-neutral-content/10 transition-all duration-300 ease-in-out",
        "text-gray-200 truncate max-w-full"
      )}
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {!isPrivate && <IoLogoGithub className="inline-block mr-1" />}
      {isPrivate && <IoLockClosed className="inline-block mr-1" />}
      {repo}
    </A>
  );
}
