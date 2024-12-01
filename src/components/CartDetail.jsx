import React from "react";
import { Link } from "react-router-dom";

const CartDetail = ({ cartItems }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-black text-gray-800 mb-8 text-center">
        Your Cart
      </h2>
      <div className="grid gap-8">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
              <p className="font-semibold text-gray-700">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/checkout"
          className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDetail;
