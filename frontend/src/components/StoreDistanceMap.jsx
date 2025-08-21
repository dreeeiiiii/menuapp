import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Example stores across the Philippines (various types)
const stores = [
  { name: "Manila Bistro", type: "Restaurant", lat: 14.5995, lng: 120.9842 },
  { name: "Cebu Bookstore", type: "Retail", lat: 10.3157, lng: 123.8854 },
  { name: "Davao Electronics Shop", type: "Electronics", lat: 7.1907, lng: 125.4553 },
  { name: "Batangas Bakery", type: "Food & Beverage", lat: 13.7578, lng: 121.0583 },
  { name: "Quezon City Clothing Store", type: "Fashion", lat: 14.6760, lng: 121.0437 },
];

// Example customer location (center of the Philippines)
const customerLocation = [12.8797, 121.7740];

// Custom icons
const customerIcon = new L.DivIcon({
  html: `<div class="text-green-700 text-xl">📍</div>`,
  className: "",
});

const storeIcon = new L.DivIcon({
  html: `<div class="text-red-600 text-xl">🏬</div>`, // generic store icon
  className: "",
});

const StoreDistanceMap = () => {
  return (
    <section className="py-16 bg-green-50 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        Nearby Stores Across the Philippines
      </h2>

      <div className="max-w-6xl mx-auto h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={customerLocation}
          zoom={5}
          scrollWheelZoom
          className="w-full h-full rounded-2xl"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Customer Marker */}
          <Marker position={customerLocation} icon={customerIcon}>
            <Popup className="text-center rounded-lg p-2 bg-green-50 shadow-lg">
              <span className="font-semibold">Your Location 📍</span>
            </Popup>
          </Marker>

          {/* Store Markers */}
          {stores.map((store, index) => (
            <Marker
              key={index}
              position={[store.lat, store.lng]}
              icon={storeIcon}
            >
              <Popup className="text-center rounded-lg p-2 bg-white shadow-md">
                <span className="font-semibold text-green-700">{store.name}</span>
                <p className="text-gray-600 text-sm mt-1">
                  Type: {store.type}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Browse the menu or products of this store
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <p className="text-center text-gray-600 mt-6 max-w-md mx-auto text-sm sm:text-base">
        Explore nearby stores—small shops or big establishments—across the Philippines and check their menus or products.
      </p>
    </section>
  );
};

export default StoreDistanceMap;
