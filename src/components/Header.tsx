"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/project";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`header-glass fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Om Swastik Buildhomes Pvt. Ltd."
              width={180}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-white/80 hover:text-gold"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="btn-primary text-[12px]"
            >
              Enquire Now
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="btn-primary text-[11px] px-4 py-2.5 hidden sm:inline-flex"
            >
              Enquire Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 transition-colors ${
                scrolled ? "text-white" : "text-white"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-primary-dark/98 backdrop-blur-lg" />
        <nav className="relative flex flex-col px-8 pt-8 pb-12 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white/90 hover:text-gold text-lg font-medium py-3 border-b border-white/10 transition-all duration-300"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                transitionDelay: `${i * 50}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="btn-primary mt-6 w-full text-center"
          >
            Enquire Now
            <ArrowRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
