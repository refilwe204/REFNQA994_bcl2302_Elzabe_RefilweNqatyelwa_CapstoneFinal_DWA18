import PropTypes from 'prop-types';

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

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // Add more PropTypes as needed for other properties of the 'episodes' object
    })
  ).isRequired,
  onEpisodeSelect: PropTypes.func.isRequired,
};

export default EpisodeList;
