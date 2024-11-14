import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg')", // Same image as login page
      }}
    >
      <div className="w-full max-w-sm bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Sign Up</h1>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Sign In Prompt */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
