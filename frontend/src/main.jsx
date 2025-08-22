import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; 
import App from "./App";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import CustomersHomepage from "./pages/CustomerHomepage";
import SellerHomepage from "./pages/SellerHomePage";
import Unauthorized from "./routes/Unauthorized";
import Footer from "./components/Footer";
import ProtectedRoute from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoutes";
import PasswordCheck from "./authPages/PasswordCheck";
import ForgotPassword from "./authPages/Forgotpassword";
import ResetPassword from "./authPages/ResetPassword";
import "./index.css";
const clientid = import.meta.env.VITE_GOOGLE_CLIENT_ID; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ Wrap the entire app in GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId={clientid}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<App />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/password-check" element={<PasswordCheck />} />

          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={["business-owner", "business_owner", "business owner"]}
              />
            }
          >
            <Route path="/business" element={<SellerHomepage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
            <Route path="/customer" element={<CustomersHomepage />} />
          </Route>

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
