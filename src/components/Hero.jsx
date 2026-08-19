function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO SUNSET PARADISE</p>

          <h1>Experience Comfort and Luxury</h1>

          <p className="hero-description">
            Discover a world of comfort, elegance, and exceptional hospitality.
            Manage your stay and book your perfect room at Sunset Paradise Resort.
          </p>

          <div className="hero-buttons">
            <a href="#booking" className="hero-btn primary-btn">
              Book Now
            </a>

            <a href="#rooms" className="hero-btn secondary-btn">
              Explore Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;