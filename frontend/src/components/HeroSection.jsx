import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Store, Eye, MapPin } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Store className="w-10 h-10 text-green-600" />,
      title: "Discover Local Menus",
      description:
        "Showcase your menu to nearby customers and get noticed instantly!",
    },
    {
      icon: <Eye className="w-10 h-10 text-orange-500" />,
      title: "Browse Menus",
      description:
        "Customers can explore menu items, prices, and detailed descriptions.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-yellow-400" />,
      title: "Explore Nearby",
      description:
        "Find stores and cafés around your location and see what’s cooking.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-yellow-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6"
        >
          🍴 Welcome to MenuViberen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
        >
          Explore menus from <span className="font-semibold text-green-600">nearby stores </span> 
          and discover what local businesses have to offer. Fresh, vibrant, and delicious—right at your fingertips!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 shadow-lg transition transform hover:-translate-y-1"
          >
            I’m a Business Owner
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-orange-500 border border-orange-500 px-8 py-4 rounded-xl font-medium hover:bg-orange-50 shadow-lg transition transform hover:-translate-y-1"
          >
            Browse Menus
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
