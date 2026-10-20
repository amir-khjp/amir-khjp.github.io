export default function Logo({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Amirhossein Khajepour logo"
    >
      {/* laptop body */}
      <rect x="20" y="24" width="60" height="40" rx="3" stroke="var(--accent)" strokeWidth="5" />
      <path d="M12 72 L88 72 L78 64 L22 64 Z" stroke="var(--accent)" strokeWidth="5" strokeLinejoin="round" />
      {/* growth line on screen */}
      <path
        d="M30 36 L42 24 L52 32 L70 16"
        stroke="var(--accent-strong)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AK initials */}
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontFamily="'Space Mono', monospace"
        fontWeight="700"
        fontSize="15"
        fill="var(--accent-strong)"
      >
        AK
      </text>
    </svg>
  );
}
