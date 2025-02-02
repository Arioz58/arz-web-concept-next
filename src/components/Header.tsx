"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Chat from "@/assets/mobile_nav/Chat_Conversation.svg";
import Home from "@/assets/mobile_nav/House_01.svg";
import Services from "@/assets/mobile_nav/Handbag.svg";
import About from "@/assets/mobile_nav/Info.svg";
import ARZ from "@/assets/logo-arz.svg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    <header className="max-w-xs fixed bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[50px] rounded-full  [background:linear-gradient(170deg,#737373,#171717_30%)] flex items-center justify-center z-50">
      <nav className="flex items-center justify-between w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#0d0d0d] rounded-[inherit]">
        <ul className="w-full h-full flex justify-around items-center gap-0 m-[5px]">
          <li>
            <a href="#home">
              <Image
                src={Home}
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
                src={About}
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
                src={Services}
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
                src={Chat}
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
    <header className="fixed w-screen z-50">
      <nav className="py-4 flex items-center justify-between max-w-xl mx-auto">
        <a href="#home">
          <Image src={ARZ} alt="Logo" width={70} />
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
