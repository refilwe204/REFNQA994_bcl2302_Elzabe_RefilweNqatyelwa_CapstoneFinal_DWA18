import PropTypes from 'prop-types';
import PodcastItem from './PodcastItem';
import './PodcastList.css'; // Import the custom CSS file

const PodcastList = ({ podcasts }) => {
  return (
    <div className="podcast-list">
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

// Prop-types validation for the podcasts prop
PodcastList.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PodcastList;
