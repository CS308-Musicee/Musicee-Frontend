"use client"

import Navbar from '@/components/Navbar';
import React from 'react';
import { AddFriend, FriendsList } from '@/components';
const Home = () => {
  return (
    <div className='min-h-screen bg-pink-200 flex'>
      <div className="w-1/5">
      <Navbar />
      </div>
      <div className='w-4/6'>
          <AddFriend />
        </div>
      <div className="w-1/5">
      <FriendsList />
      </div>
      
      


    </div>

  );
};

export default Home;
