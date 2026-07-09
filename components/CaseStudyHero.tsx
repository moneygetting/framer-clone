import Marquee from "./Marquee";
import PlaceholderImage from "./PlaceholderImage";

export default function CaseStudyHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-24 pb-40 sm:px-12">
      {/* Background portrait photo */}
      <PlaceholderImage
        label="Portrait photo"
        className="absolute inset-0 h-full w-full opacity-40"
      />

      <div className="relative z-10 max-w-2xl">
        <h1 className="font-pixel text-5xl leading-tight text-white sm:text-6xl">
          Case Study
        </h1>
        <div className="mt-4 font-pixel text-[7rem] leading-none text-white sm:text-[9rem]">
          01
        </div>
        <p className="mt-6 max-w-md font-raleway text-lg text-white">
          Hopefully this is good text combination, questrial and raleway.
        </p>
      </div>

      {/* Phone / device mockup card, bottom right */}
      <PlaceholderImage
        label="Device mockup"
        className="absolute bottom-10 right-6 h-56 w-56 rounded-[2.5rem] sm:h-72 sm:w-72"
      />

      {/* Repeating "Litwin's Model of Change" marquee lines */}
      <div className="relative z-10 mt-24 space-y-2">
        <Marquee
          text="LITWIN'S MODEL OF CHANGE"
          className="font-pixel text-2xl text-white/20"
        />
        <Marquee
          text="LITWIN'S MODEL OF CHANGE"
          className="font-pixel text-2xl text-white/20"
        />
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="rounded-full border border-white px-6 py-3 font-pixel text-2xl text-white"
              >
                LITWIN&apos;S MODEL OF CHANGE
              </span>
            ))}
          </div>
        </div>
        <Marquee
          text="LITWIN'S MODEL OF CHANGE"
          className="font-pixel text-2xl text-white/20"
        />
        <Marquee
          text="LITWIN'S MODEL OF CHANGE"
          className="font-pixel text-2xl text-white/20"
        />
      </div>
    </section>
  );
}
