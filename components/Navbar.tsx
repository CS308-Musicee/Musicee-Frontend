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

  const [user, setuser] = useState<string>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const fetchData = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
    
    if (accessToken && username) {
      setuser(username);
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
    <header className='min-h-screen w-1/6 fixed z-0 bg-E79D9D'>
      <nav className='w-full h-16 flex flex-col justify-between gap-x-4'>
        <div className='text-5A5A54 text-3xl text-center p-4 flex items-center justify-center'>
          <img src="/triangle.png" alt="Musicee Logo" className="mr-2 h-12 max-w-auto" />
          <span>Musicee</span>
        </div>

        <div className=' flex flex-col gap-y-4 sm:gap-y-6 items-start m-2  '>
          <button className="w-full p-4  text-lg  text-slate-700 hover:bg-pink-300 hover:rounded font-semibold ">
            <Link href="/homepage">Home</Link>

          </button>
          <button className="w-full p-4 text-lg  text-slate-700 hover:bg-pink-300 hover:rounded font-semibold ">
            <Link href="/addFriendPage">Add Friend</Link>

          </button>
          <button className="w-full p-4 text-lg text-slate-700 hover:bg-pink-300 hover:rounded font-semibold ">

            <Link href="/addTrackPage">Add Track</Link>

          </button>
          <button className="w-full p-4 text-lg  text-slate-700 hover:bg-pink-300 hover:rounded font-semibold ">
            <Link href="/userPages/ProfilePage">{user}</Link>

          </button>
          <button className="w-full p-4 bg-slate-700 text-white font-semibold rounded-md shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <Link href="/">Sign Out</Link>

          </button>
        </div>




      </nav>
    </header>
  )
}

export default navbar