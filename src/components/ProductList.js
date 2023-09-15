import React from 'react';
import { useCart } from '../context/CartContext'; // Import the custom hook
import ProductCard from './ProductCard'; // Import the ProductCard component

function ProductList() {
  const { data, loading } = useCart();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 ">Products List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        
          <ProductCard/>
      </div>
    </div>
  );
}

export default ProductList;
