import React from "react";
import logo from "../assets/images/logo.png";
import heroBackground from "../assets/images/bg.png";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center py-6 px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div>
        <img src={logo} alt="Pop Rock Crystal Logo" className="h-12" />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-10 text-white text-lg">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Shop
        </a>
        <a href="#" className="hover:text-gray-300">
          About Us
        </a>
        <a href="#" className="hover:text-gray-300">
          Help
        </a>
      </nav>

      {/* Shopping Bag Icon */}
      <div className="text-white">
        <FaShoppingBag size={24} className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
