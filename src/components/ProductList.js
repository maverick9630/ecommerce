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
      <h1 className="text-2xl font-semibold m-4 flex justify-center items-center">Products List</h1>
      <div>
        
          <ProductCard/>
      </div>
    </div>
  );
}

export default ProductList;
