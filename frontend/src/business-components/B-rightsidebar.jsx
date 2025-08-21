import React from "react";
import { Bell, DollarSign, Users } from "lucide-react";

export default function RightSidebar({ darkMode, isMobileVisible }) {
  if (!isMobileVisible) return null;

  return (
    <aside
      className={`w-64 p-6 rounded-2xl shadow-xl transition-colors duration-300 flex flex-col gap-6
        ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}`}
    >
      <h2 className="text-lg font-bold text-green-700 dark:text-green-400">Quick Insights</h2>

      {/* Notifications */}
      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700 transition cursor-pointer shadow-sm">
        <Bell className="w-6 h-6 text-green-600 dark:text-green-400" />
        <div>
          <p className="font-semibold">5 New Orders</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">Check your recent orders</p>
        </div>
      </div>

      {/* Store Earnings */}
      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700 transition cursor-pointer shadow-sm">
        <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
        <div>
          <p className="font-semibold">₱12,500</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">Total Earnings</p>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700 transition cursor-pointer shadow-sm">
        <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
        <div>
          <p className="font-semibold">120 Visitors</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">This week</p>
        </div>
      </div>

      {/* Promote Store Button */}
      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl shadow hover:scale-105 transition">
        Promote Store
      </button>
    </aside>
  );
}
