import React from 'react'
import Image from 'next/image'
import { IntroNavbar, FriendsList } from '@/components'


const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <IntroNavbar/>
      
      <div className='w-full min-h-screen bg-pink-200'>
        <div className='min-h-screen flex justify-center items-center text-4xl '>
          SIGN IN PAGE
        </div>
      {/* <FriendsList/> */}
      </div>
      
      
    </div>
    )
}

export default page