import Link from "next/link";

import { profile } from "@/content/profile";

export default function ContactPage() {
  const githubLink = profile.contactLinks.find((link) => link.label === "GitHub");
  const emailLink = profile.contactLinks.find((link) => link.label === "Email");

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="page-title">검토와 연락을 위한 공개 정보</h1>
            <p className="page-intro">
              이 페이지는 소개보다 동선에 집중합니다. 공개 가능한 연락 경로와, 어떤 순서로 검토하면 좋은지만 짧게 정리했습니다.
            </p>
            <div className="button-row">
              {githubLink ? (
                <a className="button-link" href={githubLink.href} rel="noreferrer" target="_blank">
                  View GitHub
                </a>
              ) : null}
              <Link className="button-link button-link--secondary" href="/projects">
                View Projects
              </Link>
              {emailLink ? (
                <a className="button-link button-link--secondary" href={emailLink.href}>
                  Contact / Email
                </a>
              ) : null}
            </div>
          </div>

          <dl className="overview-stats">
            <div>
              <dt>GitHub</dt>
              <dd>{githubLink?.displayText ?? "public profile"}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{emailLink?.displayText ?? "contact route available"}</dd>
            </div>
            <div>
              <dt>Resume PDF</dt>
              <dd>준비 중</dd>
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
              <span className="eyebrow">Direct Access</span>
              <span className="archive-card__count">public</span>
            </div>
            <h3>바로 확인 가능한 연락 경로</h3>
            <p>검토 후 바로 연결될 수 있도록 GitHub와 이메일만 남겼습니다. 이 페이지에서는 소개 문구보다 접근 경로를 우선합니다.</p>
            <div className="resume-links-grid">
              {githubLink ? (
                <a className="resume-link-card" href={githubLink.href} rel="noreferrer" target="_blank">
                  <span className="resume-link-card__label">GitHub</span>
                  <strong>{githubLink.displayText ?? githubLink.href}</strong>
                </a>
              ) : null}
              {emailLink ? (
                <a className="resume-link-card" href={emailLink.href}>
                  <span className="resume-link-card__label">Email</span>
                  <strong>{emailLink.displayText ?? emailLink.href.replace("mailto:", "")}</strong>
                </a>
              ) : null}
              <article className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">Resume PDF</span>
                <strong>요청 시 제공 / 공개용 버전 준비 중</strong>
              </article>
            </div>
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Quick Routes</span>
              <span className="archive-card__count">preferred</span>
            </div>
            <h3>바로가기와 권장 검토 흐름</h3>
            <ul className="list-stack compact-list">
              <li>Projects에서 대표 프로젝트와 근거 지표를 먼저 확인</li>
              <li>Resume에서 역할 적합성과 기술 범위를 빠르게 확인</li>
              <li>추가 자료가 필요하면 이메일로 후속 요청</li>
              <li>GitHub에서는 저장소와 작업 흐름을 직접 검토 가능</li>
            </ul>
            <div className="button-row">
              <Link className="button-link button-link--secondary" href="/projects">
                Portfolio Projects
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                Resume Summary
              </Link>
            </div>
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Contact Note</span>
              <span className="archive-card__count">open</span>
            </div>
            <h3>공개 범위와 응답 방식</h3>
            <p>
              공개 페이지에서는 최소한의 연락 경로만 유지합니다. 다만 채용 검토에 필요한 후속 자료, 이력서 PDF,
              프로젝트 보충 설명은 요청 시 정리된 형태로 전달할 수 있습니다.
            </p>
            <div className="tag-list">
              <span className="tag">GitHub 공개</span>
              <span className="tag">이메일 연락 가능</span>
              <span className="tag">Resume PDF 준비 중</span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
