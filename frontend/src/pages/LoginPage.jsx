import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavigationBar";

const Login = () => {
  const navigate = useNavigate();

  const handleManualLogin = (e) => {
    e.preventDefault();
    // For now, redirect to dashboard
    navigate("/dashboard");
    alert("Manual login submitted! Redirecting to Dashboard...");
  };

  const handleGmailLogin = () => {
    // Placeholder for Gmail login
    alert("Gmail login clicked!");
  };

  return (
    <>
       <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Manual Login */}
        <form onSubmit={handleManualLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Gmail Login */}
        <button
          onClick={handleGmailLogin}
          className="w-full flex items-center justify-center gap-2 border px-4 py-2 rounded hover:bg-gray-100"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Gmail
        </button>
      </div>
    </div>
  </>
  );
};

export default Login;
