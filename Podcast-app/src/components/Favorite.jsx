import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Favorite = ({ favorites, setFavorites }) => { // Pass 'setFavorites' from App.js
  const [localFavorites, setLocalFavorites] = useState(favorites);

  const removeFromFavorites = (episode) => {
    setLocalFavorites((prevFavorites) =>
      prevFavorites.filter((favEpisode) => favEpisode !== episode)
    );
  };

  useEffect(() => {
    // Update the 'favorites' state in the parent component when 'localFavorites' changes
    setFavorites(localFavorites);
  }, [localFavorites, setFavorites]);

  return (
    <div className="favorite-container">
      <h1>Your Favorites</h1>
      {localFavorites.length > 0 ? (
        localFavorites.map((episode, index) => (
          <div key={index} className="favorite-item">
            <h3>{episode.title}</h3>
            <h4>{episode.season}</h4>
            <h4>{episode.title}</h4>
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
