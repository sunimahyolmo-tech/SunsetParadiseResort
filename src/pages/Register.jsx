import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`Account created successfully for ${formData.fullName}!`);
  };

  return (
    <section className="auth-page">

      <div className="auth-container">

        <div className="auth-image">
          <div className="auth-image-content">
            <h2>Join Us</h2>

            <p>
              Create your Sunset Paradise Resort account
              and make your next stay unforgettable.
            </p>
          </div>
        </div>

        <div className="auth-form-container">

          <div className="auth-header">
            <p>SUNSET PARADISE RESORT</p>

            <h1>Create Account</h1>

            <span>
              Register for a new account
            </span>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="fullName">
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="register-email">
                Email Address
              </label>

              <input
                type="email"
                id="register-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="98XXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="register-password">
                Password
              </label>

              <input
                type="password"
                id="register-password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Create Account
            </button>

          </form>

          <div className="auth-footer">
            <p>
              Already have an account?
              {" "}
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Register;