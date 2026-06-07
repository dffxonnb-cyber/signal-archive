import Link from "next/link";

import { EmailCopyButton } from "@/components/email-copy-button";
import { PageHero } from "@/components/page-hero";
import { ContactDockModule } from "@/components/page-summary";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

import styles from "./page.module.css";

export default function ContactPage() {
  const githubLink = profile.contactLinks.find((link) => link.label === "GitHub");
  const emailLink = profile.contactLinks.find((link) => link.label === "Email");
  const emailAddress = emailLink?.displayText ?? emailLink?.href.replace("mailto:", "") ?? "dffxonnb@gmail.com";
  const mainProject = projects.find((project) => project.slug === "seoul-storefront-redveil");
  const reviewRoutes = [
    {
      label: "01",
      title: "Projects",
      detail: "대표 프로젝트와 근거 지표",
      href: "/projects",
      kind: "internal" as const,
    },
    {
      label: "02",
      title: "Resume",
      detail: "역할 적합성과 기술 요약",
      href: "/resume",
      kind: "internal" as const,
    },
    {
      label: "03",
      title: "Case Studies",
      detail: "문제 해결 방식과 판단 구조",
      href: "/case-studies",
      kind: "internal" as const,
    },
    ...(githubLink
      ? [
          {
            label: "04",
            title: "GitHub",
            detail: "구현 저장소와 공개 문서",
            href: githubLink.href,
            kind: "external" as const,
          },
        ]
      : []),
  ];
  const materials = [
    "Resume PDF available on request",
    "Project supplement available on request",
    "GitHub public",
    "Email contact open",
  ];
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
          className={styles.contactHero}
          eyebrow="Contact"
          lead="대표 프로젝트, 이력 요약, 문제 해결 방식, 구현 저장소를 확인한 뒤 바로 연락할 수 있도록 최종 검토 경로를 정리했습니다."
          meta={<span className="page-hero__meta-chip">Best next action: Email</span>}
          title="검토를 마쳤다면, 여기서 이어갈 수 있습니다."
          titleId="contact-title"
        >
          <ContactDockModule
            ariaLabel="contact dock"
            links={contactDockLinks}
            note="이메일을 1순위 연락 수단으로 두고, GitHub와 검토 경로는 바로 이어서 열 수 있게 배치했습니다."
          />
        </PageHero>

        <section className={styles.contactBoard} aria-labelledby="contact-gateway-title">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Final Review Gateway</span>
            <h2 className="section-title" id="contact-gateway-title">
              연락 전에 확인할 것과 바로 요청할 것을 한 화면에 정리했습니다.
            </h2>
          </div>

          <div className={styles.gatewayGrid}>
            <article className={`${styles.gatewayCard} ${styles.primaryContactCard}`}>
              <div className={styles.cardMeta}>
                <span className={styles.cardLabel}>Primary Contact</span>
                <span className={`${styles.statusChip} ${styles.statusChipPrimary}`}>Primary</span>
              </div>
              <div className={styles.emailBlock}>
                <span className={styles.emailCaption}>Best next step</span>
                <strong>{emailAddress}</strong>
              </div>
              <p>
                이력서 PDF와 프로젝트 보충 설명은 이메일 요청 시 정리된 형태로 전달할 수 있습니다.
              </p>
              <div className={styles.primaryActions}>
                <a className="button-link" href={`mailto:${emailAddress}`}>
                  Send email
                </a>
                <EmailCopyButton email={emailAddress} />
              </div>
            </article>

            <article className={`${styles.gatewayCard} ${styles.reviewRouteCard}`}>
              <div className={styles.cardMeta}>
                <span className={styles.cardLabel}>Review Before Contact</span>
                <span className={styles.statusChip}>Review Route</span>
              </div>
              <h3>추천 검토 순서</h3>
              <div className={styles.routeSteps} aria-label="recommended review route">
                {reviewRoutes.map((route, index) => {
                  const routeContent = (
                    <>
                      <span className={styles.routeIndex}>{route.label}</span>
                      <span>
                        <strong>{route.title}</strong>
                        <em>{route.detail}</em>
                      </span>
                    </>
                  );

                  return (
                    <div className={styles.routeStepGroup} key={route.href}>
                      {route.kind === "internal" ? (
                        <Link className={styles.routeStep} href={route.href}>
                          {routeContent}
                        </Link>
                      ) : (
                        <a className={styles.routeStep} href={route.href} rel="noreferrer" target="_blank">
                          {routeContent}
                        </a>
                      )}
                      {index < reviewRoutes.length - 1 ? (
                        <span aria-hidden="true" className={styles.routeArrow}>
                          →
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </article>

            <article className={`${styles.gatewayCard} ${styles.profileSnapshotCard}`}>
              <div className={styles.cardMeta}>
                <span className={styles.cardLabel}>Profile Snapshot</span>
                <span className={styles.statusChip}>Open</span>
              </div>
              <h3>{profile.name}</h3>
              <p>{profile.headline}</p>
              <div className={styles.chipList}>
                {profile.primaryRoles.map((role) => (
                  <span className={styles.softChip} key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </article>

            {mainProject ? (
              <article className={`${styles.gatewayCard} ${styles.mainProjectCard}`}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardLabel}>Main Proof Project</span>
                  <span className={`${styles.statusChip} ${styles.statusChipRust}`}>Redveil</span>
                </div>
                <h3>{mainProject.title}</h3>
                <p>{mainProject.supportingLine}</p>
                <div className={styles.projectProofStrip}>
                  <span>{mainProject.review.evidence}</span>
                  <strong>{mainProject.review.deliverable}</strong>
                </div>
                <Link className={styles.textLink} href={`/projects/${mainProject.slug}`}>
                  프로젝트 상세 보기
                </Link>
              </article>
            ) : null}

            <article className={`${styles.gatewayCard} ${styles.materialsCard}`}>
              <div className={styles.cardMeta}>
                <span className={styles.cardLabel}>Availability / Materials</span>
                <span className={styles.statusChip}>Available</span>
              </div>
              <h3>요청 가능한 자료와 공개 범위</h3>
              <ul className={styles.materialList}>
                {materials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
