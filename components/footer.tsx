"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, WhatsappLogo, FacebookLogo } from "@phosphor-icons/react";
import { waLink, waMessages } from "@/lib/whatsapp";

const WA_DIAGNOSTIC = waLink(waMessages.diagnostic);
const WA_CONTACT = waLink(waMessages.contact);
const PORTFOLIO = "https://aboudouzinsou.com";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Google Business", href: "#services" },
      { label: "Site & WhatsApp", href: "#services" },
      { label: "Chatbot IA", href: "#services" },
      { label: "CRM & Mémoire IA", href: "#services" },
      { label: "Agents & ERP", href: "#services" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "Cas concrets", href: "#cas-clients" },
      { label: "Le processus", href: "#process" },
      { label: "Articles", href: `${PORTFOLIO}/articles` },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "WhatsApp", href: WA_CONTACT },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "aboudouzinsou.com", href: PORTFOLIO },
    ],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden" style={{ zIndex: 8 }}>
      {/* Fond Amazone + overlay + gradient léger */}
      <div className="absolute inset-0">
        <Image src="/images/amazone.webp" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.82)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 pt-20 md:pt-28">
        {/* Haut : logo + tagline (3 piliers du hero) */}
        <div className="flex items-center justify-between mb-16 md:mb-20">
          <Image src="/logo.svg" alt="EazySell" width={30} height={36} style={{ filter: "invert(1)" }} />
          <span className="text-xs md:text-sm font-medium tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.55)" }}>
            DIGITALISER. AUTOMATISER. GRANDIR.
          </span>
        </div>

        {/* CTA fusionné */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.04] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
          >
            Prêt à digitaliser
            <br />
            votre entreprise ?
          </motion.h2>
          <p className="text-base mb-8 leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Diagnostic gratuit, sans engagement. On vous dit exactement ce qui manque — et ce que ça coûte de le corriger.
          </p>
          <a
            href={WA_DIAGNOSTIC}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-4 rounded-md hover:bg-white/90 transition-colors duration-200"
          >
            <WhatsappLogo size={20} weight="fill" />
            Discutons sur WhatsApp
          </a>
        </div>

        {/* Colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-8 pb-20">
          {/* Bloc marque + crédit AZ */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              EazySell équipe les entreprises béninoises avec l&apos;intelligence artificielle. Cotonou, Bénin.
            </p>
            <div className="flex items-center gap-3">
              <a href={WA_CONTACT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors duration-200" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                <WhatsappLogo size={16} weight="fill" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors duration-200" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                <FacebookLogo size={16} weight="fill" />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                {c.title}
              </p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Légal + crédit monogramme AZ (façon attiéké party) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-10 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs pt-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 EazySell — Tous droits réservés.
          </p>
          <a
            href={PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group pt-6"
            aria-label="Portfolio de François Mawutô Aboudou Zinsou"
          >
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Conçu par</span>
            <svg viewBox="0 0 100 60" className="w-7 h-4" aria-hidden>
              <g transform="translate(10, 5)" className="fill-white/40 group-hover:fill-white transition-colors duration-200">
                <path d="M 0 45 L 18 0 L 30 0 L 30 12 L 16 45 Z" />
                <path d="M 35 0 L 80 0 L 80 8 L 50 22 L 80 37 L 80 45 L 35 45 L 35 37 L 65 23 L 35 8 Z" />
              </g>
            </svg>
            <span className="text-xs font-medium group-hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.5)" }}>
              aboudouzinsou.com
            </span>
          </a>
        </div>
      </div>

      {/* Immense wordmark avec fondu haut + bas (façon Sukoya / Resend) */}
      <div className="relative z-10 w-full select-none pointer-events-none" aria-hidden>
        <span
          className="block text-center font-bold whitespace-nowrap"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(72px, 21vw, 340px)",
            lineHeight: 0.78,
            letterSpacing: "-0.045em",
            background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.78) 42%, rgba(255,255,255,0.06) 88%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            marginBottom: "-0.12em",
          }}
        >
          EAZYSELL
        </span>
      </div>
    </footer>
  );
}
