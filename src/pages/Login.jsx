import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      // Save logged-in user
      localStorage.setItem(
        "sunsetUser",
        JSON.stringify(data.user)
      );

      // Immediately notify Navbar that the user has logged in
      window.dispatchEvent(new Event("userLogin"));

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);

      setError("Unable to connect to the server.");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">

        {/* Left Image Section */}

        <div className="auth-image">
          <div className="auth-image-content">
            <h2>Welcome Back</h2>

            <p>
              Sign in to manage your reservations and enjoy
              your Sunset Paradise Resort experience.
            </p>
          </div>
        </div>

        {/* Right Login Form */}

        <div className="auth-form-container">

          <div className="auth-header">
            <p>SUNSET PARADISE RESORT</p>

            <h1>Login</h1>

            <span>
              Sign in to your account
            </span>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}

            <div className="form-group">
              <label htmlFor="login-email">
                Email Address
              </label>

              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </div>

            {/* Password */}

            <div className="form-group">
              <label htmlFor="login-password">
                Password
              </label>

              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />
            </div>

            {/* Error Message */}

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            {/* Success Message */}

            {message && (
              <p className="auth-success">
                {message}
              </p>
            )}

            {/* Login Button */}

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Login
            </button>

          </form>

          {/* Register Link */}

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/register">
                Register
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Login;

