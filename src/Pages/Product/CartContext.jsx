import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
            return prevCart.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + product.qty } : item
            );
        }
        return [...prevCart, product];
    });
};


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
