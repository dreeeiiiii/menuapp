import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBookmark,
  FaPizzaSlice,
  FaHamburger,
  FaLeaf,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { text: "New menu added nearby", icon: <FaPizzaSlice /> },
  { text: "Order confirmed", icon: <FaLeaf /> },
  { text: "Special discount on Pizza", icon: <FaPizzaSlice /> },
  { text: "Coupon expired", icon: <FaLeaf /> },
  { text: "New message from chef", icon: <FaHamburger /> },
];

const savedMenus = [
  { text: "Burger Combo - Downtown Bistro", icon: <FaHamburger /> },
  { text: "Green Salad - Green Leaf Cafe", icon: <FaLeaf /> },
  { text: "Pizza Margherita - Italiano Pizzeria", icon: <FaPizzaSlice /> },
  { text: "Extra item for scroll test", icon: <FaPizzaSlice /> },
  { text: "Another saved menu", icon: <FaLeaf /> },
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

const CustomerNavbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
    }, 1500);
  };

  return (
    <nav
      className={`sticky top-0 z-30 px-6 py-3 flex justify-between items-center shadow-md transition-all ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`text-2xl font-extrabold cursor-pointer hover:scale-105 transition-transform ${
          darkMode ? "text-green-400" : "text-green-700"
        }`}
        onClick={() => navigate("/")}
      >
        🍴 MenuViberen
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6 relative">
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
                      className="flex items-center gap-2 text-sm px-2 py-2 rounded-md cursor-pointer border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                    >
                      {n.icon} {n.text}
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
                      className="flex items-center gap-2 text-sm px-2 py-2 rounded-md cursor-pointer border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                    >
                      {m.icon} {m.text}
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
                {["View Profile", "Orders", "Favorites", "Settings"].map(
                  (item, idx) => (
                    <button
                      key={idx}
                      className="text-left px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                    >
                      {item}
                    </button>
                  )
                )}
                <button
                  onClick={() => setLogoutModal(true)}
                  className="text-left px-2 py-2 rounded-md border transition-all hover:bg-red-100 hover:text-red-700 hover:border-red-500 font-semibold mt-2"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modern Dark Mode Toggle */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            darkMode ? "bg-gray-700" : "bg-yellow-300"
          }`}
        >
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-8" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 m-auto mt-1" />
            ) : (
              <FaMoon className="text-gray-700 m-auto mt-1" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-2xl hover:scale-110 transition"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
          >
            <div
              className={`w-64 p-4 ${
                darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
              } flex flex-col gap-4 overflow-y-auto`}
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl mb-4 hover:text-red-500 transition"
              >
                <FaTimes />
              </button>
              {["View Profile", "Orders", "Favorites", "Settings"].map(
                (item, idx) => (
                  <button
                    key={idx}
                    className="px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                  >
                    {item}
                  </button>
                )
              )}

              <h3 className="font-semibold text-green-500 mt-4">Notifications</h3>
              {notifications.map((n, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                >
                  {n.icon} {n.text}
                </div>
              ))}

              <h3 className="font-semibold text-green-500 mt-4">Saved Menus</h3>
              {savedMenus.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm px-2 py-2 rounded-md border transition-all hover:bg-green-100 hover:text-green-700 hover:border-green-500"
                >
                  {m.icon} {m.text}
                </div>
              ))}

              <button
                onClick={() => {
                  setLogoutModal(true);
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-2 rounded-md border transition-all hover:bg-red-100 hover:text-red-700 hover:border-red-500 font-semibold mt-2"
              >
                Logout
              </button>

              {/* Mobile Toggle */}
              <div
                onClick={() => setDarkMode(!darkMode)}
                className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  darkMode ? "bg-gray-700" : "bg-yellow-300"
                }`}
              >
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    darkMode ? "translate-x-8" : "translate-x-0"
                  }`}
                >
                  {darkMode ? (
                    <FaSun className="text-yellow-400 m-auto mt-1" />
                  ) : (
                    <FaMoon className="text-gray-700 m-auto mt-1" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logout Modal */}
      <AnimatePresence>
        {logoutModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-80 flex flex-col items-center`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {!loadingLogout ? (
                <>
                  <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                    Confirm Logout
                  </h2>
                  <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
                    Are you sure you want to logout?
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setLogoutModal(false)}
                      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-700 dark:text-gray-200">Logging out...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default CustomerNavbar;
