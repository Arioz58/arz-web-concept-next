"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  console.log(isSticky);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <header className="max-w-xs fixed bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[50px] rounded-full flex items-center justify-center z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        style={{ display: "none" }}
      >
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <nav className="flex items-center justify-between w-[calc(100%-2px)] h-[calc(100%-2px)] liquid-glass rounded-[inherit]">
        <ul className="w-full h-full flex justify-around items-center gap-0 m-[5px] z-10">
          <li>
            <a href="#home">
              <Image
                src="/assets/mobile_nav/House_01.svg"
                alt="Home"
                width={34}
                height={34}
                className="filter invert-[1] brightness-[85%]"
              />
            </a>
          </li>
          <li>
            <a href="#about">
              <Image
                src="/assets/mobile_nav/Info.svg"
                alt="About"
                width={34}
                height={34}
                className="filter invert-[1] brightness-[85%]"
              />
            </a>
          </li>
          <li>
            <a href="#services">
              <Image
                src="/assets/mobile_nav/Handbag.svg"
                alt="Services"
                width={34}
                height={34}
                className="filter invert-[1] brightness-[85%]"
              />
            </a>
          </li>
          <li>
            <a href="#contact">
              <Image
                src="/assets/mobile_nav/Chat_Conversation.svg"
                alt="Chat"
                width={34}
                height={34}
                className="filter invert-[1] brightness-[85%]"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  ) : (
    <motion.header
      className={`fixed w-screen z-20 mt-3`}
      animate={{
        scale: isSticky ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 15,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        style={{ display: "none" }}
      >
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <nav
        className={`py-2 flex items-center justify-between max-w-[760px] mx-auto rounded-full transition-all duration-200 ease-in-out px-2  ${
          isSticky
            ? "liquid-glass max-w-[600px]"
            : ""
        }`}
      >
        <a href="#home" className="z-10">
          <Image
            src="/assets/mobile_nav/logo-arz.svg"
            alt="Logo"
            width={70}
            height={40}
          />
        </a>
        <ul className="flex gap-5 text-white z-10">
          <li>
            <a href="#about" className="">
              À propos
            </a>
          </li>
          <li>
            <a href="#services" className="">
              Services
            </a>
          </li>
          <li>
            <a
              href="https://calendar.app.google/Fna5VVKRe1197BgD6"
              className="bg-[#eeeeee] border border-[#2b2b2b] p-2 py-1 rounded-full text-[#2b2b2b]"
            >
              Réserver un appel
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
