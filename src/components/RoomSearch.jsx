function RoomSearch() {
  return (
    <section className="room-search-section">
      <div className="room-search-container">

        <div className="search-heading">
          <p>FIND YOUR PERFECT STAY</p>
          <h2>Search Available Rooms</h2>
        </div>

        <form className="room-search-form">

          <div className="search-field">
            <label htmlFor="checkIn">Check-In</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
            />
          </div>

          <div className="search-field">
            <label htmlFor="checkOut">Check-Out</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
            />
          </div>

          <div className="search-field">
            <label htmlFor="guests">Guests</label>
            <select id="guests" name="guests">
              <option value="">Select Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="roomType">Room Type</label>
            <select id="roomType" name="roomType">
              <option value="">Select Room</option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite Room</option>
              <option value="vip">VIP Room</option>
            </select>
          </div>

          <button type="submit" className="search-btn">
            Search Rooms
          </button>

        </form>
      </div>
    </section>
  );
}

export default RoomSearch;