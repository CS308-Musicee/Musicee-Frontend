import React from 'react'
import Image from 'next/image'
import { IntroNavbar, FriendsList } from '@/components'
import headphoneIcoon from "./headphonesIcon.png"

const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <IntroNavbar />

      <div className='w-full min-h-screen bg-pink-200 relative'>
        <div className='h-screen flex flex-col justify-center items-center text-center'>
          <div className='rounded-full overflow-hidden mb-8'>
            <Image
              src={headphoneIcoon}
              alt='Headphone Image'
              width={250} // Set your preferred width
              height={250} // Set your preferred height
              objectFit='cover'
            />
          </div>
          <h1 className='text-5xl font-bold mb-4' style={{ color: 'black' }}>
            Welcome to Musicee
          </h1>
          <p className='text-xl font-normal mb-4' style={{ color: 'black' }}>
            Your ultimate destination for an unparalleled music streaming experience.
          </p>
          <p className='text-xl font-normal' style={{ color: 'black' }}>
            Discover, personalize, and create your soundtrack. Anywhere, anytime. Your sound, your Musicee.
          </p>
        </div>
        {/* <FriendsList/> */}
      </div>
    </div>
  );
}

export default page