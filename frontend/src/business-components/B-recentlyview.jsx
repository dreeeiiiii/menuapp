import React from "react";
import { User } from "lucide-react";

export default function RecentlyViewed({ darkMode }) {
  const visitors = [
    { name: "Maria Santos", date: "Aug 20, 2025" },
    { name: "Pedro Reyes", date: "Aug 19, 2025" },
    { name: "Ana Cruz", date: "Aug 18, 2025" },
  ];

  return (
    <div className={`p-6 rounded-2xl shadow-lg transition-colors duration-300
      ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}
    `}>
      <h2 className="font-bold text-xl mb-4 text-green-700 flex items-center gap-2">
        <User /> Recently Viewed
      </h2>
      <ul className="grid gap-2">
        {visitors.map((v, i) => (
          <li
            key={i}
            className={`flex justify-between items-center p-2 rounded-xl transition-colors duration-300
              ${darkMode ? "hover:bg-gray-700" : "hover:bg-green-50"}
            `}
          >
            <span>{v.name}</span>
            <span className="text-sm text-gray-500">{v.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
