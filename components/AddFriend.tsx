"use client"

import React, { useState, useEffect } from 'react'
import AnimatedHeading from './animations/AnimatedHeading';
import { Inputbox } from '.';
interface User {
    // Define your user properties here
    username: string;
    email: string;
    password: string;
    friends: string[];
    liked_songs: string[];
    liked_songs_date: string[];

   
    // Other user properties
  }

const AddFriend = () => {
    const [addableFriends, setAddableFriends] = useState<User[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');
    const [allUsers, setallUsers] = useState<User[]>([
        {
            username: "",
            email: "",
            password: "",
            friends: [],
            liked_songs: [],
            liked_songs_date: []
        }
    ]);

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
                    setallUsers(data);
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

// Empty dependency array to mimic componentDidMount behavior

    const getAddableFriends = async () => {
        const Usernamee = localStorage.getItem('username');
        if (!Usernamee || !allUsers.length) return [];
        console.log("All Users: ", allUsers);
        // Find the current user's friends
        const currentUser = allUsers.find(user => user.username === Usernamee);
        if (!currentUser) {
            console.log("Current user not found");
            return [];
          }
        const currentUserFriends = currentUser.friends;
        const addableFriends = allUsers.filter(user => {
            // Check if the user is not in the currentUserFriends list OR if it's not the current user
            return !currentUserFriends.includes(user.username) && user.username !== Usernamee;
          });        

        // Filter out the addable friends
        console.log("Addable friends:", addableFriends);
    
        return addableFriends;
      };
      useEffect(() => {
        const fetchAddableFriends = async () => {
          const friendsToAdd = await getAddableFriends();
          setAddableFriends(friendsToAdd);
          console.log("friendsToAdd " + friendsToAdd);
        };
    
        fetchAddableFriends();
      }, [allUsers]);

    //console.log(userData);


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
      const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
      };

      const filteredFriends = addableFriends.filter((user) =>
        user.username.toLowerCase().includes(searchInput.toLowerCase())
      );
  return (
    <div className="max-h-screen w-full  relative right-0 shadow-xl">
      <AnimatedHeading title="Add Friends" />
      <div className="flex flex-col p-8 space-y-2 bg-pink-200 ">
        <Inputbox name="Search for a User" value={searchInput} onChange={handleSearchInputChange} />
        {filteredFriends.length > 0 &&
          filteredFriends.map((user, index) => (
            <div key={index} className="text-4xl flex items-center justify-evenly ">
              <div className="w-full flex justify-between items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{user.username}</p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</p>
                    </div>
                    <button
                      onClick={() => handleAddFriend(user.username)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl"
                    >
                      Add Friend
                    </button>
                  </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AddFriend