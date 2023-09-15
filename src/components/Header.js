import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch function
    onSearch(searchQuery);
  };

  return (
    <div className='flex items-center justify-between shadow-md p-2'>
      <div className='flex items-center m-1 p-1'>
        <img src={logo} alt="logo" className='h-12' />
        <span className='ml-1 font-bold text-2xl'>MRINAL</span>
      </div>

      <div className='p-2'>
        <NavLink to="/home" className='p-2'>Home</NavLink>
        <NavLink to="/products" className='p-2'>Products</NavLink>
        <NavLink to="/about" className='p-2'>About Us</NavLink>
        <NavLink to="/contact" className='p-2'>Contact</NavLink>
      </div>

      <div className='relative'>
        <form onSubmit={handleSearchSubmit}>
          <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500'>
            <FaSearch />
          </span>
          <input
            type="search"
            className="border rounded-lg p-2 pr-10 pl-10 focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

// Define the onSearch function inside the Header component
Header.defaultProps = {
  onSearch: () => {},
};

export default Header;
