import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EazySell — IA pour entreprises béninoises",
    short_name: "EazySell",
    description:
      "Google Business, sites & WhatsApp, chatbots IA, CRM et agents métiers pour les PME de Cotonou et du Bénin.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "fr",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
