import Link from "next/link";

import type { Project } from "@/types/content";

type HomeProjectCardProps = {
  project: Project;
  index: number;
  lens: string;
  problem: string;
  roleLabel: string;
  tags: string[];
  impact: string;
};

export function HomeProjectCard({
  project,
  index,
  lens,
  problem,
  roleLabel,
  tags,
  impact,
}: HomeProjectCardProps) {
  return (
    <article className="home-project-card">
      <div className="home-project-card__head">
        <span className="home-project-card__index">{`0${index}`}</span>
        <span className="home-project-card__lens">{lens}</span>
      </div>

      <div className="home-project-card__section">
        <span className="home-project-card__section-label">Project</span>
        <h3 className="home-project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
      </div>

      <div className="home-project-card__section">
        <span className="home-project-card__section-label">Problem framing</span>
        <p className="home-project-card__problem">{problem}</p>
      </div>

      <dl className="home-project-card__facts">
        <div className="home-project-card__fact">
          <dt>Role</dt>
          <dd>{roleLabel}</dd>
        </div>
        <div className="home-project-card__fact">
          <dt>Tools</dt>
          <dd>{project.stack.slice(0, 3).join(" / ")}</dd>
        </div>
      </dl>

      <div className="home-project-card__section">
        <span className="home-project-card__section-label">Key tags</span>
        <div className="home-project-card__tags">
          {tags.map((tag) => (
            <span className="home-project-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="home-project-card__section home-project-card__section--impact">
        <div className="home-project-card__impact-copy">
          <span className="home-project-card__section-label">Why it matters</span>
          <p className="home-project-card__impact">{impact}</p>
        </div>
        <Link className="home-project-card__link" href={`/projects/${project.slug}`}>
          상세 보기
        </Link>
      </div>
    </article>
  );
}
