const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Kathmandu, Nepal",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review:
      "Our stay at Sunset Paradise Resort was wonderful. The room was beautiful, the staff were friendly, and the service was excellent.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    location: "London, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review:
      "The resort exceeded our expectations. Everything was clean and comfortable, and the facilities were excellent. I would definitely return.",
  },
  {
    id: 3,
    name: "Daniel Lee",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 4,
    review:
      "A peaceful and luxurious place to stay. The restaurant had great food and the staff were always helpful and professional.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <div className="section-heading">
          <p>GUEST EXPERIENCES</p>

          <h2>What Our Guests Say</h2>

          <span>
            Discover why our guests choose Sunset Paradise Resort for their
            memorable stays.
          </span>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
            >

              <div className="testimonial-top">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="guest-image"
                />

                <div className="guest-info">
                  <h3>{testimonial.name}</h3>

                  <p>{testimonial.location}</p>
                </div>

              </div>

              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>

              <p className="testimonial-review">
                "{testimonial.review}"
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;