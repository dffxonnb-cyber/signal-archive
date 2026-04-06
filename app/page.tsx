import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { caseStudies } from "@/content/case-studies";
import { featuredProjects } from "@/content/projects";
import { profile } from "@/content/profile";
import { writingEntries } from "@/content/writing";

const frameItems = [
  {
    title: "문제 정의",
    description: "먼저 무엇을 검증해야 하는지부터 다시 세웁니다.",
  },
  {
    title: "구조 설계",
    description: "흩어진 데이터를 분석 가능한 단위로 다시 묶습니다.",
  },
  {
    title: "검증 중심",
    description: "수치보다 위험 신호와 맥락을 먼저 확인합니다.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card hero-shell">
          <div className="hero-shell__copy">
            <div>
              <span className="eyebrow">Signal Archive</span>
              <p className="intro-name">Analysis Portfolio</p>
            </div>
            <h1 className="hero-title">위험 신호와 구조를 먼저 짚는 데이터 분석가</h1>
            <p className="hero-summary">
              {profile.summary[0]} {profile.summary[1]}
            </p>
            <div className="button-row">
              <Link className="button-link" href="/projects">
                프로젝트 아카이브
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                Resume
              </Link>
            </div>
          </div>

          <aside className="hero-shell__rail">
            <div className="hero-shell__rail-head">
              <span className="eyebrow">Selected Projects</span>
              <p>대표 프로젝트 세 개를 먼저 보여줍니다.</p>
            </div>
            <div className="hero-project-list">
              {featuredProjects.map((project, index) => (
                <Link className="hero-project-link" href={`/projects/${project.slug}`} key={project.slug}>
                  <span className="hero-project-link__index">{`0${index + 1}`}</span>
                  <div className="hero-project-link__body">
                    <span className="hero-project-link__meta">{project.badges[0] ?? project.category}</span>
                    <strong>{project.title}</strong>
                    <p>{project.focusPoints[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        <section className="frame-strip">
          {frameItems.map((item) => (
            <article className="frame-card" key={item.title}>
              <span className="frame-card__eyebrow">Frame</span>
              <h2 className="frame-card__title">{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="page-grid">
          <div className="section-head section-head--split">
            <div>
              <span className="eyebrow">Featured Projects</span>
              <h2 className="section-title">가장 먼저 봐야 하는 세 가지 작업</h2>
            </div>
            <p className="page-intro section-copy">
              프로젝트가 가장 먼저 읽히도록 구성했습니다. 카드 안에서 역할, 사용 도구, 문제 유형, 핵심 포인트가 바로 보이게 정리했습니다.
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
              <h2 className="section-title">케이스 스터디와 기록 아카이브</h2>
            </div>
            <p className="page-intro section-copy">
              브랜딩 문장을 반복하기보다, 프로젝트를 둘러싼 판단 기준과 기록을 별도 아카이브로 분리했습니다.
            </p>
          </div>
          <div className="archive-grid">
            <Link className="archive-card" href="/case-studies">
              <div className="archive-card__meta">
                <span className="eyebrow">Case Studies</span>
                <span className="archive-card__count">{caseStudies.length} records</span>
              </div>
              <h3>문제 해결 방식</h3>
              <p>문제 정의, 구조 설계, 스토리텔링을 프로젝트와 분리해 읽을 수 있도록 정리했습니다.</p>
            </Link>

            <Link className="archive-card" href="/writing">
              <div className="archive-card__meta">
                <span className="eyebrow">Writing</span>
                <span className="archive-card__count">{writingEntries.length} notes</span>
              </div>
              <h3>연결된 기록</h3>
              <p>분석 메모와 회고, 태도에 관한 글을 프로젝트와 함께 읽히도록 구성한 아카이브입니다.</p>
            </Link>

            <div className="archive-card">
              <div className="archive-card__meta">
                <span className="eyebrow">Summary</span>
                <span className="archive-card__count">public-safe</span>
              </div>
              <h3>Resume / Contact</h3>
              <p>공개 버전에서는 핵심 역량과 대표 작업만 압축해 보여주고, 직접 연락 정보는 제외합니다.</p>
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
