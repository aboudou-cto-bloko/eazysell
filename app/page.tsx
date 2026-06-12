import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Process from "@/components/process";
import Footer from "@/components/footer";
import WhatsappFab from "@/components/whatsapp-fab";

const SITE_URL = "https://eazysell-bj.online";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EazySell",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "EazySell digitalise et automatise les PME du Bénin avec l'intelligence artificielle : Google Business, sites & WhatsApp, chatbots IA, CRM et agents métiers.",
  areaServed: [
    { "@type": "City", name: "Cotonou" },
    { "@type": "Country", name: "Bénin" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  founder: {
    "@type": "Person",
    name: "François Mawutô Aboudou Zinsou",
    url: "https://aboudouzinsou.com",
    sameAs: [
      "https://aboudouzinsou.com",
      "https://github.com/aboudou-cto-bloko",
      "https://www.linkedin.com/in/fran%C3%A7oisab8099316/",
      "https://x.com/aboudouzinsou",
      "https://www.facebook.com/francois.SaasXpert",
    ],
  },
  sameAs: ["https://aboudouzinsou.com"],
  email: "eazysell.bj@gmail.com",
  telephone: "+2290167266360",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+2290167266360",
    email: "eazysell.bj@gmail.com",
    areaServed: "BJ",
    availableLanguage: "fr",
  },
  priceRange: "75 000 XOF – 4 000 000 XOF",
  knowsLanguage: "fr",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services EazySell",
    itemListElement: [
      { "@type": "Offer", name: "Google Business optimisé", priceCurrency: "XOF", price: "75000" },
      { "@type": "Offer", name: "Site & WhatsApp Business", priceCurrency: "XOF", price: "200000" },
      { "@type": "Offer", name: "Chatbot IA", priceCurrency: "XOF", price: "500000" },
      { "@type": "Offer", name: "CRM & Mémoire IA" },
      { "@type": "Offer", name: "Agents métiers & ERP" },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <CaseStudies />
        <Process />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
