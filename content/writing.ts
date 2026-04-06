import type { WritingEntry } from "@/types/content";

export const writingEntries: WritingEntry[] = [
  {
    slug: "velog-profile",
    title: "Velog 글 아카이브",
    platform: "Velog",
    summary:
      "데이터 분석, 프로젝트 회고, 기술 기록을 통합 피드로 재정리하기 전 연결되는 메인 글 채널입니다.",
    href: "https://velog.io/@8_1st0/posts",
    status: "published",
    categories: ["데이터 분석", "프로젝트 회고", "기술 기록"],
    relatedProjects: [
      "seoul-storefront-redveil",
      "uk-online-retail-segment-analysis",
    ],
    publishedAt: "ongoing",
  },
  {
    slug: "brunch-inventory",
    title: "Brunch 글 인벤토리",
    platform: "Brunch",
    summary:
      "관찰과 태도, 산문 계열의 글을 사이트 구조에 맞춰 연결하기 위한 인벤토리 단계입니다.",
    href: "#",
    status: "inventory",
    categories: ["관찰 / 태도", "산문"],
    relatedProjects: [],
    publishedAt: "planned",
  },
  {
    slug: "project-linked-writing",
    title: "프로젝트 연결형 글 묶음",
    platform: "Archive",
    summary:
      "프로젝트 상세 하단과 글 카드 사이를 연결하기 위해 회고와 분석 글을 재분류하는 작업입니다.",
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

