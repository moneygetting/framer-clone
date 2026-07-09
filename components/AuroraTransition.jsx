import { GearIcon } from "./PixelIcons";

const BODY_COPY =
  "Hopefully this is good text combination, questrial and raleway. Then this is where the rest of the text would go, explaining the chosen model, why it was chose n and what results would be expected from it's application.";

export default function AuroraTransition() {
  return (
    <section className="w-full bg-black px-6 pb-0 pt-16 md:px-16">
      <p className="mx-auto max-w-2xl text-center font-body text-base text-white/80 md:text-lg">
        {BODY_COPY}
      </p>

      <div
        className="relative mt-16 flex h-[70vh] w-full items-center justify-center overflow-hidden rounded-t-[80px]"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #baffe0 0%, transparent 45%)," +
            "radial-gradient(circle at 80% 30%, #d8f6ff 0%, transparent 50%)," +
            "radial-gradient(circle at 50% 80%, #63e6d4 0%, transparent 55%)," +
            "linear-gradient(135deg, #a7ffe8 0%, #d9d3ff 45%, #6be8d6 100%)",
        }}
      >
        <h2 className="font-pixel text-4xl text-black md:text-6xl">
          Case Study 02
        </h2>

        <div className="absolute bottom-8 left-8 flex items-end gap-2 text-black md:bottom-12 md:left-12">
          <GearIcon className="h-16 w-16 md:h-20 md:w-20" />
          <GearIcon className="h-10 w-10 md:h-12 md:w-12" />
        </div>
      </div>
    </section>
  );
}
