import {Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  return (
   
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<React.Fragment />} />
          <Route path="/products" element={<ProductList />} />
          {/* Add other routes for different pages */}
        </Routes>
      </div>
  
  );
};

export default App;