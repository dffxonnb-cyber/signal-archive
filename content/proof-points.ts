export type ProofPoint = {
  label: string;
  value: string;
  note: string;
};

export const homeProofPoints: ProofPoint[] = [
  { label: "Flagship", value: "Redveil V2", note: "서울 지도·보류 사유·대체 후보·판단 메모" },
  { label: "History-aware", value: "Shelter V2", note: "daily snapshot·change events·timeline·D-Day brief" },
  { label: "DecisionOps", value: "3 / 7", note: "3 guardrails·7 scenarios·Ship/Retest/Hold/Investigate" },
  { label: "Spatial Validation", value: "AUC 0.8604", note: "100m grid·LORO·Top-10% Lift 4.39x" },
];
