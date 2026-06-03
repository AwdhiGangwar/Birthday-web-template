/**
 * SURPRISE REVEAL COMPONENT
 * Final emotional birthday message and surprise reveal
 */

import React, { useState } from 'react';
import { FINAL_SURPRISE } from '../data';

export const SurpriseReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleReveal = () => {
    setIsRevealed(true);

    // Generate confetti
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setConfetti(newConfetti);

    // Clear confetti after animation
    setTimeout(() => setConfetti([]), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-netflix-dark via-netflix-darkAlt to-netflix-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-netflix-red rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-netflix-red rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Confetti */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full pointer-events-none animate-bounce"
          style={{
            left: `${item.left}%`,
            top: '-10px',
            background: [
              'rgb(229, 9, 20)',
              'rgb(255, 255, 255)',
              'rgb(229, 9, 20)',
            ][Math.floor(Math.random() * 3)],
            animation: `fall ${item.duration}s linear forwards`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-8 md:mb-12 animate-slideIn">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-netflix-red">{FINAL_SURPRISE.title}</span>
          </h1>
          <p className="text-2xl md:text-4xl text-white font-bold">
            {FINAL_SURPRISE.subtitle}
          </p>
        </div>

        {/* Closed Box / Reveal Button */}
        {!isRevealed ? (
          <button
            onClick={handleReveal}
            className="group relative mx-auto mb-12 md:mb-16"
          >
            {/* Gift Box Animation */}
            <div className="relative inline-block">
              {/* Box */}
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-b from-netflix-red to-netflix-red/80 rounded-lg shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer border-4 border-red-700">
                <span className="text-6xl md:text-8xl group-hover:animate-pulse">🎁</span>
              </div>

              {/* Ribbon */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <div className="w-1 h-16 md:h-24 bg-white/60 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Bow */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 pointer-events-none">
                <div className="text-4xl md:text-6xl">🎀</div>
              </div>
            </div>

            {/* Text Below Box */}
            <p className="mt-8 md:mt-12 text-lg md:text-2xl text-gray-300 font-semibold group-hover:text-netflix-red transition-colors">
              Click to reveal your final surprise! 🎉
            </p>
          </button>
        ) : (
          /* Revealed Content */
          <div className="animate-fadeIn">
            <div className="mb-12 md:mb-16">
              <span className="text-6xl md:text-7xl block mb-6 animate-scale">💝</span>
              <p className="text-2xl md:text-4xl font-black text-netflix-red mb-8">
                Your Special Message
              </p>
            </div>

            {/* Message Box */}
            <div className="bg-gradient-to-b from-netflix-red/10 to-netflix-red/5 border border-netflix-red/30 rounded-2xl p-8 md:p-12 mb-12 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed whitespace-pre-line font-light">
                {FINAL_SURPRISE.message}
              </p>
            </div>

            {/* Action Button */}
            <button className="px-8 md:px-12 py-4 md:py-6 bg-netflix-red hover:bg-netflix-redHover text-white font-black text-lg md:text-xl rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-netflix-red/50">
              {FINAL_SURPRISE.actionText}
            </button>

            {/* Easter Egg Hint */}
            <div className="mt-12 text-gray-500 text-sm md:text-base">
              <p>✨ Scroll back to find more surprises you might have missed...</p>
            </div>
          </div>
        )}
      </div>

      {/* Falling animation keyframes */}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotateZ(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SurpriseReveal;
