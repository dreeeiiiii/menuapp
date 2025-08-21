import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaBookmark,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  "New menu added nearby",
  "Order confirmed",
  "Special discount on Pizza",
];
const savedMenus = [
  "Burger Combo - Downtown Bistro",
  "Green Salad - Green Leaf Cafe",
  "Pizza Margherita - Italiano Pizzeria",
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "-100%", transition: { duration: 0.25 } },
};

const rightbarVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "100%", transition: { duration: 0.25 } },
};

const CustomerNavbar = ({ darkMode, setDarkMode }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);

  // Mobile states
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-30 px-6 py-3 flex justify-between items-center shadow-md transition-all ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Logo */}
      <h1
        className={`text-2xl font-extrabold cursor-pointer hover:scale-105 transition-transform ${
          darkMode ? "text-green-400" : "text-green-700"
        }`}
      >
        🍴 MenuViberen
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6 relative">
        {/* Search */}
        <div className="relative group">
          <input
            type="text"
            placeholder="Search stores..."
            className={`pl-10 pr-4 py-2 rounded-full border shadow-sm focus:outline-none focus:ring-2 w-64 transition-all group-hover:shadow-md ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-gray-200 focus:ring-green-500"
                : "bg-white border-gray-200 text-gray-800 focus:ring-green-500"
            }`}
          />
          <FaSearch
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${
              darkMode
                ? "text-gray-400 group-hover:text-green-400"
                : "text-gray-400 group-hover:text-green-600"
            }`}
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <FaBell
            className="text-xl cursor-pointer hover:text-green-500 transition-transform hover:scale-110"
            onClick={() => {
              setNotifOpen(!notifOpen);
              setSavedOpen(false);
              setProfileOpen(false);
            }}
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
            {notifications.length}
          </span>
          <AnimatePresence>
            {notifOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`absolute right-0 mt-2 w-64 rounded-xl shadow-lg p-3 z-20 max-h-64 overflow-y-auto border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <h3 className="font-semibold text-green-500 mb-2 border-b pb-1">
                  Notifications
                </h3>
                <ul className="flex flex-col gap-2">
                  {notifications.map((n, idx) => (
                    <li
                      key={idx}
                      className="text-sm px-2 py-2 rounded-md cursor-pointer border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Saved Menus */}
        <div className="relative">
          <FaBookmark
            className="text-xl cursor-pointer hover:text-green-500 transition-transform hover:scale-110"
            onClick={() => {
              setSavedOpen(!savedOpen);
              setNotifOpen(false);
              setProfileOpen(false);
            }}
          />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
            {savedMenus.length}
          </span>
          <AnimatePresence>
            {savedOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`absolute right-0 mt-2 w-64 rounded-xl shadow-lg p-3 z-20 max-h-64 overflow-y-auto border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <h3 className="font-semibold text-green-500 mb-2 border-b pb-1">
                  Saved Menus
                </h3>
                <ul className="flex flex-col gap-2">
                  {savedMenus.map((m, idx) => (
                    <li
                      key={idx}
                      className="text-sm px-2 py-2 rounded-md cursor-pointer border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile */}
        <div className="relative">
          <FaUserCircle
            className="text-2xl cursor-pointer hover:text-green-500 transition-transform hover:scale-110"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotifOpen(false);
              setSavedOpen(false);
            }}
          />
          <AnimatePresence>
            {profileOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg p-3 flex flex-col gap-2 z-20 border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                {["View Profile", "Saved Menus", "Orders", "Favorites", "Settings"].map(
                  (item, idx) => (
                    <button
                      key={idx}
                      className="text-left px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                    >
                      {item}
                    </button>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 text-xl cursor-pointer hover:text-yellow-400 transition-transform hover:scale-110"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu Icons */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-xl hover:scale-110 transition"
        >
          <FaBars />
        </button>
        <button
          onClick={() => setRightbarOpen(true)}
          className="text-xl hover:scale-110 transition"
        >
          <FaUserCircle />
        </button>
      </div>

      {/* Sidebar (left) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
          >
            <div
              className={`w-64 p-4 ${
                darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
              }`}
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-2xl mb-4 hover:text-red-500 transition"
              >
                <FaTimes />
              </button>
              <p className="font-bold text-lg mb-2 border-b pb-1">Menu</p>
              <ul className="space-y-2">
                {["Home", "Orders", "Favorites", "Settings"].map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer transition-all px-2 py-2 rounded-md border hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="flex-1 bg-black/40"
              onClick={() => setSidebarOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rightbar (profile/quick access) */}
      <AnimatePresence>
        {rightbarOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex justify-end"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={rightbarVariants}
          >
            {/* Rightbar panel */}
            <div
              className={`w-72 p-4 flex flex-col ${
                darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
              }`}
            >
              <button
                onClick={() => setRightbarOpen(false)}
                className="text-2xl mb-4 hover:text-red-500 transition"
              >
                <FaTimes />
              </button>
              <p className="font-bold text-lg mb-3 border-b pb-1">Quick Access</p>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {/* Notifications */}
                <div>
                  <h3 className="font-semibold text-green-500 mb-2 border-b pb-1">
                    Notifications
                  </h3>
                  <ul className="space-y-2">
                    {notifications.map((n, idx) => (
                      <li
                        key={idx}
                        className="text-sm px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Saved Menus */}
                <div>
                  <h3 className="font-semibold text-green-500 mb-2 border-b pb-1">
                    Saved Menus
                  </h3>
                  <ul className="space-y-2">
                    {savedMenus.map((m, idx) => (
                      <li
                        key={idx}
                        className="text-sm px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile */}
                <div>
                  <h3 className="font-semibold text-green-500 mb-2 border-b pb-1">
                    Profile
                  </h3>
                  <ul className="space-y-2">
                    {["View Profile", "Orders", "Favorites", "Settings"].map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="cursor-pointer px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Dark Mode */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-4 flex items-center gap-2 text-lg transition-transform hover:scale-105 hover:text-yellow-400"
              >
                {darkMode ? <FaSun /> : <FaMoon />} Toggle Dark Mode
              </button>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/40"
              onClick={() => setRightbarOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default CustomerNavbar;
