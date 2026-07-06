import Link from "next/link";

import { HomeProjectCard } from "@/components/home-project-card";
import { PageHero } from "@/components/page-hero";
import { ProofPointGrid } from "@/components/proof-point-grid";
import { homeProofPoints } from "@/content/proof-points";
import { featuredProjects } from "@/content/projects";

const scanRows = [
  { label: "For", value: "채용 리뷰어가 빠르게 검토하는 Korean-first data portfolio" },
  { label: "Core Lens", value: "판단 기준 · 보류 사유 · 리스크 신호 · 검증 가능한 산출물" },
  { label: "Data", value: "Python · SQL · pandas · NumPy · scikit-learn · PostgreSQL" },
  { label: "Web", value: "React · Next.js · Vite · TypeScript · Tailwind CSS · Vercel" },
  { label: "Automation", value: "Docker · n8n · Mailpit · GitHub Actions · Python smoke tests" },
];

const homePriorityLinks = [
  {
    label: "01 Shelter Signal",
    href: "/projects/shelter-signal",
  },
  {
    label: "02 Redveil",
    href: "/projects/seoul-storefront-redveil",
  },
  {
    label: "03 DecisionOps Lab",
    href: "/projects/decisionops-lab",
  },
];

const reviewPath = [
  {
    step: "01",
    title: "Start Here",
    detail: "3분 안에 목적별 검토 경로 확인",
    href: "/start-here",
    label: "Start Here 보기",
  },
  {
    step: "02",
    title: "Projects",
    detail: "Shelter·Redveil·DecisionOps 근거 우선 확인",
    href: "/projects",
    label: "Projects 보기",
  },
  {
    step: "03",
    title: "Case Studies",
    detail: "Signal → Criteria → Decision 방식 확인",
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

const projectRoleMap = [
  {
    step: "01",
    title: "Shelter Signal",
    detail: "공공 API의 live/cache/fallback 상태와 보호 종료 임박 신호를 함께 보여주는 public-data service",
    href: "/projects/shelter-signal",
    label: "Shelter 보기",
  },
  {
    step: "02",
    title: "Redveil",
    detail: "상권 후보를 추천하기보다 매입 전 보류 신호와 대체 후보를 먼저 검토하는 리스크 UI",
    href: "/projects/seoul-storefront-redveil",
    label: "Redveil 보기",
  },
  {
    step: "03",
    title: "DecisionOps Lab",
    detail: "raw event를 SQL mart, quality check, A/B evidence, multi-guardrail decision memo로 연결한 분석 의사결정 workflow",
    href: "/projects/decisionops-lab",
    label: "DecisionOps 보기",
  },
  {
    step: "04",
    title: "LH Traffic Safety",
    detail: "100m 격자 위험 신호를 LORO 검증과 현장 검토 우선순위로 연결한 공간 분석",
    href: "/projects/lh-traffic-safety-analysis",
    label: "LH 보기",
  },
  {
    step: "05",
    title: "Starbucks",
    detail: "고객·오퍼·채널 데이터를 CRM 액션과 마케팅 판단 언어로 번역한 반응 분석",
    href: "/projects/starbucks-promotion-analysis",
    label: "Starbucks 보기",
  },
  {
    step: "06",
    title: "UK Retail",
    detail: "RFM과 구매 패턴을 고객 유지·재활성화 판단으로 정리한 세그먼트 분석",
    href: "/projects/uk-online-retail-segment-analysis",
    label: "UK Retail 보기",
  },
  {
    step: "07",
    title: "ShopEasy",
    detail: "주문 감소를 전환 병목과 A/B 테스트 가설로 연결한 커머스 대시보드",
    href: "/projects/shopeasy",
    label: "ShopEasy 보기",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid page-grid--home">
        <PageHero
          actions={
            <>
              <Link className="button-link" href="/start-here">
                3분 검토 경로
              </Link>
              <Link className="button-link button-link--secondary" href="/projects">
                대표 프로젝트
              </Link>
              <Link className="button-link button-link--secondary" href="/case-studies">
                Case Studies
              </Link>
            </>
          }
          eyebrow="Signal Archive · Decision Archive"
          lead={
            <>
              Python/SQL 기반 분석 결과를 차트에서 끝내지 않고, 검토자가 실제로 판단할 수 있는 기준·보류
              사유·리스크 신호·검증 가능한 산출물로 번역합니다.
            </>
          }
          meta={
            <>
              <div className="home-hero__identity-chips" aria-label="core work keywords">
                {["Decision Criteria", "Risk Signals", "Review Flow", "Evidence Output"].map((item) => (
                  <span className="chip chip--category" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="home-hero__priority-strip" aria-label="recommended first projects">
                <span>Open first</span>
                {homePriorityLinks.map((item, index) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                    {index < homePriorityLinks.length - 1 ? <em aria-hidden="true">→</em> : null}
                  </Link>
                ))}
              </div>
            </>
          }
          title="데이터를 판단 근거와 의사결정 신호로 번역하는 포트폴리오 허브."
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

        <section className="surface-card home-review-path">
          <div className="home-section-head">
            <span className="eyebrow">Project Role Map</span>
            <h2 className="section-title">대표 프로젝트의 역할 차이</h2>
            <p className="page-intro">
              같은 분석 프로젝트처럼 보이지 않도록, 각 프로젝트가 증명하는 역량을 서로 다른 판단 역할로 분리했습니다.
            </p>
          </div>

          <div className="home-review-path__grid">
            {projectRoleMap.map((item) => (
              <article className="home-review-step" key={item.title}>
                <span className="home-review-step__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link className="button-link button-link--secondary home-review-step__link" href={item.href}>
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="page-grid home-selected">
          <div className="home-selected__head">
            <span className="eyebrow">Featured Proof Cards</span>
            <h2 className="section-title">대표 프로젝트가 증명하는 것</h2>
            <p className="page-intro">
              프로젝트 소개보다 먼저, 무엇을 주장하고 무엇은 주장하지 않는지까지 함께 읽히도록 검토 경계를
              정리했습니다.
            </p>
          </div>

          <div className="home-selected__grid">
            {featuredProjects.map((project, index) => (
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
