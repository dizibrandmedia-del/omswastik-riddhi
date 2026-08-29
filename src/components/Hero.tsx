"use client";

import Image from "next/image";
import { hero, company } from "@/data/project";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] md:h-screen md:min-h-[650px] max-h-[1100px] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dholera.jpg"
          alt="Dholera Smart City"
          fill
          className="object-cover scale-100"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center justify-center my-auto">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6">
            <p
              className="text-gold text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-1.5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.eyebrow}
            </p>
            <p
              className="text-white/80 text-[11px] sm:text-xs md:text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.eyebrowSub}
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-[0.04em] uppercase mb-3 sm:mb-5 leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {hero.heading}
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-2xl md:text-3xl text-white/95 mb-3 sm:mb-4 font-light leading-snug"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            {hero.subheading}
          </p>

          {/* Description */}
          <p
            className="text-white/75 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto mb-8 sm:mb-12">
            <a
              href="#riddhi"
              className="btn-primary w-full sm:w-auto text-xs sm:text-[13px] py-3.5 px-7"
            >
              {hero.primaryCta}
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="btn-secondary w-full sm:w-auto text-xs sm:text-[13px] py-3.5 px-7"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* Developer credit */}
          <div className="pt-2">
            <p
              className="text-white/50 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mb-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.presentedBy}
            </p>
            <p
              className="text-white/80 text-xs sm:text-sm tracking-[0.06em] font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {company.name}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <a
          href="#stats"
          className="text-white/50 hover:text-white/80 transition-colors inline-block animate-bounce p-2"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
