import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Online Booking",
    slug: "online-booking",
    description:
      "Book your preferred room easily and conveniently through our online booking system.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 2,
    name: "Room Service",
    slug: "room-service",
    description:
      "Enjoy delicious meals, beverages, and personalized services delivered directly to your room.",
    image:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 3,
    name: "Airport Pickup",
    slug: "airport-pickup",
    description:
      "Travel comfortably with our convenient airport pickup and drop-off service.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 4,
    name: "Laundry Service",
    slug: "laundry-service",
    description:
      "Keep your clothes fresh and clean with our reliable professional laundry service.",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 5,
    name: "Event Management",
    slug: "event-management",
    description:
      "Plan weddings, meetings, conferences, and special events with our professional event team.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 6,
    name: "Customer Support",
    slug: "customer-support",
    description:
      "Our friendly support team is available to assist guests throughout their stay.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="section-heading">
          <p>OUR HOSPITALITY</p>

          <h2>Hotel Services</h2>

          <span>
            Professional services designed to make your stay comfortable,
            convenient, and memorable.
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

                <Link
                  to={`/services/${service.slug}`}
                  className="service-btn"
                >
                  Learn More
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;