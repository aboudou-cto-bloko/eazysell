"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  MapPin,
  CalendarCheck,
  QrCode,
  UsersThree,
  ChartLineUp,
} from "@phosphor-icons/react";

const BASE = "https://aboudouzinsou.com";
const ACCENT = "#2f6bff";

const cases = [
  {
    project: "Google Business",
    pillar: "Digitalisation",
    Icon: MapPin,
    title: "Apparaître sur Google Maps à Cotonou",
    description:
      "Des milliers de PME béninoises ne sont pas sur Google Maps. Leurs clients les cherchent, ne les trouvent pas, et vont chez le concurrent qui, lui, y est.",
    href: `${BASE}/articles/article-google-maps-cotonou`,
    image: images.services.visibilite,
  },
  {
    project: "RendezApp",
    pillar: "Automatisation",
    Icon: CalendarCheck,
    title: "Réservation en ligne pour salons & services",
    description:
      "Gérer ses rendez-vous sur WhatsApp, c'est gérer une liste qui disparaît dans le scroll. Une réservation en ligne, c'est une liste qui ne se perd pas.",
    href: `${BASE}/articles/article-reservation-en-ligne-cotonou`,
    image: images.services.presence,
  },
  {
    project: "MenuCo",
    pillar: "Digitalisation",
    Icon: QrCode,
    title: "Menu digital QR pour restaurants",
    description:
      "Imprimer une carte de restaurant, c'est payer pour quelque chose qu'on jette dans 3 mois. Le QR code n'est pas une tendance — c'est la fin d'une dépense inutile.",
    href: `${BASE}/articles/article-menu-digital-qr-restaurant-cotonou`,
    image: images.services.chatbot,
  },
  {
    project: "CRM PME",
    pillar: "Intelligence artificielle",
    Icon: UsersThree,
    title: "Un CRM adapté aux PME africaines",
    description:
      "Salesforce et HubSpot sont conçus pour l'email et les marchés occidentaux. Ce qu'un CRM pour le marché béninois doit vraiment être.",
    href: `${BASE}/articles/article-crm-pme-africaines`,
    image: images.services.intelligence,
  },
  {
    project: "VitrinAI",
    pillar: "Intelligence artificielle",
    Icon: ChartLineUp,
    title: "Audit SEO & performance de sites PME",
    description:
      "Un audit automatisé qui montre à une PME africaine pourquoi son site ne convertit pas — et exactement comment le corriger.",
    href: `${BASE}/articles/article-vitrinai`,
    image: images.services.agents,
  },
];

function PillarTag({ label, onGradient = false }: { label: string; onGradient?: boolean }) {
  return (
    <span
      className="inline-block text-[11px] font-medium px-1.5 py-0.5 rounded-[3px]"
      style={{ background: onGradient ? "rgba(255,255,255,0.22)" : ACCENT, color: "#fff" }}
    >
      {label}
    </span>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const current = cases[active];
  const CurrentIcon = current.Icon;
  const others = cases.map((c, i) => ({ ...c, i })).filter((c) => c.i !== active).slice(0, 3);

  const go = (dir: number) => setActive((a) => (a + dir + cases.length) % cases.length);

  return (
    <section
      id="cas-clients"
      className="relative lg:sticky lg:top-0 min-h-screen lg:h-screen w-full overflow-hidden text-white"
      style={{ zIndex: 4, background: "#0a0a0a" }}
    >
      <div ref={ref} className="min-h-screen lg:h-full max-w-6xl mx-auto px-6 flex flex-col justify-center py-24 lg:py-20">
        {/* En-tête — reprend les 3 piliers du hero */}
        <div className="flex items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.04]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Digitalisation, automatisation, IA.
            <br />
            <span className="italic font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
              En pratique.
            </span>
          </motion.h2>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              style={{ borderColor: "rgba(255,255,255,0.18)" }}
              aria-label="Précédent"
            >
              <ArrowLeft size={18} weight="bold" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-90"
              style={{ background: ACCENT }}
              aria-label="Suivant"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.1fr_0.85fr] gap-5 items-stretch">
          {/* Image featured */}
          <div className="relative rounded-2xl overflow-hidden bg-zinc-900 h-44 lg:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image src={current.image} alt={current.project} fill className="object-cover" sizes="35vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <CurrentIcon size={22} weight="bold" color="#fff" />
            </div>
          </div>

          {/* Carte active (gradient bleu) */}
          <AnimatePresence mode="wait">
            <motion.a
              key={active}
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[220px] lg:h-[320px] group overflow-hidden"
              style={{ background: `linear-gradient(140deg, ${ACCENT} 0%, #1b3fae 100%)` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/80">{current.project}</span>
                </div>
                <ArrowUpRight size={24} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
              <div>
                <div className="mb-4">
                  <PillarTag label={current.pillar} onGradient />
                </div>
                <h3 className="font-bold mb-3 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.4vw, 32px)", letterSpacing: "-0.02em" }}>
                  {current.title}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed line-clamp-3 max-w-md">{current.description}</p>
              </div>
            </motion.a>
          </AnimatePresence>

          {/* Cards secondaires (cliquables) */}
          <div className="flex flex-col gap-4 lg:gap-5 lg:h-[320px]">
            {others.map((c) => {
              const Ico = c.Icon;
              return (
                <button
                  key={c.i}
                  onClick={() => setActive(c.i)}
                  className="relative rounded-2xl border p-5 text-left flex items-center gap-4 hover:bg-white/[0.05] transition-colors duration-200 flex-1 min-h-0"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <Ico size={20} weight="bold" color="rgba(255,255,255,0.85)" />
                  </div>
                  <div className="min-w-0">
                    <span className="mb-1.5 inline-block">
                      <PillarTag label={c.pillar} />
                    </span>
                    <span className="block text-sm font-semibold leading-snug truncate" style={{ fontFamily: "var(--font-display)" }}>
                      {c.project}
                    </span>
                  </div>
                  <ArrowUpRight size={16} weight="bold" className="text-white/35 shrink-0 ml-auto" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Lien vers le blog */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          href={`${BASE}/articles`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200"
        >
          Toutes les analyses sur aboudouzinsou.com
          <ArrowUpRight size={14} weight="bold" />
        </motion.a>
      </div>
    </section>
  );
}
