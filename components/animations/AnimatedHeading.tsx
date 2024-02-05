import React from 'react'
import Image from 'next/image'
import hpPNG from 'app/vecteezy_color-music-free-illustration_22983477.png'
const AnimatedHeading = ({ title }: any) => {
    return (
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 text-white py-8 px-4 md:px-8 flex flex-row">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl md:text-5xl font-bold animate-bounce justify-center">{title}</h3>
            </div>

        </div>
    )
}
export default AnimatedHeading