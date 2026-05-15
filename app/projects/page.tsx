import { ProjectExplorer } from "@/components/project-explorer";
import { featuredProjects, projects } from "@/content/projects";

export default function ProjectsPage() {
  const projectDomains = Array.from(new Set(projects.map((project) => project.primaryDomain)));
  const heroSummary = [
    {
      label: "Featured Projects",
      value: String(featuredProjects.length),
      note: "채용 검토 우선순위",
    },
    {
      label: "Domains",
      value: String(projectDomains.length),
      note: projectDomains.slice(0, 4).join(" · "),
    },
    {
      label: "Core Stack",
      value: "Python · SQL · GIS",
      note: "pandas · Tableau · Web",
    },
    {
      label: "Delivery Types",
      value: "README · Dashboard",
      note: "web service · case study",
    },
  ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card projects-evidence-hero">
          <div className="projects-evidence-hero__lead">
            <span className="eyebrow">Evidence Board</span>
            <h1 className="page-title projects-evidence-hero__title">Projects</h1>
            <p className="page-intro">
              각 프로젝트가 어떤 문제를 풀었고, 어떤 근거와 산출물로 역할 적합성을 증명하는지 비교할 수 있게 정리했습니다.
            </p>
          </div>

          <div className="projects-evidence-hero__summary" aria-label="Projects evidence board summary">
            {heroSummary.map((item) => (
              <div className="projects-evidence-summary-card" key={item.label}>
                <span className="projects-evidence-summary-card__label">{item.label}</span>
                <strong>{item.value}</strong>
                <span className="projects-evidence-summary-card__note">{item.note}</span>
              </div>
            ))}
          </div>
        </section>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
