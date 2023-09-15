import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const { data } = useCart(); // Use the useCart hook to access the context data

  // Find the product with the matching productId
  const product = data.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white p-4 mt-10 m-8 shadow-lg rounded-lg flex">
      <div className="w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.company}</p>
        <p className="text-lg text-gray-700">${product.price}</p>
        {product.featured && (
          <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs uppercase">
            Featured
          </span>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Description:</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Colors:</h3>
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
