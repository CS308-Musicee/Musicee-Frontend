import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList } from '@/components'


const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <FriendsList/>
      <div className='w-full min-h-screen bg-pink-200'>
      <div className='min-h-screen flex justify-center items-center text-4xl '>
          USER HOME PAGE
        </div>
      </div>
      
      
    </div>
    )
}

export default page