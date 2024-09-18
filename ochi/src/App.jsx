import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marque'; // Corrected the name from 'Marque' to 'Marquee'
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null); // Create a reference for the scroll container

  useEffect(() => {
    // Initialize LocomotiveScroll after component mounts
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current, // Attach to the scroll container
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust for smoothness
    });

    return () => {
      // Destroy LocomotiveScroll on component unmount to prevent memory leaks
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className='bg-zinc-900 min-h-screen w-full text-white'>
      {/* Navbar is assumed to be responsive */}
      <Navbar />
      
      {/* Main content section */}
      <main className='w-full flex flex-col items-center justify-center'>
        {/* Landing page section with assumed responsiveness */}
        <LandingPage />

        {/* Marquee component - name corrected */}
        <Marquee />

        {/* Other sections */}
        <About />
        <Eyes />
        <Featured />
        <Cards /> {/* Corrected capitalization */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
