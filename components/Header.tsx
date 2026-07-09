import PlaceholderImage from "./PlaceholderImage";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-black/90 px-6 py-3 backdrop-blur">
        <PlaceholderImage
          label="S.i"
          className="h-10 w-10 rounded-full text-[10px]"
        />
        <span className="font-raleway text-lg font-bold text-white">
          Senzwelwe&apos;s Profile
        </span>
      </div>
    </header>
  );
}
