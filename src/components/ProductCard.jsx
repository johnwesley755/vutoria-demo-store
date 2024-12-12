import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product, onAddToCart, onTryOn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
    >
      {/* Product Image with Hover Overlay */}
      <div className="relative aspect-w-3 aspect-h-4">
        <img
          src={product.image || product.img}
          alt={product.name}
          className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onAddToCart(product)}
            className="px-5 py-2 text-sm font-bold text-white bg-transparent border rounded hover:bg-purple-400 shadow-md"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Badge (New, Best Seller, On Sale) */}
        <div className="absolute top-4 left-4 space-x-2 flex">
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
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="mt-1 text-gray-500 truncate">{product.description}</p>
        <p className="mt-2 text-xl font-bold text-purple-600">
          {product.price}
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-5 items-center">
          <Link
            to={`/product/${product.id}`}
            className="px-5 py-2 text-sm font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 shadow-md transition"
          >
            View Details
          </Link>
          <button
            onClick={() => onTryOn(product)}
            className="px-5 py-2 text-sm font-bold text-white bg-purple-600 rounded hover:bg-purple-700 shadow-md transition"
          >
            Try On
          </button>
          <button
            onClick={() => alert(`Buying ${product.name}!`)}
            className="px-5 py-2 text-sm font-bold text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
