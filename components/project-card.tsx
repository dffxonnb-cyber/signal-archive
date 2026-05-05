import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

const statusLabels: Record<Project["status"], string> = {
  featured: "Featured",
  supporting: "Supporting",
  archive: "Archive",
};

function getProjectMark(title: string) {
  const mark = title
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return mark || "AR";
}

function getProjectTone(project: Project) {
  if (project.status === "featured") {
    return "forest";
  }

  if (project.primaryDomain.includes("스포츠")) {
    return "slate";
  }

  return "graphite";
}

function getLinkLabel(label: string) {
  if (label.includes("GitHub")) {
    return "GitHub 보기";
  }

  if (label.includes("Live") || label.includes("웹") || label.includes("서비스")) {
    return "서비스 보기";
  }

  return label;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visual = { mark: getProjectMark(project.title), tone: getProjectTone(project) };
  const projectIndex = String(project.sortOrder).padStart(2, "0");
  const primaryTags = project.coreTags.slice(0, 3);
  const metricChips = project.metrics;
  const isPriority = project.status === "featured";
  const statusChips = [
    statusLabels[project.status],
    project.format,
    !isPriority ? project.badges.find((badge) => badge !== "Featured") : null,
  ].filter(Boolean) as string[];
  const keyEvidence = project.evidencePoints?.[0]
    ? project.evidencePoints[0]
    : {
        label: "핵심 포인트",
        value: project.focusPoints[0] ?? project.outcome,
      };
  const cardLinks = [
    { type: "primary" as const, label: "상세 보기", href: `/projects/${project.slug}`, external: false },
    ...project.links.map((link) => ({
      type: link.type ?? ("secondary" as const),
      label: getLinkLabel(link.label),
      href: link.href,
      external: true,
    })),
  ];

  return (
    <article className={`project-card ${isPriority ? "project-card--featured" : "project-card--supporting"}`}>
      {isPriority ? <span className="project-card__accent-line" aria-hidden="true" /> : null}

      <div className="project-card__meta-row">
        <span className="chip chip--category">{project.primaryDomain}</span>
        {statusChips.slice(0, 2).map((item) => (
          <span className="chip chip--status" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-card__hero">
        <div className={`project-card__media project-card__media--${visual.tone}`}>{visual.mark}</div>
        <div className="project-card__header">
          <div className="project-card__header-top">
            <span className="project-card__code">No. {projectIndex}</span>
            <span className="project-card__eyebrow">{project.period}</span>
          </div>
          <h2 className="project-card__title">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h2>
          <p className="project-card__definition">{project.supportingLine}</p>
        </div>
      </div>

      <p className="project-card__summary">{project.cardBrief.method}</p>

      <div className="project-card__proof-stack">
        <span className="project-card__meta-label">{keyEvidence.label}</span>
        <p className="project-card__brief-copy">{keyEvidence.value}</p>
      </div>

      {metricChips.length > 0 ? (
        <div className="project-card__metric-row" aria-label={`${project.title} key metrics`}>
          {metricChips.slice(0, isPriority ? 3 : 2).map((item) => (
            <span className="chip chip--metric" key={`${item.label}-${item.value}`}>
              {item.value}
            </span>
          ))}
        </div>
      ) : null}

      <div className="project-card__tag-row" aria-label={`${project.title} focus tags`}>
        {primaryTags.map((item) => (
          <span className="chip chip--quiet" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-card__brief-grid">
        <div className="project-card__brief-block">
          <span className="project-card__meta-label">역할</span>
          <p className="project-card__brief-copy">{project.role.slice(0, 2).join(" · ")}</p>
        </div>
        <div className="project-card__brief-block">
          <span className="project-card__meta-label">도구</span>
          <p className="project-card__brief-copy">{project.stack.slice(0, 3).join(" · ")}</p>
        </div>
      </div>

      <div className="project-card__footer">
        <span className="project-card__meta-label">바로가기</span>
        <div className="project-card__cta-row" aria-label={`${project.title} links`}>
          {cardLinks.map((link) =>
            !link.external ? (
              <Link className="button-link project-card__cta project-card__cta--primary" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ) : (
              <a
                className={`button-link ${
                  link.type === "text" ? "button-link--text" : "button-link--secondary"
                } project-card__cta`}
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
