import Link from "next/link";

import type { Project } from "@/types/content";

type HomeProjectCardProps = {
  project: Project;
  index: number;
};

export function HomeProjectCard({
  project,
  index,
}: HomeProjectCardProps) {
  return (
    <article className="home-project-card">
      <div className="home-project-card__head">
        <span className="home-project-card__index">{`0${index}`}</span>
        <span className="home-project-card__lens">{project.primaryDomain}</span>
      </div>

      <div className="home-project-card__body">
        <h3 className="home-project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <span className="home-project-card__section-label">Decision Question</span>
        <p className="home-project-card__problem">{project.review.decisionQuestion}</p>
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

      <div className="home-project-card__tags">
        {project.cardTools.map((tag) => (
          <span className="home-project-card__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="home-project-card__footer">
        <div className="home-project-card__signal">
          <span className="home-project-card__section-label">Hiring Signal</span>
          <p className="home-project-card__impact">{project.review.hiringSignal}</p>
        </div>
        <Link className="button-link button-link--secondary home-project-card__link" href={`/projects/${project.slug}`}>
          상세 보기
        </Link>
      </div>
    </article>
  );
}
