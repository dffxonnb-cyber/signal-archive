import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { PageHero } from "@/components/page-hero";
import { ProofPointGrid } from "@/components/proof-point-grid";
import { homeProofPoints } from "@/content/proof-points";
import { projects } from "@/content/projects";

const scanRows = [
  { label: "Positioning", value: "Data analyst building data products" },
  { label: "Data", value: "Python · SQL · pandas · NumPy · scikit-learn · PostgreSQL" },
  { label: "Web", value: "React · Next.js · Vite · TypeScript · Tailwind CSS · Vercel" },
  { label: "Automation", value: "Docker · n8n · Mailpit · GitHub Actions · Python smoke tests" },
  { label: "Documentation", value: "README · troubleshooting docs · portfolio case studies" },
];

const reviewPath = [
  {
    step: "01",
    title: "Projects",
    detail: "대표 프로젝트와 근거 지표 확인",
    href: "/projects",
    label: "Projects 보기",
  },
  {
    step: "02",
    title: "Resume",
    detail: "기술 스택과 역할 적합성 확인",
    href: "/resume",
    label: "Resume 보기",
  },
  {
    step: "03",
    title: "Case Studies",
    detail: "문제 해결 방식 확인",
    href: "/case-studies",
    label: "Case Studies 보기",
  },
  {
    step: "04",
    title: "GitHub / Service",
    detail: "구현과 문서 확인",
    href: "https://github.com/dffxonnb-cyber",
    label: "GitHub 보기",
    external: true,
  },
];

const featuredProofSlugs = [
  "seoul-storefront-redveil",
  "shelter-signal",
  "lh-traffic-safety-analysis",
  "starbucks-promotion-analysis",
];

function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Missing project: ${slug}`);
  }

  return project;
}

export default function HomePage() {
  const featuredProofProjects = featuredProofSlugs.map((slug) => getProject(slug));

  return (
    <main className="page-shell">
      <div className="site-container page-grid page-grid--home">
        <PageHero
          actions={
            <>
              <Link className="button-link" href="/projects">
                대표 프로젝트 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                Resume 보기
              </Link>
              <a
                className="button-link button-link--secondary"
                href="https://github.com/dffxonnb-cyber"
                rel="noreferrer"
                target="_blank"
              >
                GitHub 보기
              </a>
            </>
          }
          eyebrow="Signal Archive · Data Product Dossier"
          lead={
            <>
              Data analysis, web interfaces, serverless APIs, and automation workflows, connected into working data
              products. Python/SQL 기반 분석을 중심으로 웹앱 구현과 검증 가능한 자동화 흐름까지 연결합니다.
            </>
          }
          meta={
            <div className="home-hero__identity-chips" aria-label="core work keywords">
              {["Data Analysis", "Web Interface", "Serverless API", "Automation Validation"].map((item) => (
                <span className="chip chip--category" key={item}>
                  {item}
                </span>
              ))}
            </div>
          }
          title="데이터를 분석하고, 웹으로 보여주고, 자동화로 검증하는 데이터 프로덕트형 포트폴리오."
          titleId="home-title"
          variant="home"
        >
          <aside aria-label="30-second scan" className="home-scan-card">
            <span className="eyebrow">30-Second Scan</span>
            <dl className="home-scan-card__list">
              {scanRows.map((row) => (
                <div className="home-scan-card__row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </PageHero>

        <section className="home-proof">
          <div className="home-proof__head">
            <span className="eyebrow">Proof Points</span>
            <h2 className="section-title">숫자로 먼저 확인되는 근거</h2>
          </div>
          <ProofPointGrid points={homeProofPoints} />
        </section>

        <section className="surface-card home-review-path">
          <div className="home-section-head">
            <span className="eyebrow">3-Minute Review Path</span>
            <h2 className="section-title">3분 검토 루트</h2>
            <p className="page-intro">
              처음 보는 채용 담당자가 역할 적합성, 대표 프로젝트, 사고 방식, 구현 근거를 순서대로 확인할 수 있게
              검토 경로를 분리했습니다.
            </p>
          </div>

          <div className="home-review-path__grid">
            {reviewPath.map((item) => (
              <article className="home-review-step" key={item.title}>
                <span className="home-review-step__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.external ? (
                  <a
                    className="button-link button-link--secondary home-review-step__link"
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link className="button-link button-link--secondary home-review-step__link" href={item.href}>
                    {item.label}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="page-grid home-selected">
          <div className="home-selected__head">
            <span className="eyebrow">Featured Proof Cards</span>
            <h2 className="section-title">대표 프로젝트가 증명하는 것</h2>
            <p className="page-intro">
              프로젝트 소개보다 먼저, 어떤 판단 질문을 세웠고 어떤 근거와 산출물로 역할 적합성을 보여주는지 읽히게
              정리했습니다.
            </p>
          </div>

          <div className="home-selected__grid">
            {featuredProofProjects.map((project, index) => (
              <HomeProjectCard key={project.slug} index={index + 1} project={project} />
            ))}
          </div>
        </section>

        <section className="surface-card home-final-cta">
          <div className="home-final-cta__copy">
            <span className="eyebrow">Review Actions</span>
            <h2 className="section-title">검토를 이어갈 경로</h2>
            <p className="page-intro">
              대표 작업, 이력 요약, 구현 저장소, 연락 경로를 바로 열 수 있게 묶었습니다.
            </p>
          </div>
          <div className="button-row home-final-cta__actions">
            <Link className="button-link" href="/projects">
              대표 프로젝트 보기
            </Link>
            <Link className="button-link button-link--secondary" href="/resume">
              Resume 보기
            </Link>
            <a
              className="button-link button-link--secondary"
              href="https://github.com/dffxonnb-cyber"
              rel="noreferrer"
              target="_blank"
            >
              GitHub 보기
            </a>
            <a className="button-link button-link--secondary" href="mailto:dffxonnb@gmail.com">
              이메일 연락
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
