import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PaystackButton } from 'react-paystack';

function Checkout() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] =  useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // Track form validity
  const navigate = useNavigate();

  const publicKey = 'pk_test_7eff10bce6e3edebfea2d6154364e95be3786020';  

  // Calculate the total price, considering the quantity
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Update form validity whenever fields change
  useEffect(() => {
    const isValid = name.trim() !== '' && email.trim() !== '' && address.trim() !== '' && cart.length > 0;
    setIsFormValid(isValid);
  }, [name, email,  address, cart]);

  // Handle Paystack payment success
  const handlePaymentSuccess = (reference) => {
    toast.success('Payment Successful!');
    console.log('Payment Reference:', reference);

    // Clear the cart and redirect after a successful payment
    clearCart();
    setOrderSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const componentProps = {
    email: email, 
    amount: calculateTotal() * 100 * 16.03, // Amount in kobo (Paystack works with kobo)
    currency: 'GHS',
    publicKey: publicKey,
    text: 'Pay Now',
    onSuccess: handlePaymentSuccess,
    onClose: () => {
      console.log('Payment closed');
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { name, email, address, paymentMethod, cart });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-12 mb-6 border border-gray-300 rounded-lg text-center">
        <p className="text-xl font-semibold text-gray-700">Thank you for shopping with Sneaker King!</p>
        <p className="text-lg text-gray-500 mt-2">Your cart is empty.</p>
        <p className="text-lg text-gray-500 mt-2">Add some items to proceed to checkout.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto border border-gray-300 rounded-lg p-6 mt-6 mb-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {orderSubmitted ? (
        <div>
          <h2 className="text-2xl font-semibold text-green-600">Thank you for your order!</h2>
          <p className="text-lg">Redirecting you back to the homepage...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold mb-2">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold mb-2">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="payment-method" className="font-semibold mb-2">Payment Method:</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
            >
              <option value="mobilemoney">Mobile Money</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">Bank Transfer</option>
            </select>
          </div>
          <div className="mt-4">
            {isFormValid ? (
              <PaystackButton {...componentProps} className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700" />
            ) : (
              <button
                disabled
                className="w-full py-2 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed"
              >
                Pay Now
              </button>
            )}
          </div>
        </form>
      )}

      {/* Order Summary with Border */}
      <div className="mt-8 border border-gray-300 rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        <ul className="space-y-2 mt-4 bg-white rounded-lg shadow-md p-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-800">{item.name} (x{item.quantity})</span>
              <span className="text-gray-700 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xl font-semibold text-green-600">
          Total: ${calculateTotal()}
        </p>
      </div>
    </div>
  );
}

export default Checkout;
