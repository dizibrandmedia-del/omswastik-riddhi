import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
            light ? "text-gold" : "text-gold"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] ${
          light ? "text-white" : "text-primary-dark"
        } ${center ? "gold-line-center" : "gold-line"}`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base md:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-dark/60"}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
