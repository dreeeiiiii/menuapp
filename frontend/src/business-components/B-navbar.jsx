import React, { useState } from "react";
import { Sun, Moon, Bell, MessageCircle, Menu, X } from "lucide-react";
import { LogOut } from "react-feather";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggingOut(true); // start loading animation
    setTimeout(() => {
      // simulate API/logout delay
      localStorage.removeItem("token");
      localStorage.removeItem("category");
      localStorage.removeItem("fullname");
      navigate("/", { replace: true });
    }, 1000); // 1s loading
  };

  const menuItems = [
    {
      label: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-green-800" />,
      onClick: toggleDarkMode,
      hoverBg: "hover:bg-green-100 dark:hover:bg-green-700",
    },
    {
      label: "Notifications",
      icon: <Bell className="w-5 h-5 text-green-800 dark:text-green-400" />,
      onClick: () => alert("Go to notifications"),
      hoverBg: "hover:bg-green-100 dark:hover:bg-green-700",
    },
    {
      label: "Messages",
      icon: <MessageCircle className="w-5 h-5 text-green-800 dark:text-green-400" />,
      onClick: () => alert("Go to messages"),
      hoverBg: "hover:bg-green-100 dark:hover:bg-green-700",
    },
    {
      label: "Logout",
      icon: <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />,
      onClick: () => setShowLogoutModal(true),
      hoverBg: "hover:bg-red-100 dark:hover:bg-red-700",
    },
  ];

  return (
    <>
      <header
        className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl shadow-md ${
          darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-b-4 border-green-700"
        } transition-colors duration-300`}
      >
        {/* Logo + Store Name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/store-logo.png"
            alt="Store Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-green-600 shadow-sm"
          />
          <h1
            className={`text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-sm ${
              darkMode ? "text-green-400" : "text-green-900"
            }`}
          >
            My Mini Store
          </h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className={`w-6 h-6 ${darkMode ? "text-green-400" : "text-green-900"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${darkMode ? "text-green-400" : "text-green-900"}`} />
          )}
        </button>

        {/* Actions */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-4 absolute md:static top-16 md:top-auto right-4 md:right-auto bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent shadow-lg md:shadow-none rounded-xl md:rounded-none p-4 md:p-0 w-64 md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full md:translate-x-0 md:opacity-100"
          }`}
        >
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className={`flex items-center gap-2 p-2 rounded-lg transition cursor-pointer ${item.hoverBg}`}
            >
              {item.icon}
              <span className={`text-sm font-medium ${darkMode ? "text-green-400" : "text-green-900"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-80"
            >
              <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">Confirm Logout</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">Are you sure you want to logout?</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  disabled={loggingOut}
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition flex items-center justify-center gap-2"
                  disabled={loggingOut}
                >
                  {loggingOut ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                  ) : (
                    "Logout"
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
