"use client"

import React from 'react'
import { FriendComponent } from '.'
import { useEffect, useState } from 'react'
const FriendsList = () => {

    const [userData, setUserData] = useState<any[]>([]); 
    const fetchData = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');

        if (accessToken && username) {
            try {
                const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/users/list_friends/${username}`, {
                    method: 'GET',
                    headers: {

                        'Content-Type': 'application/json',
                    },
                });
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


    //console.log(userData);

    return (
        <div className="grow min-h-screen w-1/6 bg-slate-400 fixed right-0 shadow-xl " >
            <h1 className='w-full text-center text-2xl p-4 border-b-2 border-opacity-60 border-white'>
                Friends
            </h1>
            <div>
                {userData &&
                    userData.map((friend: any, index: number) => (
                        <FriendComponent key={index} name={String(friend)}></FriendComponent>
                    ))}            </div>
        </div>
    )
}

export default FriendsList