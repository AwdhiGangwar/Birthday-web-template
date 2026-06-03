/**
 * NAVBAR COMPONENT
 * Netflix-style navigation bar with logo and controls
 */

import React, { useState, useEffect } from 'react';

export const Navbar = ({ onLogout, selectedProfile }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/35 backdrop-blur-md border-b border-white/5'
          : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent'
      }`}
    >
      <div className="px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.jpg"
            alt="Birthday Logo"
            className="h-8 sm:h-10 md:h-11 w-auto object-contain"
          />
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm lg:text-base">
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            Shows
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            Movies
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            New
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            Surprises
          </button>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-3 md:gap-4">
          {selectedProfile && (
            <div className="hidden sm:flex items-center gap-2">
              {selectedProfile.image ? (
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  className="h-9 w-9 rounded-md object-cover border border-gray-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <span className="text-xl">{selectedProfile.avatar}</span>
              )}
            </div>
          )}

          <button
            onClick={onLogout}
            className="px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded hover:border-white transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;