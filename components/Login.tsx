// app/SignInPage/page.tsx
"use client"
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IntroNavbar, FriendsList } from '@/components';


const Login: React.FC = () => {

  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      const response = await fetch('http://musicee.us-west-2.elasticbeanstalk.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const responseData = await response.json();

        // Store tokens in localStorage or a secure storage solution
        localStorage.setItem('accessToken', responseData.access_token);
        localStorage.setItem('refreshToken', responseData.refresh_token);
        localStorage.setItem('username', userData.username); // storing the username
        
        router.push('/homepage');

        // You can redirect the user to another page or perform other actions on successful login
        console.log('Login successful:', responseData);
      } else {
        const errorData = await response.json();
        console.error('Login error:', errorData);

        // Handle specific error messages if needed
        if (errorData.detail && Array.isArray(errorData.detail) && errorData.detail.length > 0) {
          setError(errorData.detail[0].msg);
        } else {
          setError('An error occurred during login. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please check your internet connection and try again.');
    }
  };
  

  const containerStyle = {
    backgroundColor: '#E79D9D',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
      <p className="text-5xl font-extrabold text-black mb-20">Welcome again! Login to your account.</p>
      

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div> */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="flex items-center justify-between">
        {error && <div className="text-red-500">{error}</div>}

        <button
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          style={{ backgroundColor: '#E79D9D' , color: '#5A5A54' }}
        >
          Login
        </button>
      </div>
    </form>
  );
};


export default Login;
