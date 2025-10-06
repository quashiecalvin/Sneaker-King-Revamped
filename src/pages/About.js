import React from 'react';

function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center text-white font-sans">
      {/* Background video */}
      <video 
        className="absolute inset-0 object-cover w-full h-full z-0" 
        src="/multimedia/Epic Cinematic B Roll Unboxing Travis Scott Dunk Low - Daniel Schiffer Inspired.mp4" 
        autoPlay 
        loop 
        muted
      />

    
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl p-6">
        <p className="text-lg mb-6 italic">
          Welcome to Sneaker King, your ultimate destination for the latest sneaker trends and styles. We’re more than a store; we’re a community dedicated to delivering top-notch footwear experiences to sneaker enthusiasts.
        </p>
        <p className="text-lg italic leading-relaxed">
          Our curated collection boasts an array of sneakers from iconic brands and emerging designers. Whether you’re into timeless classics or crave the latest releases, we’ve handpicked the best for you.
        </p>
        <p className="text-lg italic leading-relaxed mt-4">
          At Sneaker King, we prioritize not only style but also comfort and quality. Our mission is to elevate your sneaker game while ensuring your feet feel fantastic with every step.
        </p>
        <p className="text-lg italic leading-relaxed mt-4">
          Join us in our passion for sneakers. Explore our diverse range, discover new favorites, and be part of our growing community of sneaker lovers!
        </p>
      </div>
    </div>
  );
}

export default About;
