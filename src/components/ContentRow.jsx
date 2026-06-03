/**
 * CONTENT ROW COMPONENT
 * Horizontal scrollable carousel of cards
 * Similar to Netflix's carousel layout
 */

import React, { useState, useRef, useEffect } from "react";
import { PosterCard } from "./PosterCard";

export const ContentRow = ({ section, onCardClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, [section?.cards]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 400);
  };

  const cards = section?.cards || [];

  return (
    <section
      id={section.id}
      className="relative z-10 bg-[#141414] mb-8 md:mb-12 px-4 md:px-8 md:pt-14"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          {section.title}
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          {section.description}
        </p>
      </div>

      <div className="relative group">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 hover:bg-netflix-red transition-colors duration-300 rounded-full p-2 md:p-3 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          onScroll={checkScroll}
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card) => (
            <PosterCard
              key={card.id}
              card={card}
              isHovering={hoveredCard === card.id}
              onHover={setHoveredCard}
              onHoverLeave={() => setHoveredCard(null)}
              onClick={() => onCardClick(card)}
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 hover:bg-netflix-red transition-colors duration-300 rounded-full p-2 md:p-3 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ContentRow;