import React from 'react'
import Image from 'next/image'
import { IntroNavbar, FriendsList } from '@/components'
import Link from 'next/link'

const page = () => {
    return (
        <div className='w-full min-h-screen'>
            <IntroNavbar />

            <div className='w-full min-h-screen bg-pink-200'>
                <div className='min-h-screen flex justify-center items-center text-4xl '>
                    LOGIN PAGE
                    <button className="text-xl h-8 w-64 bg-slate-700 text-white font-semibold rounded-md shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <Link href="/homepage">Login Your Account</Link>

                    </button>
                </div>
                {/* <FriendsList/> */}
            </div>


        </div>
    )
}

export default page