import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-column">

          <h2 className="footer-logo">
            Sunset <span>Paradise</span>
          </h2>

          <p>
            Experience comfort, luxury, and exceptional hospitality
            at Sunset Paradise Resort.
          </p>

          <div className="social-links">
            <a href="#facebook">f</a>
            <a href="#instagram">◎</a>
            <a href="#twitter">𝕏</a>
            <a href="#youtube">▶</a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/services">Services</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>

        </div>

        {/* Reservations */}
        <div className="footer-column">

          <h3>Reservations</h3>

          <Link to="/booking">Book a Room</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact Information</h3>

          <p>
            📍 Kathmandu, Nepal
          </p>

          <p>
            ✉️ info@sunsetparadiseresort.com
          </p>

          <p>
            ☎️ +977 9800000000
          </p>

          <p>
            🕐 Available 24/7
          </p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Sunset Paradise Resort. All Rights Reserved.
        </p>

        <p>
          Hotel Management System
        </p>

      </div>

    </footer>
  );
}

export default Footer;