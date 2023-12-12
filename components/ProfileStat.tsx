"use client"

import React, {useState, useEffect} from 'react'
import TroyeSiyan from '../app/troyeSiyan.png';
import Image from 'next/image';
import Sago from '../app/SagopaKajmer.jpg'
import Tom from '../app/TomHardy.jpg'

interface ProfileData {
    username: string;
    email: string;
    friends: string[];
    liked_songs: string[];
    liked_songs_date: string[];
    unliked_songs: string[];
  }

  interface LikedData {
    username: string;
    liked_songs_past_6_months: string[];
  
  }


export const ProfileStat = () => {

    const [userData, setUserData] = useState<ProfileData>(
        {
            username: "",
            email: "",
            friends: [],
            liked_songs: [],
            liked_songs_date: [],
            unliked_songs: [],
        }); 

    const [likedData, setlikedData] = useState<LikedData>(
        {
            username: "",
            liked_songs_past_6_months: [],
        }); 
    const [likedList, setLikedList] = useState<string[]>([]);


    const fetchData = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');
        
        if (accessToken && username) {
            try {
                const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/users/get_user_details/${username}`, {
                    method: 'GET',
                    headers: {

                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('User-specific data received:', data);
                    setUserData(data);
                    // Process the data or update state as needed
                } else {
                    console.error('Failed to fetch user-specific data:', response.statusText);
                    // Handle error scenarios
                }
            } catch (error) {
                console.error('Fetch user-specific data error:', error);
                // Handle fetch error
            }
        } else {
            console.error('Access token or username not found');
            // Handle scenario where tokens or username are missing

        }
    }

    const fethLikedSongs = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');
        
        if (accessToken && username) {
            try {
                const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/users/liked_songs_past_6_months/${username}`, {
                    method: 'GET',
                    headers: {

                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    
                    console.log('User-specific data received:', data);
                    setlikedData(data);
                    if (data) {
                        const fetchedNames = data.liked_songs_past_6_months.map(async (element:string) => {
                          try {
                            const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_track_details?track_id=${element}`, {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            });
                      
                            if (!response.ok) {
                              throw new Error('Network response was not ok');
                            }
                      
                            const data = await response.json();
                            return data.track_name; // Assuming 'track_name' is the property containing the name
                          } catch (error) {
                            console.error('Error fetching data:', error);
                            return null; // Return null if there's an error
                          }
                        });
                      
                        // Wait for all promises to resolve using Promise.all
                        const resolvedNames = await Promise.all(fetchedNames);
                        const filteredNames = resolvedNames.filter(name => name !== null); // Filter out null values
                      
                        // Now, 'filteredNames' contains the list of fetched names
                        console.log('Filtered names:', filteredNames);
                      
                        // Set the state variable with the list of names
                        setLikedList(filteredNames);
                      }
                      
                      
            } else {
                    console.error('Failed to fetch user-specific data:', response.statusText);
                    // Handle error scenarios
                }
            } catch (error) {
                console.error('Fetch user-specific data error:', error);
                // Handle fetch error
            }
        } else {
            console.error('Access token or username not found');
            // Handle scenario where tokens or username are missing

        }
    }
    

    useEffect(() => {
        fetchData();
        fethLikedSongs();
    }, []); // Empty dependency array to mimic componentDidMount behavior



    return (
        <div className='flex flex-col items-center space-y-4'>
            <div className="">
                <Image src={Tom} alt="Music Image" className=" z-10  h-72 w-72" />

            </div>
            <div className="mt-2 flex flex-wrap justify-center items-center gap-4">
                <a href="#"
                    className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                    <div className="flex flex-row items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-80 mt-1 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>

                        <span className="font-bold text-gray-600"> {userData.friends.length} </span>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">Friends</div>
                </a>

                <a href="#"
                    className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                    <div className="flex flex-row items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-80 mt-1 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                        </svg>


                        <span className="font-bold text-gray-600"> {userData.liked_songs.length} </span>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">Songs Liked</div>
                </a>

                <a href="#"
                    className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                    <div className="flex flex-row items-center justify-center">
                       <div className='friends-icon'></div>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">Downloads</div>
                </a>
            </div>
            <div className='flex flex-col items-center'>
                <div className='border-b-2 border-gray-900'>
                Liked Tracks
                </div>
                
                <div className='text-xl'>
                    {likedList.map((song: any) => {
                        return (
                            <div className="" >
                                {song}
                            </div>
                        )
                    })

                    }
                </div>
                
            </div>

        </div>

    )
}
