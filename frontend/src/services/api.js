// src/services/api.js
export const fetchMenu = async (lat, lon, radius = 5000) => {
  const API_KEY = "a9f07710afa846558c226b1d2b73a88e";
  const url = `https://api.geoapify.com/v2/places?categories=restaurants&filter=circle:${lat},${lon},${radius}&limit=20&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.features;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
};
