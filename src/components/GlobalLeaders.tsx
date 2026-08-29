"use client";

import Image from "next/image";
import { globalLeaders } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function GlobalLeaders() {
  return (
    <section className="bg-dark py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 30%, rgba(228,170,60,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Industrial Ecosystem"
          title="Global Leaders Investing"
          subtitle="Major corporations are committing to Dholera's industrial ecosystem."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {globalLeaders.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={i * 60}>
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[120px] sm:min-h-[140px] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-transparent hover:border-gold/40">
                <div className="relative w-full h-16 sm:h-20 flex items-center justify-center">
                  <Image
                    src={leader.logo}
                    alt={`${leader.name} investing in Dholera`}
                    width={220}
                    height={90}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
