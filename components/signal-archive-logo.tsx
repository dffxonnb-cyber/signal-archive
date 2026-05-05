type SignalArchiveLogoProps = {
  className?: string;
};

export function SignalArchiveLogo({ className }: SignalArchiveLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="signal-logo__frame"
        d="M10 8h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z"
      />
      <path className="signal-logo__baseline" d="M15 33h18" />
      <path className="signal-logo__trace" d="M15 28l7-7 6 5 8-12" />
      <circle className="signal-logo__node signal-logo__node--soft" cx="15" cy="28" r="2.4" />
      <circle className="signal-logo__node" cx="22" cy="21" r="2.6" />
      <circle className="signal-logo__node" cx="28" cy="26" r="2.6" />
      <circle className="signal-logo__node signal-logo__node--bright" cx="36" cy="14" r="3" />
    </svg>
  );
}
