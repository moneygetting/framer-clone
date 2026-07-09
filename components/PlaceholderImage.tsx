type PlaceholderImageProps = {
  label: string;
  className?: string;
  dark?: boolean;
};

/**
 * Stands in for real image assets from the Framer site (portrait photo,
 * phone mockup, toy render, etc). Swap the `label` block for a real
 * <Image /> once you have the source files.
 */
export default function PlaceholderImage({ label, className = "", dark = true }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed ${
        dark ? "border-white/30 bg-white/5 text-white/40" : "border-black/30 bg-black/5 text-black/40"
      } text-center text-xs uppercase tracking-wide ${className}`}
    >
      {label}
    </div>
  );
}
