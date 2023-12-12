"use client"

import Navbar from '@/components/Navbar';
import React from 'react';
import { AddFriend } from '@/components';
const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='bg-pink-200 h-screen'>
        <div className='flex flex-row w-full justify-evenly items-start pt-28'>
        <AddFriend></AddFriend>
        </div>
      </div>
      

    </div>
  );
};

export default Home;
