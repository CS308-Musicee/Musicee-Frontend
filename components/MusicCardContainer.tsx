"use client"

import React from 'react';
import { useRef } from 'react';
import { TrackList, FriendsReco } from '.';

export function MusicCardContainer({ title }: any) {

  // const friendRecoAPI = `http://musicee.us-west-2.elasticbeanstalk.com/tracks/recommend_friend_track?username=${username}
  const friendRecoAPI = "http://musicee.us-west-2.elasticbeanstalk.com/tracks/recommend_friend_track?username=";
  const likedRecoAPI = "http://musicee.us-west-2.elasticbeanstalk.com/tracks/recommend_track?username=";
  const artistRecoAPI = "http://musicee.us-west-2.elasticbeanstalk.com/tracks/recommend_artist_track?username=";

  const trackListRef = useRef<HTMLDivElement>(null);
  const friendsRecoRef = useRef<HTMLDivElement>(null);
  const likedRecoRef = useRef<HTMLDivElement>(null);
  const artistRecoRef = useRef<HTMLDivElement>(null);
  const handleScrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollLeft -= 800; // Adjust the scroll distance as needed
    }
  };  

  const handleScrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollLeft += 800; // Adjust the scroll distance as needed
    }
  };


  return (
    <div className='flex-col items-start'>
      <div className='p-4 text-4xl'>{title}</div>
      <div className='p-4 w-full  mb-64 relative justify-center'>
        <div className=' scroll-smooth overflow-hidden z-10 flex justify-between items-center h-108 w-full pr-6' ref={trackListRef}>
          <TrackList></TrackList>
        </div>
        <div className='absolute transform justify-center -translate-y-1/2 left-0 z-5'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollLeft(trackListRef)}>{'<'}</button>
        </div>
        <div className='absolute transform -translate-y-1/2 right-0 z-5'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollRight(trackListRef)}>{'>'}</button>
        </div>
      </div>

      <div className='p-4 text-4xl'>Recommendations from Your Friends</div>
      <div className='p-4 w-full min-h-screen relative justify-center'>
        <div className='absolute scroll-smooth overflow-hidden  z-10 flex justify-between items-center h-108 w-full pr-6' ref={friendsRecoRef}>
          <FriendsReco inputMainLink={friendRecoAPI}></FriendsReco>
          
        </div>
        <div className='absolute transform justify-center -translate-y-1/2 left-0 z-5'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollLeft(friendsRecoRef)}>{'<'}</button>
          </div>
          <div className='absolute transform -translate-y-1/2 right-0 z-5'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollRight(friendsRecoRef)}>{'>'}</button>
          </div>
      </div>


      <div className='p-4 text-4xl'>Recommendations from Your Liked</div>
      <div className='p-4 w-full min-h-screen relative justify-center'>
        <div className='absolute scroll-smooth overflow-hidden z-10 flex justify-between items-center h-108 w-full pr-6' ref={likedRecoRef}>
          <FriendsReco inputMainLink={likedRecoAPI}></FriendsReco>
          
        </div>
        <div className='absolute transform justify-center -translate-y-1/2 left-0 z-5'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollLeft(likedRecoRef)}>{'<'}</button>
          </div>
          <div className='absolute transform -translate-y-1/2 right-0 z-5'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollRight(likedRecoRef)}>{'>'}</button>
          </div>
      </div>


      <div className='p-4 text-4xl'>Recommendations from Artists you liked</div>
      <div className='p-4 w-full min-h-screen relative justify-center'>
        <div className='absolute scroll-smooth overflow-hidden z-10 flex justify-between items-center h-108 w-full pr-6' ref={artistRecoRef}>
          <FriendsReco inputMainLink={artistRecoAPI}></FriendsReco>
          
        </div>
        <div className='absolute transform justify-center -translate-y-1/2 left-0 z-5'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollLeft(artistRecoRef)}>{'<'}</button>
          </div>
          <div className='absolute transform -translate-y-1/2 right-0 z-5'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleScrollRight(artistRecoRef)}>{'>'}</button>
          </div>
      </div>

    </div>
  );
};
