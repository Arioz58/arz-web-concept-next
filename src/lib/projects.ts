import type { StaticImageData } from "next/image";
import kingfood from "@/assets/kingfood67.png";
import oSecret from "@/assets/www.o-secret.fr_(iPhone SE).png";
import tftm from "@/assets/TFTM.png";
import PRE from "@/assets/www.prorenovest.fr_.png";

export type Project = {
  id: string;
  title: string;
  /** Étiquette courte affichée au-dessus du titre, ex. "Restauration rapide·Strasbourg" */
  tag: string;
  description: string;
  image: StaticImageData;
  /** URL du site en ligne, si disponible */
  url?: string;
};

/**
 * Source unique des réalisations, triée de la plus récente à la plus ancienne.
 * Le premier élément est mis en vedette sur la home (badge "Dernière réalisation").
 * Ajoute simplement une nouvelle entrée en tête pour qu'elle devienne la vedette.
 */
export const projects: Project[] = [
  {
    id: "tftm",
    title: "TFTM",
    tag: "Site web sur mesure",
    description: "Site web sur mesure.",
    image: tftm,
    url: "https://tftm67.fr",
  },
  {
    id: "kingfood67",
    title: "KingFood67",
    tag: "Restauration rapide·Strasbourg",
    description:
      "Site de commande en ligne pour un restaurant de burgers et tacos. Design moderne, optimisé mobile et SEO.",
    image: kingfood,
    url: "https://kingfood67.fr",
  },
  {
    id: "o-secret",
    title: "O-Secret",
    tag: "Restauration rapide·Mulhouse",
    description:
      "Site de commande en ligne pour un restaurant Tacos, Burgers & Brunchs. Design moderne, optimisé mobile et SEO.",
    image: oSecret,
    url: "https://o-secret.fr",
  },
  {
    id: "Pro Renov Est",
    title: "ProRenovEst",
    tag: "Site web sur mesure",
    description: "Site web sur mesure pour une entreprise de renovation.",
    image: PRE,
  },
];

/** Réalisation mise en vedette sur la home. */
export const featuredProject = projects[0];
