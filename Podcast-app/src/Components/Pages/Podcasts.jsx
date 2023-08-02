import React from 'react';
import { Link } from 'react-router-dom';

const Podcasts = () => {
  const [shows, setShows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('A-Z'); // Default filter set to A-Z

  React.useEffect(() => {
    // Fetch the list of shows from the API
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const sortShows = (a, b) => {
    if (filter === 'A-Z') {
      return a.title.localeCompare(b.title);
    } else if (filter === 'Z-A') {
      return b.title.localeCompare(a.title);
    } else if (filter === 'ascending') {
      return a.seasons - b.seasons;
    } else if (filter === 'descending') {
      return b.seasons - a.seasons;
    }
    return 0;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>All Shows</h2>
      <div className="row mb-3">
        <div className="col">
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter By: {filter}
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button" onClick={() => handleFilterChange('A-Z')}>A-Z</button>
              <button className="dropdown-item" type="button" onClick={() => handleFilterChange('Z-A')}>Z-A</button>
              <button className="dropdown-item" type="button" onClick={() => handleFilterChange('ascending')}>Ascending Order</button>
              <button className="dropdown-item" type="button" onClick={() => handleFilterChange('descending')}>Descending Order</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {shows.sort(sortShows).map((show) => (
          <div key={show.id} className="col-md-3 mb-4">
            <Link className="link-underline link-underline-opacity-0" to={`/podcasts/${show.id}`}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={show.image} alt={show.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{show.title}</h5>
                  <p className="card-text">{show.description.length > 100 ? show.description.slice(0, 100) + '...' : show.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Last Updated: {show.updated}</li>
                  <li className="list-group-item">Genres: {show.genres}</li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
