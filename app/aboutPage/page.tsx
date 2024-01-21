import React from 'react'
import { IntroNavbar, FriendsList } from '@/components'


const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <IntroNavbar />

      {/* New div with background color */}
      <div
        className='w-full min-h-screen flex items-center justify-center'
        style={{
          backgroundImage: 'url("/background3.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0, 
          animation: 'fadeIn 2s forwards', 
        }}
      >
        <div className='text-white text-5xl font-bold text-center' style={{ color: '#ffffff' }}>
          About Us
        </div>
      </div>
      
      <div className='w-full min-h-screen bg-pink-200 text-left'style={{ backgroundColor: '#f2d3d3' }}>
        <div className='min-h-screen flex flex-col justify-center items-center text-center mx-auto'>
          <h1 className='text-6xl font-bold mb-10' style={{ color: 'black' }}>
            Welcome to Musicee
          </h1>
          <p className='text-xl' style={{ color: 'black' }}>
            Here at Musicee, we're just a bunch of music enthusiasts who decided to create something cool together. 
          </p>
          <p className='text-xl mb-4' style={{ color: 'black' }}>
            No grandeur, no fancy claims—just a genuine love for music and a desire to share it with you.
          </p>
          <p className='text-xl' style={{ color: 'black' }}>
            This project wouldn't have been possible without the awesome contributions from our talented teammates:  
          </p>
          <p className='text-xl mb-4' style={{ color: 'black' }}>
            Görkem Filizöz, Ersel  Rıdvan Ekmen, Yusuf Kılıç, Fikret Kayra Yılmaz, Uğur Öztunç, Alperen Balta, Melih Çağan Arı, Selenay Buse Batıbay, Mine Ergin. 
          </p>
          <p className='text-xl' style={{ color: 'black' }}>
            They've brought their unique skills and passion for music to make Musicee what it is today.
          </p>
          <p className='text-xl' style={{ color: 'black' }}>
            So, kick back, explore, and enjoy the tunes. 
          </p>
          <p className='text-xl' style={{ color: 'black' }}>
            Musicee is all about the joy of music, and we're thrilled to have you on this musical journey with us.
          </p>
          <p className='text-xl' style={{ color: 'black' }}>
            and we're thrilled to have you on this musical journey with us.
          </p>
        </div>
        {/* <FriendsList/> */}
      </div>
    </div>
  );
}

export default page