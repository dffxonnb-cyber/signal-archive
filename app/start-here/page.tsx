import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Signal Archive를 처음 보는 리뷰어와 채용 담당자를 위한 빠른 판단 가이드입니다.",
};

const primarySequence = [
  {
    step: "01",
    title: "Shelter Signal",
    href: "/projects/shelter-signal",
    note: "운영형 public-data service",
  },
  {
    step: "02",
    title: "Redveil",
    href: "/projects/seoul-storefront-redveil",
    note: "보류 기준과 대체 후보",
  },
  {
    step: "03",
    title: "LH Traffic Safety",
    href: "/projects/lh-traffic-safety-analysis",
    note: "공간 검증과 우선순위",
  },
];

const reviewerPaths = [
  {
    label: "3-minute profile scan",
    title: "전체 적합성 빠르게 보기",
    summary: "전체 적합성을 빠르게 보려면 운영형 public-data service를 먼저 확인한 뒤, 상권 리스크 UI와 공간 검증으로 확장해 봅니다.",
    openFirst: [
      {
        title: "Shelter Signal",
        href: "/projects/shelter-signal",
        reason: "live API, PWA, cache/fallback, current·urgent·archive 분리까지 한 화면에서 확인",
      },
      {
        title: "Redveil",
        href: "/projects/seoul-storefront-redveil",
        reason: "상권 데이터를 추천이 아니라 보류·비교 흐름으로 바꾼 증거",
      },
      {
        title: "LH Traffic Safety",
        href: "/projects/lh-traffic-safety-analysis",
        reason: "100m 격자와 LORO 검증으로 공간 분석 깊이를 확인",
      },
    ],
  },
  {
    label: "Spatial / Public Data role",
    title: "공간·공공데이터 역할 검토",
    summary: "공공데이터, 공간 신호, API 신뢰성, 검증 기준을 보는 역할이라면 이 경로가 가장 직접적입니다.",
    openFirst: [
      {
        title: "Shelter Signal",
        href: "/projects/shelter-signal",
        reason: "data.go.kr 기반 current·urgent 분리와 fallback boundary",
      },
      {
        title: "LH Traffic Safety",
        href: "/projects/lh-traffic-safety-analysis",
        reason: "공간 좌표, 100m grid, LORO AUC/Lift 검증",
      },
      {
        title: "Redveil",
        href: "/projects/seoul-storefront-redveil",
        reason: "공공·상권 데이터를 reviewer-facing UI로 정리한 산출물",
      },
    ],
  },
  {
    label: "Business / CRM role",
    title: "비즈니스·CRM 역할 검토",
    summary: "고객·상권·커머스 데이터를 액션과 KPI 언어로 바꾸는 능력을 볼 때의 경로입니다.",
    openFirst: [
      {
        title: "Redveil",
        href: "/projects/seoul-storefront-redveil",
        reason: "비즈니스 의사결정 전 보류 기준을 설계한 대표 사례",
      },
      {
        title: "Starbucks",
        href: "/projects/starbucks-promotion-analysis",
        reason: "고객·오퍼·채널 반응을 CRM 판단으로 번역",
      },
      {
        title: "UK Retail",
        href: "/projects/uk-online-retail-segment-analysis",
        reason: "RFM 세그먼트와 구매 패턴 해석",
      },
      {
        title: "ShopEasy",
        href: "/projects/shopeasy",
        reason: "전환 병목과 dashboard evidence로 보강",
      },
    ],
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
  "shelter-signal",
  "seoul-storefront-redveil",
  "lh-traffic-safety-analysis",
  "starbucks-promotion-analysis",
  "uk-online-retail-segment-analysis",
  "shopeasy",
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
              이 사이트는 프로젝트를 많이 나열하는 포트폴리오가 아니라, 불완전한 데이터를 판단 기준·리스크 신호·검토 가능한
              산출물로 바꾸는 과정을 보여주는 아카이브입니다. 처음 보는 리뷰어는 Shelter Signal에서 운영형 public-data
              처리 방식을 먼저 확인한 뒤, 목적에 맞는 경로로 확장해 보면 가장 빠르게 역량을 판단할 수 있습니다.
            </>
          }
          title="3분 안에 읽는 Signal Archive 리뷰어 가이드"
          titleId="start-here-title"
          >
          <div className="start-sequence-panel" aria-label="primary review sequence">
            <span className="eyebrow">Open First</span>
            <div className="start-sequence-panel__flow">
              {primarySequence.map((item, index) => (
                <Link className="start-sequence-panel__item" href={item.href} key={item.href}>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <em>{item.note}</em>
                  {index < primarySequence.length - 1 ? <b aria-hidden="true">→</b> : null}
                </Link>
              ))}
            </div>
          </div>
        </PageHero>

        <section className="start-section">
          <div className="section-head">
            <span className="eyebrow">Reviewer Paths</span>
            <h2 className="section-title">검토 목적별로 먼저 열 프로젝트</h2>
          </div>

          <div className="start-card-grid start-card-grid--three">
            {reviewerPaths.map((track) => (
              <article className="start-card start-card--review-path" key={track.label}>
                <div>
                  <span className="eyebrow">{track.label}</span>
                  <h3>{track.title}</h3>
                </div>
                <p>{track.summary}</p>
                <ol className="start-open-list">
                  {track.openFirst.map((item) => (
                    <li key={`${track.label}-${item.title}`}>
                      <Link href={item.href}>{item.title}</Link>
                      <span>{item.reason}</span>
                    </li>
                  ))}
                </ol>
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
              배치했습니다. 대표 순서는 Shelter Signal → Redveil → LH Traffic Safety → Starbucks → UK Retail →
              ShopEasy입니다. Job Signal Pipeline과 NBA 분석은 별도 확장 evidence로 읽으면 됩니다.
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
