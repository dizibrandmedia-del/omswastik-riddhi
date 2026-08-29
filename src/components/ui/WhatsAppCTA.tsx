"use client";

import { company } from "@/data/project";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%2C%20I%20am%20interested%20in%20Riddhi%20Premium%20Plots%20in%20Dholera.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white fill-white" />
    </a>
  );
}
