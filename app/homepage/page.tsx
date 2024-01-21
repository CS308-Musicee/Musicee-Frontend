import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList, Inputbox, Musicard, MusicCardContainer } from '@/components'



const page = () => {


  return (
    <div className='min-h-screen bg-f2d3d3 flex'>
      <div className="w-1/6" style={{ backgroundColor: '#E79D9D' }}>
      <Navbar />
      </div>
      <div className='w-4/6 flex flex-col min-h-full p-6'>
        <Inputbox name="Search for a Track/Album/Artist" />
        <div className='flex flex-col space-y-6 flex-grow'>
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