import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { CheckCircle, XCircle } from "lucide-react";

const StoreCard = ({ store, darkMode }) => {
  const [liked, setLiked] = useState(false);

  // Random values if API doesn't provide distance/rating
  const distance = store.distance
    ? store.distance.toFixed(1)
    : (Math.random() * 5 + 0.5).toFixed(1);
  const rating = store.rating
    ? store.rating.toFixed(1)
    : (Math.random() * 2 + 3).toFixed(1);
  const reviews = store.reviews ? store.reviews : Math.floor(Math.random() * 200 + 1);

  return (
    <div
      className={`rounded-3xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 w-full max-w-full ${
        darkMode ? "bg-gray-800 text-gray-200 hover:shadow-2xl" : "bg-white text-gray-900 hover:shadow-2xl"
      }`}
    >
      <div className="relative h-56 w-full">
        <img
          src={store.image || "https://via.placeholder.com/400x300"}
          alt={store.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition">
          <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition">
            View Menu
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold transition ${
              liked ? "bg-red-500 text-white" : darkMode ? "bg-gray-700 text-red-500" : "bg-white text-red-500"
            }`}
          >
            {liked ? "❤️ Liked" : "♡ Favorite"}
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start">
          <h3 className={`text-lg font-semibold ${darkMode ? "text-green-400" : "text-green-700"}`}>
            {store.name}
          </h3>
          <span className="text-gray-400 text-xs">{distance} km away</span>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-1 mt-1">
          {store.available ? (
            <>
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-xs font-semibold">Available</span>
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4 text-red-600" />
              <span className="text-red-600 text-xs font-semibold">Unavailable</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-400 w-4 h-4" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-gray-400 text-xs">({reviews} reviews)</span>
        </div>

        <p className="mt-2 text-sm">{store.category}</p>
        <div className="flex items-center gap-2 text-xs mt-2">
          <FaMapMarkerAlt className="w-3 h-3 text-green-500" />
          {store.location}
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
