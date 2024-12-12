import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductPage = ({ onTryOn }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleNavigateToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Product Information */}
          <div>
            <h2 className="text-4xl font-bold">{product.name}</h2>
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-4">
              {product.price}
            </p>

            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Choose Size:</h3>
              <div className="mt-2 flex space-x-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? "bg-yellow-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Choose Color:</h3>
              <div className="mt-2 flex space-x-4">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorChange(color)}
                    className={`w-8 h-8 rounded-full cursor-pointer ${
                      selectedColor === color
                        ? "ring-4 ring-yellow-500"
                        : "border-2 border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Try Now Button */}
            <div className="mt-6 flex gap-5">
              <div>
                <button
                  onClick={() => onTryOn(product)}
                  className={`px-6 py-3 bg-yellow-600 font-semibold text-white rounded-lg ${
                    selectedSize && selectedColor
                      ? "hover:bg-yellow-500"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={!selectedSize || !selectedColor}
                >
                  Try Now
                </button>
              </div>

              {/* Buy Now Button */}
              <div>
                <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg hover:bg-green-500">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Reviews</h3>
              <div className="mt-4">
                {product.reviews.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border p-4 mb-4 rounded-lg shadow-lg bg-white"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://i.pravatar.cc/150?img=1"
                          alt="User"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold">{review.user}</p>
                          <p className="text-gray-600">
                            Rating: {review.rating} / 5
                          </p>
                        </div>
                      </div>
                      <p className="mt-2">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">You May Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((item) => item.id !== product.id)
              .map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-80 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-bold text-left">{item.name}</h4>
                  <p className="text-gray-700 text-left font-semibold mt-2">
                    {item.price}
                  </p>
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleNavigateToProduct(item.id)}
                      className="mt-4 px-4 py-2 bg-yellow-600 font-semibold text-white rounded hover:bg-yellow-500"
                    >
                      View Product
                    </button>
                    <button className="mt-4 px-4 py-2 bg-green-600 font-semibold text-white rounded hover:bg-green-500">
                      Buy now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
