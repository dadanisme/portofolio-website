import * as fs from "fs";
import { faker } from "@faker-js/faker";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  // read from public folder
  const projects = fs.readFileSync("public/projects.json", "utf-8");
  return JSON.parse(projects).reverse();
}

export async function createProject() {
  "use server";
  const title = faker.lorem.words(7);
  const project = {
    // random slug
    slug: slugify(title),
    title,
  };

  // append to public folder
  const projects = await getProjects();
  projects.push(project);

  fs.writeFileSync("public/projects.json", JSON.stringify(projects));

  revalidatePath("/project");
  return project;
}

export function slugify(title: string) {
  return title.toLowerCase().replace(/ /g, "-");
}
