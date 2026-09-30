import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(false);
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to send message.");
        return;
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        "Unable to connect to the server. Please check that the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setSubmitted(false);
    setError("");
  };

  return (
    <section className="contact-page">

      {/* Page Header */}

      <div className="page-header">
        <p>SUNSET PARADISE RESORT</p>

        <h1>Contact Us</h1>

        <span>
          We would love to hear from you. Get in touch with our team.
        </span>
      </div>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2>
            We're Here to Help
          </h2>

          <p className="contact-description">
            Whether you have a question about our rooms, facilities,
            reservations, or services, our team is ready to assist you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Our Location</h3>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email Address</h3>
                <p>info@sunsetparadiseresort.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">☎️</div>

              <div>
                <h3>Phone Number</h3>
                <p>+977 9800000000</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">🕐</div>

              <div>
                <h3>Available</h3>
                <p>24 Hours / 7 Days</p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <p>
            Fill out the form below and our team will get back to you soon.
          </p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is your message about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}

            {submitted && (
              <div className="contact-success">

                <h3>Message Sent Successfully!</h3>

                <p>
                  Thank you for contacting us.
                  Our team will get back to you soon.
                </p>

                <button
                  type="button"
                  className="contact-reset-btn"
                  onClick={handleReset}
                >
                  Send Another Message
                </button>

              </div>
            )}

          </form>

        </div>

      </div>

      {/* Map Section */}

      <div className="contact-map">

        <div className="map-placeholder">

          <div className="map-content">

            <span className="map-icon">📍</span>

            <h3>Sunset Paradise Resort</h3>

            <p>
              Kathmandu, Nepal
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kathmandu,Nepal"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              View on Google Maps
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
