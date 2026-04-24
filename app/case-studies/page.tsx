import Link from "next/link";

import { PageSummary } from "@/components/page-summary";
import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";

export default function CaseStudiesPage() {
  const projectTitleMap = new Map(
    projects.map((project) => [project.slug, project.title] as const),
  );
  const linkedProjectCount = new Set(caseStudies.flatMap((item) => item.linkedProjects)).size;

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div className="page-header__lead">
            <span className="eyebrow">Case Studies</span>
            <h1 className="page-title">프로젝트 뒤에 있는 문제 해결 방식</h1>
            <p className="page-intro">
              개별 프로젝트 설명을 반복하기보다, 여러 작업에 공통으로 적용한 사고방식과 해석 프레임을 정리한 페이지입니다.
            </p>
          </div>

          <PageSummary
            ariaLabel="case studies summary"
            focusItems={["공통 프레임", "해석 기준", "판단 순서"]}
            metrics={[
              { label: "Records", value: caseStudies.length },
              { label: "Linked Projects", value: linkedProjectCount },
            ]}
          />
        </section>

        <div className="highlight-grid">
          {caseStudies.map((caseStudy) => (
            <article className="summary-card summary-card--spacious" id={caseStudy.slug} key={caseStudy.slug}>
              <span className="tag tag--accent">{caseStudy.category}</span>
              <h2>{caseStudy.title}</h2>
              <p>{caseStudy.summary}</p>
              <div className="project-card__block">
                <span className="project-card__label">핵심 접근</span>
                <ul className="list-stack compact-list">
                  {caseStudy.keyMoves.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__block">
                <span className="project-card__label">연결 프로젝트</span>
                <div className="tag-list">
                  {caseStudy.linkedProjects.map((slug) => (
                    <Link className="tag" href={`/projects/${slug}`} key={slug}>
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
