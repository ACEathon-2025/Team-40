// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <nav>
        <div className="logo">My Site</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;