import React, { useState, useEffect } from 'react';

const History = () => {
  const [listeningHistory, setListeningHistory] = useState(
    JSON.parse(localStorage.getItem('listeningHistory')) || []
  );
  const [lastListened, setLastListened] = useState(
    JSON.parse(localStorage.getItem('lastListened')) || {}
  );

  useEffect(() => {
    localStorage.setItem('listeningHistory', JSON.stringify(listeningHistory));
  }, [listeningHistory]);

  useEffect(() => {
    localStorage.setItem('lastListened', JSON.stringify(lastListened));
  }, [lastListened]);

  const handleResetProgress = () => {
    setListeningHistory([]);
    setLastListened({});
  };

  const handleEpisodeComplete = (episode) => {
    if (!listeningHistory.some((item) => item.id === episode.id)) {
      setListeningHistory((prevHistory) => [...prevHistory, episode]);
    }
  };

  const handleEpisodeProgress = (episode, currentTime) => {
    if (currentTime >= episode.duration - 10) {
      // If the current time is within the last 10 seconds of the episode duration
      setLastListened({
        show: episode.show,
        episode: episode.title,
        progress: currentTime,
      });
    }
  };

  return (
    <div className="history-container">
      <h1>Listening History</h1>
      {listeningHistory.length > 0 ? (
        <ul>
          {listeningHistory.map((episode, index) => (
            <li key={index}>
              <p>Show: {episode.show}</p>
              <p>Episode: {episode.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No listening history found.</p>
      )}
      {lastListened.show && lastListened.episode && (
        <div>
          <h2>Last Listened Episode</h2>
          <p>Show: {lastListened.show}</p>
          <p>Episode: {lastListened.episode}</p>
          <p>Last Listened Progress: {lastListened.progress} seconds</p>
        </div>
      )}
      <button onClick={handleResetProgress}>Reset Listening Progress</button>
    </div>
  );
};

export default History;
