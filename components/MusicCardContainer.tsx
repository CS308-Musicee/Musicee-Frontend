import React, { useEffect, useState } from 'react';
import { Musicard } from '.';
import { useRef } from 'react';
import { TrackList } from '.';

export function MusicCardContainer({ title }: any) {
  
  

  return (
    <div className='flex-col items-start'>
      <div className='p-4 text-4xl'>{title}</div>
      <div  className='p-4 w-full'>
        <div className='absolute  scroll-smooth overflow-scroll z-10 flex justify-between items-center h-108 w-4/5 pr-6'>
        <TrackList></TrackList>
          
        </div>
      </div>
    </div>
  );
};
