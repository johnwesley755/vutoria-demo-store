import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Mens = () => {
  const [filters, setFilters] = useState({
    category: [],
    style: [],
    color: [],
    size: [],
    price: 1000,
  });

  const [sortOption, setSortOption] = useState("default");

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

  const filteredProducts = products
    .filter((product) => {
      return (
        product.gender === "Men" &&
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mens Collection"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Men's Collection</h1>
          <p className="text-lg">
            Unleash your style with the latest trends in men's fashion.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="p-4 bg-gray-100">
        <nav className="text-sm">
          <ul className="flex space-x-2">
            <li>
              <a href="/" className="text-gray-600 text-xl font-semibold hover:underline">
                Home
              </a>
            </li>
            <li className="font-semibold text-xl">/</li>
            <li className="text-gray-900 font-semibold text-xl">Men's Section</li>
          </ul>
        </nav>
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar filters={filters} onFilterChange={handleFilterChange} />

        {/* Product Grid */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Explore Our Men's Products</h1>

            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="bg-gray-100 border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
            >
              <option value="default">Sort by Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-600">
                No products match your filters. Try adjusting the filters.
              </p>
            )}
          </div>
        </main>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-green-100 text-black py-10 mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Don’t Miss Out!</h2>
        <p className="text-lg mb-6">
          Limited-time offers on exclusive men's collections.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition">
          Explore Deals
        </button>
      </div>
    </div>
  );
};

export default Mens;
