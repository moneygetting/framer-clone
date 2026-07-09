import { PacmanIcon, RobotHeadIcon } from "./PixelIcons";

const paragraph =
  "Hopefully this is good text combination, questrial and raleway. Then this is where the rest of the text would go, explaining the chosen model, why it was chose n and what results would be expected from it's application.";

const nodes = [
  { icon: "pacman" as const, indent: false },
  { icon: "robot" as const, indent: false },
  { icon: "robot" as const, indent: true },
  { icon: "robot" as const, indent: false },
];

export default function CaseStudy02Timeline() {
  return (
    <section className="bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`flex items-start gap-10 ${node.indent ? "md:pl-24" : ""}`}
          >
            <div className="flex flex-col items-center gap-3 pt-1">
              {node.icon === "pacman" ? (
                <PacmanIcon className="h-16 w-16 text-black" />
              ) : (
                <RobotHeadIcon className="h-16 w-16 text-black" />
              )}
              <div className="flex flex-col gap-3">
                {Array.from({ length: 3 }).map((_, dotIndex) => (
                  <span key={dotIndex} className="h-2.5 w-2.5 rounded-full bg-black" />
                ))}
              </div>
            </div>

            <div className="max-w-xl pt-2">
              <h2 className="font-pixel text-3xl text-black sm:text-4xl">
                Case Study 02
              </h2>
              <p className="mt-4 font-raleway text-lg font-medium text-black">
                {paragraph}
              </p>
            </div>
          </div>
        ))}

        {/* Final, plain centered entry with no icon */}
        <div className="text-center">
          <h2 className="font-pixel text-4xl text-black sm:text-5xl">
            Case Study 02
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-raleway text-lg font-medium text-black">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
