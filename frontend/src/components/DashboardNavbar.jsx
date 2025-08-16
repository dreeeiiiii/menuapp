import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <h2
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        🍴 MenuApp Dashboard
      </h2>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 items-center">
        <li>
          <button
            onClick={() => navigate("/dashboard/menu")}
            className="hover:text-green-200 transition"
          >
            Menu Items
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/dashboard/orders")}
            className="hover:text-green-200 transition"
          >
            Orders
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/dashboard/customers")}
            className="hover:text-green-200 transition"
          >
            Customers
          </button>
        </li>
        <li>
          <button
            onClick={() => alert("Logging out...")}
            className="hover:text-red-300 transition"
          >
            Logout
          </button>
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
        <ul className="absolute top-16 left-0 w-full bg-green-700 flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
          <li>
            <button
              onClick={() => navigate("/dashboard/menu")}
              className="hover:text-green-200 transition"
            >
              Menu Items
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/dashboard/orders")}
              className="hover:text-green-200 transition"
            >
              Orders
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/dashboard/customers")}
              className="hover:text-green-200 transition"
            >
              Customers
            </button>
          </li>
          <li>
            <button
              onClick={() => alert("Logging out...")}
              className="hover:text-red-300 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default DashboardNavbar;
