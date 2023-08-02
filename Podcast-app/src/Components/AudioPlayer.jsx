import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ episode, onPlaybackChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Handle play/pause when the isPlaying state changes
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Update the current time when the audio is playing
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    // Store a reference to the function to remove it later
    const removeUpdateListener = () => {
      audioRef.current.removeEventListener('timeupdate', updateTime);
    };

    audioRef.current.addEventListener('timeupdate', updateTime);

    // Cleanup event listener
    return removeUpdateListener;
  }, []);

  const handlePlayback = () => {
    setIsPlaying((prev) => !prev);
    onPlaybackChange(!isPlaying);
  };

  const handleTimeSeek = (event) => {
    const time = parseFloat(event.target.value);
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  return (
    <div>
      <h2>{episode.title}</h2>
      <audio ref={audioRef} src={episode.audioUrl} />
      <div>
        <button onClick={handlePlayback}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={audioRef.current && audioRef.current.duration}
          step={0.1}
          value={currentTime}
          onChange={handleTimeSeek}
        />
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string.isRequired,
    audioUrl: PropTypes.string.isRequired,
  }).isRequired,
  onPlaybackChange: PropTypes.func.isRequired,
};

export default AudioPlayer;
