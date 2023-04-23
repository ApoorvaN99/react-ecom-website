import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';
import Success from './pages/success/Success';
import Cancel from './pages/cancel/Cancel';

function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout"></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/cancel" element={<Cancel />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
