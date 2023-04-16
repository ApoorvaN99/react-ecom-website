import { PRODUCTS } from '../../products';
import { Product } from './Product';
import './Shop.css';

export default function Shop() {
  return (
    <>
      <div className="shop">
        <div className="shop-title">
          <h1>BuyBee</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
