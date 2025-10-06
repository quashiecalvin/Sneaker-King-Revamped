import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-start">
        {/* Contact Information */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>22 Palas Street, Tantra Hill</p>
          <p>Email: sneakerking@gmail.com</p>
          <p>Phone: 0243228371</p>
        </div>

        {/* Quick Links */}
        <div className="mb-4 ml-auto">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
            <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-600" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-600" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        <p>&copy; 2024 Sneaker King. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
