import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Coffee, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white text-center relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full opacity-10 animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-6"
      >
        🍽️ Ready to Discover Delicious Menus?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
      >
        Join <span className="font-semibold">MenuViberen</span> and explore the best dishes from local stores near you.  
        It's free, fast, and full of flavors!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/signup")}
        className="bg-white text-red-500 px-10 py-4 rounded-3xl text-lg md:text-xl font-bold shadow-lg hover:shadow-2xl transition flex items-center justify-center gap-2 mx-auto"
      >
        <Coffee className="w-6 h-6" />
        Create Your Free Account
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 text-sm md:text-base"
      >
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="underline hover:text-yellow-200 font-medium"
        >
          Login here
        </button>
      </motion.p>
    </section>
  );
};

export default CallToAction;
