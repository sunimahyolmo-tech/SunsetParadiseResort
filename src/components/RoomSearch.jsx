import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomSearch() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Send search information to the Rooms page
    const searchParams = new URLSearchParams();

    if (searchData.checkIn) {
      searchParams.set("checkIn", searchData.checkIn);
    }

    if (searchData.checkOut) {
      searchParams.set("checkOut", searchData.checkOut);
    }

    if (searchData.guests) {
      searchParams.set("guests", searchData.guests);
    }

    if (searchData.roomType) {
      searchParams.set("roomType", searchData.roomType);
    }

    navigate(`/rooms?${searchParams.toString()}`);
  };

  return (
    <section className="room-search-section">
      <div className="room-search-container">

        <div className="section-heading">
          <p>FIND YOUR PERFECT STAY</p>

          <h2>Find a Room</h2>

          <span>
            Choose your preferences to explore our available rooms.
          </span>
        </div>

        <form
          className="room-search-form"
          onSubmit={handleSearch}
        >

          {/* Check-In */}

          <div className="search-group">
            <label htmlFor="checkIn">
              Check-In
            </label>

            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={searchData.checkIn}
              onChange={handleChange}
            />
          </div>

          {/* Check-Out */}

          <div className="search-group">
            <label htmlFor="checkOut">
              Check-Out
            </label>

            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={searchData.checkOut}
              onChange={handleChange}
            />
          </div>

          {/* Guests */}

          <div className="search-group">
            <label htmlFor="guests">
              Guests
            </label>

            <select
              id="guests"
              name="guests"
              value={searchData.guests}
              onChange={handleChange}
            >
              <option value="1">
                1 Guest
              </option>

              <option value="2">
                2 Guests
              </option>

              <option value="3">
                3 Guests
              </option>

              <option value="4">
                4 Guests
              </option>

              <option value="5">
                5+ Guests
              </option>
            </select>
          </div>

          {/* Room Type */}

          <div className="search-group">
            <label htmlFor="roomType">
              Room Type
            </label>

            <select
              id="roomType"
              name="roomType"
              value={searchData.roomType}
              onChange={handleChange}
            >
              <option value="">
                Any Room
              </option>

              <option value="single">
                Single Room
              </option>

              <option value="double">
                Double Room
              </option>

              <option value="deluxe">
                Deluxe Room
              </option>

              <option value="family">
                Family Room
              </option>

              <option value="suite">
                Suite Room
              </option>

              <option value="vip">
                VIP Room
              </option>
            </select>
          </div>

          {/* Search Button */}

          <button
            type="submit"
            className="search-rooms-btn"
          >
            Search Rooms
          </button>

        </form>

      </div>
    </section>
  );
}

export default RoomSearch;

