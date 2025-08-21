import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavigationBar";

const Login = () => {
  const navigate = useNavigate();

  const handleManualLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    alert("Manual login submitted! Redirecting to Dashboard...");
  };

  const handleGmailLogin = () => {
    alert("Gmail login clicked!");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary via-accent to-dark px-4">
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.01]">
          {/* Title */}
          <h2 className="text-3xl font-extrabold mb-6 text-center text-dark">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Login to continue exploring delicious menus 🍽️
          </p>

          {/* Manual Login */}
          <form onSubmit={handleManualLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-3 rounded-lg hover:bg-accent transition font-semibold shadow-md"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Gmail Login */}
          <button
            onClick={handleGmailLogin}
            className="w-full flex items-center justify-center gap-3 border px-4 py-3 rounded-lg hover:bg-gray-100 transition shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="font-medium">Login with Gmail</span>
          </button>

          {/* Sign Up Redirect */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-accent font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
