export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <p className="mono mb-4 flex items-center gap-3 text-xs tracking-[0.18em] text-muted uppercase">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" aria-hidden />
      {children}
    </p>
  );
}

export function ExternalIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 12L12 4M12 4H6.5M12 4V9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
