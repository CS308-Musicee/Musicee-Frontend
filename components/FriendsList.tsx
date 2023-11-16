import React from 'react'
import { FriendComponent } from '.'

const FriendsList = () => {
    return (
        <div className="grow min-h-screen w-1/6 bg-slate-400 fixed right-0 shadow-xl " >
            <h1 className='w-full text-center text-2xl p-4 border-b-2 border-opacity-60 border-white'>
                Friends
            </h1>
            <div>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            <FriendComponent></FriendComponent>
            </div>
        </div>





    )
}

export default FriendsList