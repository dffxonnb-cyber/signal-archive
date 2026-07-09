import Link from "next/link";

import type { Project } from "@/types/content";

type HomeProjectCardProps = {
  project: Project;
  index: number;
};

const projectAccentClasses: Record<string, string> = {
  "lh-traffic-safety-analysis": "home-project-card--lh",
  "seoul-storefront-redveil": "home-project-card--redveil",
  "shelter-signal": "home-project-card--shelter",
  "decisionops-lab": "home-project-card--default",
  "starbucks-promotion-analysis": "home-project-card--starbucks",
};

const projectBoundaries: Record<
  string,
  {
    proves: string;
    doesNotClaim: string;
  }
> = {
  "seoul-storefront-redveil": {
    proves: "상권 데이터를 보류 신호, 대체 후보, 검토 UI로 번역하는 역량",
    doesNotClaim: "투자 추천, 매수/매도 판단, 실제 수익률 검증",
  },
  "shelter-signal": {
    proves: "공공 API의 현재성, cache, fallback 상태를 서비스 판단 흐름으로 분리하는 역량",
    doesNotClaim: "사용자 계정, 영구 저장, 실제 알림 발송 운영",
  },
  "decisionops-lab": {
    proves: "제품 이벤트를 SQL mart, 23개 품질 gate, D7 guardrail, scenario matrix, decision memo로 연결하는 역량",
    doesNotClaim: "실제 제품 성과, 실제 사용자 행동, production business impact",
  },
  "lh-traffic-safety-analysis": {
    proves: "공간 위험 신호를 검증 지표와 현장 검토 우선순위로 연결하는 역량",
    doesNotClaim: "실제 사고 감소 효과, 시설 설치 결정, 사후 현장 검증",
  },
  "starbucks-promotion-analysis": {
    proves: "고객·오퍼·채널 데이터를 CRM 액션 판단으로 번역하는 역량",
    doesNotClaim: "실제 캠페인 집행 결과나 운영 매출 개선 검증",
  },
};

function getProjectAccentClass(project: Project) {
  return projectAccentClasses[project.slug] ?? "home-project-card--default";
}

export function HomeProjectCard({
  project,
  index,
}: HomeProjectCardProps) {
  const boundary = projectBoundaries[project.slug];

  return (
    <article className={`home-project-card ${getProjectAccentClass(project)}`}>
      <div className="home-project-card__head">
        <span className="home-project-card__index">{`0${index}`}</span>
        <span className="home-project-card__lens">{project.primaryDomain}</span>
      </div>

      <div className="home-project-card__body">
        <h3 className="home-project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <span className="home-project-card__section-label">
          Decision Question
        </span>
        <p className="home-project-card__problem">
          {project.review.decisionQuestion}
        </p>
      </div>

      <dl className="home-project-card__facts">
        <div className="home-project-card__fact">
          <dt>Evidence</dt>
          <dd>{project.review.evidence}</dd>
        </div>
        <div className="home-project-card__fact">
          <dt>Deliverable</dt>
          <dd>{project.review.deliverable}</dd>
        </div>
      </dl>

      {boundary ? (
        <dl className="home-project-card__facts home-project-card__facts--boundary">
          <div className="home-project-card__fact">
            <dt>Proves</dt>
            <dd>{boundary.proves}</dd>
          </div>
          <div className="home-project-card__fact">
            <dt>Does not claim</dt>
            <dd>{boundary.doesNotClaim}</dd>
          </div>
        </dl>
      ) : null}

      <div className="home-project-card__tags">
        {project.cardTools.map((tag) => (
          <span className="home-project-card__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="home-project-card__footer">
        <div className="home-project-card__signal">
          <span className="home-project-card__section-label">
            Hiring Signal
          </span>
          <p className="home-project-card__impact">
            {project.review.hiringSignal}
          </p>
        </div>
        <Link
          className="button-link button-link--secondary home-project-card__link"
          href={`/projects/${project.slug}`}
        >
          상세 보기
        </Link>
      </div>
    </article>
  );
}
