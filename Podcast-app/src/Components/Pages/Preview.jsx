import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../index.css'

const Preview = ({ podcastId }) => {
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://podcast-api.netlify.app/id/${podcastId}`) // Fetch data using the provided link with the selected show's ID
      .then((response) => {
        setPodcast(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching podcast data:', error);
        setLoading(false);
      });
  }, [podcastId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="preview-container">
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      <ul>
        {Array.isArray(podcast.seasons) ? (
          podcast.seasons.map((season, index) => (
            <li key={index}>
              <h3>{season.title}</h3>
              <img src={season.image} className="show-image"  alt={season.title} />
              <ul>
                {Array.isArray(season.episodes) ? (
                  season.episodes.map((episode, index) => (
                    <li key={index}>
                      <h4>{episode.title}</h4>
                      <p>{episode.description}</p>
                      <audio controls>
                        <source src={episode.file} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </li>
                  ))
                ) : (
                  <li>No episodes found.</li>
                )}
              </ul>
            </li>
          ))
        ) : (
          <li>No seasons found.</li>
        )}
      </ul>
    </div>
  );
};

// PropTypes validation
Preview.propTypes = {
    podcastId: PropTypes.string.isRequired,
  };

export default Preview;