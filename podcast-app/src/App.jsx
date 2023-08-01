import { useEffect, useState } from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';



const App = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false even if there's an error
      });
  }, []);

  console.log(podcasts); // Log the podcasts state to the console

  return (
    <div>
      <Header />
      <h1>Podcast App</h1>
      {isLoading ? (
        <p>Loading...</p> // Show a loading message while fetching data
      ) : (
        <>
          <PodcastList podcasts={podcasts} />
         
        </>
      )}
    </div>
  );
};

export default App;
