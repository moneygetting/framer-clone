import { PacmanIcon, RobotFaceIcon } from "./PixelIcons";

const BODY_COPY =
  "Hopefully this is good text combination, questrial and raleway. Then this is where the rest of the text would go, explaining the chosen model, why it was chose n and what results would be expected from it's application.";

function Dot() {
  return <span className="block h-2.5 w-2.5 rounded-full bg-black" />;
}

export function PacmanRail() {
  return (
    <section className="w-full bg-white px-6 py-20 text-black md:px-16 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto,1fr] md:items-center">
        <div className="flex flex-col items-center gap-5">
          <PacmanIcon className="h-16 w-16 md:h-20 md:w-20" />
          {Array.from({ length: 8 }).map((_, i) => (
            <Dot key={i} />
          ))}
        </div>

        <div>
          <h2 className="font-pixel text-4xl md:text-5xl">Case Study 02</h2>
          <p className="mt-4 max-w-md font-body text-base md:text-lg">
            {BODY_COPY}
          </p>
        </div>
      </div>
    </section>
  );
}

export function RobotRail() {
  const rail = [
    "icon",
    "dot",
    "dot",
    "icon",
    "dot",
    "dot",
    "icon",
    "dot",
  ];

  return (
    <section className="w-full bg-white px-6 py-20 text-black md:px-16 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto,1fr] md:items-center">
        <div className="flex flex-col items-center gap-5">
          {rail.map((kind, i) =>
            kind === "icon" ? (
              <RobotFaceIcon key={i} className="h-14 w-14 md:h-16 md:w-16" />
            ) : (
              <Dot key={i} />
            )
          )}
        </div>

        <div>
          <h2 className="font-pixel text-4xl md:text-5xl">Case Study 02</h2>
          <p className="mt-4 max-w-md font-body text-base md:text-lg">
            {BODY_COPY}
          </p>
        </div>
      </div>
    </section>
  );
}
