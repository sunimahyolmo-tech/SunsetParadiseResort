import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Rooms({ limit }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/rooms"
        );

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Unable to load rooms.");
          return;
        }

        setRooms(data);
      } catch (error) {
        console.error("Error loading rooms:", error);

        setError(
          "Unable to connect to the server. Please check that the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const getRoomType = (type) => {
    const roomTypes = {
      single: "Single Room",
      double: "Double Room",
      deluxe: "Deluxe Room",
      family: "Family Room",
      suite: "Suite Room",
      vip: "VIP Room",
    };

    return roomTypes[type] || type;
  };

  const getRoomFeatures = (type) => {
    const features = {
      single: "Single Bed • TV • Wi-Fi",
      double: "Double Bed • TV • Wi-Fi",
      deluxe: "King Bed • Wi-Fi • Ocean View",
      family: "2 Beds • Wi-Fi • Breakfast",
      suite: "King Bed • Living Room • Balcony",
      vip: "Luxury Bed • Jacuzzi • Lounge",
    };

    return features[type] || "Comfortable Stay • Wi-Fi";
  };

  // Show only the requested number of rooms
  const displayedRooms = limit
    ? rooms.slice(0, limit)
    : rooms;

  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-container">

        {/* Heading */}

        <div className="section-heading">
          <p>OUR ACCOMMODATION</p>

          <h2>
            {limit ? "Featured Rooms" : "Our Rooms"}
          </h2>

          <span>
            Discover comfortable and elegant rooms designed
            for a relaxing stay.
          </span>
        </div>

        {/* Loading */}

        {loading && (
          <p style={{ textAlign: "center" }}>
            Loading rooms...
          </p>
        )}

        {/* Error */}

        {error && (
          <p
            className="auth-error"
            style={{ textAlign: "center" }}
          >
            {error}
          </p>
        )}

        {/* Rooms Grid */}

        {!loading && !error && (
          <div className="rooms-grid">

            {displayedRooms.map((room) => (
              <article
                className="room-card"
                key={room._id}
              >

                {/* Room Image */}

                <div className="room-image-container">

                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-image"
                  />

                  <span className="room-status">
                    {room.available
                      ? "Available"
                      : "Fully Booked"}
                  </span>

                </div>

                {/* Room Content */}

                <div className="room-content">

                  <span className="room-type">
                    {getRoomType(room.type)}
                  </span>

                  <h3>
                    {room.name}
                  </h3>

                  <p className="room-features">
                    {getRoomFeatures(room.type)}
                  </p>

                  {/* Price */}

                  <div className="room-bottom">

                    <div className="room-price">

                      <strong>
                        Rs. {room.price.toLocaleString()}
                      </strong>

                      <span>
                        / night
                      </span>

                    </div>

                    {/* Book Button */}

                    {room.available ? (
                      <Link
                        to="/booking"
                        className="room-book-btn"
                      >
                        Book Now
                      </Link>
                    ) : (
                      <button
                        className="room-book-btn"
                        disabled
                      >
                        Unavailable
                      </button>
                    )}

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

        {/* View All Rooms */}

        {!loading && !error && limit && rooms.length > limit && (
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <Link
              to="/rooms"
              className="room-book-btn"
            >
              View All Rooms
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

export default Rooms;

