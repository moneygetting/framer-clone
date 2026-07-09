import { GearIcon } from "./PixelIcons";

export default function CaseStudy02Gradient() {
  return (
    <section className="bg-black px-6 py-16 sm:px-12">
      <div
        className="relative mx-auto flex min-h-[34rem] max-w-6xl items-center justify-center overflow-hidden rounded-[3rem]"
        style={{
          background:
            "linear-gradient(120deg, #7fffd4 0%, #d9f2ff 25%, #7fffd4 50%, #baf7e6 75%, #7fffd4 100%)",
        }}
      >
        <h2 className="relative z-10 font-pixel text-4xl text-black sm:text-6xl">
          Case Study 02
        </h2>

        <div className="absolute bottom-8 left-8 flex items-end gap-2 text-black">
          <GearIcon className="h-24 w-24" />
          <GearIcon className="h-14 w-14" />
        </div>
      </div>
    </section>
  );
}
