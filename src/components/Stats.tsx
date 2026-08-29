"use client";

import { keyMetrics } from "@/data/dholera";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Stats() {
  return (
    <section id="stats" className="bg-white py-12 md:py-16 border-b border-grey-light">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="text-center px-4 py-4 md:border-r last:border-r-0 border-grey-light"
              >
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span className="text-primary-dark font-extrabold">{metric.value}</span>
                  <span className="text-sm sm:text-base lg:text-lg text-gold ml-1.5 font-semibold">
                    {metric.unit}
                  </span>
                </div>
                <p
                  className="text-dark/60 text-xs sm:text-sm tracking-[0.12em] uppercase mt-2 font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
