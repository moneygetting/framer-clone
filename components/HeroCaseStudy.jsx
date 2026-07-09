import Image from "next/image";

const LITWIN_LINES = [
  "Litwin's Model of Change",
  "Litwin's Model of Change",
  "Litwin's Model of Change",
  "Litwin's Model of Change",
];

export default function HeroCaseStudy() {
  return (
    <section className="relative min-h-[160vh] w-full overflow-hidden bg-black">
      {/* background portrait placeholder */}
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x1600/0d0d0d/1f1f1f?text=Portrait"
          alt="Portrait background"
          fill
          priority
          className="object-cover object-center opacity-70 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
      </div>

      {/* copy */}
      <div className="relative z-10 px-6 pt-28 md:px-16 md:pt-36">
        <h1 className="font-pixel text-4xl leading-tight text-white md:text-6xl">
          Case Study
        </h1>
        <p className="mt-2 font-pixel text-8xl text-white md:text-[10rem] md:leading-none">
          01
        </p>
        <p className="mt-6 max-w-xs font-body text-lg text-white/90 md:max-w-sm md:text-xl">
          Hopefully this is good text combination, questrial and raleway.
        </p>
      </div>

      {/* device mockup placeholder, bottom right */}
      <div className="absolute bottom-24 right-4 z-10 h-64 w-56 rounded-3xl bg-neutral-800/90 shadow-2xl md:right-16 md:h-80 md:w-72">
        <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full bg-neutral-900 md:h-32 md:w-32" />
      </div>

      {/* stacked / faded marquee heading */}
      <div className="absolute bottom-10 left-4 z-10 flex flex-col gap-1 md:left-16">
        {LITWIN_LINES.map((line, i) => (
          <span
            key={i}
            className="font-pixel text-lg uppercase tracking-wide text-white/25 md:text-2xl"
          >
            {line}
          </span>
        ))}
        <span className="mt-1 w-fit rounded-full border border-white px-5 py-2 font-pixel text-lg uppercase tracking-wide text-white md:text-2xl">
          Litwin&apos;s Model of Change
        </span>
      </div>
    </section>
  );
}
