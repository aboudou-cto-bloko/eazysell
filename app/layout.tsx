import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const SITE_URL = "https://eazysell-bj.online";
const TITLE = "EazySell — L'IA qui fait grandir les entreprises béninoises";
const DESCRIPTION =
  "Google Business, sites & WhatsApp, chatbots IA, CRM et agents métiers. EazySell digitalise et automatise les PME de Cotonou et du Bénin — simplement. Diagnostic gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · EazySell",
  },
  description: DESCRIPTION,
  applicationName: "EazySell",
  keywords: [
    "EazySell",
    "IA pour entreprises Bénin",
    "digitalisation PME Cotonou",
    "Google Business Cotonou",
    "chatbot WhatsApp Bénin",
    "CRM PME africaines",
    "agence digitale Cotonou",
    "automatisation entreprise Bénin",
    "site web Cotonou",
    "intelligence artificielle PME",
  ],
  authors: [{ name: "François Mawutô Aboudou Zinsou", url: "https://aboudouzinsou.com" }],
  creator: "François Mawutô Aboudou Zinsou",
  publisher: "EazySell",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "EazySell",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
