// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import ProductList from './components/ProductList';

// const App = () => {
//   return (
  
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<React.Fragment />} />
//           <Route path="/products" element={<ProductList />} />
//           {/* Add other routes for different pages */}
//         </Routes>
//       </div>
   
//   );
// };

// export default App;

import React, { useContext } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<React.Fragment />} />
          <Route path="/products" element={<ProductList />} />
          {/* Add other routes for different pages */}
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;