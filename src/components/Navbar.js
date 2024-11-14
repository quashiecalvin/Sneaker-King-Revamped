import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Products
const products = [
  { id: 1, name: 'Jordans', url: '/products' },
  { id: 2, name: 'Nikes', url: '/products' },
  { id: 3, name: 'Mens', url: '/products' },
  { id: 4, name: 'Womens', url: '/products' },
  { id: 5, name: 'Adidas', url: '/products' },
  { id: 6, name: 'Kids', url: '/products' },
  { id: 7, name: 'Mens Air Jordan 1 High', url: '/products/1' },
  { id: 8, name: 'Mens Air Jordan 11', url: '/products/2' },
  { id: 9, name: 'Mens Nike Presto', url: '/products/3' },
  { id: 10, name: 'Mens Alexander McQueen', url: '/products/4' },
  { id: 11, name: 'Mens Air Jordan 13', url: '/products/5' },
  { id: 12, name: 'Mens Air Jordan 4', url: '/products/6' },
  { id: 13, name: 'Womens Air Jordan 1 Low', url: '/products/7' },
  { id: 14, name: 'Womens Air Jordan 1 High', url: '/products/8' },
  { id: 15, name: 'Womens Adidas Trainers', url: '/products/9' },
  { id: 16, name: 'Kids Trainers', url: '/products/10' },
  { id: 17, name: 'Kids Trainers', url: '/products/11' },
  { id: 18, name: 'Kids Trainers', url: '/products/12' },
];

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    // Search for the product
    const foundProduct = products.find((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (foundProduct) {
      // Navigate to the product details page
      navigate(foundProduct.url);
      toast.success(`Found: ${foundProduct.name}`);
    } else {
      // Show "Item not found" message
      toast.error('Item not found');
    }

    // Clear the search input
    setSearchQuery('');
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <h2 className="text-2xl font-bold mb-2 sm:mb-0 text-center sm:text-left">
        <Link to="/" className="hover:text-gray-300">Sneaker King</Link>
      </h2>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center space-x-2 border border-gray-500 p-1 rounded-md w-full sm:w-96 md:w-80 lg:w-1/3 mb-2 sm:mb-0">
        <input
          type="text"
          className="p-1 bg-gray-800 text-white rounded-md focus:outline-none h-8 w-full"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-600 h-9 text-white rounded-md hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      {/* Links */}
      <div className="overflow-x-auto w-full sm:w-auto">
        <ul className="flex space-x-6 items-center whitespace-nowrap">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-300">Collection</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-gray-300">Contact Us</Link>
          </li>

          {/* Cart Icon */}
          <li>
            <Link to="/cart" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>

          {/* Profile Icon */}
          <li>
            <Link to="/login" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
