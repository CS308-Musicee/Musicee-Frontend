// SignUpPage.tsx
"use client"
import React from 'react';
import { IntroNavbar, FriendsList } from '@/components';
import Login from '@/components/Login'; // Import the SignUpForm component

const LoginPage: React.FC = () => {
  const containerStyle = {
    backgroundColor: '#f2d3d3',
  };

  return (
    <div className="w-full min-h-screen" style={containerStyle}>
      <IntroNavbar />
      <div className="flex">
        {/* Left side div */}
        <div
          className="flex-1 bg-f2d3d3 p-4"
          style={{
            backgroundImage: 'url("/background.png")', // Assuming background.png is in the public folder
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Add content for the left side if needed */}
        </div>
  
        {/* Right side div */}
        <div className="flex items-center justify-center flex-1 min-h-screen">
          <div className="w-full max-w-xs">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};
/*
return (
    <div className="w-full min-h-screen" style={containerStyle}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xs">
          <Login />
        </div>
      </div>
    </div>
  );
};*/
export default LoginPage;
