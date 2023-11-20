import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList, Inputbox, Musicard, MusicCardContainer } from '@/components'



const page = () => {

  return (
    <div className=' w-full min-h-screen bg-pink-200'>
      <Navbar />
      <div className=' '>
      
        <FriendsList />
      </div>


      <div className='w-5/6 flex flex-col bg-pink-200 p-6'>
      <Inputbox name="Search for a Track/Album/Artist"></Inputbox>
      <MusicCardContainer title="Recommendations"></MusicCardContainer>
      {/* <MusicCardContainer title="Top 10 in Australia"></MusicCardContainer>
      <MusicCardContainer title="Top 10 in Turkey"></MusicCardContainer> */}
      </div>
    </div>





  )
}

export default page