import type { Metadata } from "next";

import { DesktopRecommendationNote } from "@/components/desktop-recommendation-note";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Signal Archive",
    template: "%s | Signal Archive",
  },
  description:
    "Python/SQL 기반 데이터 분석을 웹앱, 서버리스 API, 자동화 검증까지 연결한 Signal Archive 데이터 프로덕트 포트폴리오입니다.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <DesktopRecommendationNote />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
