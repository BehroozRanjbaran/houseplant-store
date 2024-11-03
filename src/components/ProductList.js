import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductList.css';

const products = [
  { id: 1, name: 'Snake Plant', price: 15.99, category: 'Low Light' },
  { id: 2, name: 'Pothos', price: 12.99, category: 'Low Light' },
  { id: 3, name: 'Monstera', price: 29.99, category: 'Medium Light' },
  { id: 4, name: 'Fiddle Leaf Fig', price: 49.99, category: 'High Light' },
  { id: 5, name: 'ZZ Plant', price: 18.99, category: 'Low Light' },
  { id: 6, name: 'Bird of Paradise', price: 39.99, category: 'High Light' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Our Houseplants</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/images/${product.name.toLowerCase().replace(' ', '-')}.jpg`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
