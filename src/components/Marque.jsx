import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import gsap, { Power2, Power4, ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the Locomotive Scroll styles

const Marquee = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust the smoothness of the scroll
    });

    // Cleanup Locomotive Scroll on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-10 sm:py-20 rounded-3xl h-[40vh] sm:h-[50vh] bg-[#004D43] overflow-hidden">
      <div className="border-t-2 border-b-2 border-zinc-300 flex gap-6 sm:gap-10 animate-marquee whitespace-nowrap">
        {/* Marquee items */}
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[10vw] sm:text-[12vw] leading-none font-semibold uppercase mb-0 pt-10"
        >
          We are Web Developer
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[10vw] sm:text-[12vw] leading-none font-semibold uppercase mb-0 pt-10"
        >
          We are Web Developer
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[10vw] sm:text-[12vw] leading-none font-semibold uppercase mb-0 pt-10"
        >
          We are Web Developer
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
