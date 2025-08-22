import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavigationBar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
    category: "customer",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: formData.name,
          email: formData.email,
          location: formData.location,
          password: formData.password,
          category: formData.category === "business-owner" ? "business_owner" : "customer",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("🎉 Account created successfully! Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 px-4">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-2 text-center text-green-700">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Create your account to get started 🚀
          </p>

          {/* Success & Error Messages */}
          {success && <p className="mb-4 text-green-700 font-medium text-center">{success}</p>}
          {error && <p className="mb-4 text-red-600 font-medium text-center">{error}</p>}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-4 pb-1 text-gray-900 focus:border-green-600 focus:outline-none"
              />
              <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-4 pb-1 text-gray-900 focus:border-green-600 focus:outline-none"
              />
              <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600">
                Email Address
              </label>
            </div>

            {/* Location */}
            <div className="relative">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-4 pb-1 text-gray-900 focus:border-green-600 focus:outline-none"
              />
              <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600">
                Location
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-4 pb-1 text-gray-900 focus:border-green-600 focus:outline-none"
              />
              <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600">
                Password
              </label>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-900 focus:border-green-600 focus:outline-none"
              >
                <option value="customer">Customer</option>
                <option value="business-owner">Business Owner</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition-all duration-200 transform hover:scale-[1.02] shadow-md ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-green-700 font-medium hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
