import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList } from '@/components'
import { ProfileStat } from '@/components'
import PieChart from '@/components/stats/PieChart'


const page = () => {
  return (
    <div className='flex'>
      <div className='w-1/6'>
        <Navbar />

      </div>

      <div className='w-4/6 min-h-screen bg-pink-200'>
        <div className='min-h-screen flex justify-center items-center text-4xl '>
          <ProfileStat></ProfileStat>
        </div>
        <div>
        <PieChart></PieChart>
        </div>

      </div>
      <div className='w-1/6'>
        <FriendsList />

      </div>
    </div>
  )
}

export default page