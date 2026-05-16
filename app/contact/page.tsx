import Link from "next/link";

import { EmailCopyButton } from "@/components/email-copy-button";
import { PageHero } from "@/components/page-hero";
import { ContactDockModule } from "@/components/page-summary";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export default function ContactPage() {
  const githubLink = profile.contactLinks.find((link) => link.label === "GitHub");
  const emailLink = profile.contactLinks.find((link) => link.label === "Email");
  const emailAddress = emailLink?.displayText ?? emailLink?.href.replace("mailto:", "") ?? "dffxonnb@gmail.com";
  const mainProject = projects.find((project) => project.slug === "seoul-storefront-redveil");
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
      label: "Projects",
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
    {
      label: "Case Studies",
      href: "/case-studies",
      detail: "반복 가능한 문제 해결 방식 보기",
      kind: "internal" as const,
    },
  ];

  return (
    <main className="page-shell">
      <div className="site-container page-grid">
        <PageHero
          eyebrow="Contact"
          lead="포트폴리오 검토 후 바로 연락할 수 있도록 이메일, GitHub, Resume, 대표 프로젝트 경로를 정리했습니다."
          title="연락과 추가 검토 경로"
          titleId="contact-title"
        >
          <ContactDockModule
            ariaLabel="contact dock"
            links={contactDockLinks}
            note="이력서 PDF와 프로젝트 보충 설명은 이메일 요청 시 정리된 형태로 전달할 수 있습니다."
          />
        </PageHero>

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
          <article className="archive-card contact-direct-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Direct Access</span>
              <span className="archive-card__count">public</span>
            </div>
            <h3>바로 연락하거나 검토 이어가기</h3>
            <p>이메일, GitHub, 대표 프로젝트, Resume 상태를 한 카드에서 확인할 수 있습니다.</p>
            <div className="contact-direct-grid">
              <div className="contact-direct-item contact-direct-item--primary">
                <span className="resume-link-card__label">Email</span>
                <strong>{emailAddress}</strong>
                <div className="button-row contact-direct-actions">
                  <a className="button-link" href={`mailto:${emailAddress}`}>
                    이메일 보내기
                  </a>
                  <EmailCopyButton email={emailAddress} />
                </div>
              </div>
              {githubLink ? (
                <a className="contact-direct-item" href={githubLink.href} rel="noreferrer" target="_blank">
                  <span className="resume-link-card__label">GitHub</span>
                  <strong>{githubLink.displayText ?? githubLink.href}</strong>
                </a>
              ) : null}
              <div className="contact-direct-item">
                <span className="resume-link-card__label">Portfolio Review Route</span>
                <strong>Projects → Resume → Case Studies → GitHub</strong>
              </div>
              {mainProject ? (
                <Link className="contact-direct-item" href={`/projects/${mainProject.slug}`}>
                  <span className="resume-link-card__label">Main Project</span>
                  <strong>{mainProject.title}</strong>
                </Link>
              ) : null}
              <div className="contact-direct-item contact-direct-item--muted">
                <span className="resume-link-card__label">Resume PDF</span>
                <strong>Available on Request</strong>
              </div>
            </div>
          </article>
          <article className="archive-card">
            <div className="archive-card__meta">
              <span className="eyebrow">Quick Routes</span>
              <span className="archive-card__count">preferred</span>
            </div>
            <h3>바로가기와 권장 검토 흐름</h3>
            <ul className="list-stack compact-list">
              <li>Projects → 대표 프로젝트와 근거 지표 확인</li>
              <li>Resume → 기술 스택과 역할 적합성 확인</li>
              <li>Case Studies → 문제 해결 방식 확인</li>
              <li>GitHub → 구현과 문서 확인</li>
            </ul>
            <div className="button-row">
              <Link className="button-link button-link--secondary" href="/projects">
                대표 프로젝트 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/resume">
                Resume 보기
              </Link>
              <Link className="button-link button-link--secondary" href="/case-studies">
                Case Studies 보기
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
              공개 페이지에서는 핵심 검토 경로와 연락 수단을 우선합니다. 필요 시 이력서 PDF와 프로젝트 보충 설명을
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
