import React from 'react';
import './Home.css'; // Make sure to create this CSS file if not already present

function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ float: 'left', marginLeft: '10px', width: '50%' }}>
          <h1 style={{ fontFamily: 'cursive', color:'#332C23', fontSize: '40px', paddingTop: '100px' }}>Welcome to ShareRippy</h1>
          <h5 style={{ color: '#332C23', textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>
            At Share Amogus, we connect food lovers globally to share and discover favorite recipes and cooking tips. 
            Whether you're an experienced chef or a home cook seeking inspiration, our community lets you exchange culinary creations 
            and celebrate the joy of cooking together. Join us and be part of a global amogus kitchen where every recipe tells a story.
          </h5>
        </div>

        <div style={{ float: 'right', marginRight: '10px', width: '45%', paddingTop: '20px' }}>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="nasi_lemak.jpeg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="pizza.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="mango_smoothie.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <br />
        <h3 style={{ color: 'white', backgroundColor: '#886644', padding: '10px' }}>Our Top Recipe</h3>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="pudding.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Caramel Pudding</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="..." className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="mango_smoothie.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Manggo Smoothie</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="..." className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="pizza.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Chezzy Beef Peporoni Pizza</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="..." className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 style={{ color: 'white', backgroundColor: '#886644', padding: '10px' }}>Explore More Recipe</h3>
      <div style={{ display: "flex" }}>
        <div style={{ float: 'left', marginLeft: '10px', width: '50%' }}>
          <h1 style={{ fontFamily: 'cursive', color: '#332C23', fontSize: '40px', paddingTop: '100px' }}>See More Recipe</h1>
          <h5 style={{ color: '#332C23', textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>
          Dive into our treasure trove of recipes, where you'll find mouth-watering dishes across every category imaginable! From quick weeknight dinners to decadent desserts, we've got the perfect recipe for every occasion. 
          </h5>
        <a href="/ctg" className="btn btn-primary">Explore More Recipe</a>
        </div>
            <img src='food.jpg' style={{ width: '700px', padding: '20px' }} alt="ads-img"></img>
      </div>
      
     
    </div>
  );
}

export default Home;
