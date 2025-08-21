import React from "react";
import { FaGift, FaFire, FaStar, FaCrown } from "react-icons/fa";

const trendingStores = [
  { name: "Sushi Heaven", category: "Japanese", distance: "2.3 km", premium: true },
  { name: "Pasta Lovers", category: "Italian", distance: "1.8 km", premium: false },
  { name: "Taco Fiesta", category: "Mexican", distance: "3.1 km", premium: true },
];

const offers = [
  { title: "10% Off Burger Combo", store: "Downtown Bistro" },
  { title: "Free Drink with Pizza", store: "Italiano Pizzeria" },
];

const recommendedStores = trendingStores.filter((store) => store.premium);

const RightSidebar = ({ darkMode, isMobileVisible }) => {
  if (!isMobileVisible) return null;

  return (
    <aside className={`flex flex-col w-72 rounded-3xl sticky top-6 h-[calc(100vh-48px)] shadow-lg transition-colors duration-300 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}`}>
      <div className="p-6 space-y-6 overflow-y-auto max-h-full">
        {/* Trending */}
        <div>
          <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-green-400" : "text-green-700"}`}><FaFire /> Trending Stores</h2>
          <ul className="space-y-3">
            {trendingStores.map((store, index) => (
              <li key={index} className={`p-3 rounded-xl flex justify-between items-center transition ${store.premium ? "border border-yellow-400" : ""} ${darkMode ? "hover:bg-gray-700" : "hover:bg-green-50"}`}>
                <div className="flex items-center gap-2">{store.premium && <FaCrown className="text-yellow-400" />}<div><p className={`${darkMode ? "text-green-400" : "text-green-700"} font-semibold`}>{store.name}</p><p className="text-gray-400 text-sm">{store.category}</p></div></div>
                <span className="text-gray-400 text-xs">{store.distance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Offers */}
        <div>
          <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-green-400" : "text-green-700"}`}><FaGift /> Offers Near You</h2>
          <ul className="space-y-2 text-sm">{offers.map((offer, index) => (
            <li key={index} className={`px-3 py-2 rounded-lg flex justify-between items-center transition ${darkMode ? "bg-gray-700 text-gray-200" : "bg-green-50 text-gray-900"}`}><span>{offer.title}</span><span className={`font-semibold text-xs ${darkMode ? "text-green-400" : "text-green-700"}`}>{offer.store}</span></li>
          ))}</ul>
          <button className={`mt-3 w-full px-4 py-2 rounded-xl font-semibold transition ${darkMode ? "bg-green-600 hover:bg-green-500 text-white" : "bg-green-700 hover:bg-green-800 text-white"}`}>See All Offers</button>
        </div>

        {/* Recommended */}
        <div>
          <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-green-400" : "text-green-700"}`}><FaStar /> Recommended For You</h2>
          {recommendedStores.length > 0 ? (
            <ul className="space-y-3">
              {recommendedStores.map((store, index) => (
                <li key={index} className={`p-3 rounded-xl flex justify-between items-center transition border border-yellow-400 ${darkMode ? "hover:bg-gray-700" : "hover:bg-green-50"}`}>
                  <div className="flex items-center gap-2"><FaCrown className="text-yellow-400" /><div><p className={`${darkMode ? "text-green-400" : "text-green-700"} font-semibold`}>{store.name}</p><p className="text-gray-400 text-sm">{store.category}</p></div></div>
                  <span className="text-gray-400 text-xs">{store.distance}</span>
                </li>
              ))}
            </ul>
          ) : (<p className="text-gray-400 text-sm">No premium stores nearby.</p>)}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
