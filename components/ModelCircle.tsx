export default function ModelCircle() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-6 py-24">
      <div className="relative flex h-[38rem] w-[38rem] max-w-full items-center justify-center rounded-full border border-white/40">
        {/* Diagonal tick mark on the circle's edge */}
        <svg
          className="absolute right-16 top-16 h-6 w-6 text-white/60"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="20" x2="20" y2="4" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="20" x2="20" y2="9" stroke="currentColor" strokeWidth="2" />
        </svg>

        <span className="absolute top-4 font-pixel text-4xl text-white">01</span>
        <span className="font-pixel text-6xl text-white">04</span>
      </div>
    </section>
  );
}
