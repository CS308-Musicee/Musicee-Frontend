import React from 'react'
import Image from 'next/image'
import Troye from '../app/troyeSiyan.png'

interface FriendComponentProps {
  name: any; // Change 'any' to the actual type of 'name' if possible
}

export const FriendComponent: React.FC<FriendComponentProps>  = ({name}) => {
    return (
        <div className="m-2 px-1 max-w-sm bg-white rounded-xl shadow-lg space-y-2 py-1 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      {/* <div className="flex-shrink-0">
        <Image
          src={Troye}
          alt="Woman's Face"
          width={96}
          height={96}
          className="block h-24 w-24 rounded-full mx-auto sm:mx-0"
        />
      </div> */}
      <div className="w-full flex flex-row justify-evenly items-center">
        <div className="space-y-0.5 flex flex-col justify-center">
          <p className="text-lg text-black font-semibold">
            {name}
          </p>
          <p className="text-slate-500 font-medium">
            Product Engineer
          </p>
        </div>
        <div>
        <button className="px-2  text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Unfriend
        </button>
        </div>
        
      </div>
    </div>
    )
}
