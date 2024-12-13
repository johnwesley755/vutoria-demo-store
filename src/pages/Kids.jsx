import React, { useState } from "react";
import Slider from "react-slick";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mens = () => {
  const [filters, setFilters] = useState({
    category: [],
    style: [],
    color: [],
    size: [],
    price: 1000,
  });

  const [sortOption, setSortOption] = useState("default");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: Array.isArray(prev[name])
        ? prev[name].includes(value)
          ? prev[name].filter((v) => v !== value)
          : [...prev[name], value]
        : value,
    }));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        product.gender === "Kids" &&
        (!filters.category.length ||
          filters.category.includes(product.category)) &&
        (!filters.style.length || filters.style.includes(product.style)) &&
        (!filters.color.length ||
          product.colors.some((c) => filters.color.includes(c))) &&
        (!filters.size.length ||
          filters.size.some((s) => product.sizes.includes(s))) &&
        parseInt(product.price.replace("₹", "")) <= filters.price
      );
    })
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") {
        return (
          parseInt(a.price.replace("₹", "")) -
          parseInt(b.price.replace("₹", ""))
        );
      }
      if (sortOption === "priceHighToLow") {
        return (
          parseInt(b.price.replace("₹", "")) -
          parseInt(a.price.replace("₹", ""))
        );
      }
      return 0;
    });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

      {/* Hero Section with Slider */}
      <div className="bg-gray-100 mt-1">
        <div className="relative opacity-90">
          <img
            src="https://i.pinimg.com/originals/3c/41/ab/3c41ab736bc52789af651115e4f0a980.jpg"
            alt="Kids Collection"
            className="w-full h-auto max-h-[600px] object-cover sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>

      <header className="bg-purple-200 text-black py-4 px-6 shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Kids Store</h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-purple-500 px-4 py-2 rounded-md"
          >
            Filters
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-20 transform transition-transform duration-300 lg:static lg:transform-none ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            gender="Kids"
          />
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-500 lg:hidden"
          >
            Close
          </button>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:pl-6">
          {/* Sort and Breadcrumb */}
          <div className="flex justify-between items-center mb-4">
            <nav className="text-sm text-gray-600">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              / <span className="font-semibold">Kids Section</span>
            </nav>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="bg-gray-100 border rounded-md px-3 py-1 focus:ring-2 focus:ring-purple-500"
            >
              <option value="default">Sort by Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-600 col-span-full">
                No products match your filters. Try adjusting the filters.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mens;
