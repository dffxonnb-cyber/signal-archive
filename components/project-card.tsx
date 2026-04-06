import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

function getProjectVisual(slug: string) {
  switch (slug) {
    case "lh-traffic-safety-analysis":
      return { mark: "LH", tone: "forest" };
    case "seoul-storefront-redveil":
      return { mark: "RV", tone: "graphite" };
    case "uk-online-retail-segment-analysis":
      return { mark: "UK", tone: "slate" };
    case "starbucks-promotion-analysis":
      return { mark: "SB", tone: "forest" };
    case "nba-game-player-analysis":
      return { mark: "NBA", tone: "slate" };
    default:
      return { mark: "AR", tone: "graphite" };
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visual = getProjectVisual(project.slug);

  return (
    <article className="project-card">
      <div className="project-card__hero">
        <div className={`project-card__media project-card__media--${visual.tone}`}>{visual.mark}</div>
        <div className="project-card__header">
          <span className="project-card__eyebrow">{project.domains.slice(0, 2).join(" / ")}</span>
          <h2 className="project-card__title">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h2>
        </div>
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <div className="project-card__meta-grid">
        <div className="project-card__meta-item">
          <span>Role</span>
          <strong>{project.role.slice(0, 2).join(" / ")}</strong>
        </div>
        <div className="project-card__meta-item">
          <span>Tools</span>
          <strong>{project.stack.slice(0, 3).join(" / ")}</strong>
        </div>
      </div>

      <div className="project-card__block">
        <span className="project-card__label">핵심 태그</span>
        <div className="tag-list">
          {project.problemTypes.slice(0, 3).map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
          {project.badges.slice(0, 2).map((item) => (
            <span className="tag tag--accent" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <p className="project-card__note">{project.focusPoints[0] ?? project.outcome}</p>
        <Link className="button-link" href={`/projects/${project.slug}`}>
          상세 보기
        </Link>
      </div>
    </article>
  );
}
