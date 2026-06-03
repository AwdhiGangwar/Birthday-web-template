/**
 * MODAL COMPONENT
 * Full-screen modal for viewing detailed content
 * Handles photos, videos, and messages
 */

import React, { useEffect } from 'react';

export const Modal = ({ card, isOpen, onClose }) => {
  const [imageError, setImageError] = React.useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !card) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className="relative z-10 w-full h-full md:w-[90%] md:h-[90%] max-w-5xl rounded-lg overflow-hidden flex flex-col animate-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-netflix-red rounded-full p-2 transition-colors duration-300"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        {/* Photo Content */}
        {card.type === 'photo' && (
          <div className="w-full h-full flex flex-col bg-black">
            {!imageError ? (
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto md:h-[70%] object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full md:h-[70%] bg-gradient-to-br from-netflix-red/20 to-netflix-red/5 flex items-center justify-center border-2 border-dashed border-netflix-red/50">
                <div className="text-center">
                  <p className="text-4xl mb-4">📸</p>
                  <p className="text-gray-400">Image placeholder</p>
                  <p className="text-xs text-gray-500 mt-2">Add {card.image.split('/')[2]} to public/images/</p>
                </div>
              </div>
            )}
            <div className="flex-1 p-6 md:p-8 bg-gradient-to-t from-black to-netflix-darkAlt overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{card.title}</h2>
              <p className="text-netflix-red text-sm md:text-base mb-4">{card.caption}</p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{card.content}</p>
            </div>
          </div>
        )}

        {/* Video Content */}
        {card.type === 'video' && (
          <div className="w-full h-full flex flex-col bg-black">
            {/* Video Player Container - Optimized for different video sizes */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden relative">
              {card.videoUrl ? (
                <video
                  src={card.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  controlsList="nodownload"
                  onError={(e) => {
                    console.error('Video playback error:', e);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-netflix-red/20 to-netflix-red/5 border-2 border-dashed border-netflix-red/50">
                  <p className="text-6xl mb-4">🎥</p>
                  <p className="text-gray-400 text-lg">Video not found</p>
                  <p className="text-xs text-gray-500 mt-4">Add hero-video.mp4 to public/videos/</p>
                </div>
              )}
            </div>

            {/* Video Details */}
            {card.videoUrl && (
              <div className="p-6 md:p-8 bg-gradient-to-t from-black to-netflix-darkAlt border-t border-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{card.title}</h2>
                <p className="text-netflix-red text-sm md:text-base mb-4">{card.caption}</p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{card.description}</p>
              </div>
            )}
          </div>
        )}

        {/* Message/Letter Content */}
        {card.type === 'message' && (
          <div className="w-full h-full flex flex-col bg-gradient-to-b from-netflix-darkAlt to-black p-6 md:p-12 overflow-y-auto">
            {/* Decorative image/background */}
            <div className="mb-8">
              <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden mb-6 border-2 border-netflix-red/50">
                {!imageError ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-60"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-netflix-red/20 to-netflix-red/5 flex items-center justify-center">
                    <span className="text-4xl">💝</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-netflix-red mb-6 text-center">
                {card.title}
              </h2>
              <div className="relative">
                <div className="absolute -left-4 -top-4 text-6xl md:text-8xl text-netflix-red/20 font-black">"</div>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed whitespace-pre-wrap text-center md:text-left max-w-3xl mx-auto">
                  {card.message}
                </p>
                <div className="absolute -right-4 -bottom-4 text-6xl md:text-8xl text-netflix-red/20 font-black">"</div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
              <p>💕 Made with love for your special day</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
