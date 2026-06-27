"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, featuredProject } from "@/lib/projects";

// Réalisations affichées dans le bandeau défilant (toutes sauf la vedette).
const marqueeProjects = projects.filter((p) => p.id !== featuredProject.id);

const ZIGZAG_POINTS = (() => {
  const cx = 50, cy = 50, outerR = 47, innerR = 40, teeth = 24;
  return Array.from({ length: teeth * 2 }, (_, i) => {
    const angle = (i * Math.PI) / teeth - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = Math.round((cx + r * Math.cos(angle)) * 100) / 100;
    const y = Math.round((cy + r * Math.sin(angle)) * 100) / 100;
    return `${x},${y}`;
  }).join(" ");
})();

function ZigzagShape() {
  return (
    <polygon
      points={ZIGZAG_POINTS}
      fill="#1a0a22"
      stroke="#b36fd1"
      strokeWidth="1.5"
    />
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center text-white mt-10 px-4 overflow-x-clip pb-5"
    >
      <motion.h2
        className="text-3xl lg:text-4xl text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Réalisations.
      </motion.h2>

      <div className="w-full max-w-2xl flex flex-col gap-4">
        {/* Featured project — o-secret.fr */}
        <div className="relative">
          {/* Badge sticker — sort de la carte */}
          <motion.div
            className="absolute -top-7 -right-5 z-20 w-24 h-24"
            initial={{ scale: 0, rotate: 60 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 500, damping: 18, delay: 0.3 }}
          >
          <motion.div
            className="w-full h-full flex items-center justify-center drop-shadow-xl"
            initial={{ rotate: 12 }}
            animate={{ rotate: [12, 17, 12] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, ease: "linear", repeat: Infinity }}
            >
              <defs>
                <path
                  id="circle-text-path"
                  d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                />
              </defs>
              {/* Zigzag shape */}
              <ZigzagShape />
              {/* Rotating text */}
              <text fill="#e8c4f5" fontSize="10.5" fontFamily="Poppins, sans-serif" letterSpacing="2">
                <textPath href="#circle-text-path">------------------------------------ </textPath>
              </text>
            </motion.svg>
            <span className="text-[#e8c4f5] text-xs z-10 relative text-center">DERNIÈRE RÉALISATION</span>
          </motion.div>
          </motion.div>

        <motion.a
          href={featuredProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d0d] flex flex-col md:flex-row h-[320px] md:h-[240px] cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Purple glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#731C97]/30 to-transparent pointer-events-none" />

          {/* Text content */}
          <div className="flex flex-col justify-between p-6 z-10 flex-1">
            <div>
              <span className="text-xs text-[#b36fd1] font-mono uppercase tracking-widest">
                {featuredProject.tag}
              </span>
              <h3 className="text-2xl font-bold mt-1 group-hover:text-[#b36fd1] transition-colors duration-300">
                {featuredProject.title}
              </h3>
              <p className="text-white/60 text-sm mt-2 font-[Poppins,sans-serif]">
                {featuredProject.description}
              </p>
            </div>
            {featuredProject.url && (
              <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 mt-4">
                {featuredProject.url.replace(/^https?:\/\//, "")} →
              </span>
            )}
          </div>

          {/* Phone mockup */}
          <div className="relative w-full md:w-[120px] shrink-0 flex items-end justify-center overflow-hidden">
            <div className="relative w-[90px] h-[200px] rounded-t-[20px] overflow-hidden border shadow-xl shadow-black/50 mb-0 mt-auto mx-auto md:mx-0 md:mr-6">
              <Image
                src={featuredProject.image}
                alt={`Aperçu du site ${featuredProject.title}`}
                fill
                className="object-cover object-top"
                sizes="90px"
              />
            </div>
          </div>
        </motion.a>
        </div>

        {/* Bandeau défilant des autres réalisations */}
        <div
          className="group relative w-full overflow-hidden py-1"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...marqueeProjects, ...marqueeProjects].map((project, i) => {
              const isLink = Boolean(project.url);
              return (
                <a
                  key={`${project.id}-${i}`}
                  href={project.url ?? "/realisations"}
                  target={isLink ? "_blank" : undefined}
                  rel={isLink ? "noopener noreferrer" : undefined}
                  aria-hidden={i >= marqueeProjects.length}
                  className="group/card relative shrink-0 mr-4 w-[180px] h-[120px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]"
                >
                  <Image
                    src={project.image}
                    alt={`Aperçu du site ${project.title}`}
                    fill
                    className="object-cover object-top opacity-70 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:scale-105"
                    sizes="180px"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-sm font-bold">
                    {project.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Lien vers la page dédiée listant toutes les réalisations */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm text-white/80 transition-colors duration-300 hover:border-[#b36fd1] hover:text-white"
          >
            Voir toutes nos réalisations
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
