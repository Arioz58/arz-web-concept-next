"use client"

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isOutside, setIsOutside] = useState(false);

  const springConfig = { stiffness: 2000, damping: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(isOutside ? 0 : 1, springConfig);

  useEffect(() => {
    // Check if device is mobile or tablet
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    // Initial check
    checkDevice();

    // Add listener for window resize
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't add event listeners on mobile

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseOut = () => {
      setIsOutside(true);
    };

    const handleMouseOver = () => {
      setIsOutside(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [x, y, isMobile]);

  useEffect(() => {
    opacitySpring.set(isOutside ? 0 : 1);
  }, [isOutside, opacitySpring]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <motion.div
      className={twMerge(
      "fixed flex justify-center items-center w-10 h-10 bg-[rgba(175,175,175,0.281)] rounded-full shadow-[inset_1px_1px_1px_0px_#ffffff56] pointer-events-none -top-5 -left-5 z-50")}
      style={{
      x: xSpring,
      y: ySpring,
      opacity: opacitySpring,
      backdropFilter: 'blur(5px)',
      }}
    >
      <div className={twMerge("absolute w-[135%] h-[135%] border-[3px] border-[rgba(175,175,175,0.281)] rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0,0.68,0.18,1)]", isClicked && "h-[300%] w-[300%]")}></div>
    </motion.div>
  );
};

export default CustomCursor;