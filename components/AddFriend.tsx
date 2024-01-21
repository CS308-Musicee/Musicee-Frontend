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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
          setAllUsers(data);
        } else {
          console.error('Failed to fetch user-specific data:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch user-specific data error:', error);
      }
    } else {
      console.error('Access token or username not found');
    }
  };

  const getAddableFriends = () => {
    const username = localStorage.getItem('username');
    if (!username || !allUsers.length) return [];

    const currentUser = allUsers.find((user) => user.username === username);
    if (!currentUser) return [];

    const currentUserFriends = currentUser.friends;

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
        setSuccessMessage('Friend added successfully!');
        // Clear success message after a certain duration (e.g., 3 seconds)
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        const errorData = await response.json();
        // Handle specific error messages if needed
      }
    } catch (error) {
      // Handle fetch error
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
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
      </div>
      <div className=' bg-E79D9D relative shadow-xl m-10 overflow-scroll'>
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
      {successMessage && (
        <div className='text-green-600 text-center mt-4'>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default AddFriend;
