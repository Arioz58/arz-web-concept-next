"use client";

import splitStringUsingRegex from "@/utils/splitStringUsingRegex";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const heading = "ARZ Web Concept";
const paragraph1 = "Votre Vision,";
const paragraph2 = "Notre Creation.";
const buttonText = "Contact.";

const charVariants = {
  hidden: {
    display: "inline-block",
    opacity: 0,
    filter: "blur(5px)",
    y: 10,
    willChange: "filter, opacity, transform",
  },
  visible: {
    display: "inline-block",
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    willChange: "filter, opacity, transform",
  },
};

const charGlowVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    textShadow:
      "0 0 10px rgb(243, 251, 255), 0 0 20px rgb(255, 255, 255), 0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255)",
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(5px)",
  },
};

export default function Hero() {
  const headingChars = splitStringUsingRegex(heading);
  const paragraphChars1 = splitStringUsingRegex(paragraph1);
  const paragraphChars2 = splitStringUsingRegex(paragraph2);
  const buttonChars = splitStringUsingRegex(buttonText);

  const [showForm, setShowForm] = useState(false);
  //const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    //setShowSuccess(true);
    emailjs
      .send(
        "service_xd9dldt",
        "template_ftkuhyy",
        formData,
        "R6rTb6nJ9kmypEtCc"
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            //setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log("Failed to send email:", error);
          setShowForm(true);
          //setShowSuccess(false);
        }
      );
  };

  return (
    <motion.div
      className="h-screen w-full flex flex-col items-center justify-center text-white"
      id="home"
      initial={{
        background:
          "radial-gradient(circle farthest-corner at center 250%, #000000 75%, #000000 85%, #000000 95%)",
      }}
      animate={{
        background:
          "radial-gradient(circle farthest-corner at center 250%, #000000 75%, #001fb9 85%, #00aaff 95%)",
      }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center justify-center mb-[20px] text-white relative -top-10">
        <motion.div
          initial={{ translateY: 70, scale: 0.75, opacity: 0 }}
          animate={{ translateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 , ease: [0, 0.68, 0.18, 1] }}
        >
          <Image
            src='/assets/mobile_nav/logo-arz.svg'
            alt="ARZ Web Concept"
            width={60}
            height={50}
            className="md:hidden"
          />
        </motion.div>

        <motion.div
          initial={{ translateY: 70, scale: 0.75, opacity: 0 }}
          animate={{ translateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.68, 0.18, 1] }}
        >
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="mt-3 text-3xl tracking-tight font-bold"
          >
            {headingChars.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.25 }}
                variants={charVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.div 
        initial={{ translateY: 70, scale: 0.75, opacity: 0 }}
        animate={{ translateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay:1, ease: [0, 0.68, 0.18, 1] }}
        className="flex flex-col items-center justify-center mt-5 font-secondary text-3xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.7 },
              },
            }}
          >
            {paragraphChars1.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.25 }}
                variants={charVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 1.4 },
              },
            }}
          >
            {paragraphChars2.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.25 }}
                variants={charVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
      <AnimatePresence>
        {!showForm ? (
          <motion.button
            initial={{ translateY: 70, scale: 0.75, opacity: 0 }}
            animate={{ translateY: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay:1, ease: [0, 0.68, 0.18, 1] }}
            whileInView="visible"
            onClick={() => setShowForm(true)}
            className="text-white py-1 px-14 flex justify-center items-center bg-gradient-to-r from-white/40 to-white/45 backdrop-blur-[10px] border border-[#DFDFDF] rounded-[15px] text-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.295)] transition-all duration-500 ease-[cubic-bezier(0,0.68,0.18,1)]"
          >
            Contact.
            <AnimatePresence>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {buttonChars.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charGlowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.1,
                      repeatDelay: 1.5,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </AnimatePresence>
          </motion.button>
        ) : (
          <motion.form
            className="relative flex flex-col gap-4 bg-white/10 backdrop-blur-[10px] p-4 rounded-[1rem] w-full max-w-[330px] z-10 contact-before"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onSubmit={handleSubmit}
          >
            <motion.input
              type="text"
              placeholder="Nom"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="input text-[12px]"
            />
            <motion.input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="input text-[12px]"
            />
            <motion.textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="input min-h-[150px] resize-y text-[12px]"
            />
            <div className="flex gap-4 justify-end">
              <motion.button
                type="submit"
                className="px-6 py-2 rounded-lg bg-white/10 text-white border border-white/20 cursor-pointer transition-all duration-300 ease-in-out text-[12px] hover:bg-white/20"
              >
                Envoyer
              </motion.button>
              <motion.button
                type="button"
                className="px-6 py-2 rounded-lg bg-white/10 text-white border border-white/20 cursor-pointer transition-all duration-300 ease-in-out text-[12px] hover:bg-white/20"
                onClick={() => setShowForm(false)}
              >
                Annuler
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {true && (
          <motion.div
            className="fixed w-[300px] top-[40%] flex flex-col items-center justify-center bg-black/80 backdrop-blur-[10px] border border-[#4ab71b44] p-8 rounded-2xl z-[999] text-center"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <svg
              className="w-[56] h-[56] rounded-full stroke-3 stroke-[#4bb71b] mb-[10%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <motion.circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="23"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.path
                className="checkmark__check"
                fill="none"
                d="M15 27 l7 7 l15-15"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              />
            </svg>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Email envoyé avec succès! <br /> nous vous répondrons bientôt.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
