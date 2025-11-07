'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function HeroSection() {
  const roles = [' designer ', ' developer ', ' researcher ', ' writer ', ' dancer '];
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

    return (
      <div className="h-screen pt-14">
        <div className="w-full h-2/3 sm:h-3/4 relative overflow-hidden bg-pink-600">
          <video muted autoPlay playsInline loop preload="auto" className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover">
            <source src="/hero-visual.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-1/3 sm:h-1/4 flex flex-col sm:flex-row gap-4 sm:gap-0 items-center px-4 py-4 sm:px-20">
          <div className="sm:w-4/5">
            <p className="text-2xl sm:text-3xl text-stone-300 text-center sm:text-left"><span id="name-span">Bianca Aguilar</span> is a Filipina 
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={currentRole}>
                {currentRole.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    animate={{ 
                      opacity: 1, 
                      filter: "blur(0px)",
                      transition: { 
                        type: "spring",
                        stiffness: 350,
                        damping: 55,
                        delay: index * 0.015 
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      filter: "blur(2px)",
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 55,
                        delay: (currentRole.length - 1 - index) * 0.01 // Reverse order
                      }
                    }}
                    className="font-semibold text-white"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
            cultivating budding ideas and minds.</p>
          </div>
          <div className="home-links sm:w-1/5 flex flex-col items-center sm:items-end gap-1">
            <a href="/work">Check out my work</a>
            <a href="/about">Learn more about me</a>
          </div>
        </div>
      </div>
    )
}