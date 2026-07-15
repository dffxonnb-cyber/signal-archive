import type { ReactNode } from "react";

import styles from "./readability.module.css";

type CaseStudiesLayoutProps = {
  children: ReactNode;
};

export default function CaseStudiesLayout({ children }: CaseStudiesLayoutProps) {
  return <div className={styles.scope}>{children}</div>;
}
