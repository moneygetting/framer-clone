type MarqueeProps = {
  text: string;
  className?: string;
  speed?: "marquee" | "marquee-slow";
};

/**
 * The live site repeats headline copy (e.g. "Litwin's Model of Change",
 * "Change Model", "Case Study 02") many times in a row to drive a seamless
 * scrolling/looping text animation. This component reproduces that same
 * repeated-text pattern with a CSS marquee instead of hardcoding dozens of
 * duplicate lines in the page.
 */
export default function Marquee({ text, className = "", speed = "marquee" }: MarqueeProps) {
  const animationClass = speed === "marquee-slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className="w-full overflow-hidden">
      <div className={`flex w-max ${animationClass} gap-10`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={className}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
