const statistics = [
  {
    id: 1,
    number: 500,
    suffix: "+",
    label: "Luxury Rooms",
  },
  {
    id: 2,
    number: 50000,
    suffix: "+",
    label: "Guests Served",
  },
  {
    id: 3,
    number: 100,
    suffix: "+",
    label: "Staff Members",
  },
  {
    id: 4,
    number: 24,
    suffix: "/7",
    label: "Customer Support",
  },
];

function Statistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">

        <div className="statistics-heading">
          <p>WHY CHOOSE US</p>
          <h2>Our Numbers Speak for Us</h2>
        </div>

        <div className="statistics-grid">

          {statistics.map((stat) => (
            <div className="statistic-card" key={stat.id}>

              <div className="statistic-number">
                <span
                  className="counter"
                  data-target={stat.number}
                >
                  0
                </span>

                <span>{stat.suffix}</span>
              </div>

              <p>{stat.label}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;