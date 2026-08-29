"use client";

import { useState } from "react";
import { company, project } from "@/data/project";
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
            <div className="bg-white p-12 md:p-16">
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

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-8">
                <Image
                  src="/images/logo.png"
                  alt={company.name}
                  width={180}
                  height={48}
                  className="h-12 w-auto mb-4"
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
                    className="text-dark/55 text-sm leading-relaxed"
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
                    className="text-primary text-sm hover:text-gold transition-colors"
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
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 lg:p-12">
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
      </div>
    </section>
  );
}
