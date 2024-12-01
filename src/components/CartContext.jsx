// components/CartContext.jsx
import React, { createContext, useState } from "react";

// Create the context for the cart
export const CartContext = createContext();

// CartProvider component to provide the cart context to children components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
