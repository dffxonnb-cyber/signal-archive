import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectCardVariant = "featured" | "supporting";

type ProjectCardProps = {
  project: Project;
  index?: number;
  variant?: ProjectCardVariant;
};

const statusLabels: Record<Project["status"], string> = {
  featured: "Featured",
  supporting: "Supporting",
  archive: "Archive",
};

const projectAccentClasses: Record<string, string> = {
  "lh-traffic-safety-analysis": "project-card--lh",
  "seoul-storefront-redveil": "project-card--redveil",
  "shelter-signal": "project-card--shelter",
  "starbucks-promotion-analysis": "project-card--starbucks",
};

const projectMediaTones: Record<string, string> = {
  "lh-traffic-safety-analysis": "steel",
  "seoul-storefront-redveil": "rust",
  "shelter-signal": "sage",
  "starbucks-promotion-analysis": "coffee",
};

const projectEvidenceLabels: Record<
  string,
  {
    label: string;
    detail: string;
  }
> = {
  "job-signal-pipeline": {
    label: "Engineering Evidence",
    detail: "mock/local · SQL QA · dashboard validation",
  },
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
  const tone = projectMediaTones[project.slug];

  if (tone) {
    return tone;
  }

  if (project.primaryDomain.includes("스포츠")) {
    return "slate";
  }

  return "graphite";
}

function getProjectAccentClass(project: Project) {
  return projectAccentClasses[project.slug] ?? "project-card--default";
}

function getLinkLabel(label: string) {
  if (label.includes("GitHub")) {
    return "GitHub 보기";
  }

  if (label.includes("Live") || label.includes("웹") || label.includes("서비스") || label.includes("대시보드")) {
    return "서비스 보기";
  }

  return label;
}

export function ProjectCard({ project, index, variant = "featured" }: ProjectCardProps) {
  const visual = {
    accentClass: getProjectAccentClass(project),
    mark: getProjectMark(project.title),
    tone: getProjectTone(project),
  };
  const projectIndex = String(index ?? project.sortOrder).padStart(2, "0");
  const evidenceLabel = projectEvidenceLabels[project.slug];
  const metricChips = project.metrics;
  const operationChips = project.operationMeta
    ? [
      { label: "Verified", value: project.operationMeta.lastVerifiedAt },
      { label: "Source", value: project.operationMeta.source },
      ]
      :[];
  
  const isPriority = variant === "featured";
  const projectType = project.problemTypes[0] ?? project.format;
  const tools = (project.cardTools.length > 0 ? project.cardTools : project.stack).slice(0, 4);
  const statusChips = [
    statusLabels[project.status],
    project.format,
    !isPriority ? project.badges.find((badge) => badge !== "Featured") : null,
  ].filter(Boolean) as string[];
  const proofBlocks = [
    { label: "My Role", value: project.review.myRole },
    { label: "Deliverable", value: project.review.deliverable },
  ];
  const cardLinks = [
    { type: "primary" as const, label: "상세 보기", href: `/projects/${project.slug}`, external: false },
    ...project.links.map((link) => ({
      type: link.type ?? ("secondary" as const),
      label: getLinkLabel(link.label),
      href: link.href,
      external: true,
    })),
  ];

  if (variant === "supporting") {
    return (
      <article
        className={`project-card project-card--supporting-proof ${visual.accentClass}`}
        aria-label={`${project.title} project proof card`}
      >
        <div className="project-card__supporting-head">
          <h2 className="project-card__title">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h2>
          <span className="project-card__eyebrow">{project.period}</span>
          {evidenceLabel ? (
            <div className="project-card__evidence-label">
              <span>{evidenceLabel.label}</span>
              <strong>{evidenceLabel.detail}</strong>
            </div>
          ) : null}
        </div>

        <div className="project-card__supporting-proof">
          <span className="project-card__meta-label">Decision Question</span>
          <p>{project.review.decisionQuestion}</p>
        </div>

        <div className="project-card__supporting-signal">
          <span className="project-card__meta-label">What it proves</span>
          <p>{project.review.hiringSignal}</p>
        </div>

        <div className="project-card__tools" aria-label={`${project.title} tools`}>
          {tools.map((tool) => (
            <span className="chip chip--quiet" key={tool}>
              {tool}
            </span>
          ))}
        </div>

        <div className="project-card__cta-row project-card__cta-row--compact" aria-label={`${project.title} links`}>
          {cardLinks.slice(0, 2).map((link) =>
            !link.external ? (
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
      </article>
    );
  }

  return (
    <article
      className={`project-card project-card--featured-proof ${visual.accentClass}`}
      aria-label={`${project.title} featured proof card`}
    >
      <span className="project-card__accent-line" aria-hidden="true" />

      <div className="project-card__board-top">
        <span className="project-card__board-index">{projectIndex}</span>
        <div className="project-card__meta-row">
          <span className="chip chip--category">{project.primaryDomain}</span>
          <span className="chip chip--status">{projectType}</span>
          {statusChips.slice(0, 1).map((item) => (
            <span className="chip chip--status" key={item}>
              {item}
            </span>
          ))}
        </div>
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
        </div>
      </div>

      <div className="project-card__decision">
        <span className="project-card__meta-label">Decision Question</span>
        <p>{project.review.decisionQuestion}</p>
      </div>

      <div className="project-card__evidence-panel">
        <span className="project-card__meta-label">Evidence</span>
        <p>{project.review.evidence}</p>
        {metricChips.length > 0 ? (
          <div className="project-card__metric-strip" aria-label={`${project.title} key metrics`}>
            {metricChips.slice(0, 3).map((item) => (
              <span className="project-card__metric-pill" key={`${item.label}-${item.value}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </span>
            ))}
          </div>
        ) : null}

                {operationChips.length > 0 ? (
          <div className="project-card__operation-strip" aria-label={`${project.title} operation metadata`}>
            {operationChips.map((item) => (
              <span className="project-card__operation-pill" key={`${item.label}-${item.value}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </span>
            ))}
          </div>
        ) : null}
        </div>

      <div className="project-card__proof-grid" aria-label={`${project.title} hiring review fields`}>
        {proofBlocks.map((item) => (
          <div className="project-card__proof-item" key={item.label}>
            <span className="project-card__meta-label">{item.label}</span>
            <p className="project-card__brief-copy">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="project-card__tools" aria-label={`${project.title} tools`}>
        {tools.map((item) => (
          <span className="chip chip--quiet" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-card__hiring-signal">
        <span className="project-card__meta-label">Hiring Signal</span>
        <p>{project.review.hiringSignal}</p>
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
