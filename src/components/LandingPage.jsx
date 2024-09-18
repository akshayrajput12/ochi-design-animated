import React, { PureComponent } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';


export class LandingPage extends PureComponent {
  render() {
    return (
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.4"
        className='w-full h-screen bg-zinc-900 pt-1'
      >
        {/* Text structure section */}
        <div className='textstructure mt-20 md:mt-40 px-6 sm:px-8 md:px-20'>
          {["WE BUILD", "EYEOPENING", "FRONTEND"].map((item, index) => (
            <div key={index} className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                {/* Animation for the second item */}
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] }}
                    className='mr-2 md:mr-5 w-[15vw] md:w-[8vw] rounded-md h-[10vw] md:h-[6vw] relative -top-[2vw] md:-top-[1.2vw] bg-red-500'
                  />
                )}
                <h1 className='font-semibold text-3xl sm:text-4xl md:text-8xl leading-[12vw] sm:leading-[10vw] md:leading-[6vw] tracking-tighter'>
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Footer section with buttons */}
        <div className='border-t-[1px] border-zinc-800 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-5 sm:px-10 md:px-20'>
          {/* Text items */}
          {["For Public and Private Companies", "From the First Animation"].map((item, index) => (
            <p key={index} className='text-xs sm:text-sm md:text-md font-light tracking-tight leading-none mb-4 md:mb-0'>
              {item}
            </p>
          ))}

          {/* Start button and icon */}
          <div className='start flex gap-3 md:gap-5'>
            <div className='px-3 py-2 border-[1px] border-zinc-500 font-light uppercase rounded-lg text-xs sm:text-sm md:text-md'>
              Start Up
            </div>
            <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
