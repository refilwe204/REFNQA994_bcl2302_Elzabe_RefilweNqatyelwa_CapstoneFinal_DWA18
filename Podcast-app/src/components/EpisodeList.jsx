import PropTypes from 'prop-types';

/**
 * EpisodeList component renders a list of podcast episodes.
 *
 * @param {Object} props - The props for the component.
 * @param {Object[]} props.episodes - An array of episode objects with id and title properties.
 * @param {Function} props.onEpisodeSelect - The callback function to handle when an episode is selected.
 */
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

// PropTypes for type checking and validation
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
