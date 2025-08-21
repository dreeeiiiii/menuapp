import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import CustomersHomepage from "./pages/CustomerHomepage";
import SellerHomepage from "./pages/SellerHomePage";
import Footer from "./components/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Navbar stays on top for all pages */}
    

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/business" element={<SellerHomepage />} />
        <Route path="/customer" element={<CustomersHomepage />} />
        {/* Add more routes as needed */}
      </Routes>

      {/* Footer stays on all pages */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
