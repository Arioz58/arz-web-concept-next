"use client";
import React, { useState, useEffect } from "react"; // Add useEffect import

export default function About() {
  // Remove the previous mousePosition state and handler as we'll handle it differently

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

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="flex flex-col items-center h-[3000px] text-white text-center"
      id="about"
    >
      <h2 className="text-3xl">À propos.</h2>
      <div
        id="grid"
        className="grid grid-cols-2 grid-rows-2 gap-2 m-2 md:m-10 lg:mt-5 lg:m-36 lg:p-5 group"
      >
        <div className="bg-[#ffffff1a] rounded-3xl p-[2px] overflow-hidden relative ">
          <div
            className="absolute bg-white/50 blur-2xl h-20 w-20"
            style={{
              left: "var(--x, 0px)",
              top: "var(--y, 0px)",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="bg-[#0d0d0d] rounded-3xl p-1 text-white/80 relative h-full w-full ">
          <div
              className="absolute bg-white/20 blur-3xl h-20 w-20"
              style={{
                left: "var(--x, 0px)",
                top: "var(--y, 0px)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <p>
              ARZ Web Concept est une agence de{" "}
              <b className="text-white">développement web</b> basée à{" "}
              <b className="text-white">Strasbourg</b>
              <br />
              🥨
            </p>
            {/*CobeDragToLocationDemo()*/}
          </div>
        </div>
        <div className="bg-[#ffffff1a] rounded-3xl p-[2px] overflow-hidden relative ">
          <div
            className="absolute bg-white/50 blur-2xl h-20 w-20"
            style={{
              left: "var(--x, 0px)",
              top: "var(--y, 0px)",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="bg-[#0d0d0d] rounded-3xl p-1 text-white/80 relative h-full w-full ">
            <div
              className="absolute bg-white/20 blur-3xl h-20 w-20"
              style={{
                left: "var(--x, 0px)",
                top: "var(--y, 0px)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <p>
              Nous sommes spécialisée dans la <b className="text-white">création de sites web</b> et{" "}
              <b className="text-white">d'applications web</b> sur mesure
            </p>
          </div>
        </div>
        <div className="bg-[#ffffff1a] rounded-3xl col-span-2 p-[2px] overflow-hidden relative">
          <div
            className="absolute bg-white/50 blur-2xl h-20 w-20"
            style={{
              left: "var(--x, 0px)",
              top: "var(--y, 0px)",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="bg-[#0d0d0d] rounded-3xl p-1 text-white/80 relative h-full w-full ">
          <div
              className="absolute bg-white/20 blur-3xl h-20 w-20"
              style={{
                left: "var(--x, 0px)",
                top: "var(--y, 0px)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <p>
              Nous mettons notre <b className="text-white">expertise à votre service</b> pour vous
              aider à <b className="text-white">concrétiser vos projets web.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
