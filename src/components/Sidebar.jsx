import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ filters, onFilterChange, onResetFilters, gender }) => {
  
  const [isOpen, setIsOpen] = useState({
    category: true,
    style: true,
    color: true,
    size: true,
    price: true,
    brand: true,
    material: true,
    discount: true,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const filterValue = type === "checkbox" ? checked : value;
    onFilterChange(name, filterValue);
  };

  const filtersByGender = {
    Men: {
      categories: ["T-Shirts", "Shirts", "Hoodies", "Jackets"],
      styles: ["Casual", "Formal", "Gym", "Partywear"],
    },
    Women: {
      categories: ["Dresses", "Blouses", "Skirts", "Tops"],
      styles: ["Casual", "Formal", "Ethnic", "Partywear"],
    },
    Kids: {
      categories: ["T-Shirts", "Shorts", "Sweaters", "Overalls"],
      styles: ["Casual", "Playwear", "Schoolwear"],
    },
  };

  const currentFilters = filtersByGender[gender] || {
    categories: [],
    styles: [],
  };

  const colorOptions = ["Blue", "Black", "Brown", "White", "Green"];
  const sizeOptions = ["S", "M", "L", "XL"];
  const brandOptions = ["Nike", "Adidas", "Puma", "Zara", "H&M"];
  const materialOptions = ["Cotton", "Polyester", "Silk", "Wool"];

  return (
    <aside className="w-80 bg-purple-100 shadow-xl rounded-lg p-6 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-8 text-purple-600 text-center">
        Filters
      </h2>

      {/* Reset Filters */}
      <button
        onClick={onResetFilters}
        className="w-full mb-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
      >
        Reset Filters
      </button>

      {/* Categories */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h3 className="text-lg font-bold text-gray-800">Categories</h3>
          {isOpen.category ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.category && (
          <div className="mt-4 space-y-2">
            {currentFilters.categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="font-medium">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("style")}
        >
          <h3 className="text-lg font-bold text-gray-800">Dress Style</h3>
          {isOpen.style ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.style && (
          <div className="mt-4 space-y-2">
            {currentFilters.styles.map((style) => (
              <label
                key={style}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="style"
                  value={style}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="font-medium">{style}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("color")}
        >
          <h3 className="text-lg font-bold text-gray-800">Colors</h3>
          {isOpen.color ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.color && (
          <div className="mt-4 flex flex-wrap gap-3">
            {colorOptions.map((color) => (
              <button
                key={color}
                name="color"
                value={color}
                onClick={() =>
                  handleChange({ target: { name: "color", value: color } })
                }
                style={{ backgroundColor: color.toLowerCase() }}
                className={`h-8 w-8 rounded-full border-2 ${
                  filters.color === color
                    ? "border-purple-600"
                    : "border-gray-300"
                }`}
              ></button>
            ))}
          </div>
        )}
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("size")}
        >
          <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
          {isOpen.size ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.size && (
          <div className="mt-4 space-y-2">
            {sizeOptions.map((size) => (
              <label
                key={size}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="size"
                  value={size}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="font-medium">{size}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="text-lg font-bold text-gray-800">Price</h3>
          {isOpen.price ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.price && (
          <div className="mt-4">
            <input
              type="range"
              name="price"
              min="0"
              max="10000"
              step="100" // Ensures consistent increments
              value={filters.price || 0} // Fallback to 0 if undefined
              onChange={(e) => onFilterChange("price", Number(e.target.value))} // Update filter value as a number
              className="w-full h-2 bg-gray-300 rounded-lg accent-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-gray-700 mt-2 text-center font-medium">
              ₹{filters.price || 0}
            </p>
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("brand")}
        >
          <h3 className="text-lg font-bold text-gray-800">Brands</h3>
          {isOpen.brand ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.brand && (
          <div className="mt-4 space-y-2">
            {brandOptions.map((brand) => (
              <label
                key={brand}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="font-medium">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("material")}
        >
          <h3 className="text-lg font-bold text-gray-800">Material</h3>
          {isOpen.material ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.material && (
          <div className="mt-4 space-y-2">
            {materialOptions.map((material) => (
              <label
                key={material}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="material"
                  value={material}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="font-medium">{material}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Discount */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("discount")}
        >
          <h3 className="text-lg font-bold text-gray-800">Discount</h3>
          {isOpen.discount ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen.discount && (
          <div className="mt-4 space-y-2">
            <label className="flex items-center space-x-3 text-gray-700">
              <input
                type="checkbox"
                name="discount"
                onChange={handleChange}
                className="h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
              />
              <span className="font-medium">On Discount</span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
