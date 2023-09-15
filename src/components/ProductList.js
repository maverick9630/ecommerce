import React, { useState } from 'react'; // Import useState
import { useCart } from '../context/CartContext'; // Import the custom hook
import ProductCard from './ProductCard'; // Import the ProductCard component
import Header from './Header';
import { Fragment } from 'react-router-dom'; // Import the Fragment component from React Router

function ProductList() {
  const { data, loading } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold m-4 flex justify-center items-center">Products List</h1>
      <>
        <Header onSearch={handleSearch} /> {/* Wrap the Header component in a Fragment */}
        <ProductCard products={filteredProducts} /> {/* Pass filtered products as a prop */}
      </>
    </div>
  );
}

export default ProductList;


// import React, { useState } from 'react'; // Import useState
// import { useCart } from '../context/CartContext'; // Import the custom hook
// import ProductCard from './ProductCard'; // Import the ProductCard component
// import Header from './Header';

// function ProductList() {
//   const { data, loading } = useCart();
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const filteredProducts = data.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold m-4 flex justify-center items-center">Products List</h1>
//       <Header onSearch={handleSearch} /> {/* Pass onSearch function as a prop */}

//       <div>
//         <ProductCard products={filteredProducts} /> {/* Pass filtered products as a prop */}
//       </div>
//     </div>
//   );
// }

// export default ProductList;

