import { SpaceInvaderIcon, RocketIcon } from "./PixelIcons";

const BODY_COPY =
  "Hopefully this is good text combination, questrial and raleway. Then this is where the rest of the text would go, explaining the chosen model, why it was chose n and what results would be expected from it's application.";

const INVADER_ROWS = [6, 3, 2];

export default function ChangeModel() {
  return (
    <section className="w-full bg-black">
      {/* row 1: invaders grid + copy */}
      <div className="grid grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:px-16 md:py-28">
        <div className="flex flex-col gap-4">
          {INVADER_ROWS.map((count, rowIdx) => (
            <div key={rowIdx} className="flex gap-4">
              {Array.from({ length: count }).map((_, i) => (
                <SpaceInvaderIcon
                  key={i}
                  className="h-10 w-10 text-white md:h-12 md:w-12"
                />
              ))}
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-pixel text-4xl text-white md:text-5xl">
            Change Model
          </h2>
          <p className="mt-4 max-w-md font-body text-base text-white/80 md:text-lg">
            {BODY_COPY}
          </p>
        </div>
      </div>

      {/* giant transition heading */}
      <div className="overflow-hidden px-6 md:px-16">
        <h3 className="font-pixel text-5xl leading-none text-white md:text-8xl">
          Change Model
        </h3>
      </div>

      {/* row 2: rocket + copy */}
      <div className="grid grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:px-16 md:py-28">
        <div>
          <h2 className="font-pixel text-4xl text-white md:text-5xl">
            Change Model
          </h2>
          <p className="mt-4 max-w-md font-body text-base text-white/80 md:text-lg">
            {BODY_COPY}
          </p>
        </div>

        <div className="flex items-end">
          <div className="relative">
            <RocketIcon className="h-40 w-32 text-white md:h-56 md:w-44" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-pixel text-xl text-black">
              0
            </span>
          </div>
        </div>
      </div>

      {/* giant transition heading */}
      <div className="overflow-hidden px-6 pb-16 md:px-16">
        <h3 className="font-pixel text-5xl leading-none text-white md:text-8xl">
          Change Model
        </h3>
      </div>
    </section>
  );
}
