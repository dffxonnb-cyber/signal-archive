import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";

const lensSteps = [
  {
    index: "01",
    title: "공통 프레임",
    description: "여러 프로젝트에 반복 적용한 문제 정의 방식",
  },
  {
    index: "02",
    title: "해석 기준",
    description: "숫자를 의사결정 기준으로 바꾸는 방식",
  },
  {
    index: "03",
    title: "판단 순서",
    description: "추천보다 보류 사유, 결과보다 다음 행동을 먼저 설계",
  },
] as const;

const caseMethodLabels: Record<string, { label: string; subtitle: string }> = {
  "risk-signals-before-volume": {
    label: "Case 01 · Risk-first Framing",
    subtitle: "리스크 우선 프레이밍",
  },
  "turn-analysis-into-a-decision-tool": {
    label: "Case 02 · Decision Tool Design",
    subtitle: "의사결정 도구 설계",
  },
  "segmenting-for-business-meaning": {
    label: "Case 03 · Actionable Segmentation",
    subtitle: "실행 가능한 세분화",
  },
};

export default function CaseStudiesPage() {
  const projectTitleMap = new Map(
    projects.map((project) => [project.slug, project.title] as const),
  );
  const linkedProjectCount = new Set(caseStudies.flatMap((item) => item.linkedProjects)).size;

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div className="page-header__lead case-studies-header__lead">
            <span className="eyebrow">Case Studies</span>
            <h1 className="page-title">문제 해결 방식</h1>
            <p className="page-intro case-studies-header__intro">
              프로젝트마다 다른 데이터를 다뤘지만, 문제를 정의하고 해석 기준을 세우고 판단 흐름을
              설계하는 방식은 반복되었습니다. 이 페이지는 그 공통된 사고방식을 정리한 기록입니다.
            </p>
          </div>

          <section aria-label="case study lens" className="case-lens">
            <div className="case-lens__head">
              <span className="case-lens__eyebrow">Case Study Lens</span>
              <h2 className="case-lens__title">Thinking framework archive</h2>
              <p className="case-lens__description">
                숫자 요약은 간결하게 두고, 실제로 반복된 해석 구조와 판단 순서가 먼저 읽히도록 구성한
                인사이트 패널입니다.
              </p>
            </div>

            <div className="case-lens__grid">
              <div className="case-lens__stats" aria-label="case study stats">
                <article className="case-lens__stat-card">
                  <span className="case-lens__stat-label">Records</span>
                  <strong className="case-lens__stat-value">{caseStudies.length}</strong>
                  <p className="case-lens__stat-note">정리된 사고 기록</p>
                </article>

                <article className="case-lens__stat-card">
                  <span className="case-lens__stat-label">Linked Projects</span>
                  <strong className="case-lens__stat-value">{linkedProjectCount}</strong>
                  <p className="case-lens__stat-note">근거로 연결된 프로젝트</p>
                </article>
              </div>

              <div className="case-lens__framework">
                <div className="case-lens__framework-head">
                  <span className="case-lens__section-label">Focus Framework</span>
                  <p className="case-lens__framework-note">
                    프로젝트 소개보다 앞서, 어떤 사고 흐름이 반복되었는지 바로 파악할 수 있게
                    정리했습니다.
                  </p>
                </div>

                <ol className="case-lens__flow">
                  {lensSteps.map((step) => (
                    <li className="case-lens__flow-step" key={step.index}>
                      <span className="case-lens__flow-index">{step.index}</span>
                      <div className="case-lens__flow-copy">
                        <strong>{step.title}</strong>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </section>

        <div className="highlight-grid">
          {caseStudies.map((caseStudy) => (
            <article
              className="summary-card summary-card--spacious case-study-card"
              id={caseStudy.slug}
              key={caseStudy.slug}
            >
              <div className="case-study-card__top">
                <div className="case-study-card__method-stack">
                  <span className="case-study-card__method">
                    {caseMethodLabels[caseStudy.slug]?.label ?? "Case Study"}
                  </span>
                  {caseMethodLabels[caseStudy.slug]?.subtitle ? (
                    <span className="case-study-card__method-sub">
                      {caseMethodLabels[caseStudy.slug].subtitle}
                    </span>
                  ) : null}
                </div>
                <span className="tag tag--accent">{caseStudy.category}</span>
              </div>
              <h2>{caseStudy.title}</h2>
              <p className="case-study-card__summary">{caseStudy.summary}</p>
              <div className="project-card__block case-study-card__section">
                <span className="project-card__label">핵심 전개</span>
                <ul className="list-stack compact-list">
                  {caseStudy.keyMoves.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__block case-study-card__section case-study-card__section--quiet">
                <span className="project-card__label">연결 프로젝트</span>
                <div className="tag-list case-study-card__projects">
                  {caseStudy.linkedProjects.map((slug) => (
                    <Link className="case-study-card__project-link" href={`/projects/${slug}`} key={slug}>
                      {projectTitleMap.get(slug) ?? slug}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
