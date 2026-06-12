/**
 * Liens WhatsApp avec messages pré-rédigés selon le contexte
 * (section, service, sous-titre, zone géographique).
 *
 * wa.me ouvre directement l'application WhatsApp sur mobile
 * (et WhatsApp Web/Desktop sur ordinateur).
 */
export const WA_NUMBER = "2290167266360"; // +229 01 67 26 63 60
export const EMAIL = "eazysell.bj@gmail.com";

const PREFIX = "Bonjour EazySell 👋";
const ZONE = "à Cotonou";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  // Nav — prise de rendez-vous
  rdv: `${PREFIX} Je suis ${ZONE} et je souhaite un rendez-vous pour digitaliser mon entreprise. Pouvez-vous me rappeler ?`,

  // Footer — diagnostic gratuit
  diagnostic: `${PREFIX} Je souhaite profiter du diagnostic gratuit pour mon entreprise ${ZONE}. Quand êtes-vous disponible ?`,

  // Contact général / réseaux
  contact: `${PREFIX} J'aimerais en savoir plus sur vos services pour les entreprises ${ZONE}.`,

  // Service précis (nom + prix)
  service: (name: string, price: string) =>
    `${PREFIX} Je suis intéressé(e) par « ${name} » (${price}) pour mon entreprise ${ZONE}. Pouvez-vous m'en dire plus ?`,
};
