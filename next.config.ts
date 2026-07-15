import type { NextConfig } from "next";

const REDVEIL_EVIDENCE_BASE =
  "https://raw.githubusercontent.com/dffxonnb-cyber/Seoul-Storefront-Redveil/main/docs/evidence";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/evidence/redveil-v2-desktop-home-2026-07-12.svg",
        destination: `${REDVEIL_EVIDENCE_BASE}/redveil-v2-desktop-home-2026-07-12.png`,
        permanent: false,
      },
      {
        source: "/evidence/redveil-v2-mobile-map-2026-07-13.svg",
        destination: `${REDVEIL_EVIDENCE_BASE}/redveil-v2-readme-mobile-map-2026-07-13.png`,
        permanent: false,
      },
      {
        source: "/evidence/redveil-v2-mobile-report-2026-07-13.svg",
        destination: `${REDVEIL_EVIDENCE_BASE}/redveil-v2-readme-mobile-report-2026-07-13.png`,
        permanent: false,
      },
      {
        source: "/evidence/redveil-v2-property-review-2026-07-12.svg",
        destination: `${REDVEIL_EVIDENCE_BASE}/redveil-v2-property-review-2026-07-12.png`,
        permanent: false,
      },
      {
        source: "/evidence/redveil-v2-candidate-compare-2026-07-12.svg",
        destination: `${REDVEIL_EVIDENCE_BASE}/redveil-v2-candidate-compare-2026-07-12.png`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
