import type { Project } from "../types/content";

import {
  featuredProjects as sourceFeaturedProjects,
  projects as sourceProjects,
} from "./projects-decisionops";

const PRIVATE_REPOSITORY_PROJECTS = new Set([
  "job-signal-pipeline",
  "nba-game-player-analysis",
]);

function removePrivateRepositoryLinks(project: Project): Project {
  if (!PRIVATE_REPOSITORY_PROJECTS.has(project.slug)) {
    return project;
  }

  return {
    ...project,
    links: project.links.filter(
      (link) => !link.href.toLowerCase().includes("github.com"),
    ),
  };
}

export const projects = sourceProjects.map(removePrivateRepositoryLinks);

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

export const featuredProjects = sourceFeaturedProjects
  .map((project) => projectBySlug.get(project.slug) ?? project)
  .sort((left, right) => left.sortOrder - right.sortOrder);
