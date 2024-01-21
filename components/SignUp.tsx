"use client"

// SignUpForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';


const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State to hold error message
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State to hold success message

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

    const userData = { username, email, password };

    try {
      const response = await fetch('http://musicee.us-west-2.elasticbeanstalk.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Successful signup
        const responseData = await response.json();
        console.log('Signup successful:', responseData);

        // Set success message state
        setSuccessMessage('Signup successful!');

        // Reset error state
        setError(null);
      } else {
        // Error in signup
        const errorData = await response.json();
        console.error('Signup error:', errorData);

        // Check for specific error message
        if (errorData.detail && errorData.detail.includes('Email or username already exists')) {
          // Set the error state to display to the user
          setError('Email or username already exists. Please choose a different one.');
        } else {
          // Handle other errors
          console.error('An error occurred during signup:', errorData);
          setError('An error occurred during signup. Please try again.');
        }

        // Reset success message state
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle other errors such as network issues
      setError('An error occurred during signup. Please check your internet connection and try again.');

      // Reset success message state
      setSuccessMessage(null);
    }
  };
  
  return (

    <form onSubmit={handleSubmit}>
      <div className="mb-4">
      <p className="text-5xl font-extrabold text-black mb-20">Welcome! Sign up to your account.</p>
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
      <div className="mb-4">
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
      </div>
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
        {successMessage && <div className="text-green-500">{successMessage}</div>}

        <button
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          style={{ backgroundColor: '#E79D9D' , color: '#5A5A54' }}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
