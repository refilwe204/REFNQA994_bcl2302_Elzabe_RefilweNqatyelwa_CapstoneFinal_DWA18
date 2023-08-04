import  { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Preview from './components/Preview';
import History from './components/History';
import supabase from './config/SupabaseClient';


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

  const handleEpisodeComplete = (episode) => {
    if (!listeningHistory.some((item) => item.id === episode.id)) {
      setListeningHistory((prevHistory) => [...prevHistory, episode]);
    }
  };

  const handleEpisodeProgress = (episode, currentTime) => {
    if (currentTime >= episode.duration - 10) {
      setLastListened({
        show: episode.show,
        episode: episode.title,
        progress: currentTime,
      });
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

  return (
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
  );
}

export default App;
