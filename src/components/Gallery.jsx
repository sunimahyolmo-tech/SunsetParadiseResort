const galleryImages = [
  {
    id: 1,
    title: "Hotel Exterior",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Luxury Rooms",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Swimming Pool",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Conference Hall",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Reception Area",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="section-heading">
          <p>EXPLORE OUR RESORT</p>

          <h2>Hotel Gallery</h2>

          <span>
            Take a glimpse at the elegant spaces and experiences waiting for you
            at Sunset Paradise Resort.
          </span>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div className="gallery-item" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <span>View Gallery</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;