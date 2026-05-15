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
  before: string;
  after: string;
  hiringSignal: string;
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
    before: "상권 데이터 분석",
    after: "매입 보류 판단 서비스",
    hiringSignal: "요구사항이 모호한 상황에서 분석 질문을 재정의할 수 있음",
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
    before: "매력적인 후보를 찾는 상권 비교",
    after: "보류 신호와 대체 후보를 먼저 읽는 검토 구조",
    hiringSignal: "겉으로 좋은 지표보다 리스크 기준을 먼저 설계할 수 있음",
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
    before: "고객군 분류와 반응률 요약",
    after: "세그먼트별 액션, 채널, 확인 KPI 제안",
    hiringSignal: "고객 데이터를 마케팅/CRM 실행 언어로 번역할 수 있음",
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
    before: "원천 파일 중심의 데이터 확인",
    after: "분석 단위와 지표 기준이 분리된 재현 가능한 테이블 구조",
    hiringSignal: "흩어진 데이터를 분석 가능한 grain으로 재구성할 수 있음",
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
    before: "노트북과 결과 이미지 중심 산출물",
    after: "README, 검증 문서, 대시보드, 웹 화면으로 이어지는 검토 패키지",
    hiringSignal: "분석 결과를 동료와 채용 담당자가 검토 가능한 형태로 남길 수 있음",
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
const frameworkSteps = [
  {
    label: "Problem",
    detail: "무엇을 판단해야 하는지 먼저 좁힙니다.",
  },
  {
    label: "Criteria",
    detail: "비교 기준과 보류 조건을 명확히 둡니다.",
  },
  {
    label: "Analysis",
    detail: "데이터를 판단 단위에 맞춰 다시 묶습니다.",
  },
  {
    label: "Output",
    detail: "README, 대시보드, 웹 화면처럼 검토 가능한 형태로 남깁니다.",
  },
  {
    label: "Decision Value",
    detail: "다음 행동이나 우선순위로 이어지게 정리합니다.",
  },
];

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
            <h1 className={styles.heroTitle}>판단이 만들어진 기록들</h1>
            <p className={styles.heroDescription}>
              이 페이지는 프로젝트 목록이 아니라, 문제를 판단 질문으로 바꾸고 근거와 산출물로 연결하는 반복 가능한 분석 사고방식을 정리한 페이지입니다.
            </p>

            <div aria-label="signal to decision flow" className={styles.heroFlow}>
              {archiveFlow.map((step, index) => (
                <div className={styles.heroFlowStep} key={step}>
                  <span className={styles.heroFlowLabel}>{step}</span>
                  {index < archiveFlow.length - 1 ? (
                    <span aria-hidden="true" className={styles.heroFlowArrow}>
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className={styles.heroMetaBlock}>
              <span className={styles.heroMetaLabel}>Archive Scope</span>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaChip}>{formatCount(decisionFiles.length)} Case Files</span>
                <span className={styles.heroMetaChip}>
                  {formatCount(linkedProjectCount)} Linked Projects
                </span>
                <span className={styles.heroMetaChip}>Public</span>
                <span className={styles.heroMetaChip}>Commerce</span>
                <span className={styles.heroMetaChip}>CRM</span>
                <span className={styles.heroMetaChip}>Sports</span>
              </div>
            </div>
          </div>

          <aside aria-label="reframe sample" className={styles.reframeSample}>
            <span className={styles.panelLabel}>Reframe Sample</span>

            <div className={styles.reframeTransform}>
              <div className={styles.reframeTransformPair}>
                <span className={styles.reframeLabel}>From</span>
                <strong className={styles.reframeValue}>상권 데이터 분석</strong>
              </div>

              <span aria-hidden="true" className={styles.reframeTransformArrow}>
                →
              </span>

              <div className={`${styles.reframeTransformPair} ${styles.reframeTransformPairTo}`}>
                <span className={styles.reframeLabel}>To</span>
                <strong className={styles.reframeValue}>매입 보류 판단</strong>
              </div>
            </div>

            <div className={styles.reframeEvidence}>
              <span className={styles.reframeLabel}>Evidence</span>
              <div className={styles.reframeEvidenceList}>
                <span className={styles.reframeEvidenceChip}>리스크 점수</span>
                <span className={styles.reframeEvidenceChip}>보류 사유</span>
                <span className={styles.reframeEvidenceChip}>대체 후보</span>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.archiveSection}>
          <div className={styles.sectionHead}>
            <span className={styles.panelLabel}>05 Case Files</span>
            <p className={styles.panelNote}>
              신호, 기준, 판단이 어떻게 파일처럼 정리되었는지 카드 단위로 읽을 수 있게 구성했습니다.
            </p>
          </div>

          <div className={styles.frameworkGrid} aria-label="case study framework">
            {frameworkSteps.map((step, index) => (
              <article className={styles.frameworkCard} key={step.label}>
                <span className={styles.frameworkIndex}>{formatCount(index + 1)}</span>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>

          <div className={styles.caseFileList}>
            {decisionFiles.map((file) => {
              const caseBlocks = [
                { label: "Signal", value: file.signal },
                { label: "Criteria", value: file.criteria },
                { label: "Decision", value: file.decision },
                { label: "Before", value: file.before },
                { label: "After", value: file.after },
                { label: "Hiring Signal", value: file.hiringSignal },
              ];

              return (
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
                      {caseBlocks.map((block) => (
                        <section className={styles.caseBlock} key={block.label}>
                          <span className={styles.caseBlockLabel}>{block.label}</span>
                          <p>{block.value}</p>
                        </section>
                      ))}
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
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
