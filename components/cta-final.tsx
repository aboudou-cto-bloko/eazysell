"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const WA = "https://wa.me/22900000000?text=Bonjour%2C%20je%20souhaite%20un%20diagnostic%20gratuit%20EazySell";

export default function CtaFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden bg-white" style={{ zIndex: 6 }}>
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <Image
            src={images.cta}
            alt="Poignée de main professionnelle"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/20 to-transparent" />
        </div>
        <div />
      </div>

      <div ref={ref} className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-end text-right">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-[52%]"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.04] mb-8"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-0.03em" }}
          >
            Prêt à digitaliser votre entreprise ?
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#929292] text-base mb-10 leading-relaxed"
          >
            Diagnostic gratuit. Aucun engagement.
            On vous dit exactement ce qui manque — et ce que ça coûte de le corriger.
          </motion.p>

          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white font-semibold px-8 py-4 rounded-md hover:bg-zinc-800 transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.477 0 0 4.477 0 10c0 1.76.46 3.41 1.26 4.84L0 20l5.31-1.24A9.96 9.96 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.13 14.27c-.22.6-1.26 1.14-1.74 1.18-.44.04-.85.21-2.88-.6-2.43-.97-3.98-3.45-4.1-3.61-.12-.16-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .22-.24.48-.3.64-.3.16 0 .32 0 .46.01.15.01.35-.06.55.42.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.16 1.18z"/></svg>
            Discutons sur WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
