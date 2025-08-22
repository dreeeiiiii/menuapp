import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Manual Login
  const handleManualLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("category", data.category);
        localStorage.setItem("fullname", data.fullname);

        // ✅ Redirect based on category
        if (data.category === "customer") {
          navigate("/customer");
        } else if (
          ["business_owner", "business-owner", "business owner"].includes(data.category)
        ) {
          navigate("/business");
        } else {
          navigate("/");
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const handleGmailLogin = async (credentialResponse) => {
    try {
      setGoogleLoading(true);
      if (!credentialResponse.credential) {
        setError("Google login failed.");
        setGoogleLoading(false);
        return;
      }

      const decoded = jwtDecode(credentialResponse.credential);
      const gmail = decoded.email;

      const response = await fetch("http://localhost:5000/api/auth/google-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: gmail }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.signupRequired) {
          // Redirect to password-check for new users
          localStorage.setItem("gmail", gmail);
          navigate("/password-check");
        } else {
          // Existing user → auto login
          localStorage.setItem("token", data.token);
          localStorage.setItem("category", data.category);
          localStorage.setItem("fullname", data.fullname);

          if (data.category === "customer") {
            navigate("/customer");
          } else if (
            ["business_owner", "business-owner", "business owner"].includes(data.category)
          ) {
            navigate("/business");
          } else {
            navigate("/");
          }
        }
      } else {
        setError(data.message || "Google login failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Google login failed.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary via-accent to-dark px-4">
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-dark">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Login to continue exploring delicious menus 🍽️
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 text-sm p-3 rounded-lg mb-4 text-center shadow-sm">
              {error}
            </div>
          )}

          {/* Manual Login Form */}
          <form onSubmit={handleManualLogin} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-white px-4 py-3 rounded-lg hover:bg-accent transition font-semibold shadow-md ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="block mx-auto text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              Forgot your password?
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center">
            {googleLoading ? (
            <div className="text-center text-gray-600">Signing in with Google...</div>
          ) : (
            <GoogleLogin
              onSuccess={handleGmailLogin}
              onError={() => setError("Google login failed.")}
            />
          )}
          </div>

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
