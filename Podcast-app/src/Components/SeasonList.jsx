import PropTypes from 'prop-types';

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

SeasonList.propTypes = {
  showId: PropTypes.number.isRequired,
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSeasonSelect: PropTypes.func.isRequired,
};

export default SeasonList;
