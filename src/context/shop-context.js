import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';
import getStripe from '../pages/checkout/getStripe';

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

  async function handleCheckout() {
    const checkoutObjects = [];
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let envName = `REACT_APP_PUBLIC_STRIPE_PRICE_ID_product${item}`;
        checkoutObjects.push({
          price: process.env[envName],
          quantity: cartItems[item],
        });
      }
      console.log(checkoutObjects);
    }
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: checkoutObjects,
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: 'apoorvan1999@gmail.com',
    });
    console.warn(error.message);
  }

  let context = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCount,
    getTotalAmount,
    checkout,
    handleCheckout,
  };

  return (
    <ShopContext.Provider value={context}>
      {props.children}
    </ShopContext.Provider>
  );
};
