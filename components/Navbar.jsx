import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-8">
      <div className="flex items-center justify-between rounded-full bg-black/90 px-4 py-3 md:px-6">
        <div className="h-9 w-9 overflow-hidden rounded-full bg-neutral-700">
          <Image
            src="https://placehold.co/72x72/2b2b2b/e5e5e5?text=S.i"
            alt="S.i avatar"
            width={72}
            height={72}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="font-heading text-sm font-bold tracking-wide text-white md:text-base">
          Senzwelwe&apos;s Profile
        </p>
      </div>
    </header>
  );
}
