"use client"

import Navbar from '@/components/Navbar';

import React from 'react';
import FileUploadForm from '@/components/FileUploadForm';
const Home = () => {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <div className='flex flex-col w-full h-screen justify-center items-center bg-pink-200'>
        <div className='text-4xl m-4'>Upload JSON File</div>
        <FileUploadForm />
        </div>
      
    </div>
  );
};

export default Home;
