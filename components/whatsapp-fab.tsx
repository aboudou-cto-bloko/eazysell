"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { waLink, waMessages } from "@/lib/whatsapp";

const WA_GREEN = "#25D366";

export default function WhatsappFab() {
  return (
    <a
      href={waLink(waMessages.contact)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter EazySell sur WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full pl-3 pr-3 md:pr-4 py-3 text-white shadow-lg transition-all duration-300 hover:pr-5"
      style={{ background: WA_GREEN, boxShadow: "0 8px 30px rgba(37,211,102,0.45)" }}
    >
      {/* halo pulsé */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: WA_GREEN, opacity: 0.35 }}
        aria-hidden
      />
      <WhatsappLogo size={26} weight="fill" className="relative z-10" />
      <span className="relative z-10 hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
        Discutons
      </span>
    </a>
  );
}
