import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
};
