import { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Preview from './components/Preview';
import History from './components/History';


function App() {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('currentPage') || 'home');
  const [selectedPodcast, setSelectedPodcast] = useState(
    JSON.parse(localStorage.getItem('selectedPodcast')) || null
  );
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favoriteEpisodes')) || []
  );

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const [listeningHistory, setListeningHistory] = useState([]);

  const handleEpisodeComplete = (episode) => {
    if (!listeningHistory.some((item) => item.id === episode.id)) {
      setListeningHistory((prevHistory) => [...prevHistory, episode]);
    }
  };

  const handleEpisodeProgress = (episode, currentTime) => {
    if (currentTime >= episode.duration - 10) {
      // Handle episode progress
    }
  };

  const handleFavoriteClick = (episode) => {
    if (!favorites.some((fav) => fav.id === episode.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, episode]);
    }
  };

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('selectedPodcast', JSON.stringify(selectedPodcast));
  }, [currentPage, selectedPodcast]);

  useEffect(() => {
    localStorage.setItem('favoriteEpisodes', JSON.stringify(favorites));
  }, [favorites]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('Logged In');
  };

  const handleLogOut = async () => {
    try {
      await supabase.auth.signOut();
      setIsLoggedIn(false);
      console.log('Logged Out');
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    isLoggedIn ? (
      <>
        <Navbar onNavigate={handleNavigation} />
        <br />
        <br />
        {currentPage === 'home' && (
          <Home onPodcastClick={setSelectedPodcast} selectedPodcast={selectedPodcast} />
        )}
        {currentPage === 'favorite' && (
          <Favorite favorites={favorites} setFavorites={setFavorites} />
        )}
        {currentPage === 'preview' && (
          <Preview
            podcastId={selectedPodcast?.id}
            onFavoriteClick={handleFavoriteClick} // Pass the handleFavoriteClick function as a prop
            onEpisodeComplete={handleEpisodeComplete}
            onEpisodeProgress={handleEpisodeProgress}
          />
        )}
        {currentPage === 'history' && <History />}
      </>
    ) : (
      <Signin onLogin={handleLogin} />
    )
  );
}

export default App;
