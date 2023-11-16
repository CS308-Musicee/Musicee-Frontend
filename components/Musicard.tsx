import React from 'react'
import Image from 'next/image';
import TroyeSiyan from '../app/troyeSiyan.png';

const Musicard = () => {
    return (
        <div className=" flex p-4 ">
            <div className="music-card bg-white shadow-md rounded-md overflow-hidden relative w-72 h-96">
                <div className="image static">
                    <Image src={TroyeSiyan} alt="Music Image" className="absolute z-10 opacity-30 h-72 w-72"/>
                        <div className="absolute h-12 w-full top-96 z-10 bg-gradient-to-b from-transparent to-pink-600"></div>
                </div>
                <div className="wave absolute h-96 w-96 opacity-60 top-0 left-0 -ml-48 -mt-48 rounded-full bg-gradient-to-r from-veronica to-red-orange animate-spin"></div>
                <div className="wave absolute h-96 w-96 opacity-60 top-1 left-0 -ml-48 -mt-48 rounded-full bg-gradient-to-r from-veronica to-red-orange animate-spin animation-delay-1000"></div>
                <div className="wave absolute h-96 w-96 opacity-60 top-1 left-0 -ml-48 -mt-48 rounded-full bg-gradient-to-r from-veronica to-red-orange animate-spin animation-delay-2000"></div>
                <div className="info absolute bottom-4 left-0 right-0 text-center">
                    <div className="title text-lg font-medium text-gray-700 mb-2">Your Title</div>
                    <div className="artist text-xs text-gray-400 uppercase tracking-wide">Artist Name</div>
                </div>
            </div>
        </div>




    )
}

export default Musicard