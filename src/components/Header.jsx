import React, { useState } from "react";
import logoImg from "../assets/logo-1.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Cart state to hold added items

  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Add item to cart
  };

  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logoImg} alt="Vutoria Logo" className="w-32" />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#men"
            className="text-gray-700 hover:text-gray-900 font-medium transition duration-300"
          >
            Men
          </a>
          <a
            href="#women"
            className="text-gray-700 hover:text-gray-900 font-medium transition duration-300"
          >
            Women
          </a>
          <a
            href="#kids"
            className="text-gray-700 hover:text-gray-900 font-medium transition duration-300"
          >
            Kids
          </a>
          <a
            href="#accessories"
            className="text-gray-700 hover:text-gray-900 font-medium transition duration-300"
          >
            Accessories
          </a>
        </nav>

        {/* Search and Cart Section */}
        <div className="flex items-center space-x-6">
          {/* Search Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>

          {/* Cart Icon */}
          <Link to="/cart">
            <button className="relative text-gray-700 hover:text-gray-900 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.34 2M7 13h10l4-8H5.36m1.25 8L5.41 5m2 12h10m0 0c0 .825-.675 1.5-1.5 1.5h-9c-.825 0-1.5-.675-1.5-1.5m12.5 0c0 .825-.675 1.5-1.5 1.5m-9 0c0 .825-.675 1.5-1.5 1.5m12.5-3h1"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                  {cartItems.length}
                </span>
              )}
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar for Mobile Navigation */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div className="w-3/4 bg-white h-full shadow-md flex flex-col">
            <button
              className="self-end m-4 text-gray-700 focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col space-y-4 px-8 mt-8">
              <a
                href="#men"
                className="text-gray-700 hover:text-purple-500 font-medium transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Men
              </a>
              <a
                href="#women"
                className="text-gray-700 hover:text-purple-500 font-medium transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Women
              </a>
              <a
                href="#kids"
                className="text-gray-700 hover:text-purple-500 font-medium transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Kids
              </a>
              <a
                href="#accessories"
                className="text-gray-700 hover:text-purple-500 font-medium transition duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                Accessories
              </a>
            </nav>
          </div>
          <div className="w-1/4" onClick={() => setIsSidebarOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Header;
