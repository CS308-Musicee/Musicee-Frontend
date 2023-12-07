/*// app/api/signup.tsx
"use client";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export const signUp = async (userData: SignUpData): Promise<void> => {
  try {
    const response = await fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Successful signup
      const data = await response.json();
      console.log('Signup successful:', data);
      // You can handle the successful signup response here if needed
    } else {
      // Error in signup
      const errorData = await response.json();
      console.error('Signup error:', errorData);
      // You can handle the signup error here if needed
    }
  } catch (error) {
    console.error('Error during signup:', error);
    // Handle other errors such as network issues
  }
};
*/