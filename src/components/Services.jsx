const services = [
  {
    id: 1,
    name: "Online Booking",
    description:
      "Reserve your preferred room quickly and conveniently through our online booking system.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Room Service",
    description:
      "Enjoy delicious meals, beverages, and personalized services delivered directly to your room.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Airport Pickup",
    description:
      "Travel comfortably with our reliable airport pickup and drop-off transportation service.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Laundry Service",
    description:
      "Keep your clothes fresh and clean with our convenient professional laundry service.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Event Management",
    description:
      "Plan weddings, conferences, meetings, and special events with our experienced event team.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Customer Support",
    description:
      "Our friendly support team is available to assist guests with their questions and requests.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="section-heading">
          <p>OUR HOSPITALITY</p>

          <h2>Hotel Services</h2>

          <span>
            Personalized services designed to make every moment of your stay
            comfortable and convenient.
          </span>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>

              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-image"
                />
              </div>

              <div className="service-content">
                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <button className="service-btn">
                  Learn More
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;