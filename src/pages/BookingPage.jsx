import Booking from "../components/Booking";

function BookingPage() {
  return (
    <>
      <section className="page-header">
        <p>SUNSET PARADISE RESORT</p>
        <h1>Book Your Stay</h1>
        <span>
          Complete the booking form to reserve your room.
        </span>
      </section>

      <Booking />
    </>
  );
}

export default BookingPage;