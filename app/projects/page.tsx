import { PageHero } from "@/components/page-hero";
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
      value: "Python · SQL · React",
      note: "PostgreSQL · Vercel · n8n",
    },
    {
      label: "Delivery Types",
      value: "PWA · Dashboard",
      note: "serverless API · case study",
    },
  ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <PageHero
          eyebrow="Evidence Board"
          lead="분석 결과를 표에서 끝내지 않고 웹앱, 서버리스 API, 자동화 검증, 문서형 case study까지 연결한 프로젝트 증거를 비교할 수 있게 정리했습니다."
          title="Projects"
          titleId="projects-title"
        >
          <div className="projects-evidence-hero__summary" aria-label="Projects evidence board summary">
            {heroSummary.map((item) => (
              <div className="projects-evidence-summary-card" key={item.label}>
                <span className="projects-evidence-summary-card__label">{item.label}</span>
                <strong>{item.value}</strong>
                <span className="projects-evidence-summary-card__note">{item.note}</span>
              </div>
            ))}
          </div>
        </PageHero>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
