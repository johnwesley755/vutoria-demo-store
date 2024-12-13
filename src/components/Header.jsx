import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import logoImg from "../assets/logo-1.png";

const Header = () => {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = async () => {
    await logout();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  // Close the sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isSidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".toggle-btn")
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logoImg}
          alt="E-Commerce Logo"
          className="h-10 w-auto md:h-12"
        />
      </Link>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-md bg-gray-100 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-600 transition mx-4"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="flex-1 px-4 py-2 text-gray-700 bg-transparent border-none outline-none"
        />
        <button
          type="submit"
          className="text-black font-bold px-4 py-2 flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </form>

      {/* Navigation */}
      <nav className="hidden md:flex items-center font-semibold space-x-6">
        <Link to="/" className="text-gray-700 hover:text-purple-600 transition">
          Home
        </Link>
        <Link
          to="/mens"
          className="text-gray-700 hover:text-purple-600 transition"
        >
          Mens
        </Link>
        <Link
          to="/womens"
          className="text-gray-700 hover:text-purple-600 transition"
        >
          Womens
        </Link>
        <Link
          to="/kids"
          className="text-gray-700 hover:text-purple-600 transition"
        >
          Kids
        </Link>
        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-purple-600 flex items-center"
        >
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs rounded-full px-2 py-1">
            3
          </span>
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition"
          >
            <FiLogOut className="mr-1" />
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition"
            >
              <FiLogIn className="mr-1" />
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition"
            >
              <FiUserPlus className="mr-1" />
              Sign Up
            </Link>
          </>
        )}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleSidebar}
        className="toggle-btn md:hidden text-purple-600 focus:outline-none"
      >
        <FaBars className="text-xl" />
      </button>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar absolute font-semibold top-0 left-0 w-2/3 h-screen bg-white shadow-lg z-50 flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="/mens"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Mens
          </Link>
          <Link
            to="/womens"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Womens
          </Link>
          <Link
            to="/kids"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Kids
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-purple-600 transition flex items-center"
            onClick={toggleSidebar}
          >
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                toggleSidebar();
              }}
              className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition"
            >
              <FiLogOut className="mr-1" />
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition"
                onClick={toggleSidebar}
              >
                <FiLogIn className="mr-1" />
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition"
                onClick={toggleSidebar}
              >
                <FiUserPlus className="mr-1" />
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
