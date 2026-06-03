/**
 * POSTER CARD COMPONENT
 * Reusable card for content items with hover effects
 * Videos show play button, images show frame
 */

import React from 'react';

export const PosterCard = ({ card, onClick, isHovering, onHover, onHoverLeave }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const isVideo = card.type === 'video';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={onHoverLeave}
      className="relative group w-40 md:w-52 lg:w-60 h-48 md:h-56 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:z-30 focus:outline-none focus:ring-2 focus:ring-netflix-red flex-shrink-0 bg-gradient-to-br from-netflix-red/20 to-netflix-darkAlt border-2 border-netflix-red/50"
    >
      {/* Loading Skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Card Background Image */}
      {!imageError && (
        <img
          src={card.image}
          alt={card.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isVideo ? 'group-hover:scale-105' : 'group-hover:scale-110'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
      )}

      {/* Placeholder when image missing */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-netflix-red/10 to-netflix-red/5">
          <div className="text-center px-2">
            <span className="text-4xl mb-2 block">{isVideo ? '🎬' : '📷'}</span>
            <p className="text-gray-400 text-xs break-all">{card.image}</p>
          </div>
        </div>
      )}

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-colors duration-300 ${
          isVideo ? 'group-hover:bg-black/50' : 'group-hover:bg-black/30'
        }`}
      />

      {/* Play Button Overlay for Videos */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-100 group-hover:scale-110" />

            {/* Play button */}
            <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-netflix-red/90 hover:bg-netflix-red flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95 shadow-lg cursor-pointer">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Content Overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
        }`}
      >
        {/* Gradient background for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

        {/* Text Content */}
        <div className="relative z-10">
          <h3 className="text-white font-bold text-base md:text-lg mb-1 line-clamp-2">
            {card.title}
          </h3>
          <p className="text-gray-300 text-xs md:text-sm mb-3 line-clamp-1">
            {card.caption}
          </p>

          {/* Action button indicator */}
          <div className="flex items-center gap-2">
            <span className="inline-block px-3 py-1 bg-netflix-red rounded-full text-white text-xs font-bold">
              {card.type === 'photo' && '📷 View'}
              {card.type === 'video' && '▶ Play'}
              {card.type === 'message' && '💌 Read'}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-lg border border-netflix-red opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
    </button>
  );
};

export default PosterCard;
