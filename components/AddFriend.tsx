"use client"

import React, { useState, useEffect } from 'react';
import { Inputbox } from '.';

interface User {
  username: string;
  email: string;
  password: string;
  friends: string[];
  liked_songs: string[];
  liked_songs_date: string[];
}

const AddFriend: React.FC = () => {
  const [addableFriends, setAddableFriends] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const userNamee = localStorage.getItem('username');

    if (accessToken && userNamee) {
        try {
            const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/users/all`, {
                method: 'GET',
                headers: {

                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                //console.log('User-specific data received:', data);
                setAllUsers(data);
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

  const getAddableFriends = () => {
    const username = localStorage.getItem('username');
    if (!username || !allUsers.length) return [];

    const currentUser = allUsers.find((user) => user.username === username);
    if (!currentUser) return [];

    const currentUserFriends = currentUser.friends;

    // Filter based on the search input only when it's not empty
    const filteredFriends = searchInput
      ? allUsers.filter((user) => {
          return (
            !currentUserFriends.includes(user.username) &&
            user.username !== username &&
            user.username.toLowerCase().includes(searchInput.toLowerCase())
          );
        })
      : allUsers;

    return filteredFriends;
  };

  useEffect(() => {
    console.log('useEffect is triggered due to searchInput change');

    const friendsToAdd = getAddableFriends();
    setAddableFriends(friendsToAdd);
  }, [allUsers, searchInput]);

  const handleAddFriend = async (e: string) => {
    const userNameMain = localStorage.getItem('username');
    
    try {
      const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/users/add_friend/${userNameMain}/${e}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();

        // Store tokens in localStorage or a secure storage solution
        
      } else {
        const errorData = await response.json();

        // Handle specific error messages if needed
    
      }
    } catch (error) {
    }
  };

  return (
    <div>
      <h1 className='w-full text-center text-2xl p-4 border-b-2 border-opacity-60 border-white'>
        Add Friends
      </h1>
      <div className='m-10'>
        <Inputbox
          name='Search for a user'
          value={searchInput}
          onChange={(e:any) => console.log("changed", e.target.value)}
        />
      </div>
      <div className=' bg-pink-400 relative shadow-xl m-10 overflow-scroll'>
        <div className='flex flex-col m-4 space-y-2 '>
          {addableFriends &&
            addableFriends.length > 0 &&
            addableFriends.map((user, index) => (
              <div key={index} className='text-4xl flex items-center justify-between'>
                <p>{user.username}</p>
                <button
                  onClick={() => handleAddFriend(user.username)}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl'>
                  Add Friend
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
