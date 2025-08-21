import React, { useState, useEffect } from "react";
import Navbar from "../business-components/B-navbar";
import Sidebar from "../business-components/B-sidebar";
import AddProduct from "../business-components/B-addproduct";
import ProductList from "../business-components/B-productlist";
import RecentlyViewed from "../business-components/B-recentlyview";
import PreviewStore from "../business-components/B-previewstore";
import RightSidebar from "../business-components/B-rightsidebar";

export default function BusinessDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [products, setProducts] = useState([]);
  const handleAddProduct = (product) => setProducts([...products, product]);
  const handleLogout = () => alert("Logged out!");

  const showLeftSidebar = windowWidth > 1024; // show left sidebar on desktop
  const showRightSidebar = windowWidth >= 1280; // show right sidebar on xl screens

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        onLogout={handleLogout}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <div className="max-w-7xl mx-auto py-6 px-4 flex gap-6">
        {/* Left Sidebar */}
        {showLeftSidebar && (
          <aside className="w-72 flex-shrink-0">
            <Sidebar darkMode={darkMode} />
          </aside>
        )}

        {/* Main Feed */}
        <main className="flex-1 flex flex-col gap-6">
          <AddProduct onAdd={handleAddProduct} darkMode={darkMode} />
          <ProductList products={products} setProducts={setProducts} darkMode={darkMode} />
          <PreviewStore products={products} darkMode={darkMode} />
          <RecentlyViewed darkMode={darkMode} />
        </main>

        {/* Right Sidebar */}
        {showRightSidebar && (
          <aside className="w-72 flex-shrink-0">
            <RightSidebar darkMode={darkMode} isMobileVisible={showRightSidebar} />
          </aside>
        )}
      </div>
    </div>
  );
}
