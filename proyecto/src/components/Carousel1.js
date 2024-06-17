import React from 'react'
export default function Carousel1() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/1366_2000.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>DIVERSION</h5>
        <p>------------------</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.blogs.es/31f6a0/100418-cooponline/1366_2000.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>ENTRETENIMIENTO</h5>
        <p>------------------</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.graphassets.com/resize=fit:clip,height:720,width:1280/output=format:webp/5oPZyiFQ3qmS83SjK8Ku" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>COMPETITIVIDAD</h5>
        <p>------------------</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}