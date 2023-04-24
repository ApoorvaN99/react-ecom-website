import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './Navbar.css';
import { ShopContext } from '../context/shop-context';

export default function Navbar() {
  const { getNumberOfItems } = useContext(ShopContext);
  let numOfItems = getNumberOfItems();
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            My Cart {numOfItems > 0 && <>({numOfItems})</>}
          </Link>
        </div>
      </div>
    </>
  );
}
