"use client";

import { locationAdvantages } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  TrainFront,
  PlaneTakeoff,
  Container,
  Milestone,
  Anchor,
  Landmark,
  TreePine,
  Waves,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrainFront,
  PlaneTakeoff,
  Container,
  Milestone,
  Anchor,
  Landmark,
  TreePine,
  Waves,
};

export default function LocationAdvantages() {
  return (
    <section id="location" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Dholera SIR"
          title="Location Advantages"
          subtitle="Strategically positioned for unmatched connectivity and growth."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {locationAdvantages.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="card-hover group text-center p-6 md:p-8 bg-grey-light hover:bg-ivory transition-colors h-full">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white mb-5 group-hover:bg-gold/10 transition-colors">
                    {Icon && <Icon size={24} className="text-gold" />}
                  </div>
                  <h3
                    className="text-sm md:text-[15px] font-semibold text-primary-dark leading-snug"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
