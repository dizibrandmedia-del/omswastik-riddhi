"use client";

import { dholeraSIR } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DholeraSIR() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Special Investment Region"
          title={dholeraSIR.heading}
          subtitle={dholeraSIR.subheading}
        />

        {/* 4 Key Stats Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-20">
            {dholeraSIR.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 sm:p-8 bg-primary rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <p
                  className="text-white text-sm sm:text-base font-medium mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.unit}
                </p>
                <p
                  className="text-white/60 text-xs tracking-[0.12em] uppercase font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {dholeraSIR.details.map((detail, i) => (
            <ScrollReveal key={detail.label} delay={i * 60}>
              <div className="flex gap-5 p-6 bg-grey-light hover:bg-ivory transition-colors rounded-lg">
                <div className="flex-shrink-0 w-1 bg-gold self-stretch rounded-full" />
                <div>
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-gold font-semibold mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {detail.label}
                  </p>
                  <p
                    className="text-dark/75 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {detail.value}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
