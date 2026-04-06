import Link from "next/link";

import type { Project } from "@/types/content";

type HomeProjectCardProps = {
  project: Project;
  index: number;
  lens: string;
  problem: string;
  roleLabel: string;
  tags: string[];
  impact: string;
};

export function HomeProjectCard({
  project,
  index,
  lens,
  problem,
  roleLabel,
  tags,
  impact,
}: HomeProjectCardProps) {
  return (
    <article className="home-project-card">
      <div className="home-project-card__top">
        <span className="home-project-card__index">{`0${index}`}</span>
        <span className="home-project-card__lens">{lens}</span>
      </div>

      <div className="home-project-card__heading">
        <h3 className="home-project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="home-project-card__problem">{problem}</p>
      </div>

      <div className="home-project-card__meta-grid">
        <div className="home-project-card__meta-block">
          <span className="home-project-card__meta-label">Role</span>
          <strong>{roleLabel}</strong>
        </div>
        <div className="home-project-card__meta-block">
          <span className="home-project-card__meta-label">Tools</span>
          <strong>{project.stack.slice(0, 3).join(" / ")}</strong>
        </div>
      </div>

      <div className="home-project-card__tags">
        {tags.map((tag) => (
          <span className="home-project-card__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="home-project-card__footer">
        <p className="home-project-card__impact">{impact}</p>
        <Link className="home-project-card__link" href={`/projects/${project.slug}`}>
          상세 보기
        </Link>
      </div>
    </article>
  );
}
