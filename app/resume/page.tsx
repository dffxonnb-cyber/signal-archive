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
            <p className="page-intro">
              공개 버전에서는 개인 식별 정보와 직접 연락처를 제외하고, 문제 해결 구조와 프로젝트 중심 정보만 남겼습니다.
            </p>
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
            <h2 className="section-title">기술 스택</h2>
            <div className="resume-skill-grid">
              {profile.skillGroups.map((group) => (
                <article className="resume-skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
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
            <h2 className="section-title">공개 버전 가이드</h2>
            <div className="resume-links-grid">
              <div className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">Contact</span>
                <strong>직접 연락처 비공개</strong>
              </div>
              <div className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">Profiles</span>
                <strong>외부 프로필 비공개</strong>
              </div>
              <div className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">Document</span>
                <strong>PDF Resume 요청 시 제공</strong>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
