import Link from "next/link";

import { projects } from "@/content/projects";

import styles from "./page.module.css";

type DecisionFile = {
  id: string;
  label: string;
  englishTitle: string;
  koreanTitle: string;
  signal: string;
  criteria: string;
  decision: string;
  linkedProjects: string[];
};

const decisionFiles: DecisionFile[] = [
  {
    id: "decision-question-design",
    label: "CASE FILE 01",
    englishTitle: "Decision Question Design",
    koreanTitle: "분석 주제를 판단 질문으로 바꾸는 방식",
    signal: "데이터는 있지만, 사용자가 실제로 무엇을 결정해야 하는지 흐릿한 상태",
    criteria: "문제를 설명하는 질문보다, 선택·보류·우선순위로 이어지는 판단 질문을 먼저 정의",
    decision: "매입 판단, 자원 배분, 전환 개선, 캠페인 우선순위로 분석 목적을 재구성",
    linkedProjects: [
      "lh-traffic-safety-analysis",
      "seoul-storefront-redveil",
      "shopeasy",
    ],
  },
  {
    id: "risk-first-framing",
    label: "CASE FILE 02",
    englishTitle: "Risk-first Framing",
    koreanTitle: "추천보다 먼저 멈춰야 할 신호를 보는 방식",
    signal: "좋아 보이는 후보 안에 숨은 거래 둔화, 과밀, 수요 취약 신호",
    criteria: "가격 부담, 유동성, 경쟁도, 수요 취약도를 함께 보고 위험 기준을 설계",
    decision: "매입 추천보다 보류 사유와 대체 후보를 먼저 제시",
    linkedProjects: ["seoul-storefront-redveil", "lh-traffic-safety-analysis"],
  },
  {
    id: "actionable-segmentation",
    label: "CASE FILE 03",
    englishTitle: "Actionable Segmentation",
    koreanTitle: "고객군을 액션과 KPI로 번역하는 방식",
    signal: "고객군마다 다른 반응, 이탈, 구매 완료 신호",
    criteria: "고객 가치, 구매 빈도, 채널 반응, 재방문 가능성을 기준으로 세그먼트 해석",
    decision: "캠페인 목표, 우선 채널, 확인 KPI, A/B 테스트 제안으로 연결",
    linkedProjects: [
      "uk-online-retail-segment-analysis",
      "starbucks-promotion-analysis",
      "shopeasy",
    ],
  },
  {
    id: "data-structure-design",
    label: "CASE FILE 04",
    englishTitle: "Data Structure Design",
    koreanTitle: "분석 가능한 테이블을 만드는 방식",
    signal: "원천 데이터만으로는 바로 판단할 수 없는 분리된 데이터 구조",
    criteria: "조인 기준, 이벤트 정의, 분석 단위, 지표 grain을 먼저 설계",
    decision: "고객-오퍼 테이블, 주문-세션 지표, 재현 가능한 파이프라인으로 정리",
    linkedProjects: [
      "starbucks-promotion-analysis",
      "shopeasy",
      "uk-online-retail-segment-analysis",
    ],
  },
  {
    id: "deliverable-design",
    label: "CASE FILE 05",
    englishTitle: "Deliverable Design",
    koreanTitle: "분석을 검토 가능한 산출물로 남기는 방식",
    signal: "노트북만으로는 문제, 접근, 결과, 한계를 빠르게 검토하기 어려움",
    criteria: "문제 정의, 접근 방식, 핵심 결과, 한계, 확인 경로를 분리",
    decision:
      "README, 방법론 문서, 재현성 가이드, 대시보드, 웹 화면, 실행 파이프라인으로 패키징",
    linkedProjects: [
      "lh-traffic-safety-analysis",
      "seoul-storefront-redveil",
      "nba-game-player-analysis",
      "starbucks-promotion-analysis",
    ],
  },
];

const projectDisplayNames: Record<string, string> = {
  "lh-traffic-safety-analysis": "LH Traffic Safety",
  "seoul-storefront-redveil": "Seoul Storefront Redveil",
  "shopeasy": "ShopEasy",
  "uk-online-retail-segment-analysis": "UK Online Retail",
  "starbucks-promotion-analysis": "Starbucks Promotion",
  "nba-game-player-analysis": "NBA Game Player Analysis",
};

const archiveFlow = ["Signal", "Criteria", "Decision"] as const;

function formatCount(value: number) {
  return value.toString().padStart(2, "0");
}

export default function CaseStudiesPage() {
  const projectTitleMap = new Map(
    projects.map((project) => [project.slug, project.title] as const),
  );
  const linkedProjectCount = new Set(decisionFiles.flatMap((item) => item.linkedProjects)).size;

  return (
    <main className="page-shell">
      <div className={`site-container page-grid ${styles.page}`}>
        <section className={`surface-card ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span className={styles.archiveStamp}>Signal Archive: Decision Files</span>
            <h1 className={styles.heroTitle}>Case Studies</h1>
            <p className={styles.heroSubtitle}>판단이 만들어진 기록들</p>
            <p className={styles.heroDescription}>
              프로젝트마다 데이터와 도메인은 달랐지만, 반복된 질문은 같았습니다. 무엇이 문제의
              신호인가. 어떤 기준으로 해석해야 하는가. 그리고 다음 판단은 무엇이어야 하는가.
            </p>
          </div>

          <section aria-label="archive index" className={styles.archiveIndex}>
            <div className={styles.archiveIndexHead}>
              <span className={styles.panelLabel}>Archive Index</span>
              <p className={styles.panelNote}>
                데이터 신호를 기준과 판단, 그리고 검토 가능한 산출물로 바꾼 방식의 기록입니다.
              </p>
            </div>

            <div className={styles.archiveIndexGrid}>
              <article className={styles.indexCard}>
                <span className={styles.indexLabel}>Case Files</span>
                <strong className={styles.indexValue}>{formatCount(decisionFiles.length)}</strong>
                <p className={styles.indexDescription}>문제 정의와 판단 흐름을 정리한 기록</p>
              </article>

              <article className={styles.indexCard}>
                <span className={styles.indexLabel}>Linked Projects</span>
                <strong className={styles.indexValue}>{formatCount(linkedProjectCount)}</strong>
                <p className={styles.indexDescription}>
                  공공·상권·커머스·CRM·스포츠 분석 프로젝트
                </p>
              </article>

              <article className={`${styles.indexCard} ${styles.indexCardWide}`}>
                <div className={styles.coreLensHead}>
                  <span className={styles.indexLabel}>Core Lens</span>
                  <p className={styles.indexDescription}>
                    신호를 읽고, 기준을 세우고, 다음 판단으로 번역하는 공통 흐름
                  </p>
                </div>

                <div aria-label="signal to decision flow" className={styles.coreLensFlow}>
                  {archiveFlow.map((step, index) => (
                    <div className={styles.coreLensStep} key={step}>
                      <span className={styles.coreLensStepLabel}>{step}</span>
                      {index < archiveFlow.length - 1 ? (
                        <span aria-hidden="true" className={styles.coreLensArrow}>
                          →
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </section>

        <section className={styles.archiveSection}>
          <div className={styles.sectionHead}>
            <span className={styles.panelLabel}>Decision Files</span>
            <p className={styles.panelNote}>
              흐릿한 문제를 판단 질문으로 바꾸고, 기준과 산출물까지 이어진 구조를 파일 단위로
              정리했습니다.
            </p>
          </div>

          <div className={styles.caseFileList}>
            {decisionFiles.map((file) => (
              <article className={styles.caseFileCard} id={file.id} key={file.id}>
                <div className={styles.caseFileRail}>
                  <span className={styles.caseFileLabel}>{file.label}</span>
                  <span className={styles.caseFileMeta}>Decision Log</span>
                </div>

                <div className={styles.caseFileBody}>
                  <header className={styles.caseFileHeader}>
                    <h2 className={styles.caseFileTitle}>{file.englishTitle}</h2>
                    <p className={styles.caseFileSubtitle}>{file.koreanTitle}</p>
                  </header>

                  <div className={styles.caseFileBlocks}>
                    <section className={styles.caseBlock}>
                      <span className={styles.caseBlockLabel}>Signal</span>
                      <p>{file.signal}</p>
                    </section>

                    <section className={styles.caseBlock}>
                      <span className={styles.caseBlockLabel}>Criteria</span>
                      <p>{file.criteria}</p>
                    </section>

                    <section className={styles.caseBlock}>
                      <span className={styles.caseBlockLabel}>Decision</span>
                      <p>{file.decision}</p>
                    </section>
                  </div>

                  <div className={styles.caseFileFooter}>
                    <span className={styles.caseBlockLabel}>Linked Projects</span>
                    <div className={styles.projectPills}>
                      {file.linkedProjects.map((slug) => (
                        <Link className={styles.projectPill} href={`/projects/${slug}`} key={slug}>
                          {projectDisplayNames[slug] ?? projectTitleMap.get(slug) ?? slug}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
