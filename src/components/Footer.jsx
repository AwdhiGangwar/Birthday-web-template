/**
 * FOOTER COMPONENT
 * Simple footer with credits
 */

import React from 'react';
import { FOOTER_CONTENT } from '../data';

export const Footer = () => {
  return (
    <footer className="bg-netflix-darkAlt border-t border-gray-700 mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black">
                <span className="text-netflix-red">♥</span>
                <span className="text-white ml-2 hidden sm:inline">BIRTHDAY</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">A special surprise, just for you</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Back to Home
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  View Memories
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Messages
                </button>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Share Your Love</h4>
            <p className="text-gray-400 text-sm mb-4">
              Made with ❤️ to celebrate someone special
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p className="mb-2">{FOOTER_CONTENT.credit}</p>
          <p>© {FOOTER_CONTENT.year} - Happy Birthday! 🎉</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
