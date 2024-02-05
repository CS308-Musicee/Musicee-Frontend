import React from 'react'
import Image from 'next/image'
import { Navbar, FriendsList } from '@/components'
import { ProfileStat } from '@/components'
import PieChart from '@/components/stats/PieChart'
import { LikedList } from '@/components/stats/LikedList'
import { Header } from '@/components/Header'
import RadarChartGenre from '@/components/stats/RadarChartGenre'
import BarChartFriends from '@/components/stats/BarChartFriends'
import DoughnutChartFriends from '@/components/stats/DoughnutCommonF'
import AnimatedHeading from '@/components/animations/AnimatedHeading'


const page = () => {
  return (
    <div className='flex'>
      <div className='w-1/6'>
        <Navbar />

      </div>

      <div className='w-4/6 min-h-screen bg-pink-200'>
      
        <div>
        <AnimatedHeading title="Profile Page"></AnimatedHeading>
        </div>
        <div className=''>
          <ProfileStat></ProfileStat>
        </div>

        <div className='mb-20 mt-40'>
        <Header title={"Number of Songs You Liked by Artists"}></Header>
        </div>
        <div>
        <PieChart></PieChart>
        </div>


        <div className='mb-20 mt-40'>
        <Header title={"Number of Songs You Liked by Genre"}></Header>
        </div>
        <div>
        <RadarChartGenre></RadarChartGenre>
        </div>
        


        <div className='mb-20 mt-40'>
        <Header title={"Number of Songs You Liked by Your Friends"}></Header>
        </div>
        <div>
        <BarChartFriends></BarChartFriends>
        </div>


        <div className='mb-20 mt-40'>
        <Header title={"Number of Songs You Liked Together Your Friends"}></Header>
        </div>
        <div>
        <DoughnutChartFriends></DoughnutChartFriends>
        </div>
      </div>
      <div className='w-1/6'>
        <FriendsList />

      </div>
    </div>
  )
}

export default page