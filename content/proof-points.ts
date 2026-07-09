export type ProofPoint = {
  label: string;
  value: string;
  note: string;
};

export const homeProofPoints: ProofPoint[] = [
  { label: "Flagship", value: "Redveil", note: "보류 사유·대체 후보·decision artifact" },
  { label: "Live Signal", value: "Shelter API", note: "current·urgent·cache/fallback 경계" },
  { label: "Guardrail Review", value: "DecisionOps", note: "SQL mart·품질 gate·A/B 판단" },
  { label: "Spatial Validation", value: "AUC 0.8604", note: "100m grid·LORO·Top-10% Lift 4.39x" },
];
