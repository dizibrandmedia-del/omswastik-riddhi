"use client";

import { keyMetrics } from "@/data/dholera";
import CountUp from "@/components/ui/CountUp";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Stats() {
  return (
    <section id="stats" className="bg-white py-12 md:py-16 border-b border-grey-light">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="text-center px-4 py-4 md:border-r last:border-r-0 border-grey-light"
              >
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {metric.value ? (
                    <CountUp end={parseFloat(metric.value)} suffix="" />
                  ) : null}
                  <span className="text-lg md:text-xl lg:text-2xl text-gold ml-1.5 font-medium">
                    {metric.unit}
                  </span>
                </div>
                <p
                  className="text-dark/50 text-xs md:text-sm tracking-[0.12em] uppercase mt-2"
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
