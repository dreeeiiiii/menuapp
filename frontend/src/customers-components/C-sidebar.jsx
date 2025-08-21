import React, { useState } from "react";
import { FaUserCircle, FaHeart, FaBookmark, FaClock, FaSearch } from "react-icons/fa";

const Sidebar = ({ darkMode, isMobileVisible }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = ["Burgers", "Pizza", "Cafe", "Desserts", "Seafood", "Healthy"];
  const recentStores = ["Downtown Bistro", "Green Leaf Cafe", "Italiano Pizzeria"];

  // Hide sidebar on mobile unless tab is active
  if (!isMobileVisible) return null;

  return (
    <aside
      className={`flex flex-col w-72 rounded-3xl sticky top-6 h-[calc(100vh-48px)] shadow-lg transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <div className="p-6 space-y-6 overflow-y-auto max-h-full">
        {/* Search */}
        <div className={`flex items-center rounded-xl px-3 py-2 mb-4 transition ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
          <FaSearch className={`mr-2 ${darkMode ? "text-gray-300" : "text-green-700"}`} />
          <input
            type="text"
            placeholder="Search categories..."
            className={`outline-none w-full text-sm transition ${darkMode ? "bg-gray-700 text-gray-200 placeholder-gray-400" : "bg-green-50 text-gray-900"}`}
          />
        </div>

        {/* Categories */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-green-400" : "text-green-700"}`}>Categories</h2>
          <ul className="flex flex-col gap-3">
            {categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl cursor-pointer flex items-center justify-between transition font-medium ${
                  activeCategory === cat
                    ? darkMode ? "bg-green-700 text-gray-200" : "bg-green-100 text-green-800"
                    : darkMode ? "hover:bg-gray-700 hover:text-gray-200" : "hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {cat}
                <span className={`text-xs font-semibold px-2 py-1 rounded-full transition ${darkMode ? "bg-gray-700 text-gray-200" : "bg-green-100 text-green-700"}`}>
                  {Math.floor(Math.random() * 20) + 1}+
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-green-400" : "text-green-700"}`}>Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition ${darkMode ? "hover:bg-gray-700" : "hover:bg-green-50"}`}><FaHeart className="text-red-500" /> Favorites</li>
            <li className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition ${darkMode ? "hover:bg-gray-700" : "hover:bg-green-50"}`}><FaBookmark className="text-green-700" /> Saved Menus</li>
            <li className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition ${darkMode ? "hover:bg-gray-700" : "hover:bg-green-50"}`}><FaClock className="text-yellow-500" /> Recent</li>
          </ul>
        </div>

        {/* Recently Viewed */}
        <div>
          <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-green-400" : "text-green-700"}`}>Recently Viewed</h3>
          <ul className="flex flex-col gap-2">
            {recentStores.map((store, idx) => (
              <li key={idx} className={`px-3 py-2 rounded-xl cursor-pointer transition text-sm ${darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-green-50 text-gray-700"}`}>{store}</li>
            ))}
          </ul>
        </div>

        {/* Profile */}
        <div className={`mt-4 rounded-2xl p-4 flex items-center gap-3 shadow-inner hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
          <FaUserCircle className={`w-12 h-12 ${darkMode ? "text-gray-200" : "text-green-700"}`} />
          <div>
            <p className="font-semibold">Customer Name</p>
            <p className={`text-sm cursor-pointer hover:underline ${darkMode ? "text-gray-400" : "text-gray-500"}`}>View Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
