import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Hotel Logo */}
        <Link to="/" className="logo">
          Sunset <span>Paradise</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/services">Services</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Authentication Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;