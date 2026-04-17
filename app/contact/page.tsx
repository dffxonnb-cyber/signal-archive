import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="page-title">검토와 연락을 위한 공개 정보</h1>
            <p className="page-intro">
              프로젝트 검토를 먼저 할 수 있도록 공개 가능한 프로필과 연락 경로를 정리했습니다.
            </p>
          </div>

          <dl className="overview-stats">
            <div>
              <dt>Projects</dt>
              <dd>open for review</dd>
            </div>
            <div>
              <dt>Direct Contact</dt>
              <dd>{profile.contactLinks.length} routes</dd>
            </div>
            <div>
              <dt>Profile</dt>
              <dd>{profile.name}</dd>
            </div>
          </dl>
        </section>

        <div className="archive-grid">
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Profile</span>
              <span className="archive-card__count">open</span>
            </div>
            <h3>{profile.name}</h3>
            <p>{profile.headline}</p>
            <div className="tag-list">
              {profile.primaryRoles.map((role) => (
                <span className="tag tag--accent" key={role}>
                  {role}
                </span>
              ))}
            </div>
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Links</span>
              <span className="archive-card__count">public</span>
            </div>
            <h3>공개 프로필 및 연락 경로</h3>
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
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Review Flow</span>
              <span className="archive-card__count">preferred</span>
            </div>
            <h3>권장 검토 순서</h3>
            <ul className="list-stack compact-list">
              <li>Home에서 대표 사례 3개를 먼저 확인</li>
              <li>Projects에서 도메인과 문제 유형으로 프로젝트를 좁혀보기</li>
              <li>Case Studies와 Writing에서 문제 해결 방식 확인</li>
              <li>필요 시 GitHub 저장소와 메일로 후속 연락</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}
