/**
 * Images centralisées — un seul endroit à modifier.
 *
 * Les URLs `u()` pointent vers Unsplash (vérifiées : personnes africaines / contexte business).
 * Pour remplacer par tes propres photos : dépose-les dans /public/images/
 * et remplace la valeur par "/images/mon-fichier.jpg".
 *
 * Les cas clients (caseStudies) DOIVENT idéalement être remplacés par de vraies
 * photos béninoises pour la crédibilité terrain.
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// 5 images vérifiées (personnes noires/africaines, contexte business)
const AFR_WOMAN_WAX = "1531123897727-8f129e1688ce"; // femme africaine, wax print
const AFR_WOMAN_TECH = "1573164713988-8665fc963095"; // femme noire, tablette, tech
const AFR_PAYMENT = "1556742502-ec7c0e9f34b1"; // mains noires + terminal paiement
const AFR_HANDSHAKE = "1521791136064-7986c2920216"; // poignée de main business
const AFR_HANDS = "1604881991720-f91add269bed"; // mains jointes, soutien

export const images = {
  services: {
    visibilite: "/images/svc-google-business.avif",
    presence: "/images/svc-site-whatsapp.avif",
    chatbot: "/images/svc-chatbot.avif",
    intelligence: "/images/svc-crm.avif",
    agents: "/images/svc-erp.avif",
  },
  process: "/images/process.avif",
  cta: u(AFR_HANDSHAKE, 1400),
  // À REMPLACER par des photos béninoises authentiques :
  caseStudies: {
    salon: u(AFR_WOMAN_WAX, 900),
    pharmacie: u(AFR_WOMAN_TECH, 900),
    immo: u(AFR_HANDSHAKE, 900),
    resto: u(AFR_PAYMENT, 900),
  },
};
