import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Seasons = () => {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="seasons-container">
      <h2>Seasons</h2>
      <ul>
        {seasons.map((season, index) => (
          <li key={index}>
            <h3>{season.title}</h3>
            <img src={season.image} className="season-image" alt={season.title} />
            <ul>
              {Array.isArray(season.episodes) ? (
                season.episodes.map((episode, episodeIndex) => (
                  <li key={episodeIndex}>
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
        ))}
      </ul>
    </div>
  );
};

export default Seasons;
