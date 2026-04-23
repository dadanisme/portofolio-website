interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <circle cx="16" cy="16" r="16" fill="var(--accent-ink)" />
      <path d="M16 8 L25 24 H7 Z" fill="var(--paper)" />
    </svg>
  );
}
