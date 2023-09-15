import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = () => {
  const { data } = useCart(); // Use the useCart hook to access the context data

  return (
    <div className="bg-white shadow-lg rounded-lg ">
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.company}</p>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-xl text-gray-700">${product.price}</p>
              {product.featured && (
                <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs uppercase">
                  Featured
                </span>
              )}
            </div>
            <div className="mt-2">
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
      ))}
    </div>
  );
};

export default ProductCard;
