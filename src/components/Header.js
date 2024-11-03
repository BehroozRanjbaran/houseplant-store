import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <h1>GreenThumb</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span className="cart-quantity">{cartQuantity}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
