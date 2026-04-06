import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";

export default function CaseStudiesPage() {
  const projectTitleMap = new Map(
    projects.map((project) => [project.slug, project.title] as const),
  );

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div>
            <span className="eyebrow">Case Studies</span>
            <h1 className="page-title">프로젝트 뒤에 있는 문제 해결 방식</h1>
            <p className="page-intro">
              결과물보다 먼저 어떤 질문과 구조로 문제를 다뤘는지 따로 추출한 페이지입니다.
            </p>
          </div>

          <dl className="overview-stats">
            <div>
              <dt>Records</dt>
              <dd>{caseStudies.length}</dd>
            </div>
            <div>
              <dt>Linked Projects</dt>
              <dd>{new Set(caseStudies.flatMap((item) => item.linkedProjects)).size}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>문제 정의 / 구조 설계 / 스토리텔링</dd>
            </div>
          </dl>
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
