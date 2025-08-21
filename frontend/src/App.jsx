import React from "react";
import Navbar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import DemoMenuPreview from "./components/DemoMenuPreview";
import StoreDistanceMap from "./components/StoreDistanceMap";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content sections */}
      <main className="mt-4 md:mt-6">
        <HeroSection />
        <DemoMenuPreview />
        <StoreDistanceMap />
        <HowItWorks />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
