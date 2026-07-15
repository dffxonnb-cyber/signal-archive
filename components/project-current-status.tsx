import { getProjectCurrentStatusLine } from "@/content/project-public-status";

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
      className={`${styles.status} ${styles[variant]}`}
      aria-label="현재 프로젝트 상태"
    >
      <span className={styles.label}>Current</span>
      <span className={styles.value}>{getProjectCurrentStatusLine(slug)}</span>
    </div>
  );
}
