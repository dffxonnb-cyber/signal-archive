import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/content/case-studies";
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
      "shelter-signal",
      "shopeasy",
    ],
    axis: "Question",
    tone: "question",
  },
  {
    id: "risk-signals-before-volume",
    number: "02",
    title: "Signal-first Framing",
    description: "선택을 서두르기 전에 먼저 확인할 신호를 정리하는 방식",
    proves: "시간 민감 신호와 데이터 신뢰 상태를 함께 설계할 수 있음",
    primaryExample: "Shelter Signal",
    primaryExampleSlug: "shelter-signal",
    signal: "현재 유효하며 D-Day~D-3 안에 보호 종료가 가까운 공고",
    criteria: "KST 30일, noticeEdt, days_left, source, cacheStatus, fallbackReason",
    decisionOutput: "current·urgent 분리, 지역별 탐색, cache/fallback 상태 패널",
    evidence: ["Live API", "D-Day~D-3", "Region/Page API", "5분 TTL Cache", "Observability"],
    linkedProjects: ["seoul-storefront-redveil", "shelter-signal", "lh-traffic-safety-analysis"],
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
      "shelter-signal",
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
    evidence: ["README", "검증 문서", "웹 기반 검토 화면", "공개 프로토타입 링크"],
    linkedProjects: [
      "lh-traffic-safety-analysis",
      "seoul-storefront-redveil",
      "shelter-signal",
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
  "shelter-signal": "Shelter Signal",
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
    detail: "보류 사유와 대체 후보를 웹 검토 흐름으로 구현",
  },
  {
    slug: "shelter-signal",
    title: "Shelter Signal",
    detail: "공고 생명주기와 데이터 신뢰 상태를 보호 종료 임박 신호로 구현",
  },
  {
    slug: "lh-traffic-safety-analysis",
    title: "LH Traffic Safety",
    detail: "공간 위험도를 설치 우선순위로 변환",
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
    {
      label: "판단 파일",
      value: formatCount(decisionFiles.length),
      note: "질문 재정의부터 산출물 설계까지",
    },
    {
      label: "연결 프로젝트",
      value: formatCount(linkedProjectCount),
      note: "반복되는 판단 방식을 확인하는 근거",
    },
    {
      label: "분석 도메인",
      value: "Public · CRM",
      note: "상권·공공·커머스·스포츠 분석",
    },
    {
      label: "산출물",
      value: "Web · Docs",
      note: "대시보드·웹 서비스·검증 문서",
    },
  ];

  const getProjectName = (slug: string) =>
    projectDisplayNames[slug] ?? projectTitleMap.get(slug) ?? slug;

  return (
    <main className="page-shell">
      <div className={`site-container page-grid ${styles.page}`}>
        <PageHero
          className={styles.compactHero}
          eyebrow="Signal Archive: Decision Files"
          lead={
            <>
              Case Studies는 프로젝트 뒤에 반복되는 문제 해결 방식을 보여줍니다. 모호한 질문을 판단 기준으로 바꾸고,
              데이터를 리스크·우선순위 신호로 해석하며, 분석을 검토 가능한 의사결정 도구로 연결하는 과정입니다.
            </>
          }
          meta={<span className="page-hero__meta-chip">데이터를 판단으로 바꾸는 5가지 방식.</span>}
          panelPlacement="below"
          title="판단이 만들어지는 방식"
          titleId="decision-files-title"
        >
          <div className={styles.heroSummaryPanel} aria-label="Decision files summary">
            <div className={styles.flowSummary}>
              <span className={styles.panelLabel}>검토 기준</span>
              <p className={styles.flowNote}>
                신호를 읽고 기준을 세운 뒤, 리뷰어가 판단 근거와 결과물을 함께 확인할 수 있게 남깁니다.
              </p>
              <div aria-label="Signal to Criteria to Decision" className="page-hero__flow">
                {archiveFlow.map((step, index) => (
                  <div className="page-hero__flow-step" key={step}>
                    <span className="page-hero__flow-label">{step}</span>
                    {index < archiveFlow.length - 1 ? (
                      <span aria-hidden="true" className="page-hero__flow-arrow">
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div aria-label="Case studies archive scope" className={styles.archiveScopeGrid}>
              {archiveScope.map((item) => (
                <article className={styles.archiveScopeCard} key={item.label}>
                  <span className={styles.panelLabel}>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>

            <div aria-label="Reframe sample" className={styles.reframeSample}>
              <span className={styles.panelLabel}>질문 재정의 예시</span>
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
                  <strong className={styles.reframeValue}>매입 전 리스크 검토 프로토타입</strong>
                </div>
              </div>
              <p className={styles.reframeNote}>
                단순 분석 결과를 검토자가 보류·비교·대체 후보를 판단할 수 있는 흐름으로 재구성합니다.
              </p>
            </div>
          </div>
        </PageHero>

        <section className={styles.archiveSection} aria-labelledby="decision-file-list-title">
          <div className={styles.sectionHead}>
            <span className={styles.panelLabel}>05 판단 파일</span>
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

        <section className={styles.patternSection} aria-labelledby="repeated-patterns-title">
          <div className={styles.sectionHead}>
            <span className={styles.panelLabel}>03 Repeated Frames</span>
            <h2 className={styles.sectionTitle} id="repeated-patterns-title">
              프로젝트를 가로질러 반복되는 3가지 분석 패턴
            </h2>
            <p className={styles.panelNote}>
              도메인이 달라도 질문을 좁히고, 판단 신호를 설계하고, 결과를 검토 가능한 언어와 화면으로 전달하는 방식은
              반복됩니다.
            </p>
          </div>

          <div className={styles.patternGrid}>
            {caseStudies.map((pattern, index) => (
              <article className={styles.patternCard} key={pattern.slug}>
                <div className={styles.patternTopline}>
                  <strong>{formatCount(index + 1)}</strong>
                  <span>{pattern.category}</span>
                </div>
                <div className={styles.patternTitleBlock}>
                  <h3>{pattern.title}</h3>
                  <p>{pattern.summary}</p>
                </div>
                <ul className={styles.patternMoves}>
                  {pattern.keyMoves.map((move) => (
                    <li key={move}>{move}</li>
                  ))}
                </ul>
                <div className={styles.patternProjects}>
                  <span className={styles.caseBlockLabel}>Connected Proof</span>
                  <div className={styles.projectPills}>
                    {pattern.linkedProjects.map((slug) => (
                      <Link className={styles.projectPill} href={`/projects/${slug}`} key={slug}>
                        {getProjectName(slug)}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
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
