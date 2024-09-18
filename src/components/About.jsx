import React from 'react';
import gsap, { Power2, Power4, ScrollTrigger } from 'gsap/all';

function About() {
  return (
    <div className='w-full p-6 sm:p-10 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tl-3xl text-black'>
      {/* Main text */}
      <h1 className='text-[4vw] sm:text-[5vw] md:text-[3vw] lg:text-[2.5vw] leading-[6vw] sm:leading-[7vw] md:leading-[4.5vw] lg:leading-[4vw] tracking-tight'>
        We enjoy breaking down challenges into manageable pieces and architecting solutions that stand the test of functionality and efficiency. Every project is an opportunity to learn, innovate, and contribute to the evolving landscape of technology.
      </h1>

      {/* Section for approach and image */}
      <div className='w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20 border-t-[1px] pt-5 sm:pt-8 md:pt-10 lg:pt-12 border-[#a1b562]'>
        <div className='flex flex-col md:flex-row w-full gap-6 sm:gap-8 md:gap-10'>
          {/* Approach section */}
          <div className='md:w-1/2'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
              Our approach
            </h1>
            <button className='uppercase flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-zinc-900 rounded-full text-white'>
              Read more
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>

          {/* Image section */}
          <div className='md:w-1/2 h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-3xl bg-[#ADHH68] overflow-hidden'>
            <img className='w-full h-full object-cover rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
