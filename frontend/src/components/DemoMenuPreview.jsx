import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CheckCircle, XCircle } from "lucide-react";

const DemoMenuPreview = () => {
  const demoItems = [
    {
      name: "🍔 Classic Burger",
      price: "$8.99",
      description: "Juicy beef patty with lettuce, tomato & cheese",
      category: "Burgers",
      badge: "Popular",
      location: "Downtown Bistro",
      areaType: "Downtown",
      image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
      available: true,
    },
    {
      name: "🍕 Margherita Pizza",
      price: "$12.50",
      description: "Fresh mozzarella, basil & tomato sauce",
      category: "Pizza",
      badge: "Chef's Special",
      location: "Italiano Pizzeria",
      areaType: "Uptown",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg",
      available: false,
    },
    {
      name: "🥗 Caesar Salad",
      price: "$7.00",
      description: "Crisp romaine with Caesar dressing and croutons",
      category: "Salads",
      location: "Green Leaf Cafe",
      areaType: "Suburban",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/12/a4/f6/cd/caesar-salad-and-a-margherita.jpg",
      available: true,
    },
    {
      name: "🌮 Beef Tacos",
      price: "$9.50",
      description: "Spicy beef with fresh salsa and guacamole",
      category: "Tacos",
      badge: "Spicy",
      location: "Taco Town",
      areaType: "Downtown",
      image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
      available: true,
    },
    {
      name: "🍣 Sushi Platter",
      price: "$18.00",
      description: "Assorted fresh sushi with wasabi and soy sauce",
      category: "Sushi",
      badge: "Fresh",
      location: "Sakura Sushi",
      areaType: "Uptown",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg",
      available: false,
    },
    {
      name: "🥪 Club Sandwich",
      price: "$6.75",
      description: "Turkey, bacon, lettuce, tomato on toasted bread",
      category: "Sandwiches",
      badge: "Popular",
      location: "Corner Cafe",
      areaType: "Suburban",
      image:"https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss=",
      available: true,
    },
    {
      name: "🍝 Spaghetti Bolognese",
      price: "$11.00",
      description: "Classic Italian pasta with meat sauce",
      category: "Pasta",
      location: "La Trattoria",
      areaType: "Downtown",
      image:"https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg",
      available: true,
    },
    {
      name: "🥘 Paella",
      price: "$15.50",
      description: "Traditional Spanish rice with seafood and saffron",
      category: "Rice Dishes",
      location: "Mediterranean Delight",
      areaType: "Uptown",
      image: " https://www.simplyrecipes.com/thmb/hBa-lwI2JfTM7DKqYwxhsdbVWFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-HORIZONTAL-ce4d8fe93ec045c0a868ec065f49800a.jpg",
      available: false,
    },
    {
      name: "🍩 Chocolate Donuts",
      price: "$4.00",
      description: "Soft and sweet chocolate glazed donuts",
      category: "Desserts",
      location: "Sweet Tooth Bakery",
      areaType: "Suburban",
      image: "https://cambreabakes.com/wp-content/uploads/2023/02/chocolate-donuts-featured.jpg",
      available: true,
    },
    {
      name: "🥤 Iced Latte",
      price: "$3.50",
      description: "Chilled espresso with milk and ice",
      category: "Beverages",
      location: "Cafe Mocha",
      areaType: "Downtown",
      image: "https://images.ctfassets.net/v601h1fyjgba/71VWCR6Oclk14tsdM9gTyM/6921cc6b21746f62846c99fa6a872c35/Iced_Latte.jpg",
      available: true,
    },
    {
      name: "🍜 Ramen Bowl",
      price: "$13.00",
      description: "Japanese ramen with pork, egg, and vegetables",
      category: "Noodles",
      badge: "Hot",
      location: "Ramen House",
      areaType: "Uptown",
      image: "https://thefoodiediaries.co/wp-content/uploads/2020/08/img_4288.jpg",
      available: false,
    },
    {
      name: "🫔 Tamales",
      price: "$6.00",
      description: "Traditional corn masa with fillings",
      category: "Mexican",
      location: "Fiesta Foods",
      areaType: "Suburban",
      image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2019/10/28/0/FNK_Red-Pork-Tamales_H2_s4x3.jpg",
      available: true,
    },
    {
      name: "🥩 Grilled Steak",
      price: "$22.00",
      description: "Juicy steak with herb butter",
      category: "Steakhouse",
      location: "Prime Cuts",
      areaType: "Downtown",
      image: "https://www.seriouseats.com/thmb/DohQC_iADRKgJPdXvcxSjsPA930=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20110516-cowboy-steak-kenji-lopez-alt-bb4a825bd05b4e91b7672bc1603043a8.jpg",
      available: true,
    },
  ];

  const areaColors = {
    Downtown: "bg-red-100 text-red-700",
    Uptown: "bg-blue-100 text-blue-700",
    Suburban: "bg-yellow-100 text-yellow-700",
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-12">
        Preview a Menu
      </h2>

      {/* Carousel container */}
      <motion.div
        className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory"
        whileTap={{ cursor: "grabbing" }}
      >
        {demoItems.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] snap-start bg-white rounded-3xl shadow-md overflow-hidden flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Image with modern hover animation */}
            <motion.div
              className="relative overflow-hidden rounded-t-3xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-300"
              />
              <motion.button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-700 text-white px-4 py-2 rounded-full opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                View Menu
              </motion.button>
            </motion.div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="mb-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {item.name}
                  {item.badge && (
                    <motion.span
                      className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.badge}
                    </motion.span>
                  )}
                </h3>

                <p className="text-gray-500 text-xs italic flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="text-green-500" />
                  {item.location}{" "}
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${areaColors[item.areaType]}`}
                  >
                    {item.areaType}
                  </span>
                </p>

                {/* Availability Note */}
                <p className={`text-xs font-semibold mt-1 flex items-center gap-1 ${
                  item.available ? "text-green-600" : "text-red-600"
                }`}>
                  {item.available ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  {item.available ? "Available" : "Unavailable"}
                </p>
              </div>

              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-green-700 font-semibold">{item.price}</span>
                <span className="text-gray-400 text-xs italic">{item.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center text-gray-600 mt-12 max-w-md mx-auto">
        Swipe through sample menus from nearby restaurants. Hover or tap any dish to
        reveal a "View Menu" button and see details like location, category, price, special badges, and availability.
      </p>
    </section>
  );
};

export default DemoMenuPreview;
