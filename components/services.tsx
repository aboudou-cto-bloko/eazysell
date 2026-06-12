"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { ArrowUpRight } from "@phosphor-icons/react";

const WA = "https://wa.me/22900000000?text=Bonjour%2C%20je%20souhaite%20un%20RDV%20EazySell";
const ACCENT = "#2f6bff";

// Image révélée à travers le texte masqué (background-clip: text).
// Swappe ce chemin pour changer l'image vue dans les lettres + le fond.
const MASK_IMG = "/images/amazone.webp";

const MASK_IMG_BLUR = "/images/amazone-blur.png";

const maskBase = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
} as const;

// Titre principal : image nette
const maskStyle = { ...maskBase, backgroundImage: `url(${MASK_IMG})` } as const;
// Noms de services : image floutée (meilleure lisibilité du texte)
const maskStyleBlur = { ...maskBase, backgroundImage: `url(${MASK_IMG_BLUR})` } as const;

const services = [
  {
    name: "Google Business",
    price: "À partir de 75 000 XOF",
    tags: ["Fiche optimisée", "Photos", "Mots-clés locaux"],
    description:
      "Votre fiche Google Business créée ou remise à niveau. Vos clients vous trouvent sur Maps avant vos concurrents.",
    image: images.services.visibilite,
  },
  {
    name: "Site & WhatsApp",
    price: "À partir de 200 000 XOF",
    tags: ["Landing page", "WhatsApp Business", "Catalogue"],
    description:
      "Une page web mobile-first + WhatsApp Business configuré. Vos clients vous atteignent sans friction, en 3 jours.",
    image: images.services.presence,
  },
  {
    name: "Chatbot IA",
    price: "À partir de 500 000 XOF",
    tags: ["FAQ 24/7", "Qualification", "Prise de RDV"],
    description:
      "Un chatbot IA sur WhatsApp et votre site. Il répond, qualifie les leads et prend les rendez-vous, même la nuit.",
    image: images.services.chatbot,
  },
  {
    name: "CRM & Mémoire IA",
    price: "Sur devis",
    tags: ["CRM", "Base de connaissance", "Assistant RAG"],
    description:
      "Un CRM léger + une base de connaissance IA sur vos données. Vos équipes interrogent l'entreprise en langage naturel.",
    image: images.services.intelligence,
  },
  {
    name: "Agents & ERP",
    price: "Sur devis",
    tags: ["Agents métiers", "ERP sur mesure", "Intégrations"],
    description:
      "Des agents IA spécialisés par fonction + un ERP sur mesure. Vos processus s'automatisent, vos équipes se concentrent.",
    image: images.services.agents,
  },
];

export default function Services() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Scroll épinglé : la progression dans le wrapper haut pilote l'item actif
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.max(0, Math.min(services.length - 1, Math.floor(p * services.length)));
    setActive(idx);
  });

  return (
    <section
      ref={wrapRef}
      id="services"
      className="relative"
      style={{ height: `${services.length * 100}vh`, zIndex: 3 }}
    >
      {/* Contenu épinglé */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Image de fond + overlay très léger (à la limite du perceptible) */}
        <div className="absolute inset-0">
          <Image src={MASK_IMG} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.82)" }} />
        </div>

        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          {/* Grand titre — masqué (image visible à travers les lettres) */}
          <h2
            className="font-bold uppercase leading-[0.9] mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 9vw, 120px)", letterSpacing: "-0.04em", ...maskStyle }}
          >
            Services
          </h2>

          {/* Liste accordéon pilotée par le scroll */}
          <div>
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <div key={s.name} className="border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                  <button
                    onClick={() => setActive(i)}
                    className="w-full grid grid-cols-[40px_1fr_auto] md:grid-cols-[56px_1fr_auto] items-center gap-4 py-4 text-left"
                  >
                    <span
                      className="text-sm tabular-nums"
                      style={{ fontFamily: "var(--font-geist-mono), monospace", color: isActive ? ACCENT : "#929292" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-bold leading-none transition-opacity duration-300"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(24px, 3.4vw, 44px)",
                        letterSpacing: "-0.02em",
                        ...maskStyleBlur,
                        opacity: isActive ? 1 : 0.38,
                      }}
                    >
                      {s.name}
                    </span>
                    <motion.span
                      animate={{ rotate: isActive ? 0 : 45 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="justify-self-end"
                      style={{ color: isActive ? ACCENT : "#bcbcbc" }}
                    >
                      <ArrowUpRight size={24} weight="bold" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-[56px_1fr_240px] gap-4 md:gap-6 pb-6 pt-1 items-start">
                          <div className="hidden md:block" />
                          <div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                              {s.tags.map((t) => (
                                <span key={t} className="text-xs font-medium uppercase tracking-[0.06em]" style={{ color: ACCENT }}>
                                  {t}
                                </span>
                              ))}
                            </div>
                            <p className="text-[#555] leading-relaxed max-w-md mb-5">{s.description}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-semibold">{s.price}</span>
                              <a
                                href={WA}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors duration-200"
                              >
                                En discuter
                                <ArrowUpRight size={14} weight="bold" />
                              </a>
                            </div>
                          </div>
                          <div className="relative w-full h-32 md:h-28 rounded-xl overflow-hidden">
                            <Image src={s.image} alt={s.name} fill className="object-cover" sizes="240px" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }} />

            {/* Indicateur de progression */}
            <div className="flex gap-1.5 mt-6">
              {services.map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 28 : 12,
                    background: active === i ? ACCENT : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
