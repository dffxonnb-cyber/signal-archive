import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ProjectExplorer } from "@/components/project-explorer";
import { featuredProjects, projects } from "@/content/projects";

const reviewerProjectPaths = [
  {
    label: "3-minute scan",
    title: "Redveil → Shelter → DecisionOps → LH",
    detail: "single flagship decision artifact를 먼저 보고, public-data service, SQL/D7 guardrail workflow, 공간 검증으로 확장합니다.",
    projects: [
      {
        title: "Redveil",
        href: "/projects/seoul-storefront-redveil",
        reason: "보류 사유·대체 후보·decision artifact",
      },
      {
        title: "Shelter Signal",
        href: "/projects/shelter-signal",
        reason: "live API · cache/fallback · urgent/archive 분리",
      },
      {
        title: "DecisionOps Lab",
        href: "/projects/decisionops-lab",
        reason: "SQL mart · 23 quality checks · D7 guardrail memo",
      },
      {
        title: "LH Traffic Safety",
        href: "/projects/lh-traffic-safety-analysis",
        reason: "100m grid와 LORO 검증",
      },
    ],
  },
  {
    label: "Analytics / DecisionOps",
    title: "분석 결과를 의사결정으로 번역",
    detail: "차트나 모델 점수 이후의 품질 검증, D7 guardrail, scenario matrix, decision memo를 확인하는 경로입니다.",
    projects: [
      {
        title: "DecisionOps Lab",
        href: "/projects/decisionops-lab",
        reason: "23 checks PASS · +3.97pp lift · 5 scenario matrix",
      },
      {
        title: "Starbucks",
        href: "/projects/starbucks-promotion-analysis",
        reason: "고객·오퍼·채널 반응",
      },
      {
        title: "ShopEasy",
        href: "/projects/shopeasy",
        reason: "전환 병목과 A/B test 가설",
      },
    ],
  },
  {
    label: "Spatial / Public",
    title: "공공데이터·공간 신호",
    detail: "운영 신뢰성과 검증 기준을 함께 봐야 하는 역할에 맞춘 경로입니다.",
    projects: [
      {
        title: "Redveil",
        href: "/projects/seoul-storefront-redveil",
        reason: "대표 flagship과 claim boundary",
      },
      {
        title: "Shelter Signal",
        href: "/projects/shelter-signal",
        reason: "API current·urgent 분리",
      },
      {
        title: "LH Traffic Safety",
        href: "/projects/lh-traffic-safety-analysis",
        reason: "공간 위험 후보 우선순위",
      },
      {
        title: "DecisionOps Lab",
        href: "/projects/decisionops-lab",
        reason: "SQL 품질 gate와 D7 guardrail 판단 보강",
      },
    ],
  },
  {
    label: "Business / CRM",
    title: "상권·고객·커머스 판단",
    detail: "CRM과 dashboard evidence는 Redveil과 DecisionOps 뒤에 supporting 근거로 읽는 흐름입니다.",
    projects: [
      {
        title: "Redveil",
        href: "/projects/seoul-storefront-redveil",
        reason: "비즈니스 판단 전 보류 기준",
      },
      {
        title: "DecisionOps Lab",
        href: "/projects/decisionops-lab",
        reason: "제품 지표·D7 guardrail 판단",
      },
      {
        title: "Starbucks",
        href: "/projects/starbucks-promotion-analysis",
        reason: "고객·오퍼·채널 반응",
      },
      {
        title: "UK Retail",
        href: "/projects/uk-online-retail-segment-analysis",
        reason: "RFM segment와 구매 패턴",
      },
      {
        title: "ShopEasy",
        href: "/projects/shopeasy",
        reason: "전환 병목과 A/B test 가설",
      },
    ],
  },
];

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
      note: "Vercel · GitHub Pages · local validation",
    },
    {
      label: "Delivery Types",
      value: "PWA · Decision Report",
      note: "serverless API · static site · case study",
    },
  ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <PageHero
          eyebrow="Evidence Board"
          lead="Redveil을 단일 flagship으로 먼저 확인하고, Shelter Signal의 public-data service, DecisionOps Lab의 SQL/D7 guardrail workflow, LH Traffic Safety의 공간 검증으로 확장해 읽는 프로젝트 보드입니다."
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

        <section className="surface-card reviewer-path-board" aria-labelledby="projects-review-path-title">
          <div className="reviewer-path-board__head">
            <div>
              <span className="eyebrow">Reviewer Path</span>
              <h2 className="section-title" id="projects-review-path-title">
                검토 목적별 먼저 볼 프로젝트
              </h2>
            </div>
            <p className="page-intro">
              평평한 gallery가 아니라, 운영형 서비스·상권 판단·분석 의사결정·공간 검증을 질문별 evidence board로 읽도록 나눴습니다.
            </p>
          </div>

          <div className="reviewer-path-board__grid">
            {reviewerProjectPaths.map((path) => (
              <article className="reviewer-path-card" key={path.label}>
                <span className="eyebrow">{path.label}</span>
                <h3>{path.title}</h3>
                <p>{path.detail}</p>
                <ol className="reviewer-path-card__list">
                  {path.projects.map((project) => (
                    <li key={`${path.label}-${project.title}`}>
                      <Link href={project.href}>{project.title}</Link>
                      <span>{project.reason}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
