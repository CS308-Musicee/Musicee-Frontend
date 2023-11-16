"use client"

import { useState } from 'react';

const MusicCardContainer = ({ children }: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollCards = (scrollDistance: any) => {
    setScrollPosition((prevPosition) => prevPosition + scrollDistance);
  };

  return (
    <div className="music-cards-container relative overflow-hidden w-full h-72">
      <button
        onClick={() => scrollCards(100)}
        className="scroll-btn left-btn absolute top-1/2 transform left-0 -translate-y-1/2 bg-black text-white"
      >
        &lt;
      </button>
      <div
        className="music-cards flex flex-row flex-no-wrap"
        style={{ transform: `translateX(${-scrollPosition}px)` }}
      >
        {children}
      </div>
      <button
        onClick={() => scrollCards(-100)}
        className="scroll-btn right-btn absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white"
      >
        &gt;
      </button>
    </div>
  );
};

export default MusicCardContainer;