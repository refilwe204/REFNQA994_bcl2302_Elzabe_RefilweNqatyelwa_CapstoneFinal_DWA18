import { useState } from 'react';
import PropTypes from 'prop-types';

const ShowList = (props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const showsToDisplay = showAll ? props.shows : props.shows.slice(0, 8);
  const hasMoreShows = props.shows.length > showsToDisplay.length;

  return (
    <div className="container">
      <h2>All Shows</h2>
      <div className="row">
        {showsToDisplay.map((show) => (
          <div key={show.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={show.image} alt={show.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{show.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Seasons: {show.seasons}</li>
                <li className="list-group-item">
                  Last Updated: {formatDate(show.updated)}
                </li>
                <li className="list-group-item">
                  Genres: {show.genres.join(', ')}
                </li>
              </ul>
            </div>
          </div>
      
        ))}
      </div>
      {hasMoreShows && props.shows.length > 8 && (
        <div className="d-grid mb-3">
          <button className="btn btn-dark mt-3" type="button" onClick={toggleShowAll}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      seasons: PropTypes.number.isRequired,
      updated: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      // Add more PropTypes as needed for other properties of the 'shows' object
    })
  ).isRequired,
};

// Function to format the date
function formatDate(dateString) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

export default ShowList;
