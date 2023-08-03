import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Podcasts = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('A-Z');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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
      return parseInt(a.seasons) - parseInt(b.seasons);
    } else if (filter === 'descending') {
      return parseInt(b.seasons) - parseInt(a.seasons);
    }
    return 0;
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => favorites.includes(id);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredShows = shows.filter((show) =>
      show.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setShows(filteredShows);
    setSearchTerm(''); // Set the search term back to an empty string
  };
  
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
            <input className="form-control  rounded-pill border border-5 fs-2 ms-5" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-secondary ms-2" type="submit">
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

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

export default Podcasts;
