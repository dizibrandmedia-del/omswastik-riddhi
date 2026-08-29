"use client";

import { whyDholera } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Route, Building2, Cpu, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Route,
  Building2,
  Cpu,
  TrendingUp,
};

export default function WhyDholera() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Why Dholera"
          title="India's Most Ambitious Smart City"
          subtitle="A city designed for tomorrow's industries, connectivity, and sustainable growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyDholera.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.id} delay={i * 80}>
                <div className="card-hover group bg-white border border-grey-light p-8 md:p-10 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-ivory mb-6 transition-colors group-hover:bg-gold/10">
                    {Icon && (
                      <Icon
                        size={26}
                        className="text-gold transition-colors"
                      />
                    )}
                  </div>

                  {/* Number */}
                  <p
                    className="text-primary/20 text-5xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    0{item.id}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-[1.35rem] font-semibold text-primary-dark mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-dark/55 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
