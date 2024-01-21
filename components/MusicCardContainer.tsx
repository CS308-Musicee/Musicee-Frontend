import React from 'react';
import { Musicard } from '.';
import { useRef } from 'react';
import { TrackList, FriendsReco } from '.';

export function MusicCardContainer({ title }: any) {

  // const friendRecoAPI = `http://musicee.us-west-2.elasticbeanstalk.com/tracks/recommend_friend_track?username=${username}`

  return (
    <div className='flex-col items-start'>
      <div className='p-4 text-4xl'>{title}</div>
      <div className='p-4 w-full mb-64'>
        <div className='absolute  scroll-smooth overflow-scroll z-10 flex justify-between items-center h-108 w-4/5 pr-6'>
          <TrackList></TrackList>

        </div>
      </div>
      <div className='pt-64 text-4xl pl-8'>Recommendations from Your Friends</div>
      
        <div className='absolute  scroll-smooth overflow-scroll z-10 flex justify-between items-center h-108 w-4/5 pr-6 bg-f2d3d3'>
          <FriendsReco></FriendsReco>
          
        </div>
      </div>
    
  );
};
