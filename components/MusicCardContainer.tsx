"use client"

import React from 'react'
import { Musicard } from '.'
import { useRef } from 'react';

export const MusicCardContainer = ({title}: any) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);


  const handleLeftButtonClick = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft -= 900; // Adjust the value based on your swipe preference
    }
  };

  const handleRightButtonClick = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft += 900; // Adjust the value based on your swipe preference
    }
  };

  return (
    <div className=' flex-col items-start '>
          <div className='p-4 text-4xl '>
            {title}
          </div>

          <div ref={scrollContainerRef} className='p-4 flex flex-row overflow-hidden scroll-smooth w-full'>

            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <Musicard></Musicard>
            <div className='absolute z-10 flex justify-between items-center h-96 w-4/5 pr-6'>
              <button onClick={handleLeftButtonClick} className={`bg-blue-500 text-white px-4 py-2 rounded `}>Left</button>
              <button onClick={handleRightButtonClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>




          </div>
        </div>
  )
}
