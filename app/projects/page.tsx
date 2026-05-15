import { ProjectIndexModule } from "@/components/page-summary";
import { ProjectExplorer } from "@/components/project-explorer";
import { featuredProjects, projects } from "@/content/projects";

export default function ProjectsPage() {
  const projectDomains = Array.from(new Set(projects.map((project) => project.primaryDomain)));
  const projectTypes = Array.from(new Set(projects.flatMap((project) => project.problemTypes))).slice(0, 6);
  const quickLinks = featuredProjects.map((project) => ({
    label: project.title,
    href: `/projects/${project.slug}`,
    detail: `${project.primaryDomain} · ${project.format}`,
    kind: "internal" as const,
  }));

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
              각 프로젝트가 어떤 문제를 풀었고, 어떤 근거와 산출물로 역할 적합성을 증명하는지 비교할 수 있게 정리했습니다.
            </p>
          </div>

          <ProjectIndexModule
            ariaLabel="projects index overview"
            domainChips={projectDomains}
            quickLinks={quickLinks}
            stats={[
              { label: "전체 프로젝트", value: projects.length },
              { label: "대표 프로젝트", value: featuredProjects.length },
              { label: "도메인", value: projectDomains.length },
            ]}
            typeChips={projectTypes}
          />
        </section>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
