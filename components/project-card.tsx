import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

function renderMultilineText(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={`${text}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

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
  const primaryTags = project.coreTags.slice(0, 4);
  const cardLinks = [
    { kind: "detail" as const, label: "상세 보기", href: `/projects/${project.slug}` },
    ...project.links.map((link) => ({
      kind: link.label.includes("Live") ? ("live" as const) : ("external" as const),
      label: link.label.includes("GitHub") ? "GitHub" : link.label,
      href: link.href,
    })),
  ];

  return (
    <article className="project-card">
      <div className="project-card__hero">
        <div className={`project-card__media project-card__media--${visual.tone}`}>{visual.mark}</div>
        <div className="project-card__header">
          <div className="project-card__header-top">
            <span className="project-card__code">Dossier {projectIndex}</span>
            <span className="project-card__eyebrow">{project.primaryDomain}</span>
          </div>
          <h2 className="project-card__title">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h2>
        </div>
      </div>

      <p className="project-card__summary">{renderMultilineText(project.summary)}</p>
      <p className="project-card__supporting-line">{renderMultilineText(project.supportingLine)}</p>

      {project.evidencePoints && project.evidencePoints.length > 0 ? (
        <div className="project-card__proof-stack">
          <span className="project-card__meta-label">핵심 근거</span>
          <div className="project-card__proof-grid" aria-label={`${project.title} evidence snapshot`}>
            {project.evidencePoints.slice(0, 3).map((item) => (
              <div className="project-card__proof-item" key={`${project.slug}-${item.label}`}>
                <span className="project-card__meta-label">{item.label}</span>
                <p className="project-card__brief-copy">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="project-card__brief-grid">
        <div className="project-card__brief-block">
          <span className="project-card__meta-label">Problem</span>
          <p className="project-card__brief-copy">{project.cardBrief.problem}</p>
        </div>

        <div className="project-card__brief-block">
          <span className="project-card__meta-label">Method</span>
          <p className="project-card__brief-copy">{project.cardBrief.method}</p>
        </div>

        <div className="project-card__brief-block">
          <span className="project-card__meta-label">Output</span>
          <div className="project-card__output-list">
            {project.cardBrief.output.map((item) => (
              <span className="project-card__output-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__brief-block">
          <span className="project-card__meta-label">Stack</span>
          <div className="project-card__chip-row">
            {project.stack.map((item) => (
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
          <div className="tag-list tag-list--project">
            {primaryTags.map((item) => (
              <span className="tag tag--primary" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-card__footer">
        <span className="project-card__meta-label">Link</span>
        <div className="project-card__cta-row" aria-label={`${project.title} links`}>
          {cardLinks.map((link) =>
            link.kind === "detail" ? (
              <Link className="button-link project-card__cta project-card__cta--primary" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ) : (
              <a
                className="button-link button-link--secondary project-card__cta"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
