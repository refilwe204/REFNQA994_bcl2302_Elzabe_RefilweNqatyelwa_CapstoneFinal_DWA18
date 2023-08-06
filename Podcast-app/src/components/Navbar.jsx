
import PropTypes from 'prop-types';



const Navbar = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <div className="navbar-container">
      <button onClick={() => handleNavigation('home')}>Home</button>
      <button onClick={() => handleNavigation('favorite')}>Favorites</button>
      <button onClick={() => handleNavigation('preview')}>Preview</button>
      <button onClick={() => handleNavigation('history')}>History</button> 
    </div>
  );
};


Navbar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Navbar;
