import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateItemCount } =
    useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItemCount}
            onChange={(e) => updateItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
