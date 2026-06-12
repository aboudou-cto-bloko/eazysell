"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagnifyingGlass, TrendUp, Lightning } from "@phosphor-icons/react";

const stats = [
  {
    value: "87%",
    label: "des acheteurs cherchent en ligne avant d'acheter",
    Icon: MagnifyingGlass,
    // état initial « en paquet » (décalé vers le centre + incliné)
    from: { x: 200, y: 28, rotate: 9 },
  },
  {
    value: "+40%",
    label: "de clients après optimisation Google Business",
    Icon: TrendUp,
    from: { x: 0, y: 40, rotate: -5 },
  },
  {
    value: "3 j",
    label: "pour être visible avec le Pack Essentiel",
    Icon: Lightning,
    from: { x: -200, y: 28, rotate: -9 },
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative lg:sticky lg:top-0 min-h-screen lg:h-screen w-full overflow-hidden text-white"
      style={{ zIndex: 2, background: "#000000" }}
    >
      {/* Image fond — globe + pin GPS */}
      <div className="absolute inset-0">
        <Image
          src="/images/gps-earth.avif"
          alt="Localisation GPS sur le globe terrestre"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      <div ref={ref} className="relative z-10 min-h-screen lg:h-full max-w-6xl mx-auto px-6 py-28 lg:py-0 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium uppercase tracking-[0.1em] mb-6"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Le problème
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[1.08] mb-3 text-white"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 64px)", letterSpacing: "-0.03em" }}
        >
          Vos clients cherchent sur Google.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-bold leading-[1.08] mb-12"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 64px)", letterSpacing: "-0.03em", color: "rgba(255,255,255,0.45)" }}
        >
          Ils ne vous trouvent pas.
        </motion.h2>

        {/* Cards stats — arrivent en paquet puis se disposent */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {stats.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, ...s.from }}
                animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.35 + i * 0.12,
                }}
                className="rounded-2xl border p-6 md:p-7 backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <Icon size={22} weight="bold" color="#fff" />
                </div>
                <p
                  className="font-semibold leading-none mb-2 text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 5vw, 60px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
