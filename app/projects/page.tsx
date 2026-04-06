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
            <h1 className="page-title">대표 프로젝트를 포함한 전체 아카이브</h1>
            <p className="page-intro">
              프로젝트 수는 적지만, 각 사례를 더 정확하게 고를 수 있도록 분류 체계를 다시 정리했습니다.
            </p>
          </div>

          <div className="projects-header__summary" aria-label="프로젝트 요약">
            <div className="projects-summary-bar">
              <article className="projects-stat projects-stat--metric">
                <span className="projects-stat__label">전체 프로젝트</span>
                <div className="projects-stat__body">
                  <strong className="projects-stat__value">{projects.length}</strong>
                </div>
              </article>

              <article className="projects-stat projects-stat--metric">
                <span className="projects-stat__label">대표 프로젝트</span>
                <div className="projects-stat__body">
                  <strong className="projects-stat__value">{featuredProjects.length}</strong>
                </div>
              </article>

              <article className="projects-stat projects-stat--focus">
                <span className="projects-stat__label">Focus</span>
                <div className="projects-stat__body">
                  <div className="projects-stat__tags" aria-label="focus categories">
                    {focusAreas.map((area) => (
                      <span className="projects-stat__tag" key={area}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
