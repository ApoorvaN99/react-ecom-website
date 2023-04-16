import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">My Cart</Link>
        </div>
      </div>
    </>
  );
}
