import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userCategory, setUserCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const category = localStorage.getItem("category");
    if (token && category) setUserCategory(category);
  }, []);

  const menuLinks = userCategory
    ? [
        {
          label: "Go to Dashboard",
          path:
            userCategory === "customer"
              ? "/customer"
              : ["business-owner", "business_owner", "business owner"].includes(userCategory)
              ? "/business"
              : "/",
          bg: "bg-green-600",
          text: "text-white",
        },
      ]
    : [
        { label: "Menu", path: "/" },
        { label: "Login", path: "/login", color: "text-orange-500" },
        { label: "Sign Up", path: "/signup", bg: "bg-green-600", text: "text-white" },
      ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <h2
        className="text-2xl font-bold cursor-pointer text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition"
        onClick={() => navigate("/")}
      >
        🍽️ MenuViberen
      </h2>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-4 items-center">
        {menuLinks.map((link, idx) => (
          <li key={idx}>
            <button
              onClick={() => navigate(link.path)}
              className={`transition font-medium px-4 py-2 rounded-full shadow-sm ${
                link.bg
                  ? `${link.bg} ${link.text} hover:bg-green-700 dark:hover:bg-green-500`
                  : `hover:${link.color}`
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 dark:text-gray-200 text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          >
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 h-screen w-3/4 bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-6 shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      navigate(link.path);
                      setOpen(false);
                    }}
                    className={`text-xl font-semibold transition px-6 py-3 rounded-full shadow-sm ${
                      link.bg
                        ? `${link.bg} ${link.text} hover:bg-green-700 dark:hover:bg-green-500`
                        : `hover:${link.color}`
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
