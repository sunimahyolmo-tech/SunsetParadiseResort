import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem("sunsetUser");

      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch {
          localStorage.removeItem("sunsetUser");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    // Check user when Navbar loads
    checkUser();

    // Check again immediately after login
    window.addEventListener("userLogin", checkUser);

    // Cleanup event listener
    return () => {
      window.removeEventListener("userLogin", checkUser);
    };
  }, []);

  const handleLogout = () => {
    // Remove logged-in user
    localStorage.removeItem("sunsetUser");

    // Update Navbar immediately
    setUser(null);

    // Go to Home page
    navigate("/");
  };

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

          <Link to="/rooms">
            Rooms
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/facilities">
            Facilities
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/booking">
            Booking
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        {/* Authentication Buttons */}

        <div className="nav-buttons">

          {user ? (
            <>
              <span className="nav-user">
                Hi, {user.fullName}
              </span>

              <button
                type="button"
                className="login-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="login-btn"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="register-btn"
              >
                Register
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          className="menu-btn"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

