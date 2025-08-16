import React from "react";
import Navbar from "./components/NavigationBar";
import  { useEffect, useState } from "react";
import { fetchMenu } from "../src/services/api";
import { useNavigate } from "react-router-dom";


function App() {

  
    const Home = () => {
    const navigate = useNavigate();

    return (
      <section className="text-center px-6 py-20 bg-light">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Welcome to MenuApp 🍽️
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-700">
          A simple platform where <b>business owners</b> can showcase their menu,
          and <b>customers</b> can explore and order easily.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-dark hover:bg-accent text-white px-6 py-2 rounded-lg transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-accent hover:bg-dark text-white px-6 py-2 rounded-lg transition"
          >
            Sign Up
          </button>
        </div>
      </section>
    );
  };


  const MenuList = () => {
    const [menu, setMenu] = useState([]);
  
    useEffect(() => {
      fetchMenu()
        .then((res) => setMenu(res || []))
        .catch((err) => {
          console.error("Failed to fetch menu:", err);
          setMenu([]);
        });
    }, []);
  
    return (
      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          Our Menu 🍴
        </h1>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition border border-gray-100"
            >
              <h2 className="font-semibold text-lg text-dark">{item.name}</h2>
              <p className="text-gray-600">₱{item.price}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  

  

  return (
    <div>
      <Navbar />
      <Home />
      <MenuList />
    </div>
  );
}

export default App;
