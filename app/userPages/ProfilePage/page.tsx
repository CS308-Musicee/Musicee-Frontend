import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList } from '@/components'
import { ProfileStat } from '@/components'

const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <FriendsList/>
      <div style={{ backgroundColor: '#f2d3d3', flex: 1, padding: '20px' }}>
      <div className='min-h-screen flex justify-center items-center text-4xl '>
      <ProfileStat></ProfileStat>
        </div>
        
      </div>
      
      
    </div>
    )
}

export default page