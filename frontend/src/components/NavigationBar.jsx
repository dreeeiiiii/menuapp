import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-primary text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <h2
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        🍴 MenuApp
      </h2>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#" className="hover:text-accent transition">
            Business Owner
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-accent transition">
            Customer
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
          <li>
            <a href="#" className="hover:text-accent transition">
              Business Owner
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent transition">
              Customer
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
