import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"; // Correct import
import products from "../data/products";

const Spotlight = () => {
  const { addToCart } = useContext(CartContext); // Accessing addToCart from CartContext

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product); // Debugging log
    addToCart(product); // Calling addToCart
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h2 className="md:text-5xl text-4xl font-black text-gray-800 mb-8 text-center">
          Spotlight Collections
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Explore the latest fashion trends handpicked just for you. Whether
          it's timeless elegance or modern flair, our Spotlight collection has
          it all. Upgrade your wardrobe with the best in fashion.
        </p>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300 relative"
            >
              {/* Product Image with Hover Overlay */}
              <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="px-5 py-2 text-sm font-bold text-white bg-transparent border rounded hover:bg-purple-400 shadow-md"
                    onClick={() => handleAddToCart(product)} // Using handleAddToCart here
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Product Badge (New or Best Seller) */}
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  New Arrival
                </div>

                {/* Product Tags */}
                <div className="absolute top-3 left-3 space-x-2 flex">
                  {product.isNew && (
                    <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      On Sale
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600 font-semibold mb-4">
                  {product.price}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-5 items-center mt-6">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-5 py-2 text-sm font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 shadow-md transition"
                  >
                    View Details
                  </Link>
                  <button
                    className="px-5 py-2 text-sm font-bold text-white bg-purple-500 rounded hover:bg-purple-400 shadow-md transition"
                    onClick={() => alert(`Buying ${product.name}!`)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
