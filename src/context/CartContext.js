// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a custom hook to access the context
export function useCart() {
  return useContext(CartContext);
}

// Create a provider component
export function CartProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.pujakaitem.com/api/products');
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider value={{ data, loading }}>
      {children}
    </CartContext.Provider>
  );
}
