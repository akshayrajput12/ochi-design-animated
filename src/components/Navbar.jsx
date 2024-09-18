import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed z-[999] w-full px-10 py-8 flex justify-between items-center bg-zinc-900'>
      {/* Logo */}
      <div className="logo cursor-pointer text-white text-2xl">Akshay.</div>

      {/* Hamburger Menu Icon for mobile */}
      <div className='md:hidden cursor-pointer text-white' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed top-0 right-0 w-full h-full bg-zinc-900 md:hidden flex flex-col items-center justify-center'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
              <a 
                key={index} 
                className={`text-lg capitalize font-light text-white py-4`}
                onClick={() => setIsMenuOpen(false)} // Close the menu on item click
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation Links */}
      <div className='hidden md:flex gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
          <a 
            key={index} 
            className={`cursor-pointer text-lg capitalize font-light text-white ${index === 4 && "md:ml-32"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
