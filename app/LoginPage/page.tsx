// SignUpPage.tsx
"use client"
import React from 'react';
import { IntroNavbar, FriendsList } from '@/components';
import Login from '@/components/Login'; // Import the SignUpForm component

const LoginPage: React.FC = () => {
  const containerStyle = {
    backgroundColor: '#ede1e1',
  };

  return (
    <div className="w-full min-h-screen" style={containerStyle}>
      <IntroNavbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xs">
          <Login />
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
