"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import oSecret from "@/assets/www.o-secret.fr_(iPhone SE).png";
import tempTFTM from "@/assets/TFTM.png";
import tempINdex from "@/assets/INdex.png";
import tempHouse from "@/assets/House.png";

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

const projects = [
  {
    id: "tftm",
    title: "TFTM",
    description: "Site web sur mesure",
    image: tempTFTM,
  },
  {
    id: "index",
    title: "INdex",
    description: "Site web sur mesure",
    image: tempINdex,
  },
  {
    id: "house",
    title: "House",
    description: "Site web sur mesure",
    image: tempHouse,
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center text-white mt-10 px-4 overflow-x-hidden pb-5"
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
          href="https://o-secret.fr"
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
                Restauration rapide·Mulhouse
              </span>
              <h3 className="text-2xl font-bold mt-1 group-hover:text-[#b36fd1] transition-colors duration-300">
                O-Secret
              </h3>
              <p className="text-white/60 text-sm mt-2 font-[Poppins,sans-serif]">
                Site de commande en ligne pour un restaurant Tacos, Burgers
                &amp; Brunchs. Design moderne, optimisé mobile et SEO.
              </p>
            </div>
            <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 mt-4">
              o-secret.fr →
            </span>
          </div>

          {/* Phone mockup */}
          <div className="relative w-full md:w-[120px] shrink-0 flex items-end justify-center overflow-hidden">
            <div className="relative w-[90px] h-[200px] rounded-t-[20px] overflow-hidden border shadow-xl shadow-black/50 mb-0 mt-auto mx-auto md:mx-0 md:mr-6">
              <Image
                src={oSecret}
                alt="O-Secret website screenshot"
                fill
                className="object-cover object-top"
                sizes="90px"
              />
            </div>
          </div>
        </motion.a>
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d0d] flex flex-col h-[180px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              </div>
              <div className="p-3 z-10">
                <h3 className="text-sm font-bold">{project.title}</h3>
                <p className="text-white/40 text-xs">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
