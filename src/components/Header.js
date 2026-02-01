// src/components/Header.js

import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">StreamingSite</div>
      <SearchBar />
    </header>
  );
};

export default Header;
