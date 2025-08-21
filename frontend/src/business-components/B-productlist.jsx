import React from "react";
import { CheckCircle, XCircle, Edit2 } from "lucide-react";

export default function ProductList({ products, setProducts, darkMode }) {
  const toggleAvailability = (index) => {
    const updated = [...products];
    updated[index].available = !updated[index].available;
    setProducts(updated);
  };

  return (
    <div className={`p-6 rounded-2xl shadow-lg transition-colors duration-300
      ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}
    `}>
      <h2 className="text-xl font-bold mb-4 text-green-700">Your Products</h2>
      {products.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-300">No products yet. Start adding some!</p>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-2xl p-4 flex flex-col gap-3 transition-shadow duration-300
                ${darkMode ? "bg-gray-700 border-gray-600 hover:shadow-xl" : "bg-green-50 border-green-200 hover:shadow-lg"}
              `}
            >
              <div className="flex gap-4 items-center">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-green-700 font-semibold">₱{item.price}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {item.available ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="text-sm">{item.available ? "Available" : "Unavailable"}</span>
                </div>
                <button
                  onClick={() => toggleAvailability(idx)}
                  className={`p-2 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110
                    ${item.available ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"}
                  `}
                  title={item.available ? "Mark Unavailable" : "Mark Available"}
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
