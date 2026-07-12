import { projects } from "./projects-v2";

export { projects };

export const featuredProjects = projects
  .filter((project) => project.status === "featured")
  .sort((left, right) => left.sortOrder - right.sortOrder);
