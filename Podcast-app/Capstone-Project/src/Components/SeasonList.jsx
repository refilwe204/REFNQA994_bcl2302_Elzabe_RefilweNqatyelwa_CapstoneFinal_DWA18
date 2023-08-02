import React from 'react';

const SeasonList = ({ showId, seasons, onSeasonSelect }) => {
  return (
    <div>
      <h2>Seasons</h2>
      <ul>
        {seasons.map((season) => (
          <li key={season.id}>
            <button onClick={() => onSeasonSelect(showId, season.id)}>
              Season {season.number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonList;
