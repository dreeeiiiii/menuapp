import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordCheck = () => {
  const navigate = useNavigate();
  const gmail = localStorage.getItem("gmail");

  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState(""); // for new signup
  const [category, setCategory] = useState("customer"); // default category
  const [error, setError] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    if (!gmail) {
      navigate("/login"); // no Gmail info → redirect to login
      return;
    }

    // Optional: check if the Gmail exists in the backend
    const checkUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/google-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: gmail }),
        });

        const data = await response.json();

        if (response.ok && data.signupRequired) {
          setIsNewUser(true); // new user → show fullname input
        }
      } catch (err) {
        console.error(err);
        setError("Network error. Please try again.");
      }
    };

    checkUser();
  }, [gmail, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isNewUser) {
        // ✅ Signup flow for new Google user
        const response = await fetch("http://localhost:5000/api/auth/google-signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: gmail, password, fullname, category }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("category", data.category);
          localStorage.setItem("fullname", data.fullname);

          if (data.category === "customer") navigate("/customer");
          else navigate("/business");
        } else {
          setError(data.message);
        }
      } else {
        // ✅ Existing user → login
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: gmail, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("category", data.category);
          localStorage.setItem("fullname", data.fullname);

          if (data.category === "customer") navigate("/customer");
          else if (data.category === "business_owner") navigate("/business");
          else navigate("/");
        } else {
          setError(data.message);
        }
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">
          {isNewUser ? "Complete Signup" : "Enter Password"} for {gmail}
        </h2>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        {isNewUser && (
          <>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              placeholder="Full Name"
              className="border px-4 py-2 w-full rounded mb-3"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-4 py-2 w-full rounded mb-3"
            >
              <option value="customer">Customer</option>
              <option value="business_owner">Business Owner</option>
            </select>
          </>
        )}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="border px-4 py-2 w-full rounded mb-3"
        />

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded w-full hover:bg-accent transition"
        >
          {isNewUser ? "Sign Up & Continue" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default PasswordCheck;
