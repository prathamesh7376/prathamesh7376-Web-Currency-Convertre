import React from "react";
import logo from "../assets/Prathamesh_Logo.png";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="/" className="flex items-center">
            <img
              src={logo} // Replace with your logo URL
              alt="Logo"
              className="h-16 w-24 mr-2 rounded-md"
            />
            Web Currency Converter
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Know More
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
