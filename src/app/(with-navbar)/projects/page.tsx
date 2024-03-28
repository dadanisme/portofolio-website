import { getProjects } from "@/services";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import GithubButton from "./button";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <main className="wide-box-x">
      <header className="box-y border-b-[0.5px] border-b-neutral-content/20">
        <h1 className="h2 font-bold text-center text-secondary">Projects</h1>
        <p className="text-center">
          Here are some of the projects I've worked on.
        </p>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
        {projects.map((project) => (
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
              <h3 className="h5 font-bold text-gray-100">{project.name}</h3>
              <p>{project.description}</p>
            </Link>

            {project.repo && (
              <div>
                <GithubButton repo={project.repo} isPrivate={project.private} />
              </div>
            )}

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
