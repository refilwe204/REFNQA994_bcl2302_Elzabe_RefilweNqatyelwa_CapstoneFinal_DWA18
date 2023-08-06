import { useState, useEffect } from 'react';

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

    const timer = setTimeout(() => {
      if (lastListened.show && lastListened.episode && lastListened.progress) {
        setListeningHistory((prevHistory) => [
          ...prevHistory,
          {
            show: lastListened.show,
            episode: lastListened.episode,
            progress: lastListened.progress,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    }, 10 * 60 * 1000);

    return () => clearTimeout(timer);

  }, [lastListened]);

  const handleResetProgress = () => {
    setListeningHistory([]);
    setLastListened({});
  };

  return (
    <div className="history-container">
      <h1>Listening History</h1>
      {listeningHistory.length > 0 ? (
        <ul>
          {listeningHistory.map((episode, index) => (
            <li key={index}>
              <p>Show: {episode.show}</p>
              <p>Episode: {episode.episode}</p>
              <p>Progress: {episode.progress} seconds</p>
              <p>Timestamp: {episode.timestamp}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No listening history found.</p>
      )}
      <button onClick={handleResetProgress}>Reset Listening Progress</button>
    </div>
  );
};

export default History;
