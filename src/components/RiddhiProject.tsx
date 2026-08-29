"use client";

import Image from "next/image";
import { project, company } from "@/data/project";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function RiddhiProject() {
  return (
    <section id="riddhi" className="relative bg-primary-dark py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(228,170,60,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(228,170,60,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <p
                className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Project
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 tracking-[0.03em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.name}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p
                className="text-gold text-sm md:text-base tracking-[0.15em] uppercase mb-8 font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {project.category}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="w-16 h-[2px] bg-gold/40 mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p
                className="text-white/55 text-[15px] leading-[1.8] mb-4 max-w-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Riddhi is a premium plotted development by {company.name}, strategically
                positioned within the growth story of Dholera SIR. Designed for investors and
                visionaries, Riddhi offers an opportunity to be part of India&apos;s most ambitious
                smart city project.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p
                className="text-white/55 text-[15px] leading-[1.8] mb-8 max-w-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                With planned infrastructure, connectivity to major economic corridors, and
                a forward-thinking urban ecosystem, Riddhi represents a premium investment
                in tomorrow&apos;s growth.
              </p>
            </ScrollReveal>

            {/* Developer */}
            <ScrollReveal delay={350}>
              <div className="border-l-2 border-gold/30 pl-5 mb-10">
                <p
                  className="text-white/35 text-[11px] tracking-[0.15em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Developer
                </p>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {company.name}
                </p>
                <p
                  className="text-gold/50 text-xs italic mt-0.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {company.tagline}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-[12px]"
              >
                Enquire About Riddhi
                <ArrowRight size={14} />
              </button>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src="/images/riddhi-project.jpg"
                  alt="Riddhi Premium Plots development"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold/30" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold/30" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
