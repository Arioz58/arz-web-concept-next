"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

const VISIBLE = 2; // nombre de téléphones visibles de chaque côté du centre

// Dimensions réduites sur mobile pour éviter le débordement horizontal.
const SIZE_MOBILE = { w: 150, h: 315, spacing: 92 };
const SIZE_DESKTOP = { w: 210, h: 440, spacing: 150 };

export default function RealisationsCarousel() {
  const [active, setActive] = useState(0);
  const count = projects.length;

  // Adapte la taille des téléphones et l'écartement à la largeur d'écran.
  const [{ w: PHONE_W, h: PHONE_H, spacing: SPACING }, setDims] =
    useState(SIZE_DESKTOP);
  useEffect(() => {
    const update = () =>
      setDims(window.innerWidth < 640 ? SIZE_MOBILE : SIZE_DESKTOP);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const clamp = useCallback(
    (i: number) => Math.max(0, Math.min(count - 1, i)),
    [count]
  );
  const go = useCallback(
    (dir: number) => setActive((a) => clamp(a + dir)),
    [clamp]
  );

  // Navigation au clavier (flèches gauche/droite)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const activeProject = projects[active];

  return (
    <div className="flex flex-col items-center">
      {/* Scène 3D */}
      <div
        className="relative w-full flex items-center justify-center select-none overflow-x-hidden"
        style={{ height: PHONE_H + 80, perspective: 1600 }}
      >
        {/* Halo derrière le téléphone actif */}
        <div
          className="absolute rounded-full bg-white/10 blur-3xl pointer-events-none"
          style={{ width: PHONE_W * 1.6, height: PHONE_H * 0.9 }}
        />

        {projects.map((project, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const hidden = abs > VISIBLE;

          return (
            <motion.button
              key={project.id}
              type="button"
              aria-label={`Voir ${project.title}`}
              onClick={() => setActive(i)}
              className="absolute top-1/2 left-1/2 cursor-pointer outline-none"
              style={{
                width: PHONE_W,
                height: PHONE_H,
                marginLeft: -PHONE_W / 2,
                marginTop: -PHONE_H / 2,
                transformStyle: "preserve-3d",
                pointerEvents: hidden ? "none" : "auto",
              }}
              initial={false}
              animate={{
                x: offset * SPACING,
                scale: isActive ? 1 : 0.82,
                rotateY: isActive ? 0 : offset < 0 ? 34 : -34,
                filter: `blur(${isActive ? 0 : Math.min(abs * 1.8, 5)}px)`,
                opacity: hidden ? 0 : isActive ? 1 : 0.6,
                zIndex: 30 - abs,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* Châssis du téléphone */}
              <div
                className={`relative w-full h-full rounded-[2.2rem] overflow-hidden bg-black border-4 border-[#161616] shadow-2xl shadow-black/70 ${
                  isActive ? "ring-1 ring-white/40" : "ring-1 ring-white/10"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`Aperçu du site ${project.title}`}
                  fill
                  className="object-cover object-top"
                  sizes={`${PHONE_W}px`}
                  draggable={false}
                  priority={i <= 1}
                />
                {/* Encoche */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
                {/* Voile sombre sur les téléphones latéraux */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                )}
              </div>
            </motion.button>
          );
        })}

        {/* Flèches de navigation */}
        <button
          type="button"
          aria-label="Réalisation précédente"
          onClick={() => go(-1)}
          disabled={active === 0}
          className="absolute left-2 md:left-8 z-40 grid place-items-center w-11 h-11 rounded-full border border-white/15 bg-black/50 backdrop-blur-sm text-white text-xl transition-all hover:border-white/60 hover:bg-black/70 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Réalisation suivante"
          onClick={() => go(1)}
          disabled={active === count - 1}
          className="absolute right-2 md:right-8 z-40 grid place-items-center w-11 h-11 rounded-full border border-white/15 bg-black/50 backdrop-blur-sm text-white text-xl transition-all hover:border-white/60 hover:bg-black/70 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>

      {/* Informations du projet actif */}
      <div className="relative w-full max-w-xl text-center mt-8 min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3 px-4"
          >
            <span className="text-xs text-white/50 font-mono uppercase tracking-widest">
              {activeProject.tag}
            </span>
            <h2 className="text-2xl font-bold">{activeProject.title}</h2>
            <p className="text-white/60 text-sm font-[Poppins,sans-serif]">
              {activeProject.description}
            </p>
            {activeProject.url && (
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 transition-colors hover:border-white/60 hover:text-white"
              >
                Visiter le site
                <span>{activeProject.url.replace(/^https?:\/\//, "")} →</span>
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicateurs (points) */}
      <div className="flex items-center gap-2 mt-8">
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Aller à ${project.title}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-white"
                : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
