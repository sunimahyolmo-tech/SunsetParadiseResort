import { useEffect, useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  guests: "1",
  specialRequests: "",
  paymentMethod: "Pay at Hotel",
};

function Booking() {
  const [formData, setFormData] = useState(initialForm);

  const [bookings, setBookings] = useState([]);

  const [confirmation, setConfirmation] = useState(null);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [loadingBookings, setLoadingBookings] = useState(false);

  // ==================== GET LOGGED-IN USER ====================

  const getSavedUser = () => {
    try {
      return JSON.parse(localStorage.getItem("sunsetUser"));
    } catch {
      return null;
    }
  };

  // ==================== LOAD BOOKINGS ====================

  const loadBookings = async () => {
    const user = getSavedUser();

    if (!user?.email) {
      setBookings([]);
      return;
    }

    setLoadingBookings(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/bookings?email=${encodeURIComponent(
          user.email
        )}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to load bookings.");
        return;
      }

      const formattedBookings = data.map((booking) => ({
        ...booking,
        id: booking._id,
        paymentMethod:
          booking.paymentMethod || "Pay at Hotel",
        status: booking.status || "Confirmed",
      }));

      setBookings(formattedBookings);
    } catch (error) {
      console.error("Error loading bookings:", error);
      setError(
        "Unable to load bookings. Please check that the backend is running."
      );
    } finally {
      setLoadingBookings(false);
    }
  };

  // ==================== LOAD USER + BOOKINGS ====================

  useEffect(() => {
    const user = getSavedUser();

    if (user) {
      setFormData((previous) => ({
        ...previous,
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }

    loadBookings();
  }, []);

  // ==================== HANDLE INPUT CHANGE ====================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==================== CREATE BOOKING ====================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setConfirmation(null);

    if (formData.checkOut <= formData.checkIn) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    const savedUser = getSavedUser();

    if (!savedUser?.email) {
      setError("Please login before making a booking.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName || savedUser.fullName,
            email: savedUser.email,
            phone: formData.phone || savedUser.phone,
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            roomType: formData.roomType,
            guests: Number(formData.guests),
            specialRequests: formData.specialRequests,
            paymentMethod:
              formData.paymentMethod || "Pay at Hotel",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Booking failed.");
        return;
      }

      const newBooking = {
        ...data.booking,
        id: data.booking._id,
        paymentMethod:
          data.booking.paymentMethod || "Pay at Hotel",
        status: data.booking.status || "Confirmed",
      };

      // Show confirmation
      setConfirmation(newBooking);

      // Reset only booking-specific fields.
      // Keep logged-in user's information.
      setFormData({
        ...initialForm,
        fullName: savedUser.fullName || "",
        email: savedUser.email || "",
        phone: savedUser.phone || "",
      });

      // Reload bookings from MongoDB
      await loadBookings();
    } catch (error) {
      console.error("Booking error:", error);

      setError(
        "Unable to connect to the server. Please check that the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==================== CANCEL BOOKING ====================

  const cancelBooking = async (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return;
    }

    setError("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/bookings/${bookingId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to cancel booking.");
        return;
      }

      // Update the booking immediately on screen
      setBookings((previousBookings) =>
        previousBookings.map((booking) =>
          booking.id === bookingId
            ? {
                ...booking,
                status: "Cancelled",
              }
            : booking
        )
      );

      // Update confirmation if it is the same booking
      if (confirmation?.id === bookingId) {
        setConfirmation({
          ...confirmation,
          status: "Cancelled",
        });
      }

      // Reload from MongoDB to make sure the cancelled
      // status is permanently stored
      await loadBookings();
    } catch (error) {
      console.error("Cancel booking error:", error);

      setError("Unable to connect to the server.");
    }
  };

  // ==================== ROOM NAME ====================

  const getRoomName = (roomType) => {
    const rooms = {
      single: "Standard Single Room",
      double: "Premium Double Room",
      deluxe: "Deluxe Ocean View Room",
      family: "Family Room",
      suite: "Executive Suite",
      vip: "VIP Presidential Suite",
    };

    return rooms[roomType] || roomType;
  };

  // ==================== PAYMENT NAME ====================

  const getPaymentName = (paymentMethod) => {
    return paymentMethod || "Pay at Hotel";
  };

  // ==================== PAGE ====================

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">

        {/* ==================== HEADING ==================== */}

        <div className="booking-heading">
          <p>RESERVE YOUR STAY</p>

          <h2>Book Your Room</h2>

          <span>
            Complete the form below and enjoy a comfortable stay at
            Sunset Paradise Resort.
          </span>
        </div>

        {/* ==================== BOOKING FORM ==================== */}

        <div className="booking-content">

          {/* IMAGE */}

          <div className="booking-image">
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury hotel room"
            />

            <div className="booking-image-text">
              <h3>Make Your Stay Memorable</h3>

              <p>
                Experience comfort, luxury, and exceptional hospitality
                at Sunset Paradise Resort.
              </p>
            </div>
          </div>

          {/* FORM */}

          <form className="booking-form" onSubmit={handleSubmit}>

            {/* FULL NAME + EMAIL */}

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>

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
                <label htmlFor="email">Email Address</label>

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

            {/* PHONE + GUESTS */}

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

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

            {/* CHECK-IN + CHECK-OUT */}

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

            {/* ROOM TYPE */}

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

            {/* SPECIAL REQUESTS */}

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
                rows="4"
              />
            </div>

            {/* ==================== PAYMENT ==================== */}

            <div className="payment-section">

              <h3>Payment Method</h3>

              <p className="payment-note">
                Select your preferred payment method.
              </p>

              <div className="payment-options">

                {/* PAY AT HOTEL */}

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Pay at Hotel"
                    checked={
                      formData.paymentMethod === "Pay at Hotel"
                    }
                    onChange={handleChange}
                  />

                  <span>🏨 Pay at Hotel</span>
                </label>

                {/* ESEWA */}

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="eSewa"
                    checked={
                      formData.paymentMethod === "eSewa"
                    }
                    onChange={handleChange}
                  />

                  <span>eSewa</span>
                </label>

                {/* KHALTI */}

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Khalti"
                    checked={
                      formData.paymentMethod === "Khalti"
                    }
                    onChange={handleChange}
                  />

                  <span>Khalti</span>
                </label>

                {/* CARD */}

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Credit/Debit Card"
                    checked={
                      formData.paymentMethod ===
                      "Credit/Debit Card"
                    }
                    onChange={handleChange}
                  />

                  <span>💳 Credit / Debit Card</span>
                </label>

              </div>

              {/* CARD DETAILS */}

              {formData.paymentMethod ===
                "Credit/Debit Card" && (
                <div className="card-details">

                  <div className="form-group">
                    <label>Card Number</label>

                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>

                  <div className="form-row">

                    <div className="form-group">
                      <label>Expiry Date</label>

                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>

                    <div className="form-group">
                      <label>CVV</label>

                      <input
                        type="password"
                        placeholder="123"
                        maxLength="3"
                      />
                    </div>

                  </div>

                </div>
              )}

              {/* DIGITAL PAYMENT */}

              {(formData.paymentMethod === "eSewa" ||
                formData.paymentMethod === "Khalti") && (
                <div className="digital-payment-info">

                  <p>
                    <strong>
                      {formData.paymentMethod}
                    </strong>
                  </p>

                  <span>
                    Payment will be simulated for this
                    academic project. No real payment will
                    be processed.
                  </span>

                </div>
              )}

            </div>

            {/* ERROR */}

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="booking-submit-btn"
              disabled={loading}
            >
              {loading
                ? "Saving Booking..."
                : "Confirm Booking"}
            </button>

          </form>
        </div>

        {/* ==================== CONFIRMATION ==================== */}

        {confirmation && (
          <div className="booking-confirmation">

            <div className="confirmation-icon">
              {confirmation.status === "Cancelled"
                ? "!"
                : "✓"}
            </div>

            <h2>
              {confirmation.status === "Cancelled"
                ? "Booking Cancelled"
                : "Booking Confirmed!"}
            </h2>

            <p>
              {confirmation.status === "Cancelled"
                ? "Your reservation has been cancelled."
                : `Thank you, ${confirmation.fullName}. Your reservation has been successfully submitted.`}
            </p>

            <div className="confirmation-details">

              <p>
                <strong>Booking ID:</strong>{" "}
                {confirmation.id}
              </p>

              <p>
                <strong>Room:</strong>{" "}
                {getRoomName(confirmation.roomType)}
              </p>

              <p>
                <strong>Check-In:</strong>{" "}
                {confirmation.checkIn}
              </p>

              <p>
                <strong>Check-Out:</strong>{" "}
                {confirmation.checkOut}
              </p>

              <p>
                <strong>Guests:</strong>{" "}
                {confirmation.guests}
              </p>

              <p>
                <strong>Payment:</strong>{" "}
                {getPaymentName(
                  confirmation.paymentMethod
                )}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {confirmation.status || "Confirmed"}
              </p>

            </div>

          </div>
        )}

        {/* ==================== LOADING ==================== */}

        {loadingBookings && (
          <p style={{ textAlign: "center" }}>
            Loading your bookings...
          </p>
        )}

        {/* ==================== BOOKING HISTORY ==================== */}

        {bookings.length > 0 && (
          <div className="booking-history">

            <div className="booking-history-heading">
              <p>YOUR RESERVATIONS</p>

              <h2>My Bookings</h2>
            </div>

            <div className="booking-list">

              {bookings.map((booking) => (
                <div
                  className={`booking-record ${
                    booking.status === "Cancelled"
                      ? "cancelled"
                      : ""
                  }`}
                  key={booking.id}
                >

                  {/* BOOKING INFORMATION */}

                  <div>

                    <span className="booking-id">
                      Booking ID: {booking.id}
                    </span>

                    <h3>
                      {getRoomName(booking.roomType)}
                    </h3>

                    <p>
                      <strong>Check-In:</strong>{" "}
                      {booking.checkIn}
                    </p>

                    <p>
                      <strong>Check-Out:</strong>{" "}
                      {booking.checkOut}
                    </p>

                    <p>
                      <strong>Guests:</strong>{" "}
                      {booking.guests}
                    </p>

                    <p>
                      <strong>Payment:</strong>{" "}
                      {getPaymentName(
                        booking.paymentMethod
                      )}
                    </p>

                  </div>

                  {/* STATUS + CANCEL */}

                  <div className="booking-record-actions">

                    <span className="booking-status">
                      {booking.status || "Confirmed"}
                    </span>

                    {booking.status !== "Cancelled" && (
                      <button
                        type="button"
                        className="cancel-booking-btn"
                        onClick={() =>
                          cancelBooking(booking.id)
                        }
                      >
                        Cancel Booking
                      </button>
                    )}

                  </div>

                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Booking;
