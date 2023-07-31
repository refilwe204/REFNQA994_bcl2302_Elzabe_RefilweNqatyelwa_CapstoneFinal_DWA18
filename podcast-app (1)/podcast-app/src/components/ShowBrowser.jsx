import PropTypes from 'prop-types';
import './ShowBrowser.css';

const ShowBrowser = ({ shows }) => {
  return (
    <div className="show-browser">
      {shows.map((show) => (
        <div key={show.id} className="show-item">
          <img src={show.previewImage} alt={`Preview - ${show.title}`} />
          <h3>{show.title}</h3>
          <p>Seasons: {show.numSeasons}</p>
          <p>Last Updated: {show.lastUpdated}</p>
          <p>Genres: {show.genres.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

// Prop-types validation
ShowBrowser.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      numSeasons: PropTypes.number.isRequired,
      lastUpdated: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ShowBrowser;
