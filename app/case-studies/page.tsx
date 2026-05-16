import Link from "next/link";

import { projects } from "@/content/projects";

import styles from "./page.module.css";

type DecisionFileTone = "question" | "risk" | "segment" | "structure" | "delivery";

type DecisionFile = {
  id: string;
  number: string;
  title: string;
  description: string;
  proves: string;
  primaryExample: string;
  primaryExampleSlug: string;
  signal: string;
  criteria: string;
  decisionOutput: string;
  evidence: string[];
  linkedProjects: string[];
  axis: string;
  tone: DecisionFileTone;
};

const decisionFiles: DecisionFile[] = [
  {
    id: "decision-question-design",
    number: "01",
    title: "Decision Question Design",
    description: "분석 주제를 판단 질문으로 바꾸는 방식",
    proves: "요구사항이 모호한 상황에서 분석 질문을 재정의할 수 있음",
    primaryExample: "LH Traffic Safety Analysis",
    primaryExampleSlug: "lh-traffic-safety-analysis",
    signal: "사고 이력이 부족한 신도시에서도 우선 검토 구간을 정해야 하는 상황",
    criteria: "사고 패턴, 공간 단위, 위험 신호, 우선순위 기준",
    decisionOutput: "안전시설 설치 우선순위 검토 구조",
    evidence: ["Mean AUC 0.8604", "Top-10% Lift 4.39x"],
    linkedProjects: [
      "lh-traffic-safety-analysis",
      "seoul-storefront-redveil",
      "shopeasy",
    ],
    axis: "Question",
    tone: "question",
  },
  {
    id: "risk-signals-before-volume",
    number: "02",
    title: "Risk-first Framing",
    description: "추천보다 먼저 멈춰야 할 신호를 보는 방식",
    proves: "겉으로 좋아 보이는 지표보다 리스크 기준을 먼저 설계할 수 있음",
    primaryExample: "Seoul Storefront Redveil",
    primaryExampleSlug: "seoul-storefront-redveil",
    signal: "좋아 보이는 후보 안에 숨은 거래 둔화, 과밀, 수요 취약 신호",
    criteria: "가격 부담, 유동성, 경쟁도, 수요 취약도",
    decisionOutput: "매입 추천보다 보류 사유와 대체 후보를 먼저 제시",
    evidence: ["서울 25개 구", "행정동 428개", "거래 12,074건", "취약 상권 1,570개"],
    linkedProjects: ["seoul-storefront-redveil", "lh-traffic-safety-analysis"],
    axis: "Risk",
    tone: "risk",
  },
  {
    id: "segmenting-for-business-meaning",
    number: "03",
    title: "Actionable Segmentation",
    description: "고객군을 액션과 KPI로 번역하는 방식",
    proves: "고객 데이터를 마케팅/CRM 실행 언어로 번역할 수 있음",
    primaryExample: "Starbucks Promotion Analysis",
    primaryExampleSlug: "starbucks-promotion-analysis",
    signal: "고객군마다 다른 반응, 이탈, 구매 완료 신호",
    criteria: "고객 가치, 구매 빈도, 채널 반응, 재방문 가능성",
    decisionOutput: "캠페인 목표, 우선 채널, 확인 KPI, A/B 테스트 제안",
    evidence: ["AUC 0.8147", "Recall 0.8712", "Precision 0.6830", "F1 0.7657"],
    linkedProjects: [
      "starbucks-promotion-analysis",
      "uk-online-retail-segment-analysis",
      "shopeasy",
    ],
    axis: "CRM",
    tone: "segment",
  },
  {
    id: "data-structure-design",
    number: "04",
    title: "Data Structure Design",
    description: "분석 가능한 테이블을 만드는 방식",
    proves: "흩어진 데이터를 분석 가능한 grain으로 재구성할 수 있음",
    primaryExample: "Starbucks Promotion Analysis",
    primaryExampleSlug: "starbucks-promotion-analysis",
    signal: "원천 데이터만으로는 바로 판단할 수 없는 분리된 데이터 구조",
    criteria: "조인 기준, 이벤트 정의, 분석 단위, 지표 grain",
    decisionOutput: "고객-오퍼 테이블, 주문-세션 지표, 재현 가능한 파이프라인",
    evidence: ["Profile · Transcript · Portfolio 구조", "분석 가능한 통합 테이블로 재설계"],
    linkedProjects: [
      "starbucks-promotion-analysis",
      "shopeasy",
      "uk-online-retail-segment-analysis",
    ],
    axis: "Grain",
    tone: "structure",
  },
  {
    id: "turn-analysis-into-a-decision-tool",
    number: "05",
    title: "Deliverable Design",
    description: "분석을 검토 가능한 산출물로 남기는 방식",
    proves: "분석 결과를 동료와 채용 담당자가 검토 가능한 형태로 남길 수 있음",
    primaryExample: "Seoul Storefront Redveil",
    primaryExampleSlug: "seoul-storefront-redveil",
    signal: "노트북만으로는 문제, 접근, 결과, 한계를 빠르게 검토하기 어려움",
    criteria: "문제 정의, 접근 방식, 핵심 결과, 한계, 확인 경로",
    decisionOutput: "README, 방법론 문서, 재현성 가이드, 대시보드, 웹 화면, 실행 파이프라인",
    evidence: ["README", "검증 문서", "웹 기반 의사결정 화면", "공개 서비스 링크"],
    linkedProjects: [
      "lh-traffic-safety-analysis",
      "seoul-storefront-redveil",
      "nba-game-player-analysis",
      "starbucks-promotion-analysis",
    ],
    axis: "Output",
    tone: "delivery",
  },
];

const projectDisplayNames: Record<string, string> = {
  "lh-traffic-safety-analysis": "LH Traffic Safety",
  "seoul-storefront-redveil": "Seoul Storefront Redveil",
  shopeasy: "ShopEasy",
  "uk-online-retail-segment-analysis": "UK Online Retail",
  "starbucks-promotion-analysis": "Starbucks Promotion",
  "nba-game-player-analysis": "NBA Game Player Analysis",
};

const archiveFlow = ["Signal", "Criteria", "Decision"] as const;

const toneClassMap: Record<DecisionFileTone, string> = {
  question: styles.toneQuestion,
  risk: styles.toneRisk,
  segment: styles.toneSegment,
  structure: styles.toneStructure,
  delivery: styles.toneDelivery,
};

const ctaProjects = [
  {
    slug: "seoul-storefront-redveil",
    title: "Seoul Storefront Redveil",
    detail: "리스크 기준을 웹 의사결정 UI로 구현",
  },
  {
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety",
    detail: "공간 위험도를 설치 우선순위로 변환",
  },
  {
    slug: "starbucks-promotion-analysis",
    title: "Starbucks Promotion",
    detail: "고객 반응을 CRM 액션으로 번역",
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
  const archiveScope = [
    `${formatCount(decisionFiles.length)} Decision Files`,
    `${formatCount(linkedProjectCount)} Linked Projects`,
    "Domains: Public · Commerce · CRM · Sports",
    "Outputs: README · Dashboard · Web Service · Validation Notes",
  ];

  const getProjectName = (slug: string) =>
    projectDisplayNames[slug] ?? projectTitleMap.get(slug) ?? slug;

  return (
    <main className="page-shell">
      <div className={`site-container page-grid ${styles.page}`}>
        <section className={`surface-card ${styles.hero}`} aria-labelledby="decision-files-title">
          <div className={styles.heroCopy}>
            <span className={styles.archiveStamp}>Signal Archive: Decision Files</span>
            <h1 className={styles.heroTitle} id="decision-files-title">
              판단이 만들어지는 방식
            </h1>
            <p className={styles.heroConcept}>5 ways I turn data into decisions.</p>
            <p className={styles.heroDescription}>
              프로젝트를 많이 나열하기보다, 제가 반복해서 사용하는 분석 판단 방식을 정리했습니다. 각 파일은 문제를
              좁히고, 기준을 세우고, 검토 가능한 산출물로 남기는 과정을 보여줍니다.
            </p>

            <div className={styles.heroFlowBlock}>
              <p className={styles.flowNote}>
                데이터 신호를 읽고, 판단 기준을 세운 뒤, 리뷰 가능한 산출물로 남기는 구조입니다.
              </p>
              <div aria-label="Signal to Criteria to Decision" className={styles.heroFlow}>
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
            </div>
          </div>

          <aside aria-label="Decision files archive scope" className={styles.scopePanel}>
            <div className={styles.archiveScope}>
              <span className={styles.panelLabel}>Archive Scope</span>
              <div className={styles.scopeList}>
                {archiveScope.map((item, index) => (
                  <span
                    className={`${styles.scopeItem} ${index > 1 ? styles.scopeItemWide : ""}`}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div aria-label="Reframe sample" className={styles.reframeSample}>
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
                  <strong className={styles.reframeValue}>매입 보류 판단 서비스</strong>
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
            </div>
          </aside>
        </section>

        <section className={styles.archiveSection} aria-labelledby="decision-file-list-title">
          <div className={styles.sectionHead}>
            <span className={styles.panelLabel}>05 Decision Files</span>
            <h2 className={styles.sectionTitle} id="decision-file-list-title">
              판단 가능한 산출물로 이어지는 5가지 파일
            </h2>
            <p className={styles.panelNote}>
              각 파일은 추상적인 작업 방식이 아니라, 어떤 신호를 보고 어떤 기준으로 판단했으며 무엇을 남겼는지까지
              확인할 수 있게 정리했습니다.
            </p>
          </div>

          <div className={styles.caseFileList}>
            {decisionFiles.map((file) => {
              const caseBlocks = [
                { label: "Signal", value: file.signal },
                { label: "Criteria", value: file.criteria },
                { label: "Decision Output", value: file.decisionOutput },
              ];

              return (
                <article
                  className={`${styles.caseFileCard} ${toneClassMap[file.tone]}`}
                  id={file.id}
                  key={file.id}
                >
                  <div className={styles.caseFileRail}>
                    <span className={styles.caseFileLabel}>Case File</span>
                    <strong className={styles.caseFileNumber}>{file.number}</strong>
                    <span className={styles.caseFileMeta}>{file.axis}</span>
                  </div>

                  <div className={styles.caseFileBody}>
                    <header className={styles.caseFileHeader}>
                      <div className={styles.caseFileTopline}>
                        <span className={styles.axisChip}>{file.axis}</span>
                        <span className={styles.caseFileCode}>Decision File {file.number}</span>
                      </div>
                      <div className={styles.caseFileTitleBlock}>
                        <h3 className={styles.caseFileTitle}>{file.title}</h3>
                        <p className={styles.caseFileDescription}>{file.description}</p>
                      </div>
                    </header>

                    <div className={styles.proofGrid}>
                      <section className={styles.proofBlock}>
                        <span className={styles.caseBlockLabel}>What this proves</span>
                        <p>{file.proves}</p>
                      </section>

                      <section className={styles.primaryExampleBlock}>
                        <span className={styles.caseBlockLabel}>Primary Example</span>
                        <Link href={`/projects/${file.primaryExampleSlug}`}>
                          {file.primaryExample}
                        </Link>
                      </section>
                    </div>

                    <div className={styles.caseFileBlocks}>
                      {caseBlocks.map((block) => (
                        <section className={styles.caseBlock} key={block.label}>
                          <span className={styles.caseBlockLabel}>{block.label}</span>
                          <p>{block.value}</p>
                        </section>
                      ))}
                    </div>

                    <div className={styles.caseFileUtility}>
                      <section className={styles.evidenceBlock}>
                        <span className={styles.caseBlockLabel}>Evidence / Concrete Output</span>
                        <div className={styles.metricPills}>
                          {file.evidence.map((item) => (
                            <span className={styles.metricPill} key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section className={styles.linkedProjectsBlock}>
                        <span className={styles.caseBlockLabel}>Linked Projects</span>
                        <div className={styles.projectPills}>
                          {file.linkedProjects.map((slug) => (
                            <Link className={styles.projectPill} href={`/projects/${slug}`} key={slug}>
                              {getProjectName(slug)}
                            </Link>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={`surface-card ${styles.ctaSection}`} aria-labelledby="decision-files-cta">
          <div className={styles.ctaHeader}>
            <span className={styles.panelLabel}>Project Proof</span>
            <h2 className={styles.sectionTitle} id="decision-files-cta">
              이 사고방식이 실제 프로젝트에서 어떻게 구현됐는지 보기
            </h2>
          </div>

          <div className={styles.ctaGrid}>
            {ctaProjects.map((project) => (
              <Link
                aria-label={`${project.title} 프로젝트 보기`}
                className={styles.ctaCard}
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <strong>{project.title}</strong>
                <span>{project.detail}</span>
                <em>프로젝트 보기</em>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
