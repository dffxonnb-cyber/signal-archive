import type { ReactNode } from "react";

import { ProjectReviewPath } from "@/components/project-review-path";
import { projects } from "@/content/projects";

type ProjectDetailLayoutProps = {
  children: ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailLayout({
  children,
  params,
}: ProjectDetailLayoutProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return (
    <>
      {project ? (
        <ProjectReviewPath
          review={project.review}
          slug={project.slug}
          title={project.title}
        />
      ) : null}
      {children}
    </>
  );
}
