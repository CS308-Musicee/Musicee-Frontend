"use client"

import Navbar from '@/components/Navbar';
import React from 'react';
import FileUploadForm from '@/components/FileUploadForm';
import OneTrackUpload from '@/components/OneTrackUpload';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
const Home = () => {
  return (
    <div className='min-h-screen bg-pink-200 flex'>
      <div className='w-1/6'>
        <Navbar></Navbar>
      </div>
      <div className='flex flex-col w-5/6 space-y-12'>
    <div>
    <AnimatedHeading title="Let's Add Tracks to Musicee"></AnimatedHeading>
    </div>

      <div className=' flex flex-row justify-evenly items-start'>
        <div>
          <OneTrackUpload></OneTrackUpload>
        </div>
        <div>          <FileUploadForm />
        </div>
      </div>
      </div>


      


    </div>
  );
};

export default Home;
