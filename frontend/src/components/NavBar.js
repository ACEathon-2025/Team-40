// navbar.js (or src/components/Navbar.js)

import React from 'react';

function Navbar() {
  return (
    <header className="site-header">
      <nav>
        <div className="logo">Cyber App</div>
        
        {/* The list of your navigation links */}
        <ul className="nav-links">
          {/* Link to the Dashboard content */}
          <li><a href="/">Dashboard</a></li> 
          
          {/* Link to the Cyberscore content */}
          <li><a href="/cyberscore">Cyberscore</a></li> 
          
          {/* Link to the Detector content */}
          <li><a href="/detector">Detector</a></li> 
          
          {/* Link to the Password Tester content */}
          <li><a href="/tester">Password Tester</a></li> 
          
          {/* You might use the main frontend.js content as the default/home */}
          <li><a href="/home">Home</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;