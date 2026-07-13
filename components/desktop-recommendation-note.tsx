"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./desktop-recommendation-note.module.css";

const STORAGE_KEY = "signal-archive-desktop-recommendation-dismissed";

function wasDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function DesktopRecommendationNote() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const isHome = pathname === "/";
  const isStartHere = pathname === "/start-here";

  useEffect(() => {
    if (!isHome) {
      setIsVisible(false);
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncVisibility = () => {
      setIsVisible(mediaQuery.matches && !wasDismissed());
    };

    syncVisibility();
    mediaQuery.addEventListener("change", syncVisibility);

    return () => {
      mediaQuery.removeEventListener("change", syncVisibility);
    };
  }, [isHome]);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // The notice can still be dismissed for the current render when storage is unavailable.
    }

    setIsVisible(false);
  };

  if (isStartHere) {
    return (
      <div className={`site-container ${styles.guideSlot}`}>
        <aside className={styles.guideNote} aria-label="권장 검토 환경">
          <strong>Desktop recommended · Mobile supported</strong>
          <span>프로젝트 비교와 화면 증거 검토는 PC에서 가장 선명하며, 모바일에서도 전체 콘텐츠를 확인할 수 있습니다.</span>
        </aside>
      </div>
    );
  }

  if (!isHome || !isVisible) return null;

  return (
    <div className={`site-container ${styles.homeSlot}`}>
      <aside className={styles.note} aria-label="데스크톱 권장 안내">
        <div className={styles.copy}>
          <span className={styles.label}>Desktop Recommended</span>
          <strong className={styles.title}>데스크톱 환경을 권장합니다</strong>
          <p className={styles.description}>
            프로젝트 비교와 화면 증거 검토는 PC에서 가장 선명합니다. 모바일에서도 모든 콘텐츠를 확인할 수 있습니다.
          </p>
        </div>
        <button
          aria-label="이번 세션에서 데스크톱 권장 안내 닫기"
          className={styles.dismiss}
          onClick={dismiss}
          type="button"
        >
          닫기
        </button>
      </aside>
    </div>
  );
}
