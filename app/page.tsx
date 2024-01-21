import React from 'react';
import Image from 'next/image';
import { IntroNavbar, FriendsList } from '@/components';
import logoImage from "./logo.png"; // Import logo.png
import backgroundImage from "./background.png";

const Page = () => {

  return (
    <div className='w-full min-h-screen'>
      <IntroNavbar />

      {/* New div with background color */}
      <div
        className='w-full min-h-screen flex items-center justify-center'
        style={{
          backgroundImage: 'url("/background2.png")', // Assuming background.png is in the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity:0, // Initially set scale to 0.8
          animation: 'fadeIn 2s forwards', // 2s animation duration, forwards to keep the final style
        }}
      >
        <div className='text-white text-5xl font-bold text-center' style={{ color: '#ffffff' }}>
          Welcome to Musicee
        </div>
      </div>

      {/* Main content */}
      <div className='flex-1'
        style={{
          backgroundColor: '#f2d3d3', // Set the background color here
        }}
      >
        <div className='h-screen flex flex-col justify-center items-center text-center'>
          <div className='rounded-full overflow-hidden mb-8'>
            <Image
              src={logoImage}
              alt='Logo Image'
              width={350}
              height={350}
              objectFit='cover'
            />
          </div>
          <h1 className='text-5xl font-bold mb-4' style={{ color: '#5A5A54' }}>
            Your ultimate destination for an unparalleled music streaming experience.
          </h1>
          <p className='text-xl font-normal mb-4' style={{ color: '#5A5A54' }}>
            Discover, personalize, and create your soundtrack. Anywhere, anytime. Your sound, your Musicee.
          </p>
        </div>
      </div>

      {/* FriendsList or other content can be added here */}
    </div>
  );
}

export default Page;