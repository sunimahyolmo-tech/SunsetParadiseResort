function Statistics() {
  const statistics = [
    {
      id: 1,
      number: "50+",
      title: "Luxury Rooms",
      description:
        "Comfortable rooms designed for a relaxing and memorable stay.",
    },
    {
      id: 2,
      number: "2,500+",
      title: "Guests Served",
      description:
        "Trusted by guests from Nepal and around the world.",
    },
    {
      id: 3,
      number: "35+",
      title: "Staff Members",
      description:
        "A dedicated team committed to excellent hospitality.",
    },
    {
      id: 4,
      number: "24/7",
      title: "Customer Support",
      description:
        "Our team is available around the clock to assist you.",
    },
  ];

  return (
    <section className="statistics-section">

      <div className="statistics-container">

        <div className="section-heading statistics-heading">

          <p>WHY CHOOSE US</p>

          <h2>
            Our Numbers Speak for Us
          </h2>

          <span>
            At Sunset Paradise Resort, we combine comfort,
            quality, and exceptional hospitality to create
            unforgettable experiences.
          </span>

        </div>


        <div className="statistics-grid">

          {statistics.map((stat) => (

            <div
              className="stat-card"
              key={stat.id}
            >

              <div className="stat-number">
                {stat.number}
              </div>

              <h3>
                {stat.title}
              </h3>

              <p>
                {stat.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;