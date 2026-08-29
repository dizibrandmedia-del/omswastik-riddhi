"use client";

import Image from "next/image";
import { company, project, navLinks } from "@/data/project";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark pt-16 md:pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Left - Company */}
          <div>
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={160}
              height={42}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p
              className="text-white/50 text-sm leading-relaxed mt-3 max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {company.tagline}
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4
              className="text-white/30 text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right - Project */}
          <div>
            <h4
              className="text-white/30 text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Project
            </h4>
            <p
              className="text-white text-2xl font-semibold mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.name}
            </p>
            <p
              className="text-gold/60 text-xs tracking-[0.12em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.category}
            </p>
            <p
              className="text-white/35 text-sm mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.location}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} {company.name} All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-white/50 text-xs transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/50 text-xs transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
