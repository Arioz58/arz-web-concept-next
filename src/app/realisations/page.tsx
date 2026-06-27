import type { Metadata } from "next";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import RealisationsCarousel from "@/components/RealisationsCarousel";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nos réalisations | ARZ Web Concept",
  description:
    "Découvrez l'ensemble des sites internet et applications web créés par ARZ Web Concept : sites vitrines, commande en ligne, e-commerce et solutions sur mesure.",
  alternates: {
    canonical: "https://arzwebconcept.com/realisations",
  },
};

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      {/* Barre supérieure */}
      <header className="flex items-center justify-between px-4 py-6 max-w-5xl mx-auto">
        <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
          ← Retour à l&apos;accueil
        </Link>
      </header>

      <section className="px-4 pb-20 max-w-5xl mx-auto">
        <h1 className="text-3xl lg:text-5xl text-center mb-4">Nos réalisations.</h1>
        <p className="text-center text-white/50 max-w-2xl mx-auto mb-12 font-[Poppins,sans-serif]">
          Chaque projet est conçu sur mesure : design moderne, performances
          optimisées et référencement soigné.
        </p>

        <RealisationsCarousel />
      </section>

      <Footer />
    </main>
  );
}
