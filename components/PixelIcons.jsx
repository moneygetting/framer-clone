// Simple inline pixel-style SVG icons used as placeholders for the
// small graphic marks scattered across the original Framer page
// (space invaders, rocket, gears, pac-man, robot face).

export function SpaceInvaderIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="3" y="1" width="1" height="1" />
      <rect x="12" y="1" width="1" height="1" />
      <rect x="4" y="2" width="1" height="1" />
      <rect x="11" y="2" width="1" height="1" />
      <rect x="3" y="3" width="10" height="1" />
      <rect x="2" y="4" width="1" height="1" />
      <rect x="5" y="4" width="1" height="1" />
      <rect x="10" y="4" width="1" height="1" />
      <rect x="13" y="4" width="1" height="1" />
      <rect x="1" y="5" width="14" height="2" />
      <rect x="1" y="7" width="2" height="1" />
      <rect x="4" y="7" width="1" height="1" />
      <rect x="6" y="7" width="4" height="1" />
      <rect x="11" y="7" width="1" height="1" />
      <rect x="13" y="7" width="2" height="1" />
      <rect x="0" y="8" width="3" height="1" />
      <rect x="4" y="8" width="8" height="1" />
      <rect x="13" y="8" width="3" height="1" />
      <rect x="0" y="9" width="1" height="1" />
      <rect x="4" y="9" width="1" height="1" />
      <rect x="11" y="9" width="1" height="1" />
      <rect x="15" y="9" width="1" height="1" />
      <rect x="5" y="10" width="2" height="1" />
      <rect x="9" y="10" width="2" height="1" />
    </svg>
  );
}

export function RocketIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 32" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="10" y="0" width="4" height="2" />
      <rect x="8" y="2" width="8" height="2" />
      <rect x="7" y="4" width="10" height="10" />
      <rect x="9" y="14" width="6" height="8" />
      <rect x="4" y="16" width="3" height="6" />
      <rect x="17" y="16" width="3" height="6" />
      <rect x="10" y="22" width="4" height="4" />
      <rect x="9" y="6" width="6" height="6" fill="black" />
      <rect x="4" y="10" width="1" height="1" />
      <rect x="4" y="13" width="1" height="1" />
      <rect x="19" y="10" width="1" height="1" />
      <rect x="19" y="13" width="1" height="1" />
    </svg>
  );
}

export function GearIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l1.6 2.8 3.1-.9 1 3 3 1-0.9 3.1L22 12l-2.2 1.6.9 3.1-3 1-1 3-3.1-.9L12 22l-1.6-2.8-3.1.9-1-3-3-1 .9-3.1L2 12l2.2-1.6L3.3 7.3l3-1 1-3 3.1.9L12 2z" />
      <circle cx="12" cy="12" r="4.2" fill="black" />
    </svg>
  );
}

export function PacmanIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 016.9 4H12v6h6.9A8 8 0 1112 4z" />
      <circle cx="8.5" cy="7.5" r="1.3" fill="white" />
    </svg>
  );
}

export function RobotFaceIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" shapeRendering="crispEdges">
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <rect x="6" y="10" width="4" height="4" fill="white" />
      <rect x="14" y="10" width="4" height="4" fill="white" />
      <rect x="7" y="11.3" width="1.6" height="1.6" fill="black" />
      <rect x="15" y="11.3" width="1.6" height="1.6" fill="black" />
    </svg>
  );
}
