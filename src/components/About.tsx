"use client";
import React, { useRef, useEffect } from "react";
import { CobeDragToLocationDemo } from "@/components/eldoraui/CobeDragToLocationDemo";
import phonePc from "@/assets/ARZ-phone.png";
import Image from "next/image";
import brk from "@/assets/ARZ-brk.png";

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const brkRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const gridItems = document.querySelectorAll("#grid > div");
      gridItems.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--x", `${x}px`);
        (card as HTMLElement).style.setProperty("--y", `${y}px`);
      });
    };

    const handleScroll = () => {
      const container = aboutRef.current;
      if (!container) return;
    
      const map = mapRef.current;
      const phone = phoneRef.current;
      const brk = brkRef.current;
      const aboutContent = contentRef.current;
    
      const containerPos = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
    
      if (map && phone && brk) {
        if (containerPos < windowHeight) {
          map.classList.remove("opacity-0", "blur-lg");
          map.classList.add("opacity-100");
          phone.classList.remove("opacity-100");
          phone.classList.add("opacity-0", "blur-lg");
        }
        if (containerPos < windowHeight / 2 - 800) {
          phone.classList.remove("opacity-0", "blur-lg");
          phone.classList.add("opacity-100");
          brk.classList.remove("opacity-100");
          brk.classList.add("opacity-0", "blur-lg");
        }
        if (containerPos < windowHeight / 2 - 1800) {
          brk.classList.remove("opacity-0", "blur-lg");
          brk.classList.add("opacity-100");
        }
      }

      if (aboutContent) {
        const aboutContentHeight = aboutContent.getBoundingClientRect().height;
        aboutContent.style.top = `${(windowHeight - aboutContentHeight) / 2}px`;
      }
    };

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      document.addEventListener("scroll", handleScroll);
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="flex flex-col items-center h-[3000px] text-white text-center"
      id="about"
      ref={aboutRef}
    >
      <div className="sticky" ref={contentRef} id="content">
        {" "}
        <h2 className="text-3xl lg:text-4xl sticky">À propos.</h2>
        <div
          id="grid"
          className="grid grid-cols-2 grid-rows-2 gap-2 m-2 pt-5 group sticky max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        >
          <div
            className="bg-[#ffffff1a] rounded-3xl p-[2px] overflow-hidden relative transition-all duration-200"
            ref={mapRef}
          >
            <div
              className="absolute bg-white/50 blur-2xl h-20 w-20"
              style={{
                left: "var(--x, 0px)",
                top: "var(--y, 0px)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="bg-[#0d0d0d] rounded-3xl p-1 text-white/80 relative h-full w-full overflow-hidden">
              <div
                className="absolute bg-white/20 blur-3xl h-20 w-20"
                style={{
                  left: "var(--x, 0px)",
                  top: "var(--y, 0px)",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <p className="m-1">
                <b className="text-white">Développement web</b> basée à{" "}
                <b className="text-white">Strasbourg</b>
                <br />
                🥨
              </p>
              <div className=" h-[100px] lg:h-[110px] xl:h-[130px] scale-150">
                {CobeDragToLocationDemo()}
              </div>
            </div>
          </div>
          <div
            className="bg-[#ffffff1a] rounded-3xl p-[2px] overflow-hidden relative opacity-0 transition-all duration-400"
            ref={phoneRef}
          >
            <div
              className="absolute bg-white/50 blur-2xl h-20 w-20"
              style={{
                left: "var(--x, 0px)",
                top: "var(--y, 0px)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="bg-[#0d0d0d] rounded-3xl p-1 text-white/80 relative h-full w-full flex flex-col items-center overflow-hidden">
              <div
                className="absolute bg-white/20 blur-3xl h-20 w-20 flex flex-col items-center justify-between"
                style={{
                  left: "var(--x, 0px)",
                  top: "var(--y, 0px)",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <p className="m-1">
                <b className="text-white">Sites web</b> et{" "}
                <b className="text-white">applications web</b> sur mesure
              </p>
              <Image
                src={phonePc}
                alt="phone"
                width={140}
                height={140}
                className="mx-auto"
              />
            </div>
          </div>
          <div
            className="bg-[#ffffff1a] rounded-3xl col-span-2 p-[2px] overflow-hidden relative opacity-0 transition-all duration-400"
            ref={brkRef}
          >
            <div
              className="absolute bg-white/50 blur-2xl h-20 w-20"
              style={{
                left: "var(--x, 0px)",
                top: "var(--y, 0px)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="bg-[#0d0d0d] rounded-3xl p-1 text-white/80 relative h-full w-full">
              <div
                className="absolute bg-white/20 blur-3xl h-20 w-20 flex flex-col items-center justify-between"
                style={{
                  left: "var(--x, 0px)",
                  top: "var(--y, 0px)",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <p className="m-1">
                Nous mettons notre{" "}
                <b className="text-white">expertise à votre service</b> pour
                vous aider à{" "}
                <b className="text-white">concrétiser vos projets web.</b>
              </p>
              <Image
                src={brk}
                alt="break"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
