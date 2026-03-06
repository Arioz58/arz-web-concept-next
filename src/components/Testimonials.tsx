"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    company: "O-Secret",
    initials: "OS",
    color: "#731C97",
    category: "Site de commande en ligne",
    quote:
      "ARZ Web Concept ont livré notre site dans des délais impressionnants, sans aucun compromis sur la qualité. Le résultat dépasse nos attentes — exactement ce qu'on cherchait.",
    emojis: [
      { icon: "👍", bottom: "-1rem", right: "1rem", rotate: "15deg", size: "3rem" },
      { icon: "⚡", bottom: "1rem", right: "2.8rem", rotate: "-10deg", size: "3rem" },
    ],
  },
  {
    company: "TFTM",
    initials: "TF",
    color: "#1C6497",
    category: "Site vitrine + SEO",
    quote:
      "Notre site est aujourd'hui 3ème sur Google pour nos mots-clés principaux. Un travail SEO sérieux, un site soigné, et une équipe qui sait ce qu'elle fait.",
    emojis: [
      { icon: "📈", bottom: "-1rem", right: "1rem", rotate: "10deg", size: "3rem" },
      { icon: "🏆", bottom: "1.8rem", right: "2.8rem", rotate: "-8deg", size: "3rem" },
    ],
  },
  {
    company: "Pro Renov Est",
    initials: "PR",
    color: "#1C9760",
    category: "Site vitrine",
    quote:
      "Très satisfait de notre collaboration. ARZ Web Concept sont à l'écoute, professionnel et efficace. Je recommande sans hésiter à quiconque cherche un partenaire web de confiance.",
    emojis: [
      { icon: "✅", bottom: "-1rem", right: "1rem", rotate: "-15deg", size: "3rem" },
      { icon: "🤝", bottom: "1.8rem", right: "2.8rem", rotate: "12deg", size: "3rem" },
    ],
  },
  {
    company: "HDR Barber",
    initials: "HDR",
    color: "#97601C",
    category: "Site e-commerce",
    quote:
      "Notre plateforme de participation aux concours fonctionne parfaitement. ARZ Web Concept ont su comprendre un besoin très spécifique et le concrétiser avec brio.",
    emojis: [
      { icon: "🎉", bottom: "-1rem", right: "1rem", rotate: "20deg", size: "3rem" },
      { icon: "🛒", bottom: "1.8rem", right: "2.8rem", rotate: "-12deg", size: "3rem" },
    ],
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center text-white mt-10 px-4 overflow-x-clip pb-5"
    >
      <motion.h2
        className="text-3xl lg:text-4xl text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Ils nous font confiance.
      </motion.h2>

      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        {testimonials.map((t, i) => (
          <div key={t.company} className="relative">
            {/* Emojis — sortent de la carte */}
            {t.emojis.map((e, j) => (
              <motion.span
                key={j}
                className="absolute pointer-events-none select-none z-20"
                style={{ bottom: e.bottom, right: e.right, fontSize: e.size }}
                initial={{ scale: 0, rotate: e.rotate }}
                whileInView={{ scale: 1, rotate: e.rotate }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 14, delay: i * 0.1 + j * 0.15 + 0.25 }}
              >
                {e.icon}
              </motion.span>
            ))}

            <motion.div
              className="relative rounded-3xl border border-white/10 bg-[#0d0d0d] p-5 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Glow teinté */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${t.color}22 0%, transparent 70%)`,
                }}
              />

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed z-10" style={{ fontFamily: "Poppins, sans-serif" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 z-10 mt-auto">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.company}</p>
                  <p className="text-xs text-white/40">{t.category}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
