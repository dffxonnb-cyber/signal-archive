import {
  getProjectBestFitRoleLine,
  getProjectCurrentStatusLine,
} from "@/content/project-public-status";

import styles from "./project-current-status.module.css";

type ProjectCurrentStatusProps = {
  slug: string;
  variant?: "home" | "project";
};

export function ProjectCurrentStatus({
  slug,
  variant = "project",
}: ProjectCurrentStatusProps) {
  return (
    <div
      className={`${styles.group} ${styles[variant]}`}
      aria-label="현재 프로젝트 상태와 추천 직무"
    >
      <div className={styles.row}>
        <span className={styles.label}>Current</span>
        <span className={styles.value}>{getProjectCurrentStatusLine(slug)}</span>
      </div>
      <div className={`${styles.row} ${styles.roleRow}`}>
        <span className={styles.roleLabel}>Best fit</span>
        <span className={styles.roleValue}>{getProjectBestFitRoleLine(slug)}</span>
      </div>
    </div>
  );
}
