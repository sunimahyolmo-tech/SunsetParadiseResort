const facilities = [
  {
    id: 1,
    name: "Swimming Pool",
    description:
      "Relax and refresh yourself in our beautifully designed swimming pool with a peaceful resort atmosphere.",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Restaurant",
    description:
      "Enjoy delicious local and international cuisine prepared by our professional chefs.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Gym Center",
    description:
      "Stay active during your visit with modern fitness equipment and a comfortable workout environment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Conference Hall",
    description:
      "A fully equipped conference space suitable for meetings, seminars, conferences, and corporate events.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi available throughout the resort.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Spa & Wellness",
    description:
      "Relax your body and mind with our wellness treatments and peaceful spa services.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
  },
];

function Facilities() {
  return (
    <section className="facilities-section" id="facilities">
      <div className="facilities-container">

        <div className="section-heading">
          <p>RESORT AMENITIES</p>

          <h2>Hotel Facilities</h2>

          <span>
            Everything you need for a comfortable, relaxing, and memorable stay.
          </span>
        </div>

        <div className="facilities-grid">

          {facilities.map((facility) => (
            <article className="facility-card" key={facility.id}>

              <div className="facility-image-container">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="facility-image"
                />
              </div>

              <div className="facility-content">

                <h3>{facility.name}</h3>

                <p>{facility.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;