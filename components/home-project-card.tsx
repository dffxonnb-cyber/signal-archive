import Link from "next/link";

import type { Project } from "@/types/content";

type HomeProjectCardProps = {
  project: Project;
  index: number;
  lens: string;
  problem: string;
  roleLabel: string;
  scopeLabel: string;
  tags: string[];
  impact: string;
};

export function HomeProjectCard({
  project,
  index,
  lens,
  problem,
  roleLabel,
  scopeLabel,
  tags,
  impact,
}: HomeProjectCardProps) {
  return (
    <article className="home-project-card">
      <div className="home-project-card__head">
        <span className="home-project-card__index">{`0${index}`}</span>
        <span className="home-project-card__lens">{lens}</span>
      </div>

      <div className="home-project-card__body">
        <h3 className="home-project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <span className="home-project-card__section-label">핵심 문제</span>
        <p className="home-project-card__problem">{problem}</p>
      </div>

      <dl className="home-project-card__facts">
        <div className="home-project-card__fact">
          <dt>역할</dt>
          <dd>{roleLabel}</dd>
        </div>
        <div className="home-project-card__fact">
          <dt>범위</dt>
          <dd>{scopeLabel}</dd>
        </div>
      </dl>

      <div className="home-project-card__tags">
        {tags.map((tag) => (
          <span className="home-project-card__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="home-project-card__footer">
        <div className="home-project-card__signal">
          <span className="home-project-card__section-label">핵심 근거</span>
          <p className="home-project-card__impact">{impact}</p>
        </div>
        <Link className="button-link button-link--secondary home-project-card__link" href={`/projects/${project.slug}`}>
          상세 보기
        </Link>
      </div>
    </article>
  );
}
