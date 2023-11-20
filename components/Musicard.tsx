import React from 'react'
import Image from 'next/image';
import TroyeSiyan from '../app/troyeSiyan.png';
import { StarRating } from '.';

const Musicard = ({tName, tAlbum, tArtist, tId, tRY}: any) => {
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
                <div className="h-96 flex flex-col items-center justify-end space-y-2 pb-2">
                    
                    <div className="title text-lg font-medium text-gray-700">{tName}</div>
                    <div className="artist text-xs text-gray-400 uppercase tracking-wide">{tArtist}</div>
                    <div> <StarRating></StarRating></div>
                </div>
            </div>
        </div>




    )
}

export default Musicard