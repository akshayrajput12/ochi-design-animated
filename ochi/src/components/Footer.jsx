import React from 'react';
import { motion } from 'framer-motion';
import gsap, { Power2, Power4, ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function Footer() {
  return (
    <div className='flex flex-col md:flex-row gap-10 w-full p-6 md:p-10 lg:p-20 bg-zinc-900 text-white'>
      {/* Left Column */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold uppercase text-center md:text-left leading-none'>
          EYE-OPENING
        </h1>
      </div>
      
      {/* Right Column */}
      <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold uppercase text-center md:text-left leading-none mb-4'>
          Presentations
        </h1>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <a className='text-lg sm:text-xl md:text-2xl' href="#">Facebook</a>
          <a className='text-lg sm:text-xl md:text-2xl' href="#">Whatsapp</a>
          <a className='text-lg sm:text-xl md:text-2xl' href="#">LinkedIn</a>
          <a className='text-lg sm:text-xl md:text-2xl' href="#">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
