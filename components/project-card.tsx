import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

const priorityProjectSlugs = new Set([
  "seoul-storefront-redveil",
  "lh-traffic-safety-analysis",
  "starbucks-promotion-analysis",
]);

const metricChipMap: Record<string, string[]> = {
  "lh-traffic-safety-analysis": ["AUC 0.8604", "Top-10% Lift 4.39x"],
  "seoul-storefront-redveil": ["25 Seoul Districts", "12,074 Transactions", "428 Dongs"],
  "uk-online-retail-segment-analysis": ["Top 20% = 73.5% Sales", "84.2% MoM Drop"],
  "starbucks-promotion-analysis": ["AUC 0.8147", "Recall 0.8712", "NDCG@5 1.0000"],
  "shopeasy": ["1,000 Orders", "6.38% Mobile CVR", "52.34% Electronics"],
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
    case "shopeasy":
      return { mark: "SE", tone: "graphite" };
    default:
      return { mark: "AR", tone: "graphite" };
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visual = getProjectVisual(project.slug);
  const projectIndex = String(project.sortOrder).padStart(2, "0");
  const primaryTags = project.coreTags.slice(0, 3);
  const metricChips = metricChipMap[project.slug] ?? [];
  const statusChips = [
    priorityProjectSlugs.has(project.slug) ? "Featured" : null,
    project.format,
    project.badges.find((badge) => badge !== "Featured"),
  ].filter(Boolean) as string[];
  const isPriority = priorityProjectSlugs.has(project.slug);
  const keyEvidence = project.evidencePoints?.[0]
    ? project.evidencePoints[0]
    : {
        label: "핵심 포인트",
        value: project.focusPoints[0] ?? project.outcome,
      };
  const cardLinks = [
    { kind: "detail" as const, label: "상세 보기", href: `/projects/${project.slug}` },
    ...project.links.map((link) => ({
      kind: link.label.includes("Live") ? ("live" as const) : ("external" as const),
      label: link.label.includes("GitHub")
        ? "GitHub 보기"
        : link.label.includes("Live") || link.label.includes("웹")
          ? "서비스 보기"
          : link.label,
      href: link.href,
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
            <span className="chip chip--metric" key={item}>
              {item}
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
