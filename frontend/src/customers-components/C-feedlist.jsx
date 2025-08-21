import React, { useEffect, useState } from "react";
import StoreCard from "./C-storecard";

// Example static data with Google image links (30 stores)
const dummyStores = [
  { name: "Downtown Bistro", category: "Burgers & Grill", location: "Downtown", image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png", available: true },
  { name: "Italiano Pizzeria", category: "Pizza", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Pizza.jpg", available: false },
  { name: "Green Leaf Cafe", category: "Healthy & Salads", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Caesar_salad_%281%29.jpg", available: true },
  { name: "Seafood Paradise", category: "Seafood", location: "Beachside", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Seafood_platter.jpg", available: true },
  { name: "Sweet Tooth Cafe", category: "Desserts", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chocolate_cupcakes.jpg", available: false },
  { name: "Taco Town", category: "Tacos", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Tacos_de_pescado.jpg", available: true },
  { name: "Sakura Sushi", category: "Sushi", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg", available: true },
  { name: "Corner Cafe", category: "Sandwiches", location: "Suburban", image:"https://upload.wikimedia.org/wikipedia/commons/4/44/Club_sandwich.png", available: false },
  { name: "La Trattoria", category: "Pasta", location: "Downtown", image:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Spaghetti_Bolognese.jpg", available: true },
  { name: "Mediterranean Delight", category: "Rice Dishes", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paella_Valenciana.jpg", available: false },
  { name: "Sweet Tooth Bakery", category: "Desserts", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Chocolate_Donut.jpg", available: true },
  { name: "Cafe Mocha", category: "Beverages", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Iced_coffee.jpg", available: true },
  { name: "Ramen House", category: "Noodles", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Shoyu_Ramen.jpg", available: false },
  { name: "Fiesta Foods", category: "Mexican", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Tamales.jpg", available: true },
  { name: "Prime Cuts", category: "Steakhouse", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Grilled_Steak.jpg", available: true },
  { name: "Vegan Delight", category: "Healthy & Vegan", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Vegan_salad.jpg", available: false },
  { name: "Ocean Grill", category: "Seafood", location: "Beachside", image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Grilled_fish.jpg", available: true },
  { name: "Burger Hub", category: "Burgers", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Cheeseburger.jpg", available: true },
  { name: "Pasta Palace", category: "Pasta", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Fettuccine_Alfredo.jpg", available: true },
  { name: "Cupcake Corner", category: "Desserts", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Vanilla_cupcakes.jpg", available: false },
  { name: "Burger Town", category: "Burgers", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Double_Burger.jpg", available: true },
  { name: "Pizza Express", category: "Pizza", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pizza_slice.jpg", available: true },
  { name: "Salad Shack", category: "Healthy", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Greek_salad.jpg", available: true },
  { name: "Seafood Shack", category: "Seafood", location: "Beachside", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Fish_dish.jpg", available: false },
  { name: "Cake Heaven", category: "Desserts", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Strawberry_cake.jpg", available: true },
  { name: "Taco Fiesta", category: "Tacos", location: "Downtown", image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Taco.jpg", available: true },
  { name: "Sushi Spot", category: "Sushi", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Sushi_roll.jpg", available: false },
  { name: "Sandwich Hub", category: "Sandwiches", location: "Suburban", image:"https://upload.wikimedia.org/wikipedia/commons/0/04/Sandwich.jpg", available: true },
  { name: "Pasta House", category: "Pasta", location: "Downtown", image:"https://upload.wikimedia.org/wikipedia/commons/9/92/Spaghetti.jpg", available: true },
  { name: "Rice Bowl", category: "Rice Dishes", location: "Uptown", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Rice_dish.jpg", available: true },
  { name: "Dessert Dreams", category: "Desserts", location: "Suburban", image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolate_cake.jpg", available: false },
];

const Feed = ({ darkMode, columns }) => {
  const [visibleStores, setVisibleStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0); // tracks visible stores
  const batchSize = 15; 
  const nextBatchSize = 10;

  useEffect(() => {
    // Show first batch
    setLoading(true);
    setTimeout(() => {
      setVisibleStores(dummyStores.slice(0, batchSize));
      setIndex(batchSize);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Infinite scroll handler
    const handleScroll = () => {
      if (loading) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && index < dummyStores.length) {
        setLoading(true);
        setTimeout(() => {
          const nextIndex = index + nextBatchSize;
          setVisibleStores(dummyStores.slice(0, nextIndex));
          setIndex(nextIndex);
          setLoading(false);
        }, 1000); // simulate load delay
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index, loading]);

  return (
    <div className={`px-4 py-6 transition-colors duration-300 flex-1 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {visibleStores.map((store, idx) => (
          <StoreCard key={idx} store={store} darkMode={darkMode} />
        ))}
      </div>
      {loading && (
        <div className="flex justify-center mt-6 animate-pulse">
          <p className={darkMode ? "text-gray-200" : "text-gray-800"}>Loading more...</p>
        </div>
      )}
    </div>
  );
};

export default Feed;
