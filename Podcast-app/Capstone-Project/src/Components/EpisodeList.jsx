import React from 'react';

const EpisodeList = ({ episodes, onEpisodeSelect }) => {
  return (
    <div>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button onClick={() => onEpisodeSelect(episode.id)}>
              {episode.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
