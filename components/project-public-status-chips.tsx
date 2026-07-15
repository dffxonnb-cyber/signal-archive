import {
  getProjectBestFitRoleLine,
  getProjectPublicStatusChips,
} from "@/content/project-public-status";

import styles from "./project-public-status-chips.module.css";

type ProjectPublicStatusChipsProps = {
  slug: string;
  variant?: "project" | "home";
  limit?: number;
};

export function ProjectPublicStatusChips({
  slug,
  variant = "project",
  limit = 4,
}: ProjectPublicStatusChipsProps) {
  const chips = getProjectPublicStatusChips(slug).slice(0, limit);
  const roleLine = getProjectBestFitRoleLine(slug);

  return (
    <div className={styles.group}>
      {variant === "home" ? (
        <div className="home-project-card__tags" aria-label="public and verification status">
          {chips.map((item) => (
            <span className="home-project-card__tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="project-card__tools" aria-label="public and verification status">
          {chips.map((item) => (
            <span className="chip chip--status" key={item}>
              {item}
            </span>
          ))}
        </div>
      )}

      <div className={`${styles.roles} ${styles[variant]}`} aria-label="추천 직무">
        <span className={styles.label}>Best fit</span>
        <span className={styles.value}>{roleLine}</span>
      </div>
    </div>
  );
}
