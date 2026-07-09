import Marquee from "./Marquee";
import { RocketIcon } from "./PixelIcons";

export default function ChangeModelRocket() {
  return (
    <section className="bg-black px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-pixel text-4xl text-white sm:text-5xl">Change Model</h2>
        <p className="mt-4 font-raleway text-lg text-white">
          Hopefully this is good text combination, questrial and raleway.
          Then this is where the rest of the text would go, explaining the
          chosen model, why it was chose n and what results would be
          expected from it&apos;s application.
        </p>

        <RocketIcon className="mt-16 h-24 w-16 text-white" />
      </div>

      <div className="mt-16">
        <Marquee text="Change Model" className="font-pixel text-4xl text-white sm:text-6xl" />
      </div>
    </section>
  );
}
