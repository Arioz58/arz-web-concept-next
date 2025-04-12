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
    <header className="max-w-xs fixed bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[50px] rounded-full [background:linear-gradient(170deg,#737373,#171717_30%)] flex items-center justify-center z-50">
      <nav className="flex items-center justify-between w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#0d0d0d] rounded-[inherit]">
        <ul className="w-full h-full flex justify-around items-center gap-0 m-[5px]">
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
      <nav
        className={`py-2 flex items-center justify-between max-w-[750px] mx-auto rounded-full transition-all duration-200 ease-in-out px-4 ${
          isSticky
            ? "backdrop-blur-md bg-white/10 border border-[#474747] max-w-[620px]"
            : ""
        }`}
      >
        <a href="#home">
          <Image
            src="/assets/mobile_nav/logo-arz.svg"
            alt="Logo"
            width={70}
            height={40}
          />
        </a>
        <ul className="flex gap-5 text-white">
          <li>
            <a href="#about" className="">
              À propos.
            </a>
          </li>
          <li>
            <a href="#services" className="">
              Services.
            </a>
          </li>
          <li>
            <a href="https://calendar.app.google/Fna5VVKRe1197BgD6" className="bg-[#eeeeee] border border-[#2b2b2b] p-2 py-1 rounded-full text-[#2b2b2b]">
              Réserver un appel
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
