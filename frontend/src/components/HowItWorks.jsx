import React from "react";
import { motion } from "framer-motion";
import { User, Store, Utensils } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create an account as a Customer or Business Owner to get started.",
      icon: <User className="w-12 h-12 text-orange-500" />,
      color: "bg-orange-100",
    },
    {
      title: "Showcase or Browse",
      description:
        "Business owners upload menus, customers explore mouth-watering options nearby.",
      icon: <Store className="w-12 h-12 text-red-500" />,
      color: "bg-red-100",
    },
    {
      title: "Enjoy the Menu",
      description:
        "Check prices, read details, and find the perfect meal to enjoy!",
      icon: <Utensils className="w-12 h-12 text-green-500" />,
      color: "bg-green-100",
    },
  ];

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-green-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-green-700"
      >
        How MenuViberen Works 🍽️
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${step.color}`}
            >
              {step.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
