import Link from "next/link";
import type { ReactNode } from "react";

type PageSideModuleVariant =
  | "identitySnapshot"
  | "projectIndex"
  | "dossierSummary"
  | "notebookPanel"
  | "recruiterChecklist"
  | "contactDock";

type SideMetric = {
  label: string;
  value: number | string;
  note?: string;
};

type SideLink = {
  label: string;
  href: string;
  detail?: string;
  kind?: "internal" | "external";
  tone?: "primary" | "secondary";
};

type PageSideModuleProps = {
  variant: PageSideModuleVariant;
  eyebrow: string;
  title: string;
  description?: string;
  ariaLabel?: string;
  children: ReactNode;
};

type IdentitySnapshotModuleProps = {
  stats: SideMetric[];
  roles: string[];
  secondaryRoles?: string[];
  domains: string[];
  stack: string[];
  projectSignals: SideLink[];
  ariaLabel?: string;
};

type ProjectIndexModuleProps = {
  stats: SideMetric[];
  domainChips: string[];
  typeChips: string[];
  quickLinks: SideLink[];
  ariaLabel?: string;
};

type DossierSummaryModuleProps = {
  metrics: SideMetric[];
  focusItems: string[];
  note?: string;
  ariaLabel?: string;
};

type NotebookPanelModuleProps = {
  quote: string;
  meta: SideMetric[];
  tags: string[];
  note?: string;
  ariaLabel?: string;
};

type RecruiterChecklistItem = {
  label: string;
  detail: string;
};

type RecruiterChecklistModuleProps = {
  checklist: RecruiterChecklistItem[];
  skillMatrix: SideMetric[];
  roleFit: string[];
  ariaLabel?: string;
};

type ContactDockModuleProps = {
  links: SideLink[];
  note?: string;
  ariaLabel?: string;
};

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function PageSideModule({
  variant,
  eyebrow,
  title,
  description,
  ariaLabel,
  children,
}: PageSideModuleProps) {
  return (
    <aside
      aria-label={ariaLabel}
      className={joinClassNames("page-side-module", `page-side-module--${variant}`)}
    >
      <div className="page-side-module__head">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="page-side-module__title">{title}</h2>
        {description ? <p className="page-side-module__description">{description}</p> : null}
      </div>
      <div className="page-side-module__body">{children}</div>
    </aside>
  );
}

function SideMetricGrid({
  items,
  className,
}: {
  items: SideMetric[];
  className?: string;
}) {
  return (
    <div className={joinClassNames("page-side-module__metric-grid", className)}>
      {items.map((item) => (
        <article className="page-side-module__metric" key={item.label}>
          <span className="page-side-module__metric-label">{item.label}</span>
          <strong className="page-side-module__metric-value">{item.value}</strong>
          {item.note ? <span className="page-side-module__metric-note">{item.note}</span> : null}
        </article>
      ))}
    </div>
  );
}

function SideLinkItem({
  item,
  className,
}: {
  item: SideLink;
  className?: string;
}) {
  const isMailto = item.href.startsWith("mailto:");
  const sharedClassName = joinClassNames(
    "page-side-module__link-card",
    item.tone === "primary" ? "page-side-module__link-card--primary" : undefined,
    className,
  );

  const content = (
    <>
      <strong>{item.label}</strong>
      {item.detail ? <span>{item.detail}</span> : null}
    </>
  );

  if (item.kind === "internal") {
    return (
      <Link className={sharedClassName} href={item.href}>
        {content}
      </Link>
    );
  }

  if (isMailto) {
    return (
      <a className={sharedClassName} href={item.href}>
        {content}
      </a>
    );
  }

  return (
    <a className={sharedClassName} href={item.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}

export function IdentitySnapshotModule({
  stats,
  roles,
  secondaryRoles = [],
  domains,
  stack,
  projectSignals,
  ariaLabel = "identity snapshot",
}: IdentitySnapshotModuleProps) {
  return (
    <PageSideModule
      ariaLabel={ariaLabel}
      description="역할, 도메인, 핵심 스택, 대표 프로젝트 신호를 한 번에 읽을 수 있게 정리했습니다."
      eyebrow="Identity Snapshot"
      title="Analyst Status Panel"
      variant="identitySnapshot"
    >
      <SideMetricGrid className="page-side-module__metric-grid--compact" items={stats} />

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Role</span>
        <div className="page-side-module__pill-row">
          {roles.map((role) => (
            <span className="page-side-module__pill page-side-module__pill--accent" key={role}>
              {role}
            </span>
          ))}
        </div>
        {secondaryRoles.length > 0 ? (
          <p className="page-side-module__supporting-text">
            확장 역할 · {secondaryRoles.join(" / ")}
          </p>
        ) : null}
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Domains</span>
        <div className="page-side-module__pill-row">
          {domains.map((domain) => (
            <span className="page-side-module__pill" key={domain}>
              {domain}
            </span>
          ))}
        </div>
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Stack</span>
        <div className="page-side-module__pill-row">
          {stack.map((item) => (
            <span className="page-side-module__pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Project Signal</span>
        <div className="page-side-module__link-stack">
          {projectSignals.map((signal) => (
            <SideLinkItem className="page-side-module__signal-link" item={signal} key={signal.href} />
          ))}
        </div>
      </div>
    </PageSideModule>
  );
}

export function ProjectIndexModule({
  stats,
  domainChips,
  typeChips,
  quickLinks,
  ariaLabel = "project index",
}: ProjectIndexModuleProps) {
  return (
    <PageSideModule
      ariaLabel={ariaLabel}
      description="필터에 들어가기 전에 프로젝트 수, 핵심 도메인, 대표 유형, 빠른 이동 경로를 먼저 보여줍니다."
      eyebrow="Project Index"
      title="Filter Overview"
      variant="projectIndex"
    >
      <SideMetricGrid className="page-side-module__metric-grid--compact" items={stats} />

      <div className="page-side-module__two-column">
        <div className="page-side-module__section page-side-module__section--flush">
          <span className="page-side-module__section-label">Domains</span>
          <div className="page-side-module__pill-row">
            {domainChips.map((domain) => (
              <span className="page-side-module__pill" key={domain}>
                {domain}
              </span>
            ))}
          </div>
        </div>

        <div className="page-side-module__section page-side-module__section--flush">
          <span className="page-side-module__section-label">Types</span>
          <div className="page-side-module__pill-row">
            {typeChips.map((type) => (
              <span className="page-side-module__pill" key={type}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Quick Jump</span>
        <div className="page-side-module__link-stack">
          {quickLinks.map((item) => (
            <SideLinkItem item={item} key={item.href} />
          ))}
        </div>
      </div>
    </PageSideModule>
  );
}

export function DossierSummaryModule({
  metrics,
  focusItems,
  note,
  ariaLabel = "dossier summary",
}: DossierSummaryModuleProps) {
  return (
    <PageSideModule
      ariaLabel={ariaLabel}
      description={note ?? "프로젝트를 반복 설명하지 않고, 여러 작업에 공통으로 쓰인 해석 프레임만 따로 정리했습니다."}
      eyebrow="Dossier Summary"
      title="Archive Overview"
      variant="dossierSummary"
    >
      <SideMetricGrid items={metrics} />

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Focus</span>
        <div className="page-side-module__pill-row">
          {focusItems.map((item) => (
            <span className="page-side-module__pill page-side-module__pill--accent" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </PageSideModule>
  );
}

export function NotebookPanelModule({
  quote,
  meta,
  tags,
  note,
  ariaLabel = "notebook panel",
}: NotebookPanelModuleProps) {
  return (
    <PageSideModule
      ariaLabel={ariaLabel}
      description={note ?? "짧은 문장과 태그로 글의 결을 먼저 읽고, 아래 목록에서 실제 글로 내려갈 수 있게 구성했습니다."}
      eyebrow="Notebook Panel"
      title="Editorial Notes"
      variant="notebookPanel"
    >
      <div className="page-side-module__quote-strip">
        <p>{quote}</p>
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Tag Cloud</span>
        <div className="page-side-module__pill-row page-side-module__pill-row--quiet">
          {tags.map((tag) => (
            <span className="page-side-module__pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Notebook Index</span>
        <div className="page-side-module__line-list">
          {meta.map((item) => (
            <div className="page-side-module__line-item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </PageSideModule>
  );
}

export function RecruiterChecklistModule({
  checklist,
  skillMatrix,
  roleFit,
  ariaLabel = "recruiter checklist",
}: RecruiterChecklistModuleProps) {
  return (
    <PageSideModule
      ariaLabel={ariaLabel}
      description="채용 검토에서 바로 스캔할 항목과, 실제로 다루는 기술 축을 짧게 압축했습니다."
      eyebrow="Recruiter Checklist"
      title="Fast Hiring Scan"
      variant="recruiterChecklist"
    >
      <ul className="page-side-module__checklist">
        {checklist.map((item) => (
          <li className="page-side-module__check-item" key={item.label}>
            <span aria-hidden="true" className="page-side-module__check-mark">
              ✓
            </span>
            <div className="page-side-module__check-copy">
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Skill Matrix</span>
        <SideMetricGrid items={skillMatrix} />
      </div>

      <div className="page-side-module__section">
        <span className="page-side-module__section-label">Role Fit</span>
        <div className="page-side-module__pill-row">
          {roleFit.map((role) => (
            <span className="page-side-module__pill page-side-module__pill--accent" key={role}>
              {role}
            </span>
          ))}
        </div>
      </div>
    </PageSideModule>
  );
}

export function ContactDockModule({
  links,
  note,
  ariaLabel = "contact dock",
}: ContactDockModuleProps) {
  return (
    <PageSideModule
      ariaLabel={ariaLabel}
      description={note ?? "소개보다 이동 경로를 우선 두고, 바로 열 수 있는 공개 링크만 상단에 배치했습니다."}
      eyebrow="Contact Dock"
      title="Direct Access"
      variant="contactDock"
    >
      <div className="page-side-module__dock">
        {links.map((link) => (
          <SideLinkItem item={link} key={link.href} />
        ))}
      </div>
    </PageSideModule>
  );
}
