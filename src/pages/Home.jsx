import Hero from "../components/Hero";
import RoomSearch from "../components/RoomSearch";
import Rooms from "../components/Rooms";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />

      <RoomSearch />

      {/* Featured Rooms */}
      <Rooms limit={3} />

      <Statistics />

      <Testimonials />
    </>
  );
}

export default Home;

