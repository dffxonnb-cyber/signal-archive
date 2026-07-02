export type ProofPoint = {
  label: string;
  value: string;
  note: string;
};

export const homeProofPoints: ProofPoint[] = [
  { label: "Traffic Safety", value: "AUC 0.8604", note: "공간 위험도 검증" },
  { label: "Priority Lift", value: "Top-10% Lift 4.39x", note: "설치 우선순위 신호" },
  { label: "Redveil V2", value: "Decision Artifacts", note: "보류 메모·비교 메모·전문가 검토" },
  { label: "Seoul Scope", value: "25 Districts", note: "구 단위 상권 비교" },
  { label: "CRM Model", value: "AUC 0.8147", note: "프로모션 반응 모델" },
  { label: "Pipeline QA", value: "SQL Tests PASS", note: "mock/local 검증" },
];
