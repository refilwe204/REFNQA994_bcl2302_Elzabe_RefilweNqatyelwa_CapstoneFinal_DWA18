import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * Podcasts component represents the page that displays all the podcasts.
 * It fetches the list of podcasts from the API and provides sorting and searching functionality.
 * Users can mark podcasts as favorites, and the favorite list is persisted in local storage.
 */
const Podcasts = () => {
  // State to store the list of favorite podcast IDs
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // State to store the list of podcasts and loading status
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to handle sorting and filtering
  const [filter, setFilter] = useState('A-Z');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch the list of podcasts from the API when the component mounts
  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching podcasts:', error);
        setLoading(false);
      });
  }, []);

  // Function to handle changes in sorting and filtering
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Function to sort the podcasts based on the selected filter
  const sortShows = (a, b) => {
    if (filter === 'A-Z') {
      return a.title.localeCompare(b.title);
    } else if (filter === 'Z-A') {
      return b.title.localeCompare(a.title);
    } else if (filter === 'ascending') {
      return parseInt(a.seasons) - parseInt(b.seasons);
    } else if (filter === 'descending') {
      return parseInt(b.seasons) - parseInt(a.seasons);
    }
    return 0;
  };

  // Function to toggle the favorite status of a podcast
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Function to check if a podcast is marked as a favorite
  const isFavorite = (id) => favorites.includes(id);

  // Save the list of favorite podcast IDs to local storage when it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Function to handle search and filter the podcasts based on the search term
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredShows = shows.filter((show) =>
      show.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setShows(filteredShows);
  };

  // Function to format the date to a readable format
  function formatDate(dateString) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  // Render loading message while waiting for API response
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the podcasts page with the list of podcasts and sorting/searching functionality
  return (
    <div className="container">
      <h2>All Shows</h2>
      <div className="row mb-3">
        <div className="col">
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort by
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => handleFilterChange('A-Z')}>A-Z</button></li>
              <li><button className="dropdown-item" onClick={() => handleFilterChange('Z-A')}>Z-A</button></li>
              <li><button className="dropdown-item" onClick={() => handleFilterChange('ascending')}>Ascending Order</button></li>
              <li><button className="dropdown-item" onClick={() => handleFilterChange('descending')}>Descending Order</button></li>
            </ul>
          </div>
        </div>
        <div className="col">
          <form className="d-flex mx-auto" onSubmit={handleSearch}>
            <input className="form-control  rounded-pill border border-5 fs-2 ms-5" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
            <button className="btn btn-outline-secondary ms-3" type="submit">
              Search
            </button>
          </form>
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
                  <p className="card-text">
                    {show.description.length > 100 ? show.description.slice(0, 100) + '...' : show.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Last Updated: {formatDate(show.updated)}</li>
                  <li className="list-group-item">Genres: {show.genres}</li>
                  <li className="list-group-item">
                    <Link to={`/podcasts/${show.id}/seasons`} className="btn btn-secondary">
                      Seasons
                    </Link>
                  </li>
                  <button
                    onClick={() => toggleFavorite(show.id)}
                    className={`btn ${isFavorite(show.id) ? 'btn-danger' : 'btn-secondary'}`}
                  >
                    <i className={`bi-heart${isFavorite(show.id) ? '-fill' : ''}`}></i>
                  </button>
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
