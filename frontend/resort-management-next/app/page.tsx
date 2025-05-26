'use client';

import { useState } from 'react';
import { Carousel, Container, Button, Modal } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

// Image paths (now in public/assets/)
const hero1 = '/assets/hero1.jpg';
const hero2 = '/assets/hero2.jfif';
const hero3 = '/assets/hero3.jfif';
const galleryImages = [
  '/assets/Gallery1.jfif',
  '/assets/Gallery2.jfif',
  '/assets/Gallery3.jfif',
  '/assets/Gallery4.jfif',
  '/assets/Gallery5.jfif',
  '/assets/Gallery6.jfif',
  '/assets/Gallery7.jfif',
  '/assets/Gallery8.jfif',
  '/assets/Gallery9.jfif',
  '/assets/Gallery10.jfif',
  '/assets/Gallery11.jfif'
];

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

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (img: string) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      {/* Hero Carousel */}
      <div className={styles.carouselContainer}>
        <Carousel fade interval={5000} controls indicators className={styles.carousel}>
          {[hero1, hero2, hero3].map((img, index) => (
            <Carousel.Item key={index} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={styles.carouselImage}
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              <Carousel.Caption className={styles.caption}>
                <h1 className={styles.captionTitle}>
                  {index === 0 ? 'BELLE VUE' : 
                   index === 1 ? 'UNWIND IN LUXURY' : 'EXCLUSIVE OFFERS'}
                </h1>
                <p className={styles.captionText}>
                  {index === 0 ? 'Luxury Lakeside Resort & Spa' : 
                   index === 1 ? 'Our award-winning spa awaits you' : 'Limited time summer specials'}
                </p>
                <div className={styles.ctaButtons}>
                  <Button 
                    as={Link} 
                    href="/book" 
                    variant="outline-light" 
                    size="lg"
                    className={`me-3 ${styles.ctaButton}`}
                  >
                    {index === 0 ? 'Book Now' : index === 1 ? 'Book Spa' : 'View Offers'}
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <Container className="py-md-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>WELCOME TO BELLE VUE</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className={styles.welcomeImageContainer}>
                <Image 
                  src={galleryImages[0]}
                  alt="Belle Vue Resort"
                  fill
                  className={styles.welcomeImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p className={styles.welcomeText}>
                Nestled along the pristine shores of Lake Serenity, Belle Vue offers 
                an unparalleled luxury experience with breathtaking views and 
                world-class amenities.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button 
                  variant="outline-dark" 
                  size="lg" 
                  as={Link} 
                  href="/about"
                  className={styles.discoverButton}
                >
                  DISCOVER MORE
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Rooms Section */}
      <section className={styles.roomsSection}>
        <Container className="py-md-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>ACCOMMODATIONS</h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionSubtitle}>
              Each of our accommodations has been thoughtfully designed to provide the ultimate in comfort and style.
            </p>
          </div>
          
          <div className="row g-4">
            {roomTypes.map((room, index) => (
              <div key={index} className="col-md-4">
                <div className={`card h-100 border-0 bg-transparent ${styles.roomCard}`}>
                  <div className={styles.roomImageContainer}>
                    <Image 
                      src={galleryImages[index % galleryImages.length]} 
                      alt={room.name}
                      fill
                      className={styles.roomImage}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {room.highlight && (
                      <div className={styles.highlightBadge}>
                        <span>{room.highlight}</span>
                      </div>
                    )}
                  </div>
                  <div className="card-body px-0 text-center">
                    <h5 className={styles.roomTitle}>
                      {room.name.toUpperCase()}
                    </h5>
                    <p className={styles.roomDescription}>
                      {room.description}
                    </p>
                    <div className="d-flex flex-column align-items-center">
                      <span className={styles.roomPrice}>
                        From <strong>${room.price}</strong> / night
                      </span>
                      <Button 
                        as={Link} 
                        href="/book" 
                        variant="outline-dark"
                        className={styles.bookButton}
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

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <Container className="py-md-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>GALLERY</h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionSubtitle}>
              Explore the beauty of Belle Vue through our curated collection of images.
            </p>
          </div>
          
          <div className="row g-3">
            {galleryImages.map((img, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div 
                  className={styles.galleryItem}
                  onClick={() => openImageModal(img)}
                >
                  <Image 
                    src={img} 
                    alt={`Gallery ${index + 1}`}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.zoomIcon}>
                      <i className="bi bi-zoom-in"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="xl" 
        centered
        className={styles.galleryModal}
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <button 
            type="button" 
            className={styles.closeButton}
            onClick={() => setShowModal(false)}
          ></button>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {selectedImage && (
            <Image 
              src={selectedImage} 
              alt="Enlarged view" 
              fill
              className={styles.modalImage}
              sizes="90vw"
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}