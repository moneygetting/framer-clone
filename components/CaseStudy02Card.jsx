import Image from "next/image";

const BODY_COPY =
  "Hopefully this is good text combination, questrial and raleway. Then this is where the rest of the text would go, explaining the chosen model, why it was chose n and what results would be expected from it's application.";

export default function CaseStudy02Card() {
  return (
    <section className="w-full bg-white px-6 py-20 text-black md:px-16 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-pixel text-4xl md:text-5xl">Case Study 02</h2>
          <p className="mt-4 max-w-md font-body text-base md:text-lg">
            {BODY_COPY}
          </p>
        </div>

        <div className="relative h-64 w-full md:h-80">
          <Image
            src="https://placehold.co/600x480/e5e5e5/999999?text=Robot+Toy"
            alt="Robot toy placeholder"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
