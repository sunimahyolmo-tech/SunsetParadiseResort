const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean View Room",
    type: "Deluxe Room",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
    facilities: "King Bed • Wi-Fi • Ocean View",
    available: true,
  },
  {
    id: 2,
    name: "Executive Suite",
    type: "Suite Room",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    facilities: "King Bed • Living Room • Balcony",
    available: true,
  },
  {
    id: 3,
    name: "Family Room",
    type: "Family Room",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    facilities: "2 Beds • Wi-Fi • Breakfast",
    available: true,
  },
  {
    id: 4,
    name: "Premium Double Room",
    type: "Double Room",
    price: 16000,
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80",
    facilities: "Double Bed • TV • Wi-Fi",
    available: true,
  },
  {
    id: 5,
    name: "VIP Presidential Suite",
    type: "VIP Room",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    facilities: "Luxury Bed • Jacuzzi • Lounge",
    available: false,
  },
  {
    id: 6,
    name: "Standard Single Room",
    type: "Single Room",
    price: 10000,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
    facilities: "Single Bed • TV • Wi-Fi",
    available: true,
  },
];

function Rooms() {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-container">

        <div className="section-heading">
          <p>OUR ACCOMMODATION</p>

          <h2>Featured Rooms</h2>

          <span>
            Discover comfortable and elegant rooms designed for a relaxing stay.
          </span>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.id}>

              <div className="room-image-container">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-image"
                />

                <span
                  className={
                    room.available
                      ? "availability available"
                      : "availability unavailable"
                  }
                >
                  {room.available ? "Available" : "Fully Booked"}
                </span>
              </div>

              <div className="room-content">

                <p className="room-type">{room.type}</p>

                <h3>{room.name}</h3>

                <p className="room-facilities">
                  {room.facilities}
                </p>

                <div className="room-bottom">

                  <div className="room-price">
                    <strong>
                      Rs. {room.price.toLocaleString()}
                    </strong>

                    <span>/ night</span>
                  </div>

                  <button
                    className="room-book-btn"
                    disabled={!room.available}
                  >
                    {room.available ? "Book Now" : "Unavailable"}
                  </button>

                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rooms;