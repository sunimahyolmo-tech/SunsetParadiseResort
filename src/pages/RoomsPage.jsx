import Rooms from "../components/Rooms";

function RoomsPage() {
  return (
    <>
      <section className="page-header">
        <p>SUNSET PARADISE RESORT</p>
        <h1>Our Rooms</h1>
        <span>
          Discover comfortable and luxurious rooms designed for your perfect stay.
        </span>
      </section>

      <Rooms />
    </>
  );
}

export default RoomsPage;