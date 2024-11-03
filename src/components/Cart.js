import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={`/images/${item.name.toLowerCase().replace(' ', '-')}.jpg`} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Items: {cart.totalQuantity}</p>
            <p>Total Amount: ${cart.totalAmount.toFixed(2)}</p>
          </div>
          <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>Checkout</button>
          <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
