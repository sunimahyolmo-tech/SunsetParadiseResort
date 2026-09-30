import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ),
          url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=85")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">

        <p>WELCOME TO SUNSET PARADISE</p>

        <h1>
          Experience Comfort and Luxury
        </h1>

        <span>
          Discover a world of comfort, elegance, and exceptional
          hospitality. Manage your stay and book your perfect
          room at Sunset Paradise Resort.
        </span>

        <div className="hero-buttons">

          <Link
            to="/booking"
            className="hero-btn primary-btn"
          >
            Book Now
          </Link>

          <Link
            to="/rooms"
            className="hero-btn secondary-btn"
          >
            Explore Rooms
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;
