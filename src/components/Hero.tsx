"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { hero, company } from "@/data/project";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] max-h-[1100px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dholera.jpg"
          alt="Dholera Smart City"
          fill
          className={`object-cover transition-transform duration-[8000ms] ease-out ${
            loaded ? "scale-105" : "scale-100"
          }`}
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 md:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-gold text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.eyebrow}
            </p>
            <p
              className="text-white/60 text-xs md:text-sm tracking-[0.15em] uppercase mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.eyebrowSub}
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-semibold tracking-[0.06em] uppercase mb-4 md:mb-6 transition-all duration-700 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {hero.heading}
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 md:mb-4 font-light transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            {hero.subheading}
          </p>

          {/* Description */}
          <p
            className={`text-white/60 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed transition-all duration-700 delay-600 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {hero.description}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() => handleScroll("#riddhi")}
              className="btn-primary text-[13px]"
            >
              {hero.primaryCta}
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="btn-secondary text-[13px]"
            >
              {hero.secondaryCta}
            </button>
          </div>

          {/* Developer credit */}
          <div
            className={`mt-12 md:mt-16 transition-all duration-700 delay-[900ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className="text-white/40 text-[11px] tracking-[0.15em] uppercase mb-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {hero.presentedBy}
            </p>
            <p
              className="text-white/60 text-sm tracking-[0.06em]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {company.name}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-[1100ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => handleScroll("#stats")}
          className="text-white/40 hover:text-white/60 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
