/**
 * INTRO SCREEN COMPONENT
 * Netflix-style intro with animated Lottie logo and smooth transition
 */

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import netflixLogo from '../netflix-logo.json';

export const IntroScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {

    // Auto-complete intro after 5.5 seconds (after Lottie animation completes)
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 3500);

    return () => {
      
      clearTimeout(completeTimer);
    };
  }, [onComplete]);


  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-600 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/20 via-black to-black"></div>

      {/* Netflix Logo Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Lottie Netflix Logo Animation */}
        <div className="w-48 h-48 md:w-64 md:h-64 animate-fadeIn">
          <Lottie
            animationData={netflixLogo}
            loop={false}
            autoplay={true}
          />
        </div>

        {/* Tagline - appears after logo
        <div className="animate-fadeIn mt-8 text-lg md:text-2xl text-gray-300 font-light">
          <p>A Special Release Just For You</p>
        </div> */}
      </div>

     
    </div>
  );
};

export default IntroScreen;
