"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const WORDS = ["Digitalisation", "Automatisation", "Intelligence artificielle"];
const SELECTION_BLUE = "#2f6bff";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative lg:sticky lg:top-0 h-screen w-full overflow-hidden bg-white" style={{ zIndex: 1 }}>
      {/* Conteneur arrondi avec marges (marge haute qui dégage la nav) */}
      <div className="h-full w-full px-3 pb-3 pt-[76px] md:px-4 md:pb-4 md:pt-[84px]">
        <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-black">
          {/* Image plein cadre — Place de l'Amazone, Cotonou */}
          <Image
            src="/images/amazone.webp"
            alt="Statue de l'Amazone, Place de l'Amazone à Cotonou"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gros overlay sombre — concentre l'attention sur le titre */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

          {/* Titre centré */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-white text-center px-6 leading-[1.12]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 5vw, 72px)",
                letterSpacing: "-0.03em",
              }}
            >
              {/* Mot animé surligné (effet sélection bleue) */}
              <span className="relative inline-flex items-center justify-center min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative inline-block px-2"
                  >
                    {/* Surlignement qui balaie comme un surligneur */}
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      className="absolute inset-0 origin-left rounded-[3px]"
                      style={{ background: SELECTION_BLUE }}
                    />
                    <span className="relative z-10">{WORDS[index]}</span>
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              pour les entreprises béninoises.
            </motion.h1>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 right-8 z-10 flex items-center gap-3 text-white/70"
          >
            <span className="text-xs uppercase tracking-[0.1em]">Défiler</span>
            <div className="w-8 h-8 rounded-md border border-white/30 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
