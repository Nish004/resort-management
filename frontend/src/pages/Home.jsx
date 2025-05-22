import { useState, useEffect } from 'react';
import { Carousel, Container, Button, Modal } from 'react-bootstrap';
import './home.css';

// Import your images
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jfif';
import hero3 from '../assets/hero3.jfif';
// Gallery images
import gallery1 from '../assets/Gallery1.jfif';
import gallery2 from '../assets/Gallery2.jfif';
import gallery3 from '../assets/Gallery3.jfif';
import gallery4 from '../assets/Gallery4.jfif';
import gallery5 from '../assets/Gallery5.jfif';
import gallery6 from '../assets/Gallery6.jfif';
import gallery7 from '../assets/Gallery7.jfif';
import gallery8 from '../assets/Gallery8.jfif';
import gallery9 from '../assets/Gallery9.jfif';
import gallery10 from '../assets/Gallery10.jfif';
import gallery11 from '../assets/Gallery11.jfif';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [stickyBar, setStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyBar(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11];
  const roomTypes = [
    {
      name: "Lakeside Villa",
      description: "Private villa with panoramic lake views",
      price: 450,
      highlight: "Most Popular"
    },
    {
      name: "Forest Suite",
      description: "Secluded suite nestled in the woods",
      price: 350,
      highlight: "Nature Escape"
    },
    {
      name: "Executive Room",
      description: "Luxurious comfort with modern amenities",
      price: 275,
      highlight: "Best Value"
    }
  ];

  const openImageModal = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <div className="belle-vue-home">
      {/* Hero Carousel with CTA on each slide */}
      {/* <Carousel fade controls={false} interval={5000}> */}
        <Carousel fade interval={5000} className="hero-carousel">
  {/* Slide 1 */}
  <Carousel.Item>
    <img className="d-block w-100" src={hero1} alt="Belle Vue Resort" />
    <Carousel.Caption className="hero-caption">
      <h1>BELLE VUE</h1>
      <p>Luxury Lakeside Resort & Spa</p>
      <div className="cta-buttons">
        <Button variant="outline-light" size="lg">Explore Rooms</Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  {/* Slide 2 */}
  <Carousel.Item>
    <img className="d-block w-100" src={hero2} alt="Resort Pool" />
    <Carousel.Caption className="hero-caption">
      <h1>UNWIND IN LUXURY</h1>
      <p>Our award-winning spa awaits you</p>
      <div className="cta-buttons">
        <Button variant="outline-light" size="lg">Book Spa</Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  {/* Slide 3 */}
  <Carousel.Item>
    <img className="d-block w-100" src={hero3} alt="Resort Interior" />
    <Carousel.Caption className="hero-caption">
      <h1>EXCLUSIVE OFFERS</h1>
      <p>Limited time summer specials</p>
      <div className="cta-buttons">
        <Button variant="outline-light" size="lg">View Offers</Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      {/* Sticky Booking Bar */}
      <div className={`sticky-booking-bar ${stickyBar ? 'visible' : ''}`}>
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="resort-name">BELLE VUE</div>
            <div className="d-flex">
              <Button variant="outline-light" size="sm" className="me-2">Explore</Button>
              <Button variant="light" size="sm" className="me-2">Book Now</Button>
              <Button variant="dark" size="sm">Special Offers</Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section py-5">
        <Container>
          <h2 className="section-title">Welcome to Belle Vue</h2>
          <p className="lead">
            Nestled along the pristine shores of Lake Serenity, Belle Vue offers 
            an unparalleled luxury experience with breathtaking views and 
            world-class amenities.
          </p>
        </Container>
      </section>

      {/* Rooms Section */}
      <section className="rooms-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Accommodations</h2>
          <div className="row">
            {roomTypes.map((room, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 room-card">
                  <img src={galleryImages[index % galleryImages.length]} className="card-img-top" alt={room.name} />
                  <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <p className="card-text">{room.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="price">From ${room.price}/night</span>
                      <Button variant="primary">Book Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Gallery</h2>
          <div className="row g-3">
            {galleryImages.map((img, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="gallery-item" onClick={() => openImageModal(img)}>
                  <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Body className="p-0">
          {selectedImage && <img src={selectedImage} alt="Enlarged view" className="img-fluid" />}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;