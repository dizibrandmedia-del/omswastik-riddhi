"use client";

import Image from "next/image";
import { investmentSection } from "@/data/dholera";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Check } from "lucide-react";

export default function InvestmentSection() {
  return (
    <section id="invest" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/investment-bg.jpg"
          alt="Dholera infrastructure"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-dark/90" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p
              className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Investment Opportunity
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.1] gold-line"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {investmentSection.heading}
            </h2>
          </ScrollReveal>

          <div className="space-y-4 mb-10">
            {investmentSection.points.map((point, i) => (
              <ScrollReveal key={i} delay={150 + i * 60}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gold/15 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </div>
                  <p
                    className="text-white/60 text-sm md:text-[15px] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary text-[12px]"
            >
              Enquire Now
              <ArrowRight size={14} />
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
