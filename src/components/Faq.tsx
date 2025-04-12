import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl text-center mt-10">Les questions les plus fréquentes.</h1>
      <Accordion type="single" collapsible className="w-[80vw] md:w-[630px] mt-10 mb-10">
        <AccordionItem
          value="item-1"
          className="border-b-[1px] border-b-white/40"
        >
          <AccordionTrigger className="text-xl">
            Combien de temps faut-il pour créer un site web ?
          </AccordionTrigger>
          <AccordionContent>
            La durée dépend de la complexité de votre projet. Un site vitrine
            basique peut être prêt en quelques jours, tandis qu’un site
            e-commerce ou un site sur mesure peut prendre plusieurs semaines.
            Nous définissons ensemble un planning clair dès le début.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-b-[1px] border-b-white/40"
        >
          <AccordionTrigger className="text-xl">
            Est-ce que mon site sera bien référencé sur Google ?
          </AccordionTrigger>
          <AccordionContent>
            Oui ! Tous nos sites sont optimisés pour le SEO dès le départ :
            structure propre, balises optimisées, rapidité de chargement,
            compatibilité mobile…
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-b-[1px] border-b-white/40"
        >
          <AccordionTrigger className="text-xl">
            Quels sont les tarifs pour la création d’un site web ?
          </AccordionTrigger>
          <AccordionContent>
            Nos tarifs varient selon vos besoins. Un site vitrine commence à
            partir de 500~700€, tandis qu&apos;un site plus complexe peut aller jusqu&apos;à
            plusieurs milliers d&apos;euros. Nous proposons toujours un devis
            personnalisé et transparent, sans surprise.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
