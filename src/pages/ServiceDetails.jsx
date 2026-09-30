import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  "online-booking": {
    title: "Online Booking",
    description:
      "Book your preferred room quickly and conveniently through the Sunset Paradise Resort online booking system.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },

  "room-service": {
    title: "Room Service",
    description:
      "Enjoy delicious meals, beverages, and personalized services delivered directly to your room.",
    image:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1200&q=80",
  },

  "airport-pickup": {
    title: "Airport Pickup",
    description:
      "Travel comfortably with our convenient airport pickup and drop-off service.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },

  "laundry-service": {
    title: "Laundry Service",
    description:
      "Keep your clothes fresh and clean with our reliable professional laundry service.",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80",
  },

  "event-management": {
    title: "Event Management",
    description:
      "Plan weddings, meetings, conferences, and special events with our professional event management team.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80",
  },

  "customer-support": {
    title: "Customer Support",
    description:
      "Our friendly support team is available 24/7 to assist guests with their needs throughout their stay.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <section className="page-header">
        <h1>Service Not Found</h1>
        <Link to="/services">Back to Services</Link>
      </section>
    );
  }

  return (
    <main className="service-details-page">

      <section className="page-header">
        <p>SUNSET PARADISE RESORT</p>
        <h1>{service.title}</h1>
        <span>
          Discover our professional hospitality services.
        </span>
      </section>

      <section className="service-details-section">

        <div className="service-details-image">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="service-details-content">
          <p>OUR SERVICE</p>

          <h2>{service.title}</h2>

          <p>{service.description}</p>

          <div className="service-benefits">
            <div>
              <strong>✓</strong>
              <span>Professional Service</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Guest Friendly</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Available Throughout Your Stay</span>
            </div>
          </div>

          <Link to="/booking" className="service-booking-btn">
            Book Your Stay
          </Link>

          <Link to="/services" className="service-back-btn">
            ← Back to Services
          </Link>

        </div>

      </section>

    </main>
  );
}

export default ServiceDetails;