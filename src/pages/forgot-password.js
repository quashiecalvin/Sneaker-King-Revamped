import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Toast notification 
    toast.info('Password reset link has been sent to your email!');
    // Redirect to the login page after showing the notification
    setTimeout(() => navigate('/login'), 3000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg')",
      }}
    >
      <div className="w-full max-w-sm bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Forgot Password</h1>

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Link to go back to Login page */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Remembered your password?{' '}
            <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
