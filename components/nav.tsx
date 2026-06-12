"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { waLink, waMessages } from "@/lib/whatsapp";

const WA_LINK = waLink(waMessages.rdv);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = false; // le hero descend sous la nav, fond toujours clair

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.svg"
            alt="EazySell"
            width={120}
            height={26}
            priority
            style={{ filter: dark ? "invert(1)" : "none", transition: "filter 0.3s" }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm transition-colors duration-200"
            style={{ color: dark ? "rgba(255,255,255,0.8)" : "#929292" }}
          >
            Services
          </a>
          <a
            href="#cas-clients"
            className="text-sm transition-colors duration-200"
            style={{ color: dark ? "rgba(255,255,255,0.8)" : "#929292" }}
          >
            Cas clients
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200"
            style={
              dark
                ? { border: "1px solid rgba(255,255,255,0.4)", color: "#fff", background: "transparent" }
                : { background: "#000", color: "#fff", border: "1px solid #000" }
            }
          >
            Prendre un RDV
          </a>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200"
          style={
            dark
              ? { border: "1px solid rgba(255,255,255,0.4)", color: "#fff" }
              : { background: "#000", color: "#fff" }
          }
        >
          RDV
        </a>
      </nav>
    </header>
  );
}
