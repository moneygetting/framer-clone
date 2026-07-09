import PlaceholderImage from "./PlaceholderImage";

export default function CaseStudy02Toy() {
  return (
    <section className="bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-pixel text-4xl text-black sm:text-5xl">
            Case Study 02
          </h2>
          <p className="mt-4 max-w-md font-raleway text-lg font-medium text-black">
            Hopefully this is good text combination, questrial and raleway.
            Then this is where the rest of the text would go, explaining the
            chosen model, why it was chose n and what results would be
            expected from it&apos;s application.
          </p>
        </div>

        <PlaceholderImage
          label="Robot toy render"
          dark={false}
          className="h-72 w-full rounded-xl"
        />
      </div>
    </section>
  );
}
