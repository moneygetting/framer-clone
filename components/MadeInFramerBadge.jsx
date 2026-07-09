export default function MadeInFramerBadge() {
  return (
    <a
      href="https://www.framer.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black shadow-lg"
    >
      <svg viewBox="0 0 10 15" width="10" height="15" aria-hidden="true">
        <path
          d="M 0 0 L 10 0 L 10 5 L 5 5 Z M 0 5 L 5 5 L 10 10 L 0 10 Z M 5 10 L 5 15 L 0 10 Z"
          fill="currentColor"
        />
      </svg>
      Made in Framer
    </a>
  );
}
