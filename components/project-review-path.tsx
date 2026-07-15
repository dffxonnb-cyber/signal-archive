import type { ProjectReview } from "@/types/content";

import styles from "./project-review-path.module.css";

type ProjectReviewPathProps = {
  slug: string;
  title: string;
  review: ProjectReview;
};

type ReviewStepTitles = readonly [string, string, string];

const reviewStepTitlesBySlug: Record<string, ReviewStepTitles> = {
  "seoul-storefront-redveil": [
    "보류 질문부터 확인",
    "리스크·decision artifact 검증",
    "전문 검토 경계 확인",
  ],
  "shelter-signal": [
    "우선 공고 기준 확인",
    "Live API·cache·fallback 검증",
    "운영 범위와 제외 항목 확인",
  ],
  "decisionops-lab": [
    "의사결정 질문 확인",
    "Metric contract·quality gate 검증",
    "Decision memo 결과 확인",
  ],
  "lh-traffic-safety-analysis": [
    "100m 검토 단위 확인",
    "LORO·Top-k 근거 검증",
    "Public-safe 경계 확인",
  ],
  "starbucks-promotion-analysis": [
    "타깃 질문 확인",
    "고객 반응 모델 근거 확인",
    "캠페인 적용 범위 확인",
  ],
  "uk-online-retail-segment-analysis": [
    "세그먼트 질문 확인",
    "고객군 분류 근거 확인",
    "유지·재활성화 액션 확인",
  ],
  shopeasy: [
    "전환 질문 확인",
    "퍼널·실험 근거 확인",
    "대시보드 결과 확인",
  ],
  "job-signal-pipeline": [
    "파이프라인 질문 확인",
    "SQL·로컬 검증 확인",
    "비공개 범위 확인",
  ],
  "nba-game-player-analysis": [
    "분석 질문 확인",
    "예측·선수 지표 근거 확인",
    "아카이브 범위 확인",
  ],
};

const fallbackTitles: ReviewStepTitles = [
  "판단 질문 확인",
  "핵심 근거 검증",
  "결과물과 범위 확인",
];

export function ProjectReviewPath({ slug, title, review }: ProjectReviewPathProps) {
  const stepTitles = reviewStepTitlesBySlug[slug] ?? fallbackTitles;
  const steps = [
    {
      label: "01 Question",
      time: "0:00–0:40",
      title: stepTitles[0],
      description: review.decisionQuestion,
    },
    {
      label: "02 Evidence",
      time: "0:40–2:10",
      title: stepTitles[1],
      description: review.evidence,
    },
    {
      label: "03 Output / Boundary",
      time: "2:10–3:00",
      title: stepTitles[2],
      description: review.deliverable,
    },
  ];

  return (
    <aside className={styles.shell} aria-labelledby={`review-path-${slug}`}>
      <div className="site-container">
        <section className={`surface-card ${styles.card}`}>
          <div className={styles.header}>
            <div>
              <span className={styles.eyebrow}>3-minute review path</span>
              <h2 id={`review-path-${slug}`}>3분 검토 순서</h2>
              <p>{title}의 질문, 근거, 결과물을 아래 순서로 빠르게 확인할 수 있습니다.</p>
            </div>
            <span className={styles.duration}>03:00</span>
          </div>

          <ol className={styles.steps}>
            {steps.map((step) => (
              <li className={styles.step} key={step.label}>
                <div className={styles.stepMeta}>
                  <span>{step.label}</span>
                  <time>{step.time}</time>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <p className={styles.signal}>
            <strong>채용 신호</strong>
            <span>{review.hiringSignal}</span>
          </p>
        </section>
      </div>
    </aside>
  );
}
