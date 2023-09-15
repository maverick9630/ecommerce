import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
  return (
    <div className="bg-white p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="max-w-xs mx-auto shadow-lg rounded-lg mb-5">
          <img src={product.image} alt={product.name} />
          <div className="p-2">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.company}</p>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-base text-gray-700">${product.price}</p>
              {product.featured && (
                <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs uppercase">
                  Featured
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            {/* Link to the product detail page with the productId */}
            <Link
              to={`/product/${product.id}`}
              className="bg-blue-500 text-white p-3 rounded-full text-xs uppercase"
            >
              Product Info
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

