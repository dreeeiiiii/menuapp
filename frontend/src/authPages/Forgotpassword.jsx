import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavigationBar";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary via-accent to-dark px-4">
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-dark">
            Forgot Password 🔑
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Enter your email to receive reset instructions.
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 text-sm p-3 rounded-lg mb-4 text-center shadow-sm">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-green-100 text-green-700 text-sm p-3 rounded-lg mb-4 text-center shadow-sm">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Remembered your password?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-accent font-semibold hover:underline"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
