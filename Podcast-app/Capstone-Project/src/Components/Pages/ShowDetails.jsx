import React from 'react';
import { useParams } from 'react-router-dom';

function ShowDetails() {
  const [podcast, setPodcast] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const params = useParams();

  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPodcast(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [params.id]);

  // Debug information
  console.log('params.id:', params.id);
  console.log('podcast:', podcast);

  return (
    <div className="container p-3 m-0">
      <div className="row">
        {loading ? (
          <h2>Loading...</h2>
        ) : podcast ? (
          <div key={podcast.id} className="col-md-3 mb-4 mx-auto ">
            <div className="card" style={{ width: '35rem' }}>
              <img src={podcast.image} alt={podcast.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{podcast.title}</h5>
                <p className="card-text">
                  {podcast.description}
                </p>
              </div>

            </div>
          </div>
        ) : (
          <h2>Podcast not found.</h2>
        )}
      </div>
    </div>
  );
}

export default ShowDetails;
