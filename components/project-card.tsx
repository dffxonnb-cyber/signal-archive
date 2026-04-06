import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <div className="tag-list" aria-label="Project badges">
          <span className="tag tag--accent">{project.category}</span>
          {project.badges.map((badge) => (
            <span className="tag" key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <h2 className="project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <dl className="meta-list">
        <div className="meta-item">
          <dt>기간</dt>
          <dd>{project.period}</dd>
        </div>
        <div className="meta-item">
          <dt>형태</dt>
          <dd>{project.format}</dd>
        </div>
        <div className="meta-item">
          <dt>도메인</dt>
          <dd>{project.domains.join(" / ")}</dd>
        </div>
      </dl>

      <div className="project-card__block">
        <span className="project-card__label">문제 유형</span>
        <div className="tag-list">
          {project.problemTypes.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__block">
        <span className="project-card__label">기술</span>
        <div className="tag-list">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <p className="project-card__outcome">{project.outcome}</p>

      <div className="project-card__actions">
        <Link className="button-link" href={`/projects/${project.slug}`}>
          상세 보기
        </Link>
      </div>
    </article>
  );
}

