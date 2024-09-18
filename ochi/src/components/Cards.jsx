import React, { PureComponent } from 'react';
import { motion } from "framer-motion";
import gsap, { Power2, Power4, ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export class Cards extends PureComponent {
  render() {
    return (
      <div className='w-full min-h-screen bg-zinc-900 flex flex-col md:flex-row px-4 md:px-8 py-10 gap-5'>
        <div className='cardcontainer flex-1 h-[40vh] md:h-[50vh] mb-5 md:mb-0'>
          <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center p-4'>
            <h1 className='text-xl md:text-3xl font-semibold text-white'>Akshay.</h1>
            <button className='absolute px-4 py-2 rounded-full border-2 border-white text-white left-4 bottom-4'>
              See more.
            </button>
          </div>
        </div>
        <div className='cardcontainer flex-1 flex flex-col gap-5 md:flex-row'>
          <div className='card rounded-xl flex-1 h-[40vh] md:h-[50vh] bg-[#192826] flex items-center justify-center p-4'>
            <h1 className='text-xl md:text-3xl font-semibold text-white'>Akshay.</h1>
            <button className='absolute px-4 py-2 rounded-full border-2 border-white text-white left-4 bottom-4'>
              See more.
            </button>
          </div>
          <div className='card rounded-xl flex-1 h-[40vh] md:h-[50vh] bg-[#192826] flex items-center justify-center p-4'>
            <h1 className='text-xl md:text-3xl font-semibold text-white'>Akshay.</h1>
            <button className='absolute px-4 py-2 rounded-full border-2 border-white text-white left-4 bottom-4'>
              See more.
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
