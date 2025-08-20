// src/pages/Home.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  // Get the user from the auth state
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">
            {/* Display a welcome message with the user's name */}
            Welcome, {user ? user.name : 'Guest'}!
        </h1>
        <p className="text-lg text-gray-700">
            You have successfully logged in.
        </p>
      </div>
    </div>
  );
};

export default Home;
