import React from 'react';

const Navbar = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <div className="navbar-container">
      <button onClick={() => handleNavigation('home')}>Home</button>
      <button onClick={() => handleNavigation('favorite')}>Favorites</button>
      <button onClick={() => handleNavigation('preview')}>Preview</button>
      <button onClick={() => handleNavigation('history')}>History</button> {/* Add the History button */}
    </div>
  );
};

export default Navbar;
