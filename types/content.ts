export type ProjectStatus = "featured" | "supporting" | "archive";

export type ProjectLinkType = "primary" | "secondary" | "text";

export type ExternalLink = {
  label: string;
  href: string;
  displayText?: string;
  type?: ProjectLinkType;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type ProjectCardBrief = {
  problem: string;
  method: string;
  output: string[];
};

export type ProjectEvidencePoint = {
  label: string;
  value: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectReview = {
  decisionQuestion: string;
  myRole: string;
  evidence: string;
  deliverable: string;
  hiringSignal: string;
};

export type ProjectDecisionMoment = {
  originalQuestion: string;
  reframedQuestion: string;
  keyEvidence: string;
  finalDeliverable: string;
  proves: string;
};

export type ProjectDetailBrief = {
  problem: {
    what: string;
    why: string;
  };
  dataMethod: {
    dataTypes: string[];
    process: string[];
    metrics: string[];
  };
  limitations: string[];
  linkNote?: string;
};

export type ProjectSignalCaseStudySection = {
  label: string;
  title: string;
  description: string;
  points: string[];
};

export type ProjectSignalCaseStudyEvidence = {
  src: string;
  alt: string;
  caption: string;
  note: string;
  width: number;
  height: number;
};

export type ProjectSignalCaseStudy = {
  signalType: string;
  title: string;
  thesis: string;
  chips: string[];
  flow: string[];
  evidenceTitle?: string;
  evidenceDescription?: string;
  evidence?: ProjectSignalCaseStudyEvidence[];
  sections: ProjectSignalCaseStudySection[];
};

export type WritingSection = {
  title: string;
  paragraphs: string[];
  quote?: string;
};

export type WritingLens = {
  observe: string;
  interpret: string;
  sentence: string;
};

export type WritingStrength = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  status: ProjectStatus;
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
  review: ProjectReview;
  decisionMoment: ProjectDecisionMoment;
  cardBrief: ProjectCardBrief;
  metrics: ProjectMetric[];
  evidencePoints?: ProjectEvidencePoint[];
  signalCaseStudy?: ProjectSignalCaseStudy;
  detailBrief: ProjectDetailBrief;
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
  lead: string;
  excerpt?: string;
  href: string;
  linkKind: "internal" | "external";
  status: "published" | "inventory" | "planned";
  categories: string[];
  relatedProjects: string[];
  publishedAt: string;
  lens: WritingLens;
  bodySections: WritingSection[];
};

export type SkillGroup = {
  title: string;
  summary?: string;
  items: string[];
};

export type AiWorkflow = {
  summary: string;
  items: string[];
  note: string;
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
  aiWorkflow: AiWorkflow;
};
