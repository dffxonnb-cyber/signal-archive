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
        <p className="home-project-card__problem">{problem}</p>
      </div>

      <dl className="home-project-card__facts">
        <div className="home-project-card__fact">
          <dt>Role</dt>
          <dd>{roleLabel}</dd>
        </div>
        <div className="home-project-card__fact">
          <dt>Scope</dt>
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
        <p className="home-project-card__impact">{impact}</p>
        <Link className="home-project-card__link" href={`/projects/${project.slug}`}>
          사례 보기
        </Link>
      </div>
    </article>
  );
}
