import {Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // Create this component

const App = () => {
  return (
   
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<React.Fragment />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} /> {/* Define a route for product details */}
        </Routes>
      </div>
  
  );
};

export default App;