// SignUpPage/page.tsx
"use client"
import React from 'react';
import { IntroNavbar, FriendsList } from '@/components';
import SignUp from '@/components/SignUp'; // Import the SignUpForm component

const page: React.FC = () => {
  const containerStyle = {
    backgroundColor: '#fbcfe8',
  };

  return (
    <div className="w-full min-h-screen" style={containerStyle}>
      <IntroNavbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xs">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
