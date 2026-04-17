export type ExternalLink = {
  label: string;
  href: string;
  displayText?: string;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type WritingSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: "대표 프로젝트" | "서브 프로젝트";
  primaryDomain: string;
  summary: string;
  period: string;
  format: string;
  domains: string[];
  role: string[];
  filterTools: string[];
  cardTools: string[];
  stack: string[];
  problemTypes: string[];
  coreTags: string[];
  badges: string[];
  context: string;
  outcome: string;
  supportingLine: string;
  focusPoints: string[];
  links: ExternalLink[];
  sortOrder: number;
  caseStudySlugs: string[];
  sections: ProjectSection[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  keyMoves: string[];
  linkedProjects: string[];
};

export type WritingEntry = {
  slug: string;
  title: string;
  platform: string;
  summary: string;
  href: string;
  linkKind: "internal" | "external";
  status: "published" | "inventory" | "planned";
  categories: string[];
  relatedProjects: string[];
  publishedAt: string;
  bodySections: WritingSection[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Profile = {
  name: string;
  primaryRoles: string[];
  secondaryRoles: string[];
  industries: string[];
  avoidSignals: string[];
  headline: string;
  summary: string[];
  strengths: string[];
  keywords: string[];
  contactLinks: ExternalLink[];
  skillGroups: SkillGroup[];
};

