import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-gray-950 py-16 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-3xl font-extrabold text-white mb-4">URBAN EDGE</h4>
          <p className="text-gray-400 mb-4 text-center md:text-left">
            Elevate your style with our cutting-edge fashion collections.
          </p>
          <div className="flex space-x-6 text-3xl mt-4">
            <a href="https://www.facebook.com/urbanedge" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-gray-400 hover:text-white transition cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/urbanedge" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-gray-400 hover:text-white transition cursor-pointer" />
            </a>
            <a href="https://www.twitter.com/urbanedge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-gray-400 hover:text-white transition cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@urbanedge" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="text-gray-400 hover:text-white transition cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h5 className="text-2xl font-bold text-white mb-4">Contact Us</h5>
          <p className="text-gray-400">
            123 Fashion Avenue, Trendy City, Country
            <br />
            Email: <a href="mailto:info@urbanedge.com" className="hover:underline">info@urbanedge.com</a>
            <br />
            Phone: <a href="tel:+11234567890" className="hover:underline">+1 (123) 456-7890</a>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} URBAN EDGE. All rights reserved.</p>
      </div>
      <div className="mt-4 text-center text-gray-500 text-xs">
        <a href="/privacy-policy" className="hover:underline mr-4">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:underline mr-4">Terms of Service</a>
        <a href="/returns-exchanges" className="hover:underline">Returns & Exchanges</a>
      </div>
    </footer>
  );
};

export default Footer;