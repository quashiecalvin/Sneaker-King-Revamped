import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center antialiased font-sans"
      style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/2a2e99205690657.66d5846942b5d.jpg')" }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold text-white-500 mb-4 font-serif">Welcome to Sneaker King</h1>
        <p className="text-lg text-gray-300">Your ultimate destination for sneakers!</p>
        <Link to="/products">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
