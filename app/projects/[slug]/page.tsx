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
  const isRedveil = project.slug === "seoul-storefront-redveil";
  const detailHeroFacts = [
    { label: "주요 도메인", value: project.primaryDomain },
    { label: "역할", value: project.role.join(" / ") },
    { label: "기간", value: project.period },
    { label: "형태", value: project.format },
  ];
  const detailHeroLinks = project.links.slice(0, 2).map((link) => ({
    ...link,
    label: link.label.includes("GitHub")
      ? "GitHub 보기"
      : link.label.includes("Live") || link.label.includes("웹")
        ? "서비스 보기"
        : link.label,
  }));
  const detailLinks = project.links.map((link) => ({
    ...link,
    label: link.label.includes("GitHub")
      ? "GitHub 보기"
      : link.label.includes("Live") || link.label.includes("웹")
        ? "서비스 보기"
        : link.label,
  }));

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card detail-hero">
          <Link className="back-link" href="/projects">
            프로젝트 목록
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
          <p className="detail-hero__supporting-line">{renderMultilineText(project.review.decisionQuestion)}</p>
          <p className="page-intro detail-hero__summary">{renderMultilineText(project.summary)}</p>

          <div className="detail-hero__meta-grid" aria-label="project quick facts">
            {detailHeroFacts.map((item) => (
              <div className="detail-hero__meta-item" key={`${project.slug}-${item.label}`}>
                <span className="project-card__meta-label">{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="detail-hero__context">
            <span className="project-card__meta-label">배경</span>
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
          <section className="surface-card detail-section detail-decision">
            <div className="detail-section__head">
              <span className="eyebrow">Decision Moment</span>
              <h2 className="section-title">질문을 바꾼 장면</h2>
              <p className="page-intro">
                프로젝트마다 분석의 방향을 바꾼 질문, 핵심 근거, 최종 산출물을 먼저 확인할 수 있습니다.
              </p>
            </div>

            <dl className="detail-decision-grid">
              <div className="detail-overview-item">
                <dt>Original Question</dt>
                <dd>{project.decisionMoment.originalQuestion}</dd>
              </div>
              <div className="detail-overview-item detail-overview-item--wide">
                <dt>Reframed Question</dt>
                <dd>{project.decisionMoment.reframedQuestion}</dd>
              </div>
              <div className="detail-overview-item">
                <dt>Key Evidence</dt>
                <dd>{project.decisionMoment.keyEvidence}</dd>
              </div>
              <div className="detail-overview-item">
                <dt>Final Deliverable</dt>
                <dd>{project.decisionMoment.finalDeliverable}</dd>
              </div>
              <div className="detail-overview-item detail-overview-item--wide">
                <dt>What this proves</dt>
                <dd>{project.decisionMoment.proves}</dd>
              </div>
            </dl>
          </section>

          <section className="surface-card detail-section">
            <div className="detail-section__head">
              <span className="eyebrow">Overview</span>
              <h2 className="section-title">프로젝트 개요</h2>
              <p className="page-intro">프로젝트 범위와 역할을 빠르게 훑을 수 있도록 핵심 정보를 먼저 압축했습니다.</p>
            </div>

            <dl className="detail-overview-grid">
              <div className="detail-overview-item detail-overview-item--wide">
                <dt>핵심 결과</dt>
                <dd>{renderMultilineText(project.outcome)}</dd>
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
              <h2 className="section-title">핵심 과제</h2>
            </div>
            <div className="detail-split-grid">
              <div className="detail-note">
                <span className="project-card__meta-label">무엇을 풀었는가</span>
                <p>{project.detailBrief.problem.what}</p>
              </div>
              <div className="detail-note">
                <span className="project-card__meta-label">왜 중요했는가</span>
                <p>{project.detailBrief.problem.why}</p>
              </div>
            </div>
          </section>

          {project.evidencePoints && project.evidencePoints.length > 0 ? (
            <section className="surface-card detail-section detail-section--evidence">
              <div className="detail-section__head">
                <span className="eyebrow">Evidence Snapshot</span>
                <h2 className="section-title">핵심 근거</h2>
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
              <span className="eyebrow">Notes</span>
              <h2 className="section-title">검토 메모</h2>
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
              <h2 className="section-title">바로가기</h2>
            </div>
            {detailLinks.length > 0 ? (
              <div className="detail-links">
                {detailLinks.map((link) => (
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
                      연결 글 보기
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
