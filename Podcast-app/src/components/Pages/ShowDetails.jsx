/**
 * Seasons Component
 *
 * This component fetches and displays the seasons and episodes of a podcast
 * based on the specified podcast ID obtained from the URL parameters.
 *
 * Props:
 *   None
 *
 * Usage:
 *   <Seasons />
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Seasons = () => {
  // Get the podcast ID from URL parameters using useParams hook
  const { id } = useParams();

  // State to store the fetched seasons and episodes
  const [seasons, setSeasons] = useState([]);

  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Fetch the seasons and episodes using Axios
    axios
      .get(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => {
        setSeasons(response.data.seasons);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching season data:', error);
        setLoading(false);
      });
  }, [id]);

  // If data is still loading, display a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // Once data is fetched, display the seasons and episodes
  return (
    <div className="seasons-container">
      <h2>Seasons</h2>
      <ul>
        {/* Map through the fetched seasons and display their information */}
        {seasons.map((season) => (
          <li key={season.id}>
            {/* Display the season title */}
            <h3>{season.title}</h3>

            {/* Display the season image */}
            <img src={season.image} className="season-image" alt={season.title} />

            {/* Check if season.episodes is an array */}
            {Array.isArray(season.episodes) ? (
              <ul>
                {/* Map through the episodes and display their information */}
                {season.episodes.map((episode, episodeIndex) => (
                  <li key={episodeIndex}>
                    {/* Display the episode title */}
                    <h4>{episode.title}</h4>

                    {/* Display the episode description */}
                    <p>{episode.description}</p>

                    {/* Display the audio player with the episode file */}
                    <audio controls>
                      <source src={episode.file} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </li>
                ))}
              </ul>
            ) : (
              // If season.episodes is not an array, display a message
              <p>No episodes found.</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seasons;
