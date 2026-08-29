"use client";

import { growthDrivers, solarPark } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import {
  Plane,
  Train,
  Ship,
  Droplets,
  Factory,
  Container,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Plane,
  Train,
  Ship,
  Droplets,
  Factory,
  Container,
};

export default function GrowthDrivers() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Growth Drivers"
          title="The Next Major Economic Hub"
          subtitle="A city designed for tomorrow's growth"
        />

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {growthDrivers.map((driver, i) => {
            const Icon = iconMap[driver.icon];
            return (
              <ScrollReveal key={driver.id} delay={i * 80}>
                <div className="card-hover group relative bg-grey-light p-8 md:p-10 h-full overflow-hidden">
                  {/* Background number */}
                  <span
                    className="absolute top-4 right-6 text-7xl font-bold text-primary/[0.04] leading-none select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    0{driver.id}
                  </span>

                  <div className="relative z-10">
                    {Icon && (
                      <div className="w-12 h-12 flex items-center justify-center bg-white mb-6 group-hover:bg-gold/10 transition-colors">
                        <Icon size={22} className="text-gold" />
                      </div>
                    )}

                    <h3
                      className="text-lg md:text-xl font-semibold text-primary-dark mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {driver.title}
                    </h3>

                    <p
                      className="text-dark/50 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {driver.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Solar Park Highlight */}
        <ScrollReveal>
          <div className="bg-primary text-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p
                className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Renewable Energy
              </p>
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="text-gold">
                  <CountUp end={4400} />
                </span>{" "}
                <span className="text-white/80 text-lg md:text-xl">{solarPark.unit}</span>{" "}
                <span className="text-white">{solarPark.label}</span>
              </h3>
            </div>
            <p
              className="text-white/50 text-sm max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {solarPark.description}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
