import React from 'react';
import Link from 'next/link';

const IntroNavbar = () => {
    return (
        <header className='min-w-full relative z-10 bg-[#E79D9D]'>
            <nav className='w-full h-16 flex justify-between pl-[5vw] pr-6 items-center gap-x-4 '>
                <div className='text-[#5A5A54] text-3xl flex items-center'>
                    <img src="/triangle.png" alt="Musicee Logo" className="mr-2 h-12 max-w-auto"/>
                    Musicee
                </div>

                <div className='flex gap-x-4 sm:gap-x-6 mr-10'>
                    <button className="text-lg  text-slate-700 font-semibold">
                        <Link href="/">Home</Link>
                    </button>
                    
                    <button className="text-lg  text-slate-700 font-semibold">
                        <Link href="/aboutPage">About</Link>
                    </button>
                    <button className="h-8 w-24 bg-slate-700 text-white font-semibold rounded-md shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <Link href="/SignInPage">Sign In</Link>
                    </button>
                    <button className="h-8 w-24 bg-slate-700 text-white font-semibold rounded-md shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <Link href="/LoginPage">Login</Link>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default IntroNavbar;
