import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ favorites, setFavorites }) => {
  const [localFavorites, setLocalFavorites] = useState(favorites);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending

  const removeFromFavorites = (episode) => {
    setLocalFavorites((prevFavorites) =>
      prevFavorites.filter((favEpisode) => favEpisode !== episode)
    );
  };

  useEffect(() => {
    // Update the 'favorites' state in the parent component when 'localFavorites' changes
    setFavorites(localFavorites);
  }, [localFavorites, setFavorites]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredAndSortedFavorites = localFavorites
    .filter((episode) =>
      episode.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
   
    .sort((a, b) => {
      if (sortOrder === 'asc' || sortOrder === 'desc') {
        const titleComparison = a.title.localeCompare(b.title);
        return sortOrder === 'asc' ? titleComparison : -titleComparison;
      } else if (sortOrder === 'asc-date' || sortOrder === 'desc-date') {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'asc-date' ? dateA - dateB : dateB - dateA;
      }
    });
  
  return (
    <div className="favorite-container">
      <h1>Your Favorites</h1>
      <div className="favorite-controls">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
  <option value="asc">Sort A-Z</option>
  <option value="desc">Sort Z-A</option>
  <option value="asc-date">Sort Ascending Date</option>
  <option value="desc-date">Sort Descending Date</option>
     </select>

      </div>
      {filteredAndSortedFavorites.length > 0 ? (
        filteredAndSortedFavorites.map((episode, index) => (
          <div key={index} className="favorite-item">
            <h3>{episode.title}</h3>
            <h4>{episode.season}</h4>
            <p>{episode.description}</p>
            <button onClick={() => removeFromFavorites(episode)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favorite episodes found.</p>
      )}
    </div>
  );
};

Favorite.propTypes = {
  favorites: PropTypes.array.isRequired,
  setFavorites: PropTypes.func.isRequired,
};

export default Favorite;
