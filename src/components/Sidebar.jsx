import React, { useState } from "react";

const Sidebar = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState({
    category: true,
    style: true,
    color: true,
    size: true,
    price: true,
    rating: true,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const filterValue = type === "checkbox" ? checked : value;
    onFilterChange(name, filterValue);
  };

  return (
    <aside className="w-72 bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
          <span className="text-sm text-gray-500">
            {isOpen.category ? "▲" : "▼"}
          </span>
        </div>
        {isOpen.category && (
          <div className="mt-3 space-y-2">
            {["T-Shirts", "Shirts", "Hoodies", "Jackets"].map((category) => (
              <label
                key={category}
                className="block text-gray-700 hover:text-purple-600 transition"
              >
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("style")}
        >
          <h3 className="text-lg font-semibold text-gray-800">Dress Style</h3>
          <span className="text-sm text-gray-500">
            {isOpen.style ? "▲" : "▼"}
          </span>
        </div>
        {isOpen.style && (
          <div className="mt-3 space-y-2">
            {["Casual", "Formal", "Gym", "Partywear"].map((style) => (
              <label
                key={style}
                className="block text-gray-700 hover:text-purple-600 transition"
              >
                <input
                  type="checkbox"
                  name="style"
                  value={style}
                  onChange={handleChange}
                  className="mr-2"
                />
                {style}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("color")}
        >
          <h3 className="text-lg font-semibold text-gray-800">Color</h3>
          <span className="text-sm text-gray-500">
            {isOpen.color ? "▲" : "▼"}
          </span>
        </div>
        {isOpen.color && (
          <div className="mt-3 space-y-2">
            {["Blue", "Black", "Brown", "White", "Green"].map((color) => (
              <label
                key={color}
                className="block text-gray-700 hover:text-purple-600 transition"
              >
                <input
                  type="checkbox"
                  name="color"
                  value={color}
                  onChange={handleChange}
                  className="mr-2"
                />
                {color}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("size")}
        >
          <h3 className="text-lg font-semibold text-gray-800">Size</h3>
          <span className="text-sm text-gray-500">
            {isOpen.size ? "▲" : "▼"}
          </span>
        </div>
        {isOpen.size && (
          <div className="mt-3 space-y-2">
            {["S", "M", "L", "XL"].map((size) => (
              <label
                key={size}
                className="block text-gray-700 hover:text-purple-600 transition"
              >
                <input
                  type="checkbox"
                  name="size"
                  value={size}
                  onChange={handleChange}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="text-lg font-semibold text-gray-800">Price</h3>
          <span className="text-sm text-gray-500">
            {isOpen.price ? "▲" : "▼"}
          </span>
        </div>
        {isOpen.price && (
          <div className="mt-3">
            <input
              type="range"
              name="price"
              min="0"
              max="1000"
              value={filters.price}
              onChange={handleChange}
              className="w-full accent-purple-600"
            />
            <p className="text-gray-700 mt-2">₹{filters.price}</p>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("rating")}
        >
          <h3 className="text-lg font-semibold text-gray-800">Rating</h3>
          <span className="text-sm text-gray-500">
            {isOpen.rating ? "▲" : "▼"}
          </span>
        </div>
        {isOpen.rating && (
          <div className="mt-3 space-y-2">
            {[5, 4, 3, 2].map((stars) => (
              <label
                key={stars}
                className="block text-gray-700 hover:text-purple-600 transition"
              >
                <input
                  type="checkbox"
                  name="rating"
                  value={stars}
                  onChange={handleChange}
                  className="mr-2"
                />
                {stars} Stars & Up
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
