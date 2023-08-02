import React from 'react';

function Carousel(props) {
  const carouselData = props.data.map((show) => ({
    id: show.id,
    title: show.title,
    image: show.image,
    description: show.description.length > 100 ? show.description.slice(0, 100) + '...' : show.description,
  }));

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselData.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={item.image} className="d-block w-50 mx-auto" alt={item.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
