import React from 'react'

export const Header = ({ title }: any) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8 px-4 md:px-8">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            </div>
        </div>
        )
}
