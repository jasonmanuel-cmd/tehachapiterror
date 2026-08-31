// Simple inline SVG icons for the floating background layer. Placeholder
// vector art — swap for real illustrated assets whenever they're ready.

export function GhostIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 6c-12.15 0-22 9.85-22 22v26.5c0 1.9 2.2 2.9 3.66 1.66l4.5-3.86 4.9 4.2a2 2 0 0 0 2.6 0l4.34-3.72 4.34 3.72a2 2 0 0 0 2.6 0l4.34-3.72 4.34 3.72a2 2 0 0 0 2.6 0l4.9-4.2 4.5 3.86C53.8 57.4 56 56.4 56 54.5V28c0-12.15-9.85-22-22-22Z"
        fill="currentColor"
      />
      <circle cx="24" cy="27" r="3.4" fill="#0d0810" />
      <circle cx="40" cy="27" r="3.4" fill="#0d0810" />
    </svg>
  );
}

export function BatIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 22c-3-8-13-14-22-12 5 3 8 7 9 12-6-2-13 0-17 6 7-1 12 1 15 5-6 1-10 5-11 10 5-3 10-4 14-2-2 4-2 8 0 12 2-6 6-10 12-13 6 3 10 7 12 13 2-4 2-8 0-12 4-2 9-1 14 2-1-5-5-9-11-10 3-4 8-6 15-5-4-6-11-8-17-6 1-5 4-9 9-12-9-2-19 4-22 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PumpkinIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M30 10c0-3 2-6 2-6s2 3 2 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="32" cy="38" rx="24" ry="20" fill="currentColor" />
      <path d="M18 22c4 4 4 30 0 34M46 22c-4 4-4 30 0 34" stroke="#0d0810" strokeOpacity="0.25" strokeWidth="2.5" />
      <path
        d="M22 34l4 6h-4l4 6M40 34l-4 6h4l-4 6M26 46h12l-3 5h-6l-3-5Z"
        fill="#0d0810"
      />
    </svg>
  );
}

export function SpiderIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <line x1="32" y1="0" x2="32" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="32" cy="30" rx="7" ry="9" fill="currentColor" />
      <circle cx="32" cy="18" r="5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M26 24 12 18M26 28 8 28M26 33 10 40M38 24 52 18M38 28 56 28M38 33 54 40" />
      </g>
    </svg>
  );
}
