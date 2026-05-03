import Link from "next/link";

import { ContactDockModule } from "@/components/page-summary";
import { profile } from "@/content/profile";

export default function ContactPage() {
  const githubLink = profile.contactLinks.find((link) => link.label === "GitHub");
  const emailLink = profile.contactLinks.find((link) => link.label === "Email");
  const contactDockLinks = [
    ...(emailLink
      ? [
          {
            label: "Email",
            href: emailLink.href,
            detail: emailLink.displayText ?? emailLink.href.replace("mailto:", ""),
            tone: "primary" as const,
          },
        ]
      : []),
    ...(githubLink
      ? [
          {
            label: "GitHub",
            href: githubLink.href,
            detail: githubLink.displayText ?? githubLink.href,
          },
        ]
      : []),
    {
      label: "Portfolio",
      href: "/projects",
      detail: "대표 프로젝트와 전체 아카이브 보기",
      kind: "internal" as const,
    },
    {
      label: "Resume",
      href: "/resume",
      detail: "역할 적합성과 기술 요약 보기",
      kind: "internal" as const,
    },
  ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <section className="surface-card page-header">
          <div className="page-header__lead">
            <span className="eyebrow">Contact</span>
            <h1 className="page-title">검토와 연락을 위한 공개 정보</h1>
            <p className="page-intro">
              GitHub와 이메일을 통해 프로젝트 검토 및 후속 연락이 가능합니다. 이력서 PDF나 프로젝트 보충 자료는 요청 시 전달할 수 있습니다.
            </p>
          </div>

          <ContactDockModule
            ariaLabel="contact dock"
            links={contactDockLinks}
            note="이력서 PDF와 프로젝트 보충 설명은 이메일 요청 시 정리된 형태로 전달할 수 있습니다."
          />
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
                  <span className="resume-link-card__label">이메일</span>
                  <strong>{emailLink.displayText ?? emailLink.href.replace("mailto:", "")}</strong>
                </a>
              ) : null}
              <article className="resume-link-card resume-link-card--muted">
                <span className="resume-link-card__label">이력서 PDF</span>
                <strong>요청 시 제공</strong>
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
              <li>추가 자료가 필요하면 이메일로 요청</li>
              <li>GitHub에서는 저장소와 작업 흐름을 직접 검토 가능</li>
            </ul>
            <div className="button-row">
              <Link className="button-link button-link--secondary" href="/projects">
                프로젝트 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                이력서 보기
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
              공개 페이지에서는 최소한의 연락 경로만 유지합니다. 필요 시 이력서 PDF와 프로젝트 보충 설명을
              정리된 형태로 전달할 수 있습니다.
            </p>
            <div className="tag-list">
              <span className="tag">GitHub 공개</span>
              <span className="tag">이메일 연락 가능</span>
              <span className="tag">이력서 PDF 제공 가능</span>
              <span className="tag">프로젝트 보충 자료 제공 가능</span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
