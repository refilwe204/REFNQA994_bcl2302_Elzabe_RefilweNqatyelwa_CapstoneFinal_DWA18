import { useState } from 'react';
import PropTypes from 'prop-types';
import { genres } from './Pages/genres';

const ShowList = (props) => {

  const {shows} = props
  const [showAll, setShowAll] = useState(false);
  
  

  // Toggle the state to show all or limited shows
  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

 
  // Determine the list of shows to display based on 'showAll'
  const showsToDisplay = showAll ? props.shows : props.shows.slice(0, 8);
  

  // Check if there are more shows to display
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
              {shows.map(show => (show.genres).map(genre => {
                 const ttt = genre

                 genres.map(genMap => {

                  const hhh = genMap

                 if(hhh.code === ttt){
                console.log(hhh.name)
                 }
                 })
  
                 })) }
            </div>
          </div>
        ))}
      </div>
      {/* Show the "Show More" button if there are more shows */}
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
