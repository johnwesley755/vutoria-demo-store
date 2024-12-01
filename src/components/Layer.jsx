import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
const WomensCollection = () => {
  const womensProducts = products.filter(
    (product) => product.category === "Women's Fashion"
  );

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="md:text-5xl text-4xl font-black text-gray-800 mb-16 text-center">
          Women's Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {womensProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                  {product.name}
                </h3>
                <p className=" text-gray-600 font-semibold mb-4">
                  {product.price}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-5">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-5 py-2 text-sm font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 shadow-md transition"
                  >
                    View Details
                  </Link>
                  <button
                    className="px-5 py-2 text-sm font-bold text-white bg-yellow-500 rounded hover:bg-yellow-400 shadow-md transition"
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

export default WomensCollection;
