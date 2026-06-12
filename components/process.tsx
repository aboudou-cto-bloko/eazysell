"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const ACCENT = "#2f6bff";

const steps = [
  {
    title: "Diagnostic gratuit",
    lead: "On analyse votre situation. Visibilité, outils, concurrents.",
    a: "30 minutes, sans engagement.",
    b: "Vous repartez avec un constat clair, même si vous ne signez pas.",
  },
  {
    title: "Mise en place",
    lead: "On implémente la solution choisie, de bout en bout.",
    a: "3 à 14 jours selon le niveau.",
    b: "Vous ne gérez rien : on s'occupe du technique et du contenu.",
  },
  {
    title: "Résultats mesurables",
    lead: "Un rapport de performance à 30 jours, chiffré.",
    a: "Nouveaux clients, leads, automatisations.",
    b: "On ajuste ensemble si un indicateur n'est pas au rendez-vous.",
  },
];

export default function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.max(0, Math.min(steps.length - 1, Math.floor(p * steps.length)));
    setActive(idx);
  });

  return (
    <section
      ref={wrapRef}
      id="process"
      className="relative"
      style={{ height: `${steps.length * 100}vh`, zIndex: 5 }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black text-white">
        <div className="h-full max-w-6xl mx-auto px-6 flex items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.1fr] gap-5 w-full items-stretch">
            {/* Card image + titre */}
            <div className="relative rounded-2xl overflow-hidden h-48 lg:h-[460px]">
              <Image src={images.process} alt="Processus EazySell" fill className="object-cover" sizes="40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <p className="text-xs font-medium uppercase tracking-[0.1em] mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Le processus
                </p>
                <h2
                  className="font-bold leading-[1.05]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.2vw, 44px)", letterSpacing: "-0.03em" }}
                >
                  Simple.
                  <br />
                  Rapide.
                  <br />
                  Garanti.
                </h2>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-4">
              {steps.map((s, i) => {
                const isActive = active === i;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setActive(i)}
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-2xl border p-6 md:p-7 cursor-pointer flex-1"
                    style={{
                      borderColor: isActive ? "rgba(47,107,255,0.5)" : "rgba(255,255,255,0.12)",
                      background: isActive ? "rgba(47,107,255,0.08)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-7 items-start">
                      <span
                        className="font-bold leading-none tabular-nums"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(48px, 6vw, 88px)",
                          letterSpacing: "-0.04em",
                          color: isActive ? ACCENT : "rgba(255,255,255,0.25)",
                          transition: "color 0.4s",
                        }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3
                          className="font-bold mb-2"
                          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.01em" }}
                        >
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                          {s.lead}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.a}</p>
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.b}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Indicateur de progression */}
              <div className="flex gap-1.5 mt-1">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? 28 : 12,
                      background: active === i ? ACCENT : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
