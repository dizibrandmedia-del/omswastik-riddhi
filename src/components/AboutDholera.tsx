"use client";

import Image from "next/image";
import { aboutDholera } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";

export default function AboutDholera() {
  return (
    <section id="dholera" className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Dholera Smart City"
              title={aboutDholera.heading}
              subtitle={aboutDholera.subheading}
              center={false}
            />
            <div className="space-y-5">
              {aboutDholera.content.map((para, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <p
                    className="text-dark/65 text-[15px] md:text-base leading-[1.8]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200}>
              <button
                onClick={() => {
                  const el = document.querySelector("#location");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-gold mt-8 text-[12px]"
              >
                Explore Location
              </button>
            </ScrollReveal>
          </div>

          {/* Image + Floating Card */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src="/images/about-dholera.jpg"
                  alt="Dholera Smart City masterplan"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-primary text-white p-6 md:p-8 shadow-2xl max-w-[220px]">
                <div
                  className="text-3xl md:text-4xl font-semibold text-gold mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <CountUp end={920} />
                </div>
                <p
                  className="text-white/90 text-sm tracking-[0.05em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Sq. Km
                </p>
                <p
                  className="text-white/50 text-xs tracking-[0.1em] uppercase mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Total Area
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
