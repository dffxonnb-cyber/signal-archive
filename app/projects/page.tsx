import { ProjectExplorer } from "@/components/project-explorer";
import { featuredProjects, projects } from "@/content/projects";

const focusAreas = ["공공데이터", "커머스", "리테일/마케팅", "스포츠"];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card projects-header">
          <div className="projects-header__lead">
            <span className="eyebrow">Projects</span>
            <h1 className="page-title projects-header__title">
              <span className="projects-header__title-prefix">대표 프로젝트를 포함한</span>
              <span className="projects-header__title-tail">전체 아카이브</span>
            </h1>
            <p className="page-intro">
              각 프로젝트의 사례를 더 정확히 선택할 수 있도록 분류 체계를 재정리했습니다.
            </p>
          </div>

          <div className="projects-summary" aria-label="프로젝트 요약">
            <article className="projects-summary__item projects-summary__item--metric">
              <span className="projects-summary__label">전체 프로젝트</span>
              <strong className="projects-summary__value">{projects.length}</strong>
            </article>

            <article className="projects-summary__item projects-summary__item--metric">
              <span className="projects-summary__label">대표 프로젝트</span>
              <strong className="projects-summary__value">{featuredProjects.length}</strong>
            </article>

            <article className="projects-summary__item projects-summary__item--focus">
              <span className="projects-summary__label">Focus</span>
              <div className="projects-summary__chips" aria-label="focus categories">
                {focusAreas.map((area) => (
                  <span className="projects-summary__chip" key={area}>
                    {area}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
