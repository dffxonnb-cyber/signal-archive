import type { WritingEntry } from "@/types/content";

export const writingEntries: WritingEntry[] = [
  {
    slug: "analysis-notes-archive",
    title: "분석 메모 아카이브",
    platform: "Archive",
    summary:
      "프로젝트 회고와 분석 메모를 하나의 흐름 안에서 다시 정리하기 위한 공개용 글 묶음입니다.",
    href: "#",
    status: "inventory",
    categories: ["데이터 분석", "프로젝트 회고", "기술 기록"],
    relatedProjects: [
      "seoul-storefront-redveil",
      "uk-online-retail-segment-analysis",
    ],
    publishedAt: "planned",
  },
  {
    slug: "attitude-observation-notes",
    title: "관찰과 태도 노트",
    platform: "Archive",
    summary:
      "관찰과 태도에 관한 짧은 글을 프로젝트와 느슨하게 연결할 수 있도록 정리 중인 기록입니다.",
    href: "#",
    status: "planned",
    categories: ["관찰 / 태도", "산문"],
    relatedProjects: [],
    publishedAt: "planned",
  },
  {
    slug: "project-linked-writing",
    title: "프로젝트 연계 글 묶음",
    platform: "Archive",
    summary:
      "프로젝트 상세와 글 카드 사이를 연결하기 위해 회고와 분석 글을 다시 분류하는 작업입니다.",
    href: "#",
    status: "planned",
    categories: ["프로젝트 회고", "데이터 분석"],
    relatedProjects: [
      "lh-traffic-safety-analysis",
      "seoul-storefront-redveil",
      "uk-online-retail-segment-analysis",
    ],
    publishedAt: "planned",
  },
];

export const writingCategories = [
  "데이터 분석",
  "프로젝트 회고",
  "기술 기록",
  "관찰 / 태도",
  "산문",
];
