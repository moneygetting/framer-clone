const BODY_COPY =
  "Hopefully this is good text combination, questrial and raleway. Then this is where the rest of the text would go, explaining the chosen model, why it was chose n and what results would be expected from it's application.";

export default function CaseStudy02Simple() {
  return (
    <section className="w-full bg-white px-6 py-24 text-black md:px-16 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-pixel text-4xl md:text-5xl">Case Study 02</h2>
        <p className="mt-4 font-body text-base md:text-lg">{BODY_COPY}</p>
      </div>
    </section>
  );
}
