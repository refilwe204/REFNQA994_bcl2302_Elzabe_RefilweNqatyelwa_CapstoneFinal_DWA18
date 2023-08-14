import { useEffect, useState } from 'react';
import ShowList from '../ShowList';
import Header from '../Header';

/**
 * Home component represents the home page of the podcast application.
 * It fetches the list of shows from the API and displays them along with a header.
 */
const Home = () => {
  // State to store the list of shows and loading status
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to handle API fetch errors
  const [error, setError] = useState(null);

  // Fetch the list of shows from the API when the component mounts
  useEffect(() => {
    // Fetch the list of shows from the API
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
        setError('Error fetching shows. Please try again later.');
        setLoading(false);
      });
  }, []);

  // Render loading message while waiting for API response
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if API fetch failed
  if (error) {
    return <div>{error}</div>;
  }

  // Render the home page with the header and list of shows
  return (
    <div>
      <Header />
      <ShowList shows={shows} />
    </div>
  );
};

export default Home;
