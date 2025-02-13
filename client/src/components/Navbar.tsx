import React, { useState } from "react";
import { Search, Heart, ChevronDown } from "react-feather";
import { Link } from "react-router-dom";
import olx_logo from "../assets/olx_logo.svg";
import sell_btn from "../assets/sell_btn.svg";
import olx_plus_btn from "../assets/olx_plus_btn.svg";

const Navbar: React.FC = () => {
  const [location, setLocation] = useState("India");
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={olx_logo} alt="OLX Logo" className="h-8" />
          </Link>

          {/* Location Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-gray-300 hover:border-gray-400 min-w-[120px]"
            >
              <Search className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-800">{location}</span>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>
            {isLocationOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {["Mumbai", "Delhi", "Bangalore", "Kolkata"].map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setIsLocationOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex-1 relative max-w-3xl mx-4">
            <input
              type="text"
              placeholder='Search "Bikes"'
              className="w-full px-4 py-2.5 rounded border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-0 top-0 h-full px-6 flex items-center justify-center bg-[#002f34] rounded-r hover:bg-[#003f44]">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Language Selector */}
          <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-gray-600">
            ENGLISH
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Favorites */}
          <button className="p-2 hover:text-gray-600">
            <Heart className="h-6 w-6" />
          </button>

          {/* Login */}
          <Link to="/login" className="text-sm font-semibold text-gray-800 hover:text-gray-600">
            Login
          </Link>

          {/* Sell Button */}
          <button className="relative inline-flex items-center border-none bg-transparent">
  <div className="relative inline-block">
    <img
      src={sell_btn}
      alt="sell button"
      className="w-[100px] sm:w-[110px] md:w-[120px]"  // Increased width here
    />
    <span className="absolute inset-0 flex justify-center items-center text-white font-bold text-[18px] sm:text-[20px] md:text-[22px]">
      <img src={olx_plus_btn} alt="Plus icon" className="w-8 h-5 mr-1" />
      <span className="text-black"> Sell</span>
    </span>
  </div>
</button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
