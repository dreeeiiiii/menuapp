import React, { useState, useEffect } from "react";
import CustomerNavbar from "../customers-components/C-navbar";
import Sidebar from "../customers-components/C-sidebar";
import Feed from "../customers-components/C-feedlist";
import RightSidebar from "../customers-components/C-rightbar";

const CustomerDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showSidebar = windowWidth > 500;
  const showRightSidebar = windowWidth >= 1280;

  let feedColumns = 1;
  if (windowWidth >= 1024 && windowWidth < 1280) feedColumns = 2;
  if (windowWidth >= 1280) feedColumns = 3;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <CustomerNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div className="max-w-7xl mx-auto py-6 px-4 relative flex">
        <Sidebar
          darkMode={darkMode}
          isMobileVisible={showSidebar || sidebarOpen}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <Feed darkMode={darkMode} columns={feedColumns} />

        <RightSidebar darkMode={darkMode} isMobileVisible={showRightSidebar} />
      </div>
    </div>
  );
};

export default CustomerDashboard;
