"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";

const buttonText = "Contact.";

const charGlowVariants = {
  hidden: {
    display: "inline-block",
    opacity: 0,
    filter: "blur(5px)",
    willChange: "filter, opacity, transform",
    x: 0,
    y: 0
  },
  visible: {
    display: "inline-block",
    opacity: 1,
    filter: "blur(0px)",
    transform: "translateY(0px)",
    willChange: "filter, opacity, transform",
    textShadow:
      "0 0 10px rgb(243, 251, 255), 0 0 20px rgb(255, 255, 255), 0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255)",
    x: 0,
    y: 0
  },
  exit: {
    display: "inline-block",
    opacity: 0,
    filter: "blur(5px)",
    willChange: "filter, opacity, transform",
    x: 0,
    y: 0
  },
};

export default function Footer() {
  const buttonChars = splitStringUsingRegex(buttonText);
  const [showForm, setShowForm] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccess(true);
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
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log("Failed to send email:", error);
          setShowForm(true);
          setShowSuccess(false);
        }
      );
  };

  return (
    <motion.section className="text-white relative" id="footer">
      <div className="overflow-hidden w-full h-72 flex justify-center items-center absolute -top-0 left-0 -z-10 mt-40">
        <div className="w-72 h-72 rounded-full border-[20px] border-blue-600 relative blur-lg -bottom-[50%] md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"></div>
      </div>
    <div className="w-full h-full flex flex-row justify-center items-center text-3xl overflow-hidden whitespace-nowrap relative mt-10 [mask-image:linear-gradient(to_right,transparent,black,transparent_100%)]  lg:[mask-image:linear-gradient(to_right,transparent_25%,black,transparent_75%)]">
      <motion.div 
        className="flex flex-row"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        }}
      >
        {[...Array(12)].map((_, index) => (
        <p key={index} className="flex items-center">
          Contactez-nous&nbsp;&nbsp;
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="icon animate-bounce"
          />
          &nbsp;&nbsp;
        </p>
        ))}
      </motion.div>
      <motion.div 
        className="flex flex-row"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        }}
      >
        {[...Array(12)].map((_, index) => (
        <p key={index} className="flex items-center">
          Contactez-nous&nbsp;&nbsp;
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="icon animate-bounce"
          />
          &nbsp;&nbsp;
        </p>
        ))}
      </motion.div>
    </div>
      <AnimatePresence>
        {!showForm ? (
          <div className="w-full flex justify-center">
            {" "}
            <motion.button
              initial={{ translateY: 70, scale: 0.75, opacity: 0 }}
              animate={{ translateY: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: [0, 0.68, 0.18, 1] }}
              whileInView="visible"
              onClick={() => setShowForm(true)}
              className="text-white py-1 px-14 flex justify-center items-center bg-gradient-to-r from-white/40 to-white/45 backdrop-blur-[10px] border border-[#DFDFDF] rounded-[15px] text-xl lg:text-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.295)] transition-all duration-500 ease-[cubic-bezier(0,0.68,0.18,1)] mt-10 "
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
          </div>
        ) : (
          <div className="w-full flex flex-col items-center px-5">
            <motion.form
              className="relative flex flex-col gap-4 bg-white/10 backdrop-blur-[10px] p-4 rounded-[1rem] w-full min-w-[300px] max-w-[550px] z-10 contact-before mt-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onSubmit={handleSubmit}
            >
              <motion.input
                type="text"
                placeholder="Nom et Prénom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="input text-xs"
              />
              <motion.input
                type="email"
                placeholder="Adresse Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="input text-xs"
              />
              <motion.textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="input min-h-[150px] resize-y text-xs"
              />
              <div className="flex gap-4 justify-end">
                <motion.button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-white/10 text-white border border-white/20 cursor-pointer transition-all duration-300 ease-in-out text-xs hover:bg-white/20"
                >
                  Envoyer
                </motion.button>
                <motion.button
                  type="button"
                  className="px-6 py-2 rounded-lg bg-white/10 text-white border border-white/20 cursor-pointer transition-all duration-300 ease-in-out text-xs hover:bg-white/20"
                  onClick={() => setShowForm(false)}
                >
                  Annuler
                </motion.button>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed w-[300px] top-[40%] flex flex-col items-center justify-center bg-black/80 backdrop-blur-[10px] border border-[#4ab71b44] p-8 rounded-2xl z-[999] text-center"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <svg
              className="w-14 h-14 rounded-full stroke-3 stroke-[#4bb71b] mb-[10%]"
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
    </motion.section>
  );
}
