export default function CircleCounter({ topLabel = "01", centerLabel = "04" }) {
  return (
    <section className="relative flex h-[90vh] w-full items-center justify-center bg-black">
      <div className="relative flex h-[70vmin] w-[70vmin] items-center justify-center rounded-full border border-white/30">
        <span className="absolute top-0 -translate-y-1/2 font-pixel text-3xl text-white md:text-4xl">
          {topLabel}
        </span>
        <span className="absolute right-[18%] top-[16%] h-6 w-6 rotate-45 border-t border-white/40" />
        <span className="font-pixel text-7xl text-white md:text-8xl">
          {centerLabel}
        </span>
      </div>
    </section>
  );
}
