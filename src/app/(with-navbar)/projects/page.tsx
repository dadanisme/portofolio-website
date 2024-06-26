import { getProjects } from "@/services";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import GithubButton from "./button";
import { Metadata } from "next";
import { A } from "@/components/common/elements";
import { IoMdGlobe } from "react-icons/io";
import { VscPinned } from "react-icons/vsc";
import { TbPinnedFilled } from "react-icons/tb";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Muhammad Ramdan",
  description: "Here are some of the projects I've worked on.",
};

export default async function Projects() {
  const projects = await getProjects();
  const pinned = projects.filter((project) => project.pinned);
  const rest = projects.filter((project) => !project.pinned);

  return (
    <main className="wide-box-x">
      <header className="box-y border-b-[0.5px] border-b-neutral-content/20">
        <h1 className="h2 font-bold text-center text-secondary">Projects</h1>
        <p className="text-center">
          Here are some of the projects I've worked on. Click on the project to
          learn more.
        </p>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
        {pinned.map((project) => (
          <div
            key={project.slug}
            className={clsx(
              "rounded-xl p-4 md:p-6 xl:p-8 relative overflow-hidden",
              "border border-neutral-content/20 glassmorph",
              "hover:shadow-lg hover:shadow-secondary border-secondary/20 hover:border-secondary transition-all duration-300 ease-in-out",
              "flex flex-col justify-between",
              "row-span-2"
            )}
          >
            <Link href={project.customLink ?? `/project/${project.slug}`}>
              <time className="text-sm text-gray-200">{project.year}</time>
              <h3 className="h5 font-bold text-gray-100">{project.name}</h3>
              <p>{project.description}</p>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="rounded-md w-full h-48 object-contain my-4"
                />
              )}
            </Link>

            <div>
              {project.repo && (
                <GithubButton repo={project.repo} isPrivate={project.private} />
              )}
              {project.externalLink && (
                <A
                  className={clsx(
                    "flex items-center mt-2 badge badge-outline badge-sm p-3 rounded-xl",
                    "hover:bg-neutral-content/10 transition-all duration-300 ease-in-out",
                    "text-gray-200 truncate max-w-full"
                  )}
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoMdGlobe className="inline-block mr-1" />
                  {project.externalLink.replace("https://", "")}
                </A>
              )}
            </div>

            <div className="flex absolute left-0 bottom-0 w-full h-1">
              {project.lang &&
                Object.entries(project.lang).map(([lang, { size, color }]) => (
                  <div
                    key={lang}
                    style={{ backgroundColor: color, flex: size }}
                    title={`${lang} ${size.toFixed(2)}%`}
                  />
                ))}
            </div>

            <div
              className={clsx(
                "absolute top-0 right-0 p-2 rounded-bl-xl bg-secondary text-gray-100",
                "text-lg font-bold uppercase"
              )}
            >
              <TbPinnedFilled />
            </div>
          </div>
        ))}
        {rest.map((project) => (
          <div
            key={project.slug}
            className={clsx(
              "rounded-xl p-4 md:p-6 xl:p-8 relative overflow-hidden",
              "border border-neutral-content/20 glassmorph",
              "hover:shadow-lg hover:border-secondary transition-all duration-300 ease-in-out",
              "flex flex-col justify-between",
              project.description.length > 100 && "row-span-2"
            )}
          >
            <Link href={project.customLink ?? `/project/${project.slug}`}>
              <time className="text-sm text-gray-200">{project.year}</time>
              <h3 className="h5 font-bold text-gray-100">{project.name}</h3>
              <p>{project.description}</p>
            </Link>

            <div>
              {project.repo && (
                <GithubButton repo={project.repo} isPrivate={project.private} />
              )}
              {project.externalLink && (
                <A
                  className={clsx(
                    "flex items-center mt-2 badge badge-outline badge-sm p-3 rounded-xl",
                    "hover:bg-neutral-content/10 transition-all duration-300 ease-in-out",
                    "text-gray-200 truncate max-w-full"
                  )}
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoMdGlobe className="inline-block mr-1" />
                  {project.externalLink.replace("https://", "")}
                </A>
              )}
            </div>

            <div className="flex absolute left-0 bottom-0 w-full h-1">
              {project.lang &&
                Object.entries(project.lang).map(([lang, { size, color }]) => (
                  <div
                    key={lang}
                    style={{ backgroundColor: color, flex: size }}
                    title={`${lang} ${size.toFixed(2)}%`}
                  />
                ))}
            </div>
          </div>
        ))}
      </article>
    </main>
  );
}
