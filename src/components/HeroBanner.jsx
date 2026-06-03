import React, { useState } from "react";

export const HeroBanner = ({ selectedProfile, onPlayClick }) => {
  const [videoError, setVideoError] = useState(false);
  if (!selectedProfile) return null;

  const handlePlayClick = () => {
    onPlayClick?.({
      id: selectedProfile.id,
      title: selectedProfile.heroTitle,
      type: "video",
      videoUrl: selectedProfile.heroVideo,
      description: selectedProfile.heroDescription,
      poster: selectedProfile.heroPoster,
    });
  };

  const handleExplore = () => {
    // Dynamically find the first section ID based on the profile key
    const prefix = selectedProfile.key === 'boyfriend' ? 'bf' : 
                   selectedProfile.key === 'brother' ? 'br' :
                   selectedProfile.key === 'son' ? 'son' : 'fr';
    const firstSection = document.getElementById(`${prefix}-featured`);
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {selectedProfile.heroVideo && !videoError ? (
        <video
          key={selectedProfile.heroVideo}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={selectedProfile.heroPoster}
          onError={() => setVideoError(true)}
        >
          <source src={selectedProfile.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${selectedProfile.heroPoster})` }}
        />
      )}
      

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/90 via-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#141414] via-black/90 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-end">
        <div className="relative z-10 px-8 md:px-14 pb-16 md:pb-24 max-w-2xl">
          <p className="text-netflix-red text-opacity-80 text-sm md:text-base tracking-[0.3em] font-bold uppercase mb-4">
            {selectedProfile.heroTagline}
          </p>

          <h1
            className="text-white text-5xl md:text-7xl font-black mb-4 leading-tight drop-shadow-lg"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            {selectedProfile.heroTitle}
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-4">
            {selectedProfile.heroDescription}
          </p>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8">
            {selectedProfile.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handlePlayClick}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {selectedProfile.ctaText || "Play"}
            </button>

            <button
              onClick={handleExplore}
              className="bg-gray-600/70 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500/80 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;