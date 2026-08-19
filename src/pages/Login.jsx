import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Welcome back! Login attempted with ${email}`);
  };

  return (
    <section className="auth-page">

      <div className="auth-container">

        <div className="auth-image">
          <div className="auth-image-content">
            <h2>Welcome Back</h2>

            <p>
              Sign in to manage your reservations and enjoy
              your Sunset Paradise Resort experience.
            </p>
          </div>
        </div>

        <div className="auth-form-container">

          <div className="auth-header">
            <p>SUNSET PARADISE RESORT</p>

            <h1>Login</h1>

            <span>
              Sign in to your account
            </span>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="login-email">
                Email Address
              </label>

              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">
                Password
              </label>

              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="auth-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#forgot-password">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Login
            </button>

          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?
              {" "}
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