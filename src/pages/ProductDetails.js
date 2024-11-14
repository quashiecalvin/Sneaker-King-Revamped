import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Product Details Container */}
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden mt-16">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain max-h-96 mx-auto"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-500 mb-4">Size: {product.size}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price}</p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 w-72"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
