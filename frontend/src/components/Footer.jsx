import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 text-white py-10 px-6 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-gray-700 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-600 rounded-full opacity-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-bold">🍴 MenuViberen</h3>
        <p className="text-sm md:text-base text-gray-300">
          Discover, browse, and explore menus from local stores around you.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaTwitter size={20} />
          </a>
        </div>

        <p className="text-xs md:text-sm mt-4 text-gray-400">
          &copy; {year} MenuViberen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
