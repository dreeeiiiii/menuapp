import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = () => {

  return (
    
    <div className="min-h-screen bg-gray-50 p-6">
        <DashboardNavbar />
      <h1 className="text-3xl font-bold mb-6 text-primary">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Menu Items */}
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Total Menu Items</h2>
          <p className="text-3xl font-bold">12</p>
        </div>

        {/* Total Customers */}
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
          <p className="text-3xl font-bold">45</p>
        </div>

        {/* Basic Stats */}
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>User John Doe signed up</li>
          <li>New menu item "Veggie Burger" added</li>
          <li>Customer Jane placed an order</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
