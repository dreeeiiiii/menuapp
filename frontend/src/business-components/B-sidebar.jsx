import React, { useState } from "react";
import { Store, CheckCircle, Tag } from "lucide-react";

export default function Sidebar({ darkMode }) {
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  return (
    <aside
      className={`flex flex-col gap-8 p-6 rounded-3xl shadow-2xl w-64 transition-all duration-300
        ${darkMode 
          ? "bg-gray-900 text-gray-200" 
          : "bg-white text-gray-900"
        }
      `}
    >
      {/* Profile Section */}
      <div className="text-center flex flex-col items-center gap-4">
        <div className="relative group">
          <img
            src="/profile.png"
            alt="Profile"
            className={`w-24 h-24 rounded-full shadow-lg transition-transform duration-300
              ${darkMode ? "ring-4 ring-green-500" : "ring-4 ring-green-400 group-hover:scale-105"}
            `}
          />
        </div>
        <h2 className="font-bold text-xl transition-colors duration-300">
          Business Owner {isStoreOpen ? "🟢" : "🔴"}
        </h2>
        <button
          className={`mt-2 px-6 py-2 rounded-2xl shadow-lg font-semibold transition-transform duration-300 flex items-center gap-2 justify-center
            ${darkMode ? "bg-green-600 hover:bg-green-700 text-white" : "bg-green-500 hover:bg-green-600 text-white"}
          `}
        >
          <Store className="w-5 h-5" /> Edit Profile
        </button>
      </div>

      {/* Store Status */}
      <div className={`p-4 rounded-2xl shadow-lg transition-all duration-300 flex flex-col gap-3
        ${darkMode ? "bg-green-800 text-white" : "bg-green-100 text-green-900"}
      `}>
        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" /> Store Status
        </h3>
        <p className="text-sm font-medium flex items-center gap-2">
          {isStoreOpen ? "🟢 Open" : "🔴 Closed"}
        </p>
        <button
          onClick={() => setIsStoreOpen(!isStoreOpen)}
          className={`mt-2 w-full px-3 py-2 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 transition-transform duration-300
            ${isStoreOpen
              ? "bg-yellow-400 hover:bg-yellow-500 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
            }
          `}
        >
          {isStoreOpen ? "Close Store" : "Open Store"} <Store className="w-4 h-4" />
        </button>
      </div>

      {/* Promotions */}
      <div className={`p-4 rounded-2xl shadow-lg transition-all duration-300 flex flex-col gap-3
        ${darkMode ? "bg-green-700 text-white" : "bg-gradient-to-br from-green-100 to-green-200 text-green-900"}
      `}>
        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
          <Tag className="w-5 h-5" /> Promotions
        </h3>
        <p className="text-sm mb-2">Promote your store for just ₱100!</p>
        <button className="w-full px-3 py-2 rounded-2xl shadow-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:scale-105 transition-transform flex items-center justify-center gap-2">
          <Tag className="w-5 h-5" /> Promote Now
        </button>
      </div>
    </aside>
  );
}
