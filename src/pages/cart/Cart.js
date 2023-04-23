import { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, getTotalAmount, handleCheckout } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <h1>Your cart items</h1>

        <div className="cart">
          {
            // eslint-disable-next-line
            PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0)
                return <CartItem data={product} key={product.id} />;
            })
          }
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p className="totalAmount">Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue shopping</button>
            <button
              onClick={() => {
                handleCheckout();
                // navigate('/checkout');
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </>
  );
}
