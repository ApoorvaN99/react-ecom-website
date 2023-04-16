import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) cart[i] = 0;
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      let itemInfo = PRODUCTS.find((product) => Number(item) === product.id);
      totalAmount += cartItems[item] * itemInfo.price;
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateItemCount = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  let context = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCount,
    getTotalAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={context}>
      {props.children}
    </ShopContext.Provider>
  );
};
