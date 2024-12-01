import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="max-w-xl mt-20 mb-20 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Cart
      </h2>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((product, index) => {
            const price = Number(product.price); // Convert price to a number
            return (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border"
              >
                <div>
                  <span className="block text-lg font-medium text-gray-800">
                    {product.name}
                  </span>
                </div>
                <span className="text-lg font-semibold text-blue-600">
                  ${price.toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-4">Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
