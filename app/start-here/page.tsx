import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SignalArchiveLogo } from "@/components/signal-archive-logo";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Signal Archive를 처음 보는 리뷰어와 채용 담당자를 위한 빠른 판단 가이드입니다.",
};

const roleTracks = [
  {
    label: "Data Analyst",
    summary: "문제 정의, 지표 설계, 검증 가능한 분석 결과물 정리에 가장 직접적으로 맞습니다.",
    proof: ["Python / SQL / pandas", "통계 검정과 모델 지표", "README와 웹 결과물로 전달"],
  },
  {
    label: "Data Product Builder",
    summary: "분석 결과를 React/Next/Vite 웹앱, 서버리스 API, 검증 스크립트까지 연결하는 프로젝트가 강점입니다.",
    proof: ["React / TypeScript / Vercel", "serverless API route", "PWA와 case study"],
  },
  {
    label: "Pipeline / Automation Validation",
    summary: "PostgreSQL, Docker, n8n, Mailpit을 활용해 로컬 데이터 파이프라인과 dry-run 흐름을 검증합니다.",
    proof: ["SQL models/tests", "Docker Compose", "Mailpit smoke test"],
  },
];

const reviewFlow = [
  {
    step: "01",
    title: "첫 판단",
    href: "/",
    detail: "메인 화면에서 역할 적합성, 대표 프로젝트, 핵심 근거를 1분 안에 확인합니다.",
  },
  {
    step: "02",
    title: "프로젝트 검증",
    href: "/projects",
    detail: "프로젝트별 문제, 방법, 산출물, 공개 링크, 검증 신호를 비교합니다.",
  },
  {
    step: "03",
    title: "사고방식 확인",
    href: "/case-studies",
    detail: "프로젝트를 가로질러 반복되는 판단 기준, 리스크 신호, 검토 흐름을 확인합니다.",
  },
  {
    step: "04",
    title: "이력 압축",
    href: "/resume",
    detail: "역할, 스택, 강점, 연락 경로를 채용 검토 관점으로 빠르게 확인합니다.",
  },
  {
    step: "05",
    title: "연락",
    href: "/contact",
    detail: "포트폴리오와 GitHub를 본 뒤 다음 대화로 이어질 공개 경로를 확인합니다.",
  },
];

const highlightedSlugs = [
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

const highlightedProjects = highlightedSlugs.map((slug) => getProject(slug));

export default function StartHerePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <PageHero
          actions={
            <>
              <Link className="button-link" href="/projects">
                프로젝트 검토하기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                이력 요약 보기
              </Link>
            </>
          }
          eyebrow="Start Here"
          lead={
            <>
              이 사이트는 프로젝트를 많이 나열하는 포트폴리오가 아니라, 문제를 어떻게 정의하고
              데이터를 분석·웹앱·API·자동화 검증 흐름으로 바꾸는지를 보여주는 아카이브입니다. 처음 보는 사람은 아래
              순서대로 보면 가장 빠르게 역량을 판단할 수 있습니다.
            </>
          }
          title="3분 안에 읽는 Signal Archive 리뷰어 가이드"
          titleId="start-here-title"
        >
          <div className="start-hero__mark" aria-hidden="true">
            <SignalArchiveLogo className="start-hero__logo" />
          </div>
        </PageHero>

        <section className="start-section">
          <div className="section-head">
            <span className="eyebrow">Role Fit</span>
            <h2 className="section-title">어떤 역할에 맞는가</h2>
          </div>

          <div className="start-card-grid start-card-grid--three">
            {roleTracks.map((track) => (
              <article className="start-card" key={track.label}>
                <h3>{track.label}</h3>
                <p>{track.summary}</p>
                <div className="start-card__chips">
                  {track.proof.map((item) => (
                    <span className="start-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="start-section start-section--flow">
          <div className="section-head">
            <span className="eyebrow">Review Flow</span>
            <h2 className="section-title">처음 보는 사람이 따라갈 순서</h2>
          </div>

          <div className="start-flow">
            {reviewFlow.map((item) => (
              <Link className="start-flow__item" href={item.href} key={item.step}>
                <span className="start-flow__step">{item.step}</span>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="start-section">
          <div className="section-head">
            <span className="eyebrow">Evidence Map</span>
            <h2 className="section-title">대표 근거를 어디서 볼 것인가</h2>
            <p className="page-intro">
              각 프로젝트는 문제, 분석 구조, 공개 결과물, 검증 신호가 연결되어 있는지를 기준으로
              배치했습니다. Redveil과 Shelter Signal은 선택을 서두르기 전에 먼저 확인해야 할 신호를
              정리하고, 각각 보류 근거와 보호 종료 우선순위를 검토 흐름으로 바꿉니다.
            </p>
          </div>

          <div className="start-card-grid start-card-grid--two">
            {highlightedProjects.map((project) => (
              <article className="start-card start-card--project" key={project.slug}>
                <div className="start-card__topline">
                  <span className="eyebrow">{project.primaryDomain}</span>
                  <span>{project.format}</span>
                </div>
                <h3>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>
                <dl className="start-proof-list">
                  {project.evidencePoints?.slice(0, 3).map((point) => (
                    <div key={point.label}>
                      <dt>{point.label}</dt>
                      <dd>{point.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link className="button-link button-link--secondary start-card__link" href={`/projects/${project.slug}`}>
                  상세 근거 보기
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
