import Link from "next/link";

import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

export default function ResumePage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div>
            <span className="eyebrow">Resume</span>
            <h1 className="page-title">핵심 역량과 대표 작업 요약</h1>
            <p className="page-intro">
              긴 자기소개 대신 역할, 강점, 도구, 대표 프로젝트만 빠르게 읽히는 압축본입니다.
            </p>
          </div>

          <dl className="overview-stats">
            <div>
              <dt>Primary Role</dt>
              <dd>{profile.primaryRoles.join(" / ")}</dd>
            </div>
            <div>
              <dt>Keywords</dt>
              <dd>{profile.keywords.slice(0, 3).join(" / ")}</dd>
            </div>
            <div>
              <dt>Access</dt>
              <dd>public-safe summary</dd>
            </div>
          </dl>
        </section>

        <div className="resume-grid">
          <section className="surface-card detail-section resume-panel resume-panel--profile">
            <span className="eyebrow">Profile</span>
            <h2 className="section-title">{profile.name}</h2>
            <p className="page-intro">{profile.headline}</p>
            <div className="copy-stack">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="resume-profile-grid">
              <div className="project-card__block">
                <span className="project-card__label">1순위 직무</span>
                <div className="tag-list">
                  {profile.primaryRoles.map((role) => (
                    <span className="tag tag--accent" key={role}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-card__block">
                <span className="project-card__label">2순위 직무</span>
                <div className="tag-list">
                  {profile.secondaryRoles.map((role) => (
                    <span className="tag" key={role}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-card__block resume-profile-grid__wide">
                <span className="project-card__label">관심 산업</span>
                <div className="tag-list">
                  {profile.industries.map((industry) => (
                    <span className="tag" key={industry}>
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--strengths">
            <span className="eyebrow">Strengths</span>
            <h2 className="section-title">핵심 강점</h2>
            <div className="resume-strength-grid">
              {profile.strengths.map((item, index) => (
                <article className="resume-strength-card" key={item}>
                  <span className="resume-strength-card__index">{`0${index + 1}`}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--skills">
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">Skill Matrix</h2>
            <p className="page-intro">
              도구 이름보다, 각 기술로 실제 어떤 작업을 수행하고 어떤 방식으로 결과를 전달하는지 중심으로 정리했습니다.
            </p>
            <div className="resume-skill-grid">
              {profile.skillGroups.map((group) => (
                <article className="resume-skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.summary ? <p className="resume-skill-card__summary">{group.summary}</p> : null}
                  <ul className="resume-skill-card__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--workflow">
            <span className="eyebrow">Workflow</span>
            <h2 className="section-title">AI-assisted Workflow</h2>
            <p className="page-intro">{profile.aiWorkflow.summary}</p>
            <ul className="list-stack">
              {profile.aiWorkflow.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="page-intro">{profile.aiWorkflow.note}</p>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--projects">
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">대표 프로젝트 요약</h2>
            <div className="resume-project-list">
              {featuredProjects.map((project) => (
                <article className="resume-project-card" key={project.slug}>
                  <div className="resume-project-card__top">
                    <span className="tag tag--accent">{project.badges[0] ?? project.category}</span>
                    <Link className="resume-project-card__link" href={`/projects/${project.slug}`}>
                      보기
                    </Link>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel resume-panel--links">
            <span className="eyebrow">Access</span>
            <h2 className="section-title">프로필 및 연락 경로</h2>
            <div className="resume-links-grid">
              {profile.contactLinks.map((link) => (
                <a
                  className="resume-link-card"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="resume-link-card__label">{link.label}</span>
                  <strong>{link.displayText ?? link.href.replace("mailto:", "")}</strong>
                </a>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel">
            <span className="eyebrow">Fit</span>
            <h2 className="section-title">선호하지 않는 역할 신호</h2>
            <ul className="list-stack">
              {profile.avoidSignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
            <p className="page-intro">
              반복 운영 리포트보다 문제 정의, 구조 설계, 검증과 해석이 함께 필요한 분석 역할에 더 잘 맞습니다.
            </p>
            <div className="button-row">
              <Link className="button-link" href="/projects">
                프로젝트 전체 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/contact">
                연락 정보 보기
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
