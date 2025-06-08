'use client';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHotel } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

function ResortNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (!isClient) return null;

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.navbarFullwidthContainer}>
        <Container className={styles.container}>
          <Navbar.Brand 
            href="/" 
            onClick={scrollToTop}
            className={styles.brandContainer}
          >
            <FaHotel className={styles.hotelIcon} />
            <span className={styles.brandName}>BELLE VUE</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" className={styles.toggle} />

          <Navbar.Collapse id="main-nav" className={styles.collapse}>
            <Nav className={styles.navLeft}>
              <Nav.Link href="/" onClick={scrollToTop} className={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="bookroom" className={styles.navLink}>Book Now</Nav.Link>
              <Nav.Link href="/gallery" className={styles.navLink}>Gallery</Nav.Link>
              <Nav.Link href="/contact" className={styles.navLink}>Contact</Nav.Link>
            </Nav>

            <Nav className={styles.navRight}>
              <Nav.Link href="/login" className={styles.customLoginBtn}>
                Login
              </Nav.Link>
              <Nav.Link href="/register" className={styles.customRegisterBtn}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
}

export default ResortNavbar;