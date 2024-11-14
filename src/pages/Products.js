import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black-500 mb-8">Our Sneaker Collection</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-lg text-gray-500 mb-4">${product.price}</p>
                <Link to={`/products/${product.id}`} className="block text-center px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 w-36">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
