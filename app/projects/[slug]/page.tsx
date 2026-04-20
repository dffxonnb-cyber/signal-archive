import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((caseStudy) =>
    project.caseStudySlugs.includes(caseStudy.slug),
  );
  const detailHeroFacts = [
    { label: "Primary Domain", value: project.primaryDomain },
    { label: "Role", value: project.role.join(" / ") },
    { label: "Period", value: project.period },
    { label: "Format", value: project.format },
  ];
  const detailHeroLinks = project.links.slice(0, 2);

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card detail-hero">
          <Link className="back-link" href="/projects">
            Projects
          </Link>
          <div className="tag-list" aria-label="Project badges">
            <span className="tag tag--accent">{project.category}</span>
            {project.badges.map((badge) => (
              <span className="tag" key={badge}>
                {badge}
              </span>
            ))}
          </div>
          <h1 className="page-title detail-title">{project.title}</h1>
          <p className="detail-hero__supporting-line">{project.supportingLine}</p>
          <p className="page-intro detail-hero__summary">{project.summary}</p>

          <div className="detail-hero__meta-grid" aria-label="project quick facts">
            {detailHeroFacts.map((item) => (
              <div className="detail-hero__meta-item" key={`${project.slug}-${item.label}`}>
                <span className="project-card__meta-label">{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="detail-hero__context">
            <span className="project-card__meta-label">Context</span>
            <p>{project.context}</p>
          </div>

          {detailHeroLinks.length > 0 ? (
            <div className="button-row detail-hero__actions">
              {detailHeroLinks.map((link, index) => (
                <a
                  className={index === 0 ? "button-link" : "button-link button-link--secondary"}
                  href={link.href}
                  key={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </section>

        <div className="page-grid detail-flow">
          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Overview</span>
              <h2 className="section-title">Overview</h2>
              <p className="page-intro">프로젝트 범위와 역할을 빠르게 훑을 수 있도록 핵심 정보를 먼저 압축했습니다.</p>
            </div>

            <dl className="detail-overview-grid">
              <div className="detail-overview-item detail-overview-item--wide">
                <dt>프로젝트 한 줄 정의</dt>
                <dd>{project.summary}</dd>
              </div>
              <div className="detail-overview-item">
                <dt>도메인</dt>
                <dd>{project.domains.join(" / ")}</dd>
              </div>
              <div className="detail-overview-item">
                <dt>역할</dt>
                <dd>{project.role.join(", ")}</dd>
              </div>
              <div className="detail-overview-item">
                <dt>사용 기술</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
              <div className="detail-overview-item">
                <dt>기간 / 진행 상태</dt>
                <dd>
                  {project.period} / {project.format}
                </dd>
              </div>
            </dl>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Problem</span>
              <h2 className="section-title">Problem</h2>
            </div>
            <div className="detail-split-grid">
              <div className="detail-note">
                <span className="project-card__meta-label">What</span>
                <p>{project.detailBrief.problem.what}</p>
              </div>
              <div className="detail-note">
                <span className="project-card__meta-label">Why It Matters</span>
                <p>{project.detailBrief.problem.why}</p>
              </div>
            </div>
          </section>

          {project.evidencePoints && project.evidencePoints.length > 0 ? (
            <section className="surface-card detail-section detail-section--evidence">
              <div className="detail-section__head">
                <span className="eyebrow">Evidence Snapshot</span>
                <h2 className="section-title">Evidence Snapshot</h2>
              </div>
              <div className="detail-overview-grid detail-overview-grid--evidence">
                {project.evidencePoints.map((item) => (
                  <div className="detail-overview-item" key={`${project.slug}-${item.label}`}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Data & Method</span>
              <h2 className="section-title">Data & Method</h2>
            </div>
            <div className="detail-method-grid">
              <div className="detail-note">
                <span className="project-card__meta-label">Data</span>
                <ul className="list-stack list-stack--compact">
                  {project.detailBrief.dataMethod.dataTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-note">
                <span className="project-card__meta-label">Method</span>
                <ul className="list-stack list-stack--compact">
                  {project.detailBrief.dataMethod.process.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-note">
                <span className="project-card__meta-label">Metric / Criteria</span>
                <ul className="list-stack list-stack--compact">
                  {project.detailBrief.dataMethod.metrics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="surface-card detail-section detail-section--output">
            <div className="detail-section__head">
              <span className="eyebrow">Output</span>
              <h2 className="section-title">Output</h2>
            </div>
            <p className="page-intro">{project.outcome}</p>
            <div className="detail-output-chips" aria-label="project outputs">
              {project.cardBrief.output.map((item) => (
                <span className="detail-output-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Key Insight</span>
              <h2 className="section-title">Key Insight</h2>
            </div>
            <ul className="list-stack">
              {project.focusPoints.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Limitations</span>
              <h2 className="section-title">Limitations</h2>
            </div>
            <ul className="list-stack">
              {project.detailBrief.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Links</span>
              <h2 className="section-title">Links</h2>
            </div>
            {project.links.length > 0 ? (
              <div className="detail-links">
                {project.links.map((link) => (
                  <a
                    className="button-link button-link--secondary"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
            {project.detailBrief.linkNote ? <p className="page-intro">{project.detailBrief.linkNote}</p> : null}
          </section>

          {relatedCaseStudies.length > 0 ? (
            <section className="surface-card detail-section">
              <div className="detail-section__head">
                <span className="eyebrow">Case Studies</span>
                <h2 className="section-title">연결된 문제 해결 방식</h2>
              </div>
              <div className="related-grid">
                {relatedCaseStudies.map((caseStudy) => (
                  <article className="related-card" key={caseStudy.slug}>
                    <h3>{caseStudy.title}</h3>
                    <p>{caseStudy.summary}</p>
                    <Link className="button-link button-link--secondary" href={`/case-studies#${caseStudy.slug}`}>
                      Case Studies에서 보기
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
