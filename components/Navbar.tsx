"use client"

import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'


interface UserData {
  username: string;
  email: string;
  friends: string[];
  favorite_songs: string[];
  liked_songs: string[];
}

const navbar = () => {


  const [userData, setUserData] = useState<UserData | null>(null);
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
        console.log("respomnse : " );
        if (response.ok) {
          const data = await response.json();
          //console.log('User-specific data received:', data);
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

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to mimic componentDidMount behavior


  return (
    <header className='w-full relative z-0 bg-pink-400'>
      <nav className='w-full h-16 flex justify-between pl-[5vw] pr-6 items-center gap-x-4 '>
        <div className='text-white text-3xl'>
          Musicee
        </div>

        <div className='flex gap-x-4 sm:gap-x-6 mr-10'>
          <button className="text-lg  text-slate-700 font-semibold ">
            <Link href="/homepage">Home</Link>

          </button>
          <button className="text-lg text-slate-700 font-semibold ">

            <Link href="/addTrackPage">Add Track</Link>

          </button>
          <button className="text-lg  text-slate-700 font-semibold ">
            <Link href="/userPages/ProfilePage">Profile</Link>

          </button>
          <button className="h-8 w-24 bg-slate-700 text-white font-semibold rounded-md shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <Link href="/">Sign Out</Link>

          </button>
        </div>




      </nav>
    </header>
  )
}

export default navbar