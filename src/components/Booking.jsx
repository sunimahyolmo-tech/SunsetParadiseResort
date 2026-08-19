import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "1",
    specialRequests: "",
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

    alert(
      `Thank you ${formData.fullName}! Your booking request has been submitted.`
    );

    console.log("Booking Data:", formData);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">

        <div className="booking-heading">
          <p>RESERVE YOUR STAY</p>

          <h2>Book Your Room</h2>

          <span>
            Complete the form below and our team will assist you with your
            reservation.
          </span>
        </div>

        <div className="booking-content">

          <div className="booking-image">
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury hotel room"
            />

            <div className="booking-image-text">
              <h3>Make Your Stay Memorable</h3>
              <p>
                Experience comfort, luxury, and exceptional hospitality at
                Sunset Paradise Resort.
              </p>
            </div>
          </div>

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

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

            <div className="form-row">

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
                <label htmlFor="guests">
                  Number of Guests
                </label>

                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="checkIn">
                  Check-In Date
                </label>

                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkOut">
                  Check-Out Date
                </label>

                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">

              <label htmlFor="roomType">
                Room Type
              </label>

              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Room Type
                </option>

                <option value="single">
                  Standard Single Room
                </option>

                <option value="double">
                  Premium Double Room
                </option>

                <option value="deluxe">
                  Deluxe Ocean View Room
                </option>

                <option value="family">
                  Family Room
                </option>

                <option value="suite">
                  Executive Suite
                </option>

                <option value="vip">
                  VIP Presidential Suite
                </option>
              </select>

            </div>

            <div className="form-group">

              <label htmlFor="specialRequests">
                Special Requests
              </label>

              <textarea
                id="specialRequests"
                name="specialRequests"
                placeholder="Any special requests or requirements?"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="5"
              ></textarea>

            </div>

            <button
              type="submit"
              className="booking-submit-btn"
            >
              Submit Booking
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Booking;