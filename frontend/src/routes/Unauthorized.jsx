// src/pages/Unauthorized.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">
          🚫 Unauthorized
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You do not have permission to access this page.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
