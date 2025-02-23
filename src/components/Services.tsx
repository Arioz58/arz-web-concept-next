"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServicesBg from "@/assets/services.png";
import arzLogo from "@/assets/logo-arz.svg";
import tempTFTM from "@/assets/TFTM.png";
import tempINdex from "@/assets/INdex.png";
import tempHouse from "@/assets/House.png";

const images = [tempTFTM, tempINdex, tempHouse];

const servicesVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(30px)",
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="text-white mt-10" id="services">
      <div className="w-full h-screen relative ">
        <Image
          src={ServicesBg}
          alt="Services Background"
          fill
          className="object-cover rounded-[35px] p-1 lg:rounded-[100px] lg:p-10"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white z-10 p-2 ">
            <h2 className="text-3xl lg:text-4xl sticky text-center mb-10">Services.</h2>
            <div className="mx-auto my-2 backdrop-blur-md rounded-[60px] bg-gradient-to-r from-white/15 to-white/00 border border-white/10 p-2 md:p-4 md:rounded-[80px]">
              <Image src={arzLogo} alt="Arz Logo" className="opacity-30" width={70} height={70} />
              <p className="text-center text-2xl">Site Web</p>
              <motion.div
                key={currentImageIndex}
                initial="hidden"
                animate="visible"
                variants={servicesVariants}
                className="px-10 py-4"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Service Image ${currentImageIndex + 1}`}
                  width={500}
                  height={300}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
