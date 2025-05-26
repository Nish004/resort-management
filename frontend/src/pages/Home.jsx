
import { useState, useEffect } from 'react';
import { Carousel, Container, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
  // const [stickyBar, setStickyBar] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setStickyBar(window.scrollY > 100);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11];
  const roomTypes = [
    {
      id: 'luxury_villa',
      name: "Lakeside Villa",
      description: "Private villa with panoramic lake views",
      price: 450,
      highlight: "Most Popular"
    },
    {
      id: 'forest_suite',
      name: "Forest Suite",
      description: "Secluded suite nestled in the woods",
      price: 350,
      highlight: "Nature Escape"
    },
    {
      id: 'executive_room',
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
      {/* Full-width Hero Carousel */}
      <div className="full-width-carousel-container">
        <Carousel 
          fade 
          interval={5000} 
          controls 
          indicators 
          className="hero-carousel"
        >
          <Carousel.Item className="carousel-item-full">
            <img 
              src={hero1} 
              alt="Belle Vue Resort" 
              className="d-block w-100 vh-100 object-fit-cover"
            />
            <Carousel.Caption className="hero-caption">
              <h1>BELLE VUE</h1>
              <p>Luxury Lakeside Resort & Spa</p>
              <div className="cta-buttons">
                <Button 
                  as={Link} 
                  to="/book" 
                  variant="outline-light" 
                  size="lg"
                  className="me-3"
                >
                  Book Now
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-full">
            <img 
              src={hero2} 
              alt="Resort Pool" 
              className="d-block w-100 vh-100 object-fit-cover"
            />
            <Carousel.Caption className="hero-caption">
              <h1>UNWIND IN LUXURY</h1>
              <p>Our award-winning spa awaits you</p>
              <div className="cta-buttons">
                <Button 
                  as={Link} 
                  to="/book" 
                  variant="outline-light" 
                  size="lg"
                >
                  Book Spa
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-full">
            <img 
              src={hero3} 
              alt="Resort Interior" 
              className="d-block w-100 vh-100 object-fit-cover"
            />
            <Carousel.Caption className="hero-caption">
              <h1>EXCLUSIVE OFFERS</h1>
              <p>Limited time summer specials</p>
              <div className="cta-buttons">
                <Button 
                  as={Link} 
                  to="/book" 
                  variant="outline-light" 
                  size="lg"
                >
                  View Offers
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Sticky Booking Bar */}
      {/* <div className={`sticky-booking-bar ${stickyBar ? 'visible' : ''}`}>
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
      </div> */}

      {/* Welcome Section */}
     <section className="welcome-section py-5" style={{backgroundColor: '#f8f5f2'}}>
        <Container className="py-md-5">
        <div className="text-center mb-5">
            <h2 className="section-title" style={{color: '#333', letterSpacing: '1px', fontWeight: '300'}}>
              WELCOME TO BELLE VUE
            </h2>
            <div className="divider mx-auto" style={{width: '80px', height: '2px', backgroundColor: '#333', margin: '20px auto'}}></div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="welcome-image-container">
                <img 
                  src={gallery1} 
                  alt="Belle Vue Resort" 
                  className="img-fluid"
                  style={{width: '100%', height: '400px', objectFit: 'cover'}}
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p className="mb-4" style={{color: '#666', lineHeight: '1.8', fontSize: '1.1rem'}}>
                Nestled along the pristine shores of Lake Serenity, Belle Vue offers 
                an unparalleled luxury experience with breathtaking views and 
                world-class amenities. Our resort combines contemporary elegance with 
                timeless comfort to create unforgettable experiences.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button 
                  variant="outline-dark" 
                  size="lg" 
                  as={Link} 
                  to="/about"
                  style={{
                    borderRadius: '0',
                    borderWidth: '2px',
                    padding: '10px 30px',
                    letterSpacing: '1px',
                    fontWeight: '300'
                  }}
                >
                  DISCOVER MORE
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Rooms Section - Redesigned */}
      <section className="rooms-section py-5" style={{backgroundColor: '#fff'}}>
        <Container className="py-md-5">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{color: '#333', letterSpacing: '1px', fontWeight: '300'}}>
              ACCOMMODATIONS
            </h2>
            <div className="divider mx-auto" style={{width: '80px', height: '2px', backgroundColor: '#333', margin: '20px auto'}}></div>
            <p className="mx-auto" style={{color: '#666', maxWidth: '600px'}}>
              Each of our accommodations has been thoughtfully designed to provide the ultimate in comfort and style.
            </p>
          </div>
          
          <div className="row g-4">
            {roomTypes.map((room, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 bg-transparent">
                  <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                    <img 
                      src={galleryImages[index % galleryImages.length]} 
                      className="img-fluid w-100 h-100" 
                      alt={room.name}
                      style={{objectFit: 'cover', transition: 'transform 0.5s ease'}}
                    />
                    {room.highlight && (
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontWeight: '300', letterSpacing: '1px', fontSize: '0.8rem'}}>
                          {room.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="card-body px-0 text-center">
                    <h5 className="card-title mb-3" style={{color: '#333', fontWeight: '300', letterSpacing: '1px'}}>
                      {room.name.toUpperCase()}
                    </h5>
                    <p className="card-text mb-4" style={{color: '#666', lineHeight: '1.8'}}>
                      {room.description}
                    </p>
                    <div className="d-flex flex-column align-items-center">
                      <span className="mb-3" style={{color: '#333', fontSize: '1.2rem'}}>
                        From <span style={{fontWeight: '500'}}>${room.price}</span> / night
                      </span>
                      <Button 
                        as={Link} 
                        to="/book" 
                        variant="outline-dark"
                        state={{ roomType: room.id }}
                        style={{
                          borderRadius: '0',
                          borderWidth: '2px',
                          padding: '8px 30px',
                          letterSpacing: '1px',
                          fontWeight: '300'
                        }}
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section - Redesigned */}
      <section className="gallery-section py-5" style={{backgroundColor: '#f8f5f2'}}>
        <Container className="py-md-5">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{color: '#333', letterSpacing: '1px', fontWeight: '300'}}>
              GALLERY
            </h2>
            <div className="divider mx-auto" style={{width: '80px', height: '2px', backgroundColor: '#333', margin: '20px auto'}}></div>
            <p className="mx-auto" style={{color: '#666', maxWidth: '600px'}}>
              Explore the beauty of Belle Vue through our curated collection of images.
            </p>
          </div>
          
          <div className="row g-3">
            {galleryImages.map((img, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div 
                  className="position-relative overflow-hidden"
                  onClick={() => openImageModal(img)}
                  style={{
                    cursor: 'pointer',
                    height: '250px',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`} 
                    className="img-fluid w-100 h-100"
                    style={{objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span className="text-white fs-4">
                      <i className="bi bi-zoom-in"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Modal - Enhanced */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="xl" 
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton className="border-0 position-absolute top-0 end-0 z-index-1">
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowModal(false)}
            style={{
              filter: 'invert(1)',
              fontSize: '1.5rem',
              padding: '1rem'
            }}
          ></button>
        </Modal.Header>
        <Modal.Body className="p-0 d-flex align-items-center justify-content-center" style={{minHeight: '80vh'}}>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="img-fluid" 
              style={{maxHeight: '90vh', maxWidth: '100%'}}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Home;