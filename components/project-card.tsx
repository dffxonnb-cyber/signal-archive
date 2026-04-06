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
  const projectIndex = String(project.sortOrder).padStart(2, "0");
  const primaryTags = project.problemTypes.slice(0, 3);
  const secondaryTags = project.badges.slice(0, 2);
  const scopeChips = [project.category, project.format].filter(Boolean).slice(0, 2);

  return (
    <article className="project-card">
      <div className="project-card__hero">
        <div className={`project-card__media project-card__media--${visual.tone}`}>{visual.mark}</div>
        <div className="project-card__header">
          <div className="project-card__header-top">
            <span className="project-card__code">Project {projectIndex}</span>
            <span className="project-card__eyebrow">{project.domains.slice(0, 2).join(" / ")}</span>
          </div>
          <h2 className="project-card__title">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h2>
        </div>
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <div className="project-card__metadata">
        <div className="project-card__metadata-group">
          <span className="project-card__meta-label">역할</span>
          <div className="project-card__chip-row">
            {project.role.slice(0, 2).map((item) => (
              <span className="project-card__chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__metadata-group">
          <span className="project-card__meta-label">범위</span>
          <div className="project-card__chip-row">
            {scopeChips.map((item) => (
              <span className="project-card__chip project-card__chip--muted" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__metadata-group">
          <span className="project-card__meta-label">도구</span>
          <div className="project-card__chip-row">
            {project.stack.slice(0, 3).map((item) => (
              <span className="project-card__chip project-card__chip--muted" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-card__tag-stack">
        <div className="project-card__tag-group">
          <span className="project-card__label">핵심 태그</span>
          <div className="tag-list">
            {primaryTags.map((item) => (
              <span className="tag tag--primary" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {secondaryTags.length > 0 ? (
          <div className="project-card__tag-group">
            <span className="project-card__label">성격</span>
            <div className="tag-list">
              {secondaryTags.map((item) => (
                <span className="tag tag--accent" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}
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
