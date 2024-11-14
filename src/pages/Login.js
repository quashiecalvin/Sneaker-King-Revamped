import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg')", 
      }}
    >
      <div className="w-full max-w-sm bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Sign In</h1>
      
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="text"
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-600">Remember me</label>
            </div>
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        </form>

        

        {/* Sign Up Prompt */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;