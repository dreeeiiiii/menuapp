import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {year} Ven Andrei Malabanan Manacop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
