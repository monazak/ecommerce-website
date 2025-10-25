import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // ✅ Default items that appear when the cart loads
  const defaultCart = [
    {
      id: 100,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/productsImages/lcd.png",
    },
    {
      id: 101,
      name: "Gaming Headset",
      price: 500,
      quantity: 2,
      image: "/productsImages/habd.png",
    },
  ];

  // ✅ Initialize cart with default items
  const [cart, setCart] = useState(defaultCart);

  // ✅ Add full product object
const addToCart = (product) => {
  setCart((prev) => {
    // Check if product already exists in cart (default items or added)
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      // Increase quantity if already exists
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    // Add new product
    return [...prev, { ...product, quantity: 1 }];
  });
};

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
