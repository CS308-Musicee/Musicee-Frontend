"use client"

import Navbar from '@/components/Navbar';
import React from 'react';
import FileUploadForm from '@/components/FileUploadForm';
import OneTrackUpload from '@/components/OneTrackUpload';
const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div style={{ backgroundColor: '#f2d3d3', height: '100vh' }}>
        <div className='flex flex-row w-full justify-evenly items-start pt-28'>
          <div>
            <OneTrackUpload></OneTrackUpload>
          </div>

          <FileUploadForm />
        </div>
      </div>
      

    </div>
  );
};

export default Home;
