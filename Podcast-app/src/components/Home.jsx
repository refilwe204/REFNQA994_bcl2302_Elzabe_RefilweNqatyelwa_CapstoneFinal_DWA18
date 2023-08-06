import  { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Home = ({ onPodcastClick, selectedPodcast }) => {
  const [showPodcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('az');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    axios
      .get('https://podcast-api.netlify.app/shows')
      .then((response) => {
        setPodcast(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching show data:', error);
        setLoading(false);
      });
  }, []);

  const handlePodcastClick = (podcast) => {
    onPodcastClick(podcast);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleGenreChange = (event) => {
    const selectedGenreValue = event.target.value;
    console.log('Selected Genre:', selectedGenreValue);
    setSelectedGenre(selectedGenreValue);
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const filteredPodcasts = showPodcast.filter((show) =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const genreFilteredPodcasts = selectedGenre
    ? filteredPodcasts.filter((show) => show.genres.includes(selectedGenre))
    : filteredPodcasts;

  const sortedPodcasts = [...genreFilteredPodcasts].sort((a, b) => {
    if (sortOption === 'az') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'za') {
      return b.title.localeCompare(a.title);
    } else if (sortOption === 'ascDate') {
      return new Date(a.updated) - new Date(b.updated);
    } else if (sortOption === 'descDate') {
      return new Date(b.updated) - new Date(a.updated);
    }
  });

  const genreData = [
    'Personal Growth',
    'True Crime and Investigative Journalism',
    'History',
    'Comedy',
    'Entertainment',
    'Business',
    'Fiction',
    'News',
    'Kids and Family',
  ];

  return (
    <div className="home-container">
      <h1>All Shows</h1>
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOption} onChange={handleSortChange}>
          <option value="az">Sort A-Z</option>
          <option value="za">Sort Z-A</option>
          <option value="ascDate">Sort Ascending by Date</option>
          <option value="descDate">Sort Descending by Date</option>
        </select>
      </div>
      <div className="genres-container">
        <h2>Genres</h2>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Select a Genre</option>
          {genreData.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <p>Loading podcast list...</p>
      ) : (
        <ul className="show-list">
          {sortedPodcasts.map((show) => (
            <li key={show.id} onClick={() => handlePodcastClick(show)}>
              <div className={`show-info ${show.id === selectedPodcast?.id ? 'selected' : ''}`}>
                <img src={show.image} className="show-image" alt={show.title} />
                <div className="show-details">
                  <h3 className="show-title">{show.title}</h3>
                  <p className="show-description">{show.description}</p>
                  <p className="show-seasons">Numbers of seasons: {show.seasons}</p>
                  <p className="show-updated">Updated: {formatDate(show.updated)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Home.propTypes = {
  onPodcastClick: PropTypes.func.isRequired,
  selectedPodcast: PropTypes.object,
};

export default Home;
