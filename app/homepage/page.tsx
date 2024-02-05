import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList, Inputbox, Musicard, MusicCardContainer } from '@/components'
import AnimatedHeading from '@/components/animations/AnimatedHeading'



const page = () => {


  return (
    <div className='min-h-screen bg-pink-200 flex'>
      <div className="w-1/6">
      <Navbar />
      </div>
      <div className='w-4/6 flex flex-col min-h-full '>
      <AnimatedHeading title="Welcome to Your Home Page"></AnimatedHeading>        

      <div className='flex flex-col space-y-6 flex-grow p-6'>
          <MusicCardContainer title="All Tracks" />
        </div>
      </div>
      <div className="w-1/6">
      <FriendsList />
      </div>
      
      


    </div>






  )
}

export default page