import React, { useContext, useState } from "react";
import { Search, Heart, ChevronDown, Menu, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import olx_logo from "../assets/olx_logo.svg";
import sell_btn from "../assets/sell_btn.svg";
import olx_plus_btn from "../assets/olx_plus_btn.svg";
import { AuthContext } from "../context/AuthProvider";
import { showInfoToast } from "../utils/toastNotifications";



const Navbar: React.FC = () => {
  const navigate=useNavigate()
  const [location, setLocation] = useState("India");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const auth = useContext(AuthContext);
  const handleSell = () => {
    const user = localStorage.getItem("token");
    console.log("andi user",user)
    if (!user) {
      showInfoToast("please login");
      return 
    }
    navigate("/addProduct")
    
   
   
 }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex-shrink-0">
          <img
  src={olx_logo}
  alt="OLX Logo"
  className="w-16 sm:w-20 md:w-24 lg:w-20 xl:w-16"
/>

          </Link>
          <button
            className="lg:hidden p-2 text-gray-800 hover:text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden lg:flex items-center gap-4 w-full">
            <div className="relative w-48">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-gray-300 hover:border-gray-400 w-full"
                aria-label="Select location"
              >
                <Search className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-800 truncate">{location}</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </button>
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {["Mumbai", "Delhi", "Bangalore", "Kolkata"].map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setLocation(city);
                          setIsLocationOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 relative max-w-3xl">
              <input
                type="text"
                placeholder='Search "Bikes"'
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search"
              />
              <button
                className="absolute right-0 top-0 h-full px-6 flex items-center justify-center bg-[#002f34] rounded-r hover:bg-[#003f44]"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-gray-600">
              ENGLISH
              <ChevronDown className="h-4 w-4" />
            </button>

            <button className="p-2 text-gray-800 hover:text-gray-600">
              <Heart className="h-6 w-6" />
            </button>

            {
              auth?.user ? <button onClick={()=>auth.logoutUser()}>Logout</button> : (
                <Link to={"/login"}  className="text-sm font-semibold text-gray-800 hover:text-gray-600">
              Login
            </Link>
              )
            }
            <button onClick={handleSell} className="relative inline-flex items-center border-none bg-transparent">
              <div className="relative inline-block">
                <img
                  src={sell_btn}
                  alt="Sell on OLX"
                  className="w-[80px] sm:w-[90px] md:w-[100px]"
                />
                <span className="absolute inset-0 flex justify-center items-center text-white font-bold text-lg" >
                  <img
                    src={olx_plus_btn}
                    alt="Plus icon"
                    className="w-6 h-4 mr-1"
                  />
                  <span className="text-black">Sell</span>
                </span>
              </div>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 bg-white rounded-lg shadow-lg">
            <div className="space-y-4">
            
              <div className="relative">
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-gray-300 hover:border-gray-400 w-full"
                >
                  <Search className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-800 truncate">{location}</span>
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </button>
                {isLocationOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {["Mumbai", "Delhi", "Bangalore", "Kolkata"].map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setLocation(city);
                            setIsLocationOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder='Search "Bikes"'
                  className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-0 top-0 h-full px-6 flex items-center justify-center bg-[#002f34] rounded-r hover:bg-[#003f44]">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
              <button className="block text-sm font-semibold text-gray-800 hover:text-gray-600">
                ENGLISH
              </button>

              <button className="block text-sm font-semibold text-gray-800 hover:text-gray-600">
                Favorites <Heart className="h-5 w-5 inline" />
              </button>

              {auth?.user ? <button onClick={()=>auth.logoutUser()}>Logout</button> : (
                <Link to="/login" className="block text-sm font-semibold text-gray-800 hover:text-gray-600">
                Login
              </Link>
              )}

              <Link to={"/AddProduct"} className="relative w-full max-w-[100px] mx-auto" onClick={()=>navigate("/AddProduct")}>
  <img
    src={sell_btn}
    alt="Sell on OLX"
    className="w-full"
  />
  <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-lg">
    Sell
  </span>
</Link>


            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;