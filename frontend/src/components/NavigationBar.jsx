import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuLinks = [
    { label: "Menu", path: "/" },
    { label: "Login", path: "/login", color: "text-orange-500" },
    { label: "Sign Up", path: "/signup", bg: "bg-green-600", text: "text-white" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-50 via-white to-yellow-50 px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <h2
        className="text-2xl font-bold cursor-pointer text-green-700"
        onClick={() => navigate("/")}
      >
        🍽️ MenuViberen
      </h2>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 items-center">
        {menuLinks.map((link, idx) => (
          <li key={idx}>
            <button
              onClick={() => navigate(link.path)}
              className={`transition font-medium ${link.bg ? `${link.bg} ${link.text} px-4 py-2 rounded-lg hover:bg-green-700` : `hover:${link.color}`}`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 right-0 h-screen w-3/4 bg-gradient-to-b from-green-50 via-white to-yellow-50 flex flex-col items-center justify-center gap-8 shadow-lg z-50 md:hidden"
          >
            {menuLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    navigate(link.path);
                    setOpen(false);
                  }}
                  className={`text-2xl font-semibold transition ${link.bg ? `${link.bg} ${link.text} px-6 py-3 rounded-lg hover:bg-green-700` : `hover:${link.color}`}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};
  
export default Navbar;
