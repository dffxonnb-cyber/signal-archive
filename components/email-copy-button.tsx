"use client";

import { useState } from "react";

type EmailCopyButtonProps = {
  email: string;
};

export function EmailCopyButton({ email }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="button-link button-link--secondary email-copy-button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      type="button"
    >
      {copied ? "이메일 복사됨" : "이메일 복사"}
    </button>
  );
}
