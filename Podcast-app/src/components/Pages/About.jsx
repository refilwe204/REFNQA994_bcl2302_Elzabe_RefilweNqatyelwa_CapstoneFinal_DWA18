import { Link } from 'react-router-dom';

/**
 * About Component
 *
 * The About component represents the about page of the Moments Unplugged website.
 * It displays information about the podcast and invites users to discover the podcast's content.
 *
 * @returns {JSX.Element} The JSX element representing the About page.
 */
function About() {
  return (
    <div className="about-page-container">
      {/* Podcast Logo */}
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.4UGzWPmweOiFs9DhQqtaBwHaGi&pid=Api&P=0&h=180"
        className="img-thumbnail mt-3"
        width="200" // Set the width to 200px
        height="200" // Set the height to 200
        alt="Podcast Logo"
      />

      {/* About Content */}
      <div className="about-page-content">
        <h1>Explore a world of peace and inspiration with our podcast.</h1>
        <p>
        Welcome to Make A Moment, where we invite you to immerse yourself in moments of bliss as you embark on a captivating journey into the art of chill. Our carefully curated episodes are designed to transport you to a realm of relaxation and wonder
        </p>
        <p>
        With a shared commitment to enhancing your experience, Make A Moment is here to accompany you on your path of self-discovery and mindfulness. We believe in the power of soothing conversations and contemplative narratives to soothe your spirit and rejuvenate your mind
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="about-page-cta">
        <h2>Be Part Of A Beautiful Moments.<br />This Is A Place of Bliss</h2>
        <p>
        Experience the enchanting charm of our podcast and embark on captivating journeys of the mind that bring about feelings of peace and creativity. Come along with us as we delve into topics that deeply connect with your inner self and ignite the sparks of imagination.
        </p>
        {/* Link to Latest Episodes */}
        <Link className="explore-button" to="/vans">
          Find The Latest Episodes
        </Link>
      </div>
    </div>
  );
}

export default About;
