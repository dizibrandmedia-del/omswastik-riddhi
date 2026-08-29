"use client";

import { internationalBenchmarks } from "@/data/dholera";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Globe,
  Scale,
  Zap,
  Users,
  Briefcase,
  Clock,
  ArrowUpRight,
  Shield,
  Network,
  Heart,
  Leaf,
  Wifi,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Scale,
  Zap,
  Users,
  Briefcase,
  Clock,
  ArrowUpRight,
  Shield,
  Network,
  Heart,
  Leaf,
  Wifi,
};

export default function InternationalBenchmark() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="World-Class Standards"
          title="International Benchmark"
          subtitle="Dholera is being developed to meet the highest global standards of urban planning."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {internationalBenchmarks.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 40}>
                <div className="card-hover group bg-white p-5 md:p-6 text-center border border-transparent hover:border-gold/20 transition-all h-full flex flex-col items-center justify-center min-h-[130px]">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-primary/40 group-hover:text-gold mb-3 transition-colors"
                    />
                  )}
                  <p
                    className="text-dark/70 text-xs md:text-sm font-medium leading-snug"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.title}
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
