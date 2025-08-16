const API_BASE_URL = "http://localhost:5000/api"; // backend URL

// Get all menu items
export const fetchMenu = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu`);
    if (!response.ok) throw new Error("Failed to fetch menu");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
};

// Add a new menu item
export const addMenuItem = async (menuItem) => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menuItem),
    });
    if (!response.ok) throw new Error("Failed to add menu item");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding menu item:", error);
    return null;
  }
};
