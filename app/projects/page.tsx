import { ProjectExplorer } from "@/components/project-explorer";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  const featuredCount = projects.filter(
    (project) => project.category === "대표 프로젝트",
  ).length;

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div>
            <span className="eyebrow">Projects</span>
            <h1 className="page-title">문제를 어떻게 구조화했는지 먼저 보이는 프로젝트 아카이브</h1>
            <p className="page-intro">
              결과물만 나열하는 대신, 도메인과 문제 유형을 기준으로 어떤 방식의
              문제를 다뤄왔는지 직접 좁혀 볼 수 있게 구성했습니다.
            </p>
          </div>

          <dl className="overview-stats">
            <div>
              <dt>전체 프로젝트</dt>
              <dd>{projects.length}</dd>
            </div>
            <div>
              <dt>대표 프로젝트</dt>
              <dd>{featuredCount}</dd>
            </div>
            <div>
              <dt>도메인 축</dt>
              <dd>공공 / 상권 / 커머스 / 스포츠</dd>
            </div>
          </dl>
        </section>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}

