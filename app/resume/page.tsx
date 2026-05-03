import Link from "next/link";

import { RecruiterChecklistModule } from "@/components/page-summary";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

export default function ResumePage() {
  const recruiterChecklist = [
    {
      label: "문제 정의",
      detail: "대표 프로젝트와 케이스 스터디에서 판단 기준을 다시 세우는 흐름을 확인할 수 있습니다.",
    },
    {
      label: "지표 설계",
      detail: "공공, 상권, CRM 맥락별 비교 지표와 우선순위 기준을 직접 설계했습니다.",
    },
    {
      label: "결과 해석",
      detail: "세그먼트, 리스크, 우선순위를 의사결정 언어로 번역하는 작업을 중심에 둡니다.",
    },
    {
      label: "결과물 전달",
      detail: "README, 웹 페이지, 대시보드까지 직접 연결해 검토 가능한 형태로 마무리합니다.",
    },
  ];
  const skillMatrix = profile.skillGroups.map((group) => ({
    label: group.title,
    value: group.items.slice(0, 2).join(" / "),
  }));

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div className="page-header__lead">
            <span className="eyebrow">Resume</span>
            <h1 className="page-title">핵심 역량과 대표 작업 요약</h1>
            <p className="page-intro">
              포트폴리오 전체 설명 대신, 채용 검토에 필요한 역할 적합성, 기술 범위, 대표 작업만 빠르게 확인할 수 있는 압축본입니다.
            </p>
          </div>

          <RecruiterChecklistModule
            ariaLabel="resume recruiter checklist"
            checklist={recruiterChecklist}
            roleFit={[...profile.primaryRoles, ...profile.secondaryRoles]}
            skillMatrix={skillMatrix}
          />
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
            <h2 className="section-title">기술 구성</h2>
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
            <p className="page-intro">
              AI-assisted workflow를 활용해 아이디어 구조화, 코드 초안 작성, 디버깅, 문서화를 효율화합니다. 문제 정의,
              지표 설계, 결과 해석, 최종 판단 기준은 직접 검토하며, AI는 반복 작업을 줄이고 검증 시간을 확보하기 위한
              보조 도구로 사용합니다.
            </p>
            <ul className="list-stack">
              {profile.aiWorkflow.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
                      상세 보기
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
                  <span className="resume-link-card__label">{link.label === "Email" ? "이메일" : link.label}</span>
                  <strong>{link.displayText ?? link.href.replace("mailto:", "")}</strong>
                </a>
              ))}
            </div>
          </section>

          <section className="surface-card detail-section resume-panel">
            <span className="eyebrow">Fit</span>
            <h2 className="section-title">업무 적합성 메모</h2>
            <p className="page-intro">
              반복 리포팅만 수행하는 역할보다, 문제 정의·지표 설계·해석·개선 제안까지 연결되는 분석 업무에서 더 강점을 발휘합니다.
            </p>
            <div className="button-row">
              <Link className="button-link" href="/projects">
                프로젝트 전체 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/contact">
                연락하기
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
