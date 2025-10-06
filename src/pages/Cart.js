import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, action) => {
    const item = cart.find((item) => item.id === id);
    const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" 
            alt="Empty Cart"
            className="w-32 h-32 object-contain"
          />
          <p className="text-lg text-gray-500">Your cart is empty.</p>
          <p className="text-sm text-gray-400">It looks like you haven't added anything yet.</p>
          <Link to="/products">
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border border-gray-300 rounded-lg p-4 shadow-md bg-white"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-lg text-gray-700">Price: ${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 mr-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, 'decrease')}
                    className="bg-white-200 text-black px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 'increase')}
                    className="bg-white-200 text-black px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Cart Actions */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Clear Cart
            </button>

            <Link to="/checkout">
              <button
                disabled={cart.length === 0}
                className={`px-6 py-3 rounded-md text-white font-semibold transition duration-300 ${
                  cart.length === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
