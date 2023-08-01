import { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ onSortChange, onFilterChange }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoriesClick = () => {
    setShowCategories((prevShowCategories) => !prevShowCategories);
  };

  const handleSortOptionClick = (option) => {
    setShowCategories(false); // Close the dropdown when an option is selected
    onSortChange(option); // Call the onSortChange prop with the selected option
  };

  const handleFilterInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const handleSearchButtonClick = () => {
    onFilterChange(searchQuery); // Call the onFilterChange prop with the search query
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <button onClick={handleCategoriesClick}>
              Categories
              <ul className={`categories-dropdown ${showCategories ? 'show' : ''}`}>
                <li onClick={() => handleSortOptionClick('A-Z')}>Sort from A-Z</li>
                <li onClick={() => handleSortOptionClick('Z-A')}>Sort from Z-A</li>
                <li onClick={() => handleSortOptionClick('AscendingDate')}>Sort by ascending date</li>
                <li onClick={() => handleSortOptionClick('DescendingDate')}>Sort by descending date</li>
              </ul>
            </button>
          </li>
          <li><a href="#about" onClick={handleAboutClick}>About</a></li>
        </ul>
      </nav>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleFilterInputChange}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>

      {showAbout && (
        <div className="about-popup">
          <div className="about-content">
            <h2>About This Podcast</h2>
            {/* ... (rest of the about content) ... */}
            <button onClick={handleCloseAbout}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Header;
