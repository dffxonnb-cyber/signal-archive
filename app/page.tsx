import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { writingEntries } from "@/content/writing";
import { ProjectCard } from "@/components/project-card";

const heroHeadline = "위험 신호와 구조를 먼저 짚는 데이터 분석가";
const heroSummary =
  "흩어진 데이터를 분석 가능한 구조로 정리하고, 표면적인 결과보다 맥락과 이상 신호를 먼저 살핍니다. 문제 정의부터 결과물 구현까지 검증 흐름으로 연결하는 방식을 선호합니다.";

const frameItems = [
  {
    label: "Problem Frame",
    title: "문제 정의",
    description:
      "무엇을 먼저 검증해야 하는지부터 다시 세우고, 좋아 보이는 결과를 바로 받아들이지 않습니다.",
  },
  {
    label: "Structure",
    title: "구조 설계",
    description:
      "흩어진 데이터를 분석 가능한 단위로 다시 묶고, 해석 기준이 흔들리지 않도록 구조를 정리합니다.",
  },
  {
    label: "Verification",
    title: "검증 중심",
    description:
      "수치 그 자체보다 위험 신호와 맥락을 먼저 보고, 결과를 끝까지 점검하는 흐름을 유지합니다.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card hero-card">
          <div className="hero-card__copy">
            <div>
              <span className="eyebrow">Signal Archive</span>
              <p className="intro-name">공개용 버전</p>
            </div>
            <h1 className="hero-title">{heroHeadline}</h1>
            <p className="hero-summary">{heroSummary}</p>
            <div className="button-row">
              <Link className="button-link" href="/projects">
                대표 프로젝트 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                Resume 보기
              </Link>
            </div>
          </div>

          <aside className="hero-card__aside">
            <div className="hero-glance">
              <span className="hero-glance__label">Primary</span>
              <strong>{profile.primaryRoles.join(" / ")}</strong>
            </div>
            <div className="hero-glance">
              <span className="hero-glance__label">Frame</span>
              <strong>{profile.strengths.slice(0, 3).join(" / ")}</strong>
            </div>
            <div className="hero-glance">
              <span className="hero-glance__label">Scope</span>
              <strong>공간데이터 / 비즈니스 / end-to-end</strong>
            </div>
          </aside>
        </section>

        <section className="page-grid">
          <div className="section-head section-head--split">
            <div>
              <span className="eyebrow">Frame</span>
              <h2 className="section-title">문제를 해석하는 기준</h2>
            </div>
            <p className="page-intro section-copy">
              브랜딩 문장을 반복하기보다, 실제로 어떤 순서로 문제를 읽고 구조를
              세우는지 세 개의 기준으로 압축했습니다.
            </p>
          </div>

          <div className="frame-grid">
            {frameItems.map((item) => (
              <article className="frame-card" key={item.title}>
                <span className="frame-card__eyebrow">{item.label}</span>
                <h3 className="frame-card__title">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-grid">
          <div className="section-head section-head--split">
            <div>
              <span className="eyebrow">Featured Projects</span>
              <h2 className="section-title">대표 프로젝트</h2>
            </div>
            <p className="page-intro section-copy">
              가장 대표적인 세 프로젝트만 전면에 두고, 역할과 도구, 핵심 판단
              포인트가 한눈에 읽히도록 구성했습니다.
            </p>
          </div>

          <div className="project-grid project-grid--featured">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="page-grid">
          <div className="section-head section-head--split">
            <div>
              <span className="eyebrow">Archive</span>
              <h2 className="section-title">케이스, 글, 요약 문서</h2>
            </div>
            <p className="page-intro section-copy">
              프로젝트를 중심에 두되, 문제 해결 방식과 글, 요약 문서가 주변
              아카이브처럼 연결되도록 정리했습니다.
            </p>
          </div>

          <div className="archive-grid">
            <Link className="archive-card" href="/case-studies">
              <div className="archive-card__meta">
                <span className="eyebrow">Case Studies</span>
                <span className="archive-card__count">{caseStudies.length} records</span>
              </div>
              <h3>문제 해결 방식</h3>
              <p>프로젝트 뒤에 있던 판단 기준과 해석 구조를 따로 추출한 기록입니다.</p>
            </Link>

            <Link className="archive-card" href="/writing">
              <div className="archive-card__meta">
                <span className="eyebrow">Writing</span>
                <span className="archive-card__count">{writingEntries.length} notes</span>
              </div>
              <h3>연결된 글 아카이브</h3>
              <p>분석 메모, 회고, 태도에 관한 글을 프로젝트와 이어 읽을 수 있게 묶었습니다.</p>
            </Link>

            <div className="archive-card">
              <div className="archive-card__meta">
                <span className="eyebrow">Resume & Contact</span>
                <span className="archive-card__count">public-safe</span>
              </div>
              <h3>압축된 요약 문서</h3>
              <p>Resume와 Contact는 공개 가능한 범위만 남기고, 검토용 구조를 우선 제공합니다.</p>
              <div className="button-row">
                <Link className="button-link button-link--secondary" href="/resume">
                  Resume
                </Link>
                <Link className="button-link button-link--secondary" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
