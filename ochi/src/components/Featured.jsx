import React from 'react';
import { motion, useAnimate } from "framer-motion";
import gsap, { Power2 } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Featured = () => {
  // useAnimate for handling animation control
  const [cards, animate] = useAnimate();

  const handleHover = (index) => {
    // Triggering an example animation on hover
    animate(cards[index], { scale: 1.1 }, { duration: 0.5, ease: Power2.easeOut });
  };

  return (
    <div className='w-full py-16 sm:py-20'>
      {/* Section title */}
      <div className='w-full px-5 sm:px-10 md:px-20 border-b-[1px] border-zinc-700 pb-8 sm:pb-10 md:pb-20'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight'>
          Featured Projects
        </h1>
      </div>

      {/* Cards container */}
      <div className='cards w-full flex flex-col md:flex-row gap-6 md:gap-10 px-5 sm:px-10 md:px-20 mt-8 sm:mt-10'>
        {/* First card */}
        <motion.div
          ref={(el) => cards[0] = el}
          onHoverStart={() => handleHover(0)}
          className='cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh]'
        >
          <img
            className='w-full h-full object-cover rounded-md'
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt="Portfolio"
          />
        </motion.div>

        {/* Second card */}
        <motion.div
          ref={(el) => cards[1] = el}
          onHoverStart={() => handleHover(1)}
          className='cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh]'
        >
          <img
            className='w-full h-full object-cover rounded-md'
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt="Golf"
          />
        </motion.div>
      </div>

      {/* Second row of cards */}
      <div className='cards w-full flex flex-col md:flex-row gap-6 md:gap-10 px-5 sm:px-10 md:px-20 mt-8 sm:mt-10'>
        {/* Third card */}
        <motion.div
          ref={(el) => cards[2] = el}
          onHoverStart={() => handleHover(2)}
          className='cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh]'
        >
          <img
            className='w-full h-full object-cover rounded-md'
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            alt="Portfolio"
          />
        </motion.div>

        {/* Fourth card */}
        <motion.div
          ref={(el) => cards[3] = el}
          onHoverStart={() => handleHover(3)}
          className='cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh]'
        >
          <img
            className='w-full h-full object-cover rounded-md'
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt="Golf"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
