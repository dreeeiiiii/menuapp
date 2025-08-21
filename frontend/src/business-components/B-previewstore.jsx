import React from "react";
import { Image } from "lucide-react";

export default function PreviewStore({ products, darkMode }) {
  return (
    <div className={`p-6 rounded-2xl shadow-lg transition-colors duration-300
      ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}
    `}>
      <h2 className="font-bold text-xl mb-4 text-green-700 flex items-center gap-2">
        <Image /> Store Preview
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p, idx) => (
          <div
            key={idx}
            className={`border rounded-2xl overflow-hidden shadow-md transition-shadow duration-300
              ${darkMode ? "bg-gray-700 border-gray-600 hover:shadow-xl" : "bg-green-50 border-green-200 hover:shadow-lg"}
            `}
          >
            <img
              src={p.image || "https://via.placeholder.com/150"}
              alt={p.name}
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="text-green-700 font-bold">₱{p.price}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${p.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                {p.available ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
