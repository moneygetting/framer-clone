import Marquee from "./Marquee";
import { InvaderIcon } from "./PixelIcons";

const ROWS = [6, 3, 2, 1];

export default function ChangeModelIntro() {
  return (
    <section className="bg-black px-6 py-24 sm:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        {/* Invader icon pyramid */}
        <div className="space-y-4">
          {ROWS.map((count, rowIndex) => (
            <div key={rowIndex} className="flex gap-4">
              {Array.from({ length: count }).map((_, i) => (
                <InvaderIcon key={i} className="h-9 w-9 text-white" />
              ))}
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-pixel text-4xl text-white sm:text-5xl">Change Model</h2>
          <p className="mt-4 max-w-md font-raleway text-lg text-white">
            Hopefully this is good text combination, questrial and raleway.
            Then this is where the rest of the text would go, explaining the
            chosen model, why it was chose n and what results would be
            expected from it&apos;s application.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <Marquee text="Change Model" className="font-pixel text-4xl text-white sm:text-6xl" />
      </div>
    </section>
  );
}
