"use client";

import { useState } from "react";
import { company, project, teamContacts } from "@/data/project";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Send, MapPin, Globe, Phone, Mail, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9+\-\s()]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid mobile number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Frontend only - simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <section id="contact" className="bg-grey-light py-20 md:py-28 lg:py-32">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-sm">
              <CheckCircle2 size={48} className="text-gold mx-auto mb-6" />
              <h3
                className="text-2xl md:text-3xl font-semibold text-primary-dark mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Thank You
              </h3>
              <p
                className="text-dark/55 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your enquiry about Riddhi has been submitted. Our team will get
                in touch with you shortly.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", phone: "", email: "", message: "" });
                }}
                className="btn-outline-gold text-[12px]"
              >
                Submit Another Enquiry
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-grey-light py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow={project.category}
          title="Let's Talk About Riddhi"
          subtitle="Get in touch with our team to learn more about this premium investment opportunity."
        />

        {/* Top: Corporate Office Info & Enquiry Form */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">
          {/* Corporate Profile */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-8">
                <Image
                  src="/images/logo.png"
                  alt={company.name}
                  width={220}
                  height={60}
                  className="h-12 w-auto mb-4 object-contain"
                />
                <p
                  className="text-primary-dark text-lg font-semibold"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem" }}
                >
                  {company.name}
                </p>
                <p
                  className="text-dark/40 text-sm italic"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {company.tagline}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div
                    className="text-dark/65 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.line3}
                    <br />
                    {company.address.line4}
                    <br />
                    {company.address.line5}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Globe size={18} className="text-gold flex-shrink-0" />
                  <a
                    href={`https://${company.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:text-gold transition-colors font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {company.website}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <a
                    href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-dark/75 hover:text-primary text-sm font-medium transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {company.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  <a
                    href={`mailto:${company.email}`}
                    className="text-dark/75 hover:text-primary text-sm font-medium transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 pt-6 border-t border-dark/10">
                <p
                  className="text-gold text-xs tracking-[0.15em] uppercase font-semibold mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Project
                </p>
                <p
                  className="text-primary-dark text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}
                >
                  {project.name}
                </p>
                <p
                  className="text-dark/45 text-xs tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.category}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={150}>
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-sm">
                <h3
                  className="text-xl md:text-2xl font-semibold text-primary-dark mb-6"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}
                >
                  Send Enquiry
                </h3>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-[0.1em] uppercase text-dark/50 mb-2 font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`form-input ${errors.name ? "border-red-400" : ""}`}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs tracking-[0.1em] uppercase text-dark/50 mb-2 font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`form-input ${errors.phone ? "border-red-400" : ""}`}
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-[0.1em] uppercase text-dark/50 mb-2 font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`form-input ${errors.email ? "border-red-400" : ""}`}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-[0.1em] uppercase text-dark/50 mb-2 font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us about your interest in Riddhi..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full text-[13px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>

        {/* Executive Contact Cards */}
        <div className="pt-8 border-t border-dark/10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p
                className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Executive Contacts
              </p>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-dark"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Connect With Our Team
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {teamContacts.map((contact, i) => (
              <ScrollReveal key={contact.name} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-grey-light flex flex-col h-full">
                  {/* Card Header (Deep Teal with QR code) */}
                  <div className="bg-primary-dark px-6 py-5 flex items-center justify-between">
                    <div>
                      <h4
                        className="text-white text-xl md:text-2xl font-semibold tracking-wide"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {contact.name}
                      </h4>
                      <p
                        className="text-white/60 text-xs mt-0.5 tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Om Swastik Buildhomes
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-white p-1 rounded-lg flex-shrink-0 flex items-center justify-center shadow-inner">
                      <Image
                        src={contact.qr}
                        alt={`QR code for ${contact.name}`}
                        width={50}
                        height={50}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Gold Divider Ribbon */}
                  <div className="h-1.5 bg-gradient-to-r from-gold via-gold-deep to-gold" />

                  {/* Card Body */}
                  <div className="p-6 bg-ivory/40 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3.5">
                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone size={15} className="text-primary" />
                        </div>
                        <a
                          href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-dark/80 hover:text-primary font-medium text-sm transition-colors"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {contact.phone}
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail size={15} className="text-primary" />
                        </div>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-dark/80 hover:text-primary text-xs sm:text-sm transition-colors break-all"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {contact.email}
                        </a>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-3 pt-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin size={15} className="text-primary" />
                        </div>
                        <p
                          className="text-dark/60 text-xs leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {contact.address}
                        </p>
                      </div>
                    </div>

                    {/* Quick Call / WhatsApp CTA */}
                    <div className="pt-3 border-t border-dark/10 flex gap-2">
                      <a
                        href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex-1 py-2 text-center text-xs font-semibold uppercase tracking-wider bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Call
                      </a>
                      <a
                        href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(contact.name)}%2C%20I%20am%20interested%20in%20Riddhi%20Premium%20Plots%20in%20Dholera.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white rounded-lg hover:bg-[#20ba59] transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
