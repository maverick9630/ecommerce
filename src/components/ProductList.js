// src/components/ProductList.js
import React from 'react';
import { useCart } from '../context/CartContext'; // Import the custom hook

function ProductList() {
  const { data, loading } = useCart();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
