import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHotel } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Navbar.css';

function ResortNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`resort-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-fullwidth-container">
        <Container>
          <Navbar.Brand 
            as={Link} 
            to="/" 
            onClick={scrollToTop}
            className="d-flex align-items-center"
          >
            <FaHotel className="me-2 hotel-icon" />
            <span className="brand-name">BELLE VUE</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" onClick={scrollToTop}>Home</Nav.Link>
              <Nav.Link as={Link} to="/book">Book Now</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

           <Nav className="ms-lg-3">
  <Nav.Link 
    as={Link} 
    to="/login" 
    className="custom-login-btn me-2" // Changed from btn-outline-primary
  >
    Login
  </Nav.Link>
  <Nav.Link 
    as={Link} 
    to="/register" 
    className="custom-register-btn" // Changed from btn-primary
  >
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