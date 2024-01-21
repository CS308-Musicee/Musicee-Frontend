import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList, Inputbox, Musicard, MusicCardContainer } from '@/components'



const page = () => {

  const textColor = '#5A5A54';
  return (
    <div className='w-full h-full bg-f2d3d3'>
      <Navbar />
      <div className=' '>
      
        <FriendsList />
      </div>


      <div style={{ backgroundColor: '#f2d3d3', height: '100vh' }}>
      <Inputbox name="Search for a Track/Album/Artist"></Inputbox>
      <div className='space-y-96'>
      <MusicCardContainer title="All Tracks" textColor={textColor}></MusicCardContainer>
      </div>
      
      {/* <MusicCardContainer title="Top 10 in Australia"></MusicCardContainer>
      <MusicCardContainer title="Top 10 in Turkey"></MusicCardContainer> */}
      </div>
    </div>





  )
}

export default page