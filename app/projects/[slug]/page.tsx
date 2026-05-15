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

function renderMultilineText(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={`${text}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function getProjectLinkLabel(label: string, href: string) {
  const normalizedLabel = label.toLowerCase();
  const normalizedHref = href.toLowerCase();

  if (normalizedHref.includes("github.com")) {
    return "GitHub 저장소 보기";
  }

  if (
    normalizedHref.includes("github.io") ||
    normalizedLabel.includes("live") ||
    normalizedLabel.includes("서비스") ||
    normalizedLabel.includes("웹")
  ) {
    return "공개 서비스 열기";
  }

  if (normalizedLabel.includes("tableau")) {
    return "Tableau 결과물 보기";
  }

  return label;
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
  const sortedProjects = [...projects].sort((left, right) => left.sortOrder - right.sortOrder);
  const currentProjectIndex = sortedProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = sortedProjects[(currentProjectIndex + 1) % sortedProjects.length];
  const isRedveil = project.slug === "seoul-storefront-redveil";
  const detailHeroFacts = [
    { label: "주요 도메인", value: project.primaryDomain },
    { label: "역할", value: project.role.join(" / ") },
    { label: "기간", value: project.period },
    { label: "형태", value: project.format },
  ];
  const detailHeroLinks = project.links.slice(0, 2).map((link) => ({
    ...link,
    label: getProjectLinkLabel(link.label, link.href),
  }));
  const detailLinks = project.links.map((link) => ({
    ...link,
    label: getProjectLinkLabel(link.label, link.href),
  }));
  const evidenceSnapshot =
    project.evidencePoints && project.evidencePoints.length > 0
      ? project.evidencePoints
      : [
          { label: "Key Evidence", value: project.decisionMoment.keyEvidence },
          { label: "Final Deliverable", value: project.decisionMoment.finalDeliverable },
          { label: "What this proves", value: project.decisionMoment.proves },
        ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid project-detail">
        <section className="surface-card detail-hero">
          <Link className="back-link" href="/projects">
            프로젝트 목록
          </Link>
          <div className="detail-hero__topline">
            <div className="tag-list" aria-label="Project badges">
              <span className="tag tag--accent">{project.category}</span>
              {project.badges.map((badge) => (
                <span className="tag" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <span className="detail-hero__stamp">Project Detail</span>
          </div>
          <h1 className="page-title detail-title">{project.title}</h1>
          <p className="detail-hero__supporting-line">{renderMultilineText(project.review.decisionQuestion)}</p>
          <p className="page-intro detail-hero__summary">{renderMultilineText(project.summary)}</p>

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
          <section className="surface-card detail-section detail-decision">
            <div className="detail-section__head">
              <span className="eyebrow">Decision Moment</span>
              <h2 className="section-title">질문이 바뀐 순간</h2>
              <p className="page-intro">
                이 프로젝트가 단순 분석에서 의사결정 구조로 넘어간 핵심 장면입니다.
              </p>
            </div>

            <div className="detail-decision__frame">
              <div className="detail-decision__question-flow" aria-label="decision question shift">
                <div className="detail-decision__question">
                  <span>Original Question</span>
                  <strong>{project.decisionMoment.originalQuestion}</strong>
                </div>
                <div className="detail-decision__connector" aria-hidden="true">
                  to
                </div>
                <div className="detail-decision__question detail-decision__question--reframed">
                  <span>Reframed Question</span>
                  <strong>{project.decisionMoment.reframedQuestion}</strong>
                </div>
              </div>

              <dl className="detail-decision__proof-grid">
                <div className="detail-decision__proof detail-decision__proof--evidence">
                  <dt>Key Evidence</dt>
                  <dd>{project.decisionMoment.keyEvidence}</dd>
                </div>
                <div className="detail-decision__proof">
                  <dt>Final Deliverable</dt>
                  <dd>{project.decisionMoment.finalDeliverable}</dd>
                </div>
                <div className="detail-decision__proof detail-decision__proof--wide">
                  <dt>What this proves</dt>
                  <dd>{project.decisionMoment.proves}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="surface-card detail-section detail-section--evidence">
            <div className="detail-section__head">
              <span className="eyebrow">Evidence Snapshot</span>
              <h2 className="section-title">근거 스냅샷</h2>
              <p className="page-intro">숫자가 있는 프로젝트는 검증 지표를 먼저, 데이터가 부족한 프로젝트는 확인 가능한 산출물 중심으로 정리했습니다.</p>
            </div>
            <div className="detail-evidence-grid">
              {evidenceSnapshot.map((item, index) => (
                <article
                  className={index === 0 ? "detail-evidence-item detail-evidence-item--lead" : "detail-evidence-item"}
                  key={`${project.slug}-${item.label}`}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section detail-section--context">
            <div className="detail-section__head">
              <span className="eyebrow">Problem / Context</span>
              <h2 className="section-title">문제와 맥락</h2>
            </div>
            <dl className="detail-scope-strip" aria-label="project scope">
              {detailHeroFacts.map((item) => (
                <div className="detail-scope-strip__item" key={`${project.slug}-${item.label}`}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="detail-context-grid">
              <article className="detail-note detail-note--context">
                <span className="project-card__meta-label">Context</span>
                <p>{project.context}</p>
              </article>
              <div className="detail-split-grid">
                <div className="detail-note">
                  <span className="project-card__meta-label">Problem</span>
                  <p>{project.detailBrief.problem.what}</p>
                </div>
                <div className="detail-note">
                  <span className="project-card__meta-label">Why it mattered</span>
                  <p>{project.detailBrief.problem.why}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Data & Method</span>
              <h2 className="section-title">데이터와 접근</h2>
            </div>
            <div className="detail-method-grid">
              <div className="detail-note">
                <span className="project-card__meta-label">데이터</span>
                <ul className="list-stack list-stack--compact">
                  {project.detailBrief.dataMethod.dataTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-note">
                <span className="project-card__meta-label">접근</span>
                <ul className="list-stack list-stack--compact">
                  {project.detailBrief.dataMethod.process.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-note">
                <span className="project-card__meta-label">지표 / 기준</span>
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
              <h2 className="section-title">결과물</h2>
            </div>
            <p className="page-intro">{project.outcome}</p>
            <div className="detail-output-chips" aria-label="project outputs">
              {project.cardBrief.output.map((item) => (
                <span className="detail-output-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
            {isRedveil ? (
              <p className="detail-footnote">
                본 프로젝트는 공개 데이터를 기반으로 한 분석 포트폴리오이며, 실제 투자 판단을 대체하지 않습니다.
              </p>
            ) : null}
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Key Insight</span>
              <h2 className="section-title">핵심 포인트</h2>
            </div>
            <ul className="list-stack">
              {project.focusPoints.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Limits / Notes</span>
              <h2 className="section-title">한계와 검토 메모</h2>
              <p className="page-intro">검증 범위와 추가로 확인해야 할 조건을 숨기지 않고 함께 남겼습니다.</p>
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
              <h2 className="section-title">확인 가능한 산출물</h2>
            </div>
            {detailLinks.length > 0 ? (
              <div className="detail-links">
                {detailLinks.map((link) => (
                  <a
                    className="button-link button-link--secondary"
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
                      연결 글 보기
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : nextProject ? (
            <section className="surface-card detail-section">
              <div className="detail-section__head">
                <span className="eyebrow">Next Project</span>
                <h2 className="section-title">다음 프로젝트</h2>
              </div>
              <article className="related-card related-card--next">
                <span className="project-card__meta-label">{nextProject.primaryDomain}</span>
                <h3>{nextProject.title}</h3>
                <p>{nextProject.decisionMoment.reframedQuestion}</p>
                <Link className="button-link button-link--secondary" href={`/projects/${nextProject.slug}`}>
                  다음 프로젝트 보기
                </Link>
              </article>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
