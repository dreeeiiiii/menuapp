import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function AddProduct({ onAdd, darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    available: true,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    onAdd(formData);
    setFormData({ name: "", category: "", price: "", available: true, image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 rounded-3xl shadow-2xl transition-colors duration-300
        ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}
      `}
    >
      <h2 className="font-bold text-xl mb-6 text-green-700 flex items-center gap-2">
        <PlusCircle className="w-6 h-6" /> Add New Product
      </h2>

      <div className="grid gap-4">
        {["name", "category", "price", "image"].map((field) => (
          <input
            key={field}
            type={field === "price" ? "number" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className={`w-full rounded-2xl px-4 py-2 transition-all duration-300 focus:outline-none
              ${darkMode
                ? "bg-gray-700 placeholder-gray-400 text-gray-200 focus:bg-gray-600"
                : "bg-gray-100 placeholder-gray-500 text-gray-900 focus:bg-gray-50"
              } shadow-sm hover:shadow-md`}
          />
        ))}

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="w-5 h-5 accent-green-600 rounded transition"
          />
          Available
        </label>

        <button
          type="submit"
          className="px-6 py-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
