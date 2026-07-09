export function InvaderIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 12" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="2" y="0" width="2" height="2" />
      <rect x="12" y="0" width="2" height="2" />
      <rect x="3" y="1" width="2" height="2" />
      <rect x="11" y="1" width="2" height="2" />
      <rect x="2" y="2" width="12" height="2" />
      <rect x="1" y="3" width="2" height="1" />
      <rect x="4" y="3" width="2" height="1" />
      <rect x="7" y="3" width="2" height="1" />
      <rect x="10" y="3" width="2" height="1" />
      <rect x="13" y="3" width="2" height="1" />
      <rect x="0" y="4" width="16" height="3" />
      <rect x="4" y="4" width="1" height="2" fill="#000" />
      <rect x="11" y="4" width="1" height="2" fill="#000" />
      <rect x="0" y="7" width="2" height="2" />
      <rect x="3" y="7" width="2" height="1" />
      <rect x="6" y="7" width="4" height="1" />
      <rect x="11" y="7" width="2" height="1" />
      <rect x="14" y="7" width="2" height="2" />
      <rect x="4" y="8" width="2" height="2" />
      <rect x="10" y="8" width="2" height="2" />
    </svg>
  );
}

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 8c3 0 6 .2 9 .7l3 12.6c4.6 1 9 2.7 13 5l11-7 12.7 12.7-7 11c2.3 4 4 8.4 5 13l12.6 3c.5 3 .7 6 .7 9s-.2 6-.7 9l-12.6 3c-1 4.6-2.7 9-5 13l7 11-12.7 12.7-11-7c-4 2.3-8.4 4-13 5l-3 12.6c-3 .5-6 .7-9 .7s-6-.2-9-.7l-3-12.6c-4.6-1-9-2.7-13-5l-11 7L4.3 78.7l7-11c-2.3-4-4-8.4-5-13L-6.3 51.7C-6.8 48.7-7 45.7-7 42.7s.2-6 .7-9L6.3 30.7c1-4.6 2.7-9 5-13l-7-11L17 -6l11 7c4-2.3 8.4-4 13-5L44 -16.6c3-.5 6-.7 9-.7z" transform="translate(0,8) scale(0.86)"/>
      <circle cx="50" cy="58" r="20" fill="#000" />
    </svg>
  );
}

export function PacmanIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path
        d="M50 50 L95 25 A50 50 0 1 0 95 75 Z"
        fill="currentColor"
      />
      <circle cx="65" cy="28" r="7" fill="#fff" />
    </svg>
  );
}

export function RobotHeadIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="2" y="2" width="36" height="30" rx="8" />
      <circle cx="14" cy="17" r="5" fill="#fff" />
      <circle cx="14" cy="17" r="2" fill="currentColor" />
      <circle cx="27" cy="17" r="5" fill="#fff" />
      <circle cx="27" cy="17" r="2" fill="currentColor" />
    </svg>
  );
}

export function RobotToyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="20" y="8" width="80" height="60" rx="10" />
      <rect x="35" y="30" width="10" height="10" fill="#facc15" />
      <rect x="55" y="30" width="10" height="10" fill="#facc15" />
      <rect x="70" y="20" width="10" height="10" fill="#facc15" />
      <rect x="10" y="70" width="100" height="45" rx="10" />
      <rect x="0" y="120" width="30" height="18" rx="6" />
      <rect x="90" y="120" width="30" height="18" rx="6" />
      <rect x="30" y="120" width="24" height="18" rx="6" />
      <rect x="66" y="120" width="24" height="18" rx="6" />
    </svg>
  );
}

export function RocketIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="16" y="0" width="8" height="8" />
      <rect x="12" y="8" width="16" height="24" />
      <rect x="8" y="20" width="4" height="14" />
      <rect x="28" y="20" width="4" height="14" />
      <rect x="16" y="32" width="8" height="8" />
      <circle cx="20" cy="18" r="4" fill="#000" />
      <text x="20" y="21" fontSize="6" textAnchor="middle" fill="currentColor">0</text>
    </svg>
  );
}
