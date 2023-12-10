"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TroyeSiyan from '../app/troyeSiyan.png';
import { StarRating } from '.';

const Musicard = ({ tName, tAlbum, tArtist, tId, tRY }: any) => {
    const [liked, setLiked] = useState(false);

 

    //posting track Id and username to like the track
    const handleLike = async () => {
        setLiked(!liked);

        const username = localStorage.getItem('username');
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken && username) {
            if (!liked) {
                try {
                    const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/like_track?username=${username}&track_id=${tId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log("response : ");
                    if (response.ok) {
                        const data = await response.json();
                        console.log('User-specific data received:', data);
                        // Process the data or update state as needed
                    } else {
                        console.error('Failed to fetch user-specific data:', response.statusText);
                        // Handle error scenarios
                    }
                } catch (error) {
                    console.error('Fetch user-specific data error:', error);
                    // Handle fetch error
                } 
            }
            else
            {
                try {
                    const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/unlike_track?username=${username}&track_id=${tId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log("response : ");
                    if (response.ok) {
                        const data = await response.json();
                        console.log('User-specific data received:', data);
                        // Process the data or update state as needed
                    } else {
                        console.error('Failed to fetch user-specific data:', response.statusText);
                        // Handle error scenarios
                    }
                } catch (error) {
                    console.error('Fetch user-specific data error:', error);
                    // Handle fetch error
                } 
            }
            
        } else {
            console.error('Access token or username not found');
            // Handle scenario where tokens or username are missing

        }
    }   



    return (
        <div className="flex p-4">
            <div className="music-card bg-white shadow-md rounded-md overflow-hidden relative w-72 h-96">
                <div className="image static">
                    <Image src={TroyeSiyan} alt="Music Image" className="absolute z-10 opacity-30 h-72 w-72" />
                    <div className="absolute h-12 w-full top-96 z-10 bg-gradient-to-b from-transparent to-pink-600"></div>
                </div>
                {/* Other components */}
                <div className='h-96 flex flex-row justify-evenly items-end pb-4 '>
                    <div className="">
                        <div className="title text-lg font-medium text-gray-700">{tName} {tId}</div>
                        {tArtist.map((artist: any) => {
          return (
            <div className="artist text-xs text-gray-400 uppercase tracking-wide">-{artist} </div>
          )
        })

        }
                        <StarRating></StarRating>

                    </div>
                    <div className=''>
                    
                    <button onClick={handleLike} type="button" className={`like-button text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ${liked ? 'bg-blue-700 text-white' : ''}`}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                        </svg>
                        <span className="sr-only">Like Icon</span>
                        {liked ? 'Unlike' : 'Like'}
                    </button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Musicard
